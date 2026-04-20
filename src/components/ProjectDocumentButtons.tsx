import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { FileText, ExternalLink, Download } from 'lucide-react';

interface ProjectDocument {
  id: string;
  title: string;
  document_type: string | null;
  description: string | null;
  file_path: string | null;
  file_name: string | null;
  external_url: string | null;
  sort_order: number;
}

interface Props {
  projectSlug: string;
  projectId?: string;
}

const ProjectDocumentButtons = ({ projectSlug, projectId }: Props) => {
  const [docs, setDocs] = useState<ProjectDocument[]>([]);

  useEffect(() => {
    const fetchDocs = async () => {
      let query = supabase
        .from('project_documents')
        .select('id, title, document_type, description, file_path, file_name, external_url, sort_order')
        .eq('is_visible', true)
        .order('sort_order', { ascending: true });

      if (projectId) {
        query = query.or(`project_id.eq.${projectId},project_slug.eq.${projectSlug}`);
      } else {
        query = query.eq('project_slug', projectSlug);
      }

      const { data, error } = await query;
      if (!error && data) setDocs(data);
    };
    fetchDocs();
  }, [projectSlug, projectId]);

  if (docs.length === 0) return null;

  const getUrl = (doc: ProjectDocument) => {
    if (doc.external_url) return doc.external_url;
    if (doc.file_path) {
      const { data } = supabase.storage.from('project-documents').getPublicUrl(doc.file_path);
      return data.publicUrl;
    }
    return '#';
  };

  return (
    <>
      {docs.map((doc) => (
        <Button
          key={doc.id}
          size="lg"
          variant="outline"
          asChild
          className="border-primary/40 hover:border-primary"
        >
          <a
            href={getUrl(doc)}
            target="_blank"
            rel="noopener noreferrer"
            download={doc.file_name || undefined}
            className="flex items-center gap-2"
          >
            {doc.external_url ? <ExternalLink className="h-5 w-5" /> : <FileText className="h-5 w-5" />}
            <span>{doc.title}</span>
          </a>
        </Button>
      ))}
    </>
  );
};

export default ProjectDocumentButtons;
