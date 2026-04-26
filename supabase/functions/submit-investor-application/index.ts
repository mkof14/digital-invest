// Public edge function: submit-investor-application
// Accepts anonymous submissions, validates input, persists to investor_leads,
// and sends a branded confirmation to the applicant + an internal notification.
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { Resend } from "npm:resend@2.0.0";
import { z } from "https://esm.sh/zod@3.23.8";

// Inline branded HTML email templates (kept simple to avoid extra deps).
const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!),
  );

function renderConfirmationHtml(opts: { name: string; projectTitle: string }) {
  const name = escapeHtml(opts.name);
  const project = escapeHtml(opts.projectTitle);
  return `<!doctype html><html><body style="margin:0;padding:0;background:#f5f5f7;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;color:#1d1d1f">
    <table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f5f7;padding:32px 0">
      <tr><td align="center">
        <table width="560" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.06)">
          <tr><td style="padding:32px 40px 0;border-bottom:1px solid #eee">
            <div style="font-size:13px;letter-spacing:0.08em;color:#6e6e73;text-transform:uppercase">Digital Invest Inc.</div>
          </td></tr>
          <tr><td style="padding:28px 40px 8px">
            <h1 style="margin:0 0 12px;font-size:22px;font-weight:600">Thank you, ${name}.</h1>
            <p style="margin:0 0 16px;font-size:15px;line-height:1.55;color:#3a3a3c">
              We have received your application regarding the ${project}. A member of our investor relations team will review your submission and reach out within 1–2 business days.
            </p>
            <p style="margin:0 0 16px;font-size:15px;line-height:1.55;color:#3a3a3c">
              This email confirms receipt only and does not constitute an offer, solicitation, or any commitment to invest.
            </p>
          </td></tr>
          <tr><td style="padding:8px 40px 32px">
            <p style="margin:0;font-size:13px;color:#86868b">— Digital Invest Inc.<br/>info@digitalinvest.com</p>
          </td></tr>
        </table>
      </td></tr>
    </table>
  </body></html>`;
}

function renderAdminHtml(opts: {
  name: string;
  email: string;
  phone?: string;
  country?: string;
  amountRange: string;
  comments?: string;
}) {
  const row = (k: string, v?: string) =>
    v
      ? `<tr><td style="padding:6px 12px;color:#6e6e73;font-size:13px;width:140px">${escapeHtml(k)}</td><td style="padding:6px 12px;font-size:14px;color:#1d1d1f">${escapeHtml(v)}</td></tr>`
      : "";
  return `<!doctype html><html><body style="margin:0;padding:0;background:#f5f5f7;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif">
    <table width="100%" cellpadding="0" cellspacing="0" style="padding:24px 0;background:#f5f5f7"><tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:10px">
        <tr><td style="padding:20px 24px;border-bottom:1px solid #eee">
          <div style="font-size:12px;letter-spacing:0.08em;color:#6e6e73;text-transform:uppercase">New Investor Application</div>
          <h2 style="margin:6px 0 0;font-size:18px;color:#1d1d1f">${escapeHtml(opts.name)}</h2>
        </td></tr>
        <tr><td style="padding:12px 12px 20px">
          <table width="100%" cellpadding="0" cellspacing="0">
            ${row("Email", opts.email)}
            ${row("Phone", opts.phone)}
            ${row("Country", opts.country)}
            ${row("Amount range", opts.amountRange)}
            ${opts.comments ? `<tr><td style="padding:6px 12px;color:#6e6e73;font-size:13px;vertical-align:top">Details</td><td style="padding:6px 12px;font-size:14px;color:#1d1d1f;white-space:pre-wrap">${escapeHtml(opts.comments)}</td></tr>` : ""}
          </table>
        </td></tr>
      </table>
    </td></tr></table>
  </body></html>`;
}

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

// Simple in-memory rate limiter (per warm instance).
// Acceptable for low-traffic public form; spam-grade abuse is mitigated by
// schema validation + RLS append-only semantics on investor_leads.
const RATE_LIMIT_WINDOW_MS = 60_000; // 1 min
const RATE_LIMIT_MAX = 3;
const ipHits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (ipHits.get(ip) ?? []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS,
  );
  recent.push(now);
  ipHits.set(ip, recent);
  return recent.length > RATE_LIMIT_MAX;
}

