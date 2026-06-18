import { supabase } from "@/integrations/supabase/client";

export type ResourceKind =
  | "presentation"
  | "research"
  | "video"
  | "download"
  | "media"
  | "technology";

export interface Resource {
  id: string;
  kind: ResourceKind;
  category: string | null;
  title: string;
  description: string | null;
  cover_url: string | null;
  file_url: string | null;
  video_url: string | null;
  external_url: string | null;
  file_type: string | null;
  file_size_bytes: number | null;
  icon: string | null;
  sort_order: number;
  is_published: boolean;
  is_featured: boolean;
  created_at: string;
  updated_at: string;
}

export const RESOURCE_KINDS: { value: ResourceKind; label: string }[] = [
  { value: "presentation", label: "Presentations" },
  { value: "research", label: "Research" },
  { value: "video", label: "Videos" },
  { value: "download", label: "Downloads" },
  { value: "media", label: "Media" },
  { value: "technology", label: "Technology" },
];

export const fetchPublishedResources = async (): Promise<Resource[]> => {
  const { data, error } = await supabase
    .from("resources")
    .select("*")
    .eq("is_published", true)
    .order("sort_order", { ascending: true })
    .order("created_at", { ascending: false });
  if (error) throw error;
  return (data ?? []) as Resource[];
};

export const fetchAllResources = async (): Promise<Resource[]> => {
  const { data, error } = await supabase
    .from("resources")
    .select("*")
    .order("sort_order", { ascending: true })
    .order("created_at", { ascending: false });
  if (error) throw error;
  return (data ?? []) as Resource[];
};

export const fetchResource = async (id: string): Promise<Resource | null> => {
  const { data, error } = await supabase
    .from("resources")
    .select("*")
    .eq("id", id)
    .maybeSingle();
  if (error) throw error;
  return (data as Resource) ?? null;
};

export const formatFileSize = (bytes: number | null | undefined): string => {
  if (!bytes || bytes <= 0) return "—";
  const units = ["B", "KB", "MB", "GB"];
  let i = 0;
  let n = bytes;
  while (n >= 1024 && i < units.length - 1) {
    n /= 1024;
    i++;
  }
  return `${n.toFixed(n >= 10 || i === 0 ? 0 : 1)} ${units[i]}`;
};

/** Build an embeddable URL for YouTube/Vimeo. Falls back to raw URL. */
export const toEmbedUrl = (url: string): { type: "iframe" | "video"; src: string } => {
  try {
    const u = new URL(url);
    if (/youtube\.com|youtu\.be/.test(u.hostname)) {
      const id =
        u.hostname === "youtu.be"
          ? u.pathname.slice(1)
          : u.searchParams.get("v") ?? u.pathname.split("/").pop() ?? "";
      return { type: "iframe", src: `https://www.youtube.com/embed/${id}` };
    }
    if (/vimeo\.com/.test(u.hostname)) {
      const id = u.pathname.split("/").filter(Boolean).pop();
      return { type: "iframe", src: `https://player.vimeo.com/video/${id}` };
    }
    if (/\.(mp4|webm|ogg)$/i.test(u.pathname)) {
      return { type: "video", src: url };
    }
    return { type: "iframe", src: url };
  } catch {
    return { type: "iframe", src: url };
  }
};
