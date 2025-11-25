import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";
import { renderAsync } from "npm:@react-email/components@0.0.22";
import React from "npm:react@18.3.1";

import { AdminNotification } from "./_templates/admin-notification.tsx";
import { InvestorLeadConfirmation } from "./_templates/investor-lead-confirmation.tsx";
import { ConsultationConfirmation } from "./_templates/consultation-confirmation.tsx";
import { HandbookConfirmation } from "./_templates/handbook-confirmation.tsx";
import { ContactConfirmation } from "./_templates/contact-confirmation.tsx";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface NotificationRequest {
  type: 'investor_lead' | 'consultation_booking' | 'handbook_download' | 'contact';
  data: {
    name: string;
    email: string;
    phone?: string;
    country?: string;
    projectTitle?: string;
    amountRange?: string;
    comments?: string;
    date?: string;
    time?: string;
  };
  sendToAdmin?: boolean;
  sendToUser?: boolean;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { type, data, sendToAdmin = true, sendToUser = true }: NotificationRequest = await req.json();

    console.log("Sending notification:", { type, data, sendToAdmin, sendToUser });

    const emails = [];

    // Send notification to admin
    if (sendToAdmin) {
      const adminHtml = await renderAsync(
        React.createElement(AdminNotification, { type, data })
      );

      const adminSubject = getAdminSubject(type, data);

      emails.push(
        resend.emails.send({
          from: "Digital Invest Notifications <notifications@digitalinvest.com>",
          to: ["info@digitalinvest.com"],
          subject: adminSubject,
          html: adminHtml,
        })
      );
    }

    // Send confirmation to user
    if (sendToUser) {
      const userHtml = await renderUserTemplate(type, data);
      const userSubject = getUserSubject(type);

      emails.push(
        resend.emails.send({
          from: "Digital Invest Inc. <info@digitalinvest.com>",
          to: [data.email],
          subject: userSubject,
          html: userHtml,
        })
      );
    }

    const results = await Promise.all(emails);
    console.log("Emails sent successfully:", results);

    return new Response(JSON.stringify({ success: true, results }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error in send-notification function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

async function renderUserTemplate(type: string, data: any): Promise<string> {
  switch (type) {
    case 'investor_lead':
      return renderAsync(
        React.createElement(InvestorLeadConfirmation, {
          name: data.name,
          projectTitle: data.projectTitle,
        })
      );
    case 'consultation_booking':
      return renderAsync(
        React.createElement(ConsultationConfirmation, {
          name: data.name,
          projectTitle: data.projectTitle,
          date: data.date,
          time: data.time,
        })
      );
    case 'handbook_download':
      return renderAsync(
        React.createElement(HandbookConfirmation, {
          name: data.name,
        })
      );
    case 'contact':
      return renderAsync(
        React.createElement(ContactConfirmation, {
          name: data.name,
        })
      );
    default:
      throw new Error(`Unknown notification type: ${type}`);
  }
}

function getAdminSubject(type: string, data: any): string {
  switch (type) {
    case 'investor_lead':
      return `🔔 New Investment Interest: ${data.projectTitle || 'General Portfolio'}`;
    case 'consultation_booking':
      return `📅 New Consultation Booking: ${data.projectTitle}`;
    case 'handbook_download':
      return `📥 Investor Handbook Downloaded`;
    case 'contact':
      return `✉️ New Contact Form Submission`;
    default:
      return `🔔 New Notification`;
  }
}

function getUserSubject(type: string): string {
  switch (type) {
    case 'investor_lead':
      return 'Thank you for your interest in Digital Invest';
    case 'consultation_booking':
      return 'Consultation Request Received - Digital Invest';
    case 'handbook_download':
      return 'Your Investor Handbook - Digital Invest';
    case 'contact':
      return 'We received your message - Digital Invest';
    default:
      return 'Thank you for contacting Digital Invest';
  }
}

serve(handler);
