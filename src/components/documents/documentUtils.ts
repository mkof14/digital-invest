import { supabase } from '@/integrations/supabase/client';

export interface ProjectDocumentRecord {
  id: string;
  title: string;
  document_type: string | null;
  description: string | null;
  file_path: string | null;
  file_name: string | null;
  file_type: string | null;
  file_size: number | null;
  external_url: string | null;
  sort_order: number;
}

const SIGNED_URL_EXPIRY = 60 * 60; // 1 hour

export const getDocumentUrl = (
  doc: Pick<ProjectDocumentRecord, 'external_url' | 'file_path'>,
  bucket = 'project-documents'
): string => {
  if (doc.external_url) return doc.external_url;
  if (doc.file_path) {
    const { data } = supabase.storage.from(bucket).getPublicUrl(doc.file_path);
    return data.publicUrl;
  }
  return '#';
};

export const resolveDocumentUrl = async (
  doc: Pick<ProjectDocumentRecord, 'external_url' | 'file_path'>,
  bucket = 'project-documents',
  isPublic = true
): Promise<string> => {
  if (doc.external_url) return doc.external_url;
  if (!doc.file_path) return '#';
  if (isPublic) {
    return supabase.storage.from(bucket).getPublicUrl(doc.file_path).data.publicUrl;
  }
  const { data, error } = await supabase.storage
    .from(bucket)
    .createSignedUrl(doc.file_path, SIGNED_URL_EXPIRY);
  if (error || !data) return '#';
  return data.signedUrl;
};

export const formatFileSize = (bytes: number | null): string => {
  if (!bytes) return '—';
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
};

export const getFileExtension = (doc: Pick<ProjectDocumentRecord, 'file_name' | 'file_type' | 'external_url'>): string => {
  if (doc.external_url && !doc.file_name) return 'LINK';
  const name = doc.file_name || '';
  const ext = name.split('.').pop()?.toUpperCase();
  if (ext && ext.length <= 5) return ext;
  if (doc.file_type?.includes('pdf')) return 'PDF';
  if (doc.file_type?.includes('image')) return 'IMG';
  if (doc.file_type?.includes('word')) return 'DOC';
  if (doc.file_type?.includes('sheet') || doc.file_type?.includes('excel')) return 'XLS';
  if (doc.file_type?.includes('presentation') || doc.file_type?.includes('powerpoint')) return 'PPT';
  return 'FILE';
};

export const isPreviewable = (doc: Pick<ProjectDocumentRecord, 'file_type' | 'file_name' | 'external_url' | 'file_path'>): boolean => {
  if (doc.external_url && !doc.file_path) return true;
  const t = (doc.file_type || '').toLowerCase();
  const n = (doc.file_name || '').toLowerCase();
  return t.includes('pdf') || t.startsWith('image/') || n.endsWith('.pdf') || /\.(png|jpe?g|gif|webp|svg)$/.test(n);
};

export const getFileTypeColor = (ext: string): string => {
  const map: Record<string, string> = {
    PDF: 'bg-red-500/10 text-red-600 border-red-500/20',
    DOC: 'bg-blue-500/10 text-blue-600 border-blue-500/20',
    DOCX: 'bg-blue-500/10 text-blue-600 border-blue-500/20',
    XLS: 'bg-green-500/10 text-green-600 border-green-500/20',
    XLSX: 'bg-green-500/10 text-green-600 border-green-500/20',
    PPT: 'bg-orange-500/10 text-orange-600 border-orange-500/20',
    PPTX: 'bg-orange-500/10 text-orange-600 border-orange-500/20',
    IMG: 'bg-purple-500/10 text-purple-600 border-purple-500/20',
    PNG: 'bg-purple-500/10 text-purple-600 border-purple-500/20',
    JPG: 'bg-purple-500/10 text-purple-600 border-purple-500/20',
    JPEG: 'bg-purple-500/10 text-purple-600 border-purple-500/20',
    LINK: 'bg-cyan-500/10 text-cyan-600 border-cyan-500/20',
  };
  return map[ext] || 'bg-muted text-muted-foreground border-border';
};