const ApplicationSchema = z.object({
  name: z.string().trim().min(2, "Name too short").max(120),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  country: z.string().trim().max(80).optional().or(z.literal("")),
  message: z.string().trim().max(2000).optional().or(z.literal("")),
  investorType: z
    .enum(["private", "family_office", "institutional", "other"])
    .optional(),
  amountRange: z
    .enum([
      "undisclosed",
      "under_100k",
      "100k_500k",
      "500k_2m",
      "2m_plus",
    ])
    .default("undisclosed"),
  sectors: z.array(z.string().max(80)).max(20).optional().default([]),
  // Honeypot field: bots fill it; humans never see it.
  website: z.string().max(0).optional().or(z.literal("")),
  locale: z.string().max(8).optional(),
});

type Application = z.infer<typeof ApplicationSchema>;

const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const SERVICE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const ADMIN_EMAIL =
  Deno.env.get("INVESTOR_LEADS_NOTIFY_EMAIL") ?? "info@digitalinvest.com";

const resend = RESEND_API_KEY ? new Resend(RESEND_API_KEY) : null;

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return json({ error: "Method not allowed" }, 405);
  }

  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      req.headers.get("cf-connecting-ip") ??
      "unknown";

    if (rateLimited(ip)) {
      return json(
        { error: "Too many submissions. Please try again later." },
        429,
      );
    }

    const body = await req.json().catch(() => null);
    const parsed = ApplicationSchema.safeParse(body);
    if (!parsed.success) {
      return json(
        {
          error: "Validation failed",
          fieldErrors: parsed.error.flatten().fieldErrors,
        },
        400,
      );
    }

    const data: Application = parsed.data;

    // Honeypot triggered — pretend success, don't store, don't send.
    if (data.website && data.website.length > 0) {
      return json({ success: true });
    }

    const supabase = createClient(SUPABASE_URL, SERVICE_KEY, {
      auth: { persistSession: false },
    });

    const sectorList = (data.sectors ?? []).filter(Boolean).join(", ");
    const composedComments = [
      data.investorType && `Investor type: ${data.investorType}`,
      sectorList && `Sectors of interest: ${sectorList}`,
      data.message && `Message: ${data.message}`,
    ]
      .filter(Boolean)
      .join("\n");

    const { error: insertErr } = await supabase
      .from("investor_leads")
      .insert({
        name: data.name,
        email: data.email,
        phone: data.phone || null,
        country: data.country || null,
        amount_range: data.amountRange,
        comments: composedComments || null,
        source: "investor-application-form",
      });

    if (insertErr) {
      console.error("investor_leads insert failed:", insertErr);
      return json({ error: "Could not save your application" }, 500);
    }

    // Email side-effects are best-effort; lead is already saved.
    if (resend) {
      try {
        const userHtml = renderConfirmationHtml({
          name: data.name,
          projectTitle: "Digital Invest portfolio",
        });

        const adminHtml = renderAdminHtml({
          name: data.name,
          email: data.email,
          phone: data.phone || undefined,
          country: data.country || undefined,
          amountRange: data.amountRange,
          comments: composedComments || undefined,
        });

        await Promise.all([
          resend.emails.send({
            from: "Digital Invest Inc. <info@digitalinvest.com>",
            to: [data.email],
            subject: "We received your application — Digital Invest Inc.",
            html: userHtml,
          }),
          resend.emails.send({
            from: "Digital Invest Notifications <notifications@digitalinvest.com>",
            to: [ADMIN_EMAIL],
            subject: `🔔 New Investor Application — ${data.name}`,
            html: adminHtml,
            reply_to: data.email,
          }),
        ]);
      } catch (mailErr) {
        console.error("Email dispatch failed (lead still saved):", mailErr);
      }
    } else {
      console.warn("RESEND_API_KEY missing — skipping email dispatch");
    }

    return json({ success: true });
  } catch (err) {
    console.error("submit-investor-application crashed:", err);
    return json({ error: "Internal error" }, 500);
  }
};

function json(payload: unknown, status = 200) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: { "Content-Type": "application/json", ...corsHeaders },
  });
}

serve(handler);
