import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FileText, ExternalLink } from 'lucide-react';
import DocumentActions from './documents/DocumentActions';
import DocumentPreviewDialog from './documents/DocumentPreviewDialog';
import {
  ProjectDocumentRecord,
  formatFileSize,
  getFileExtension,
  getFileTypeColor,
  isPreviewable,
} from './documents/documentUtils';
import { Button } from './ui/button';

interface Props {
  projectSlug: string;
  projectId?: string;
}

const ProjectDocumentsSection = ({ projectSlug, projectId }: Props) => {
  const [docs, setDocs] = useState<ProjectDocumentRecord[]>([]);
  const [previewDoc, setPreviewDoc] = useState<ProjectDocumentRecord | null>(null);

  useEffect(() => {
    const fetchDocs = async () => {
      let query = supabase
        .from('project_documents')
        .select('id, title, document_type, description, file_path, file_name, file_type, file_size, external_url, sort_order')
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

  return (
    <section className="mb-16">
      <div className="flex items-end justify-between mb-6 flex-wrap gap-3">
        <div>
          <h2 className="text-3xl font-bold text-foreground">Documents & Resources</h2>
          <p className="text-muted-foreground text-sm mt-1">
            View, download, copy or share project materials
          </p>
        </div>
        <Badge variant="secondary" className="text-xs">
          {docs.length} {docs.length === 1 ? 'document' : 'documents'}
        </Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {docs.map((doc) => {
          const ext = getFileExtension(doc);
          const colorClass = getFileTypeColor(ext);
          const canPreview = isPreviewable(doc);
          return (
            <Card
              key={doc.id}
              className="border border-border/60 bg-card hover:border-primary/40 hover:shadow-md transition-all"
            >
              <CardContent className="p-5">
                <div className="flex items-start gap-4">
                  <div
                    className={`flex-shrink-0 w-14 h-14 rounded-lg border flex items-center justify-center font-bold text-xs ${colorClass}`}
                  >
                    {ext}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start gap-2 mb-1">
                      <h3 className="font-semibold text-foreground leading-tight truncate">
                        {doc.title}
                      </h3>
                      {doc.external_url && !doc.file_path && (
                        <ExternalLink className="h-3.5 w-3.5 text-muted-foreground flex-shrink-0 mt-0.5" />
                      )}
                    </div>
                    {doc.document_type && (
                      <p className="text-xs text-primary font-medium mb-1">
                        {doc.document_type}
                      </p>
                    )}
                    {doc.description && (
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
                        {doc.description}
                      </p>
                    )}
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                      {doc.file_size && <span>{formatFileSize(doc.file_size)}</span>}
                      {doc.file_name && (
                        <span className="inline-flex items-center gap-1 truncate max-w-[200px]">
                          <FileText className="h-3 w-3 flex-shrink-0" />
                          <span className="truncate">{doc.file_name}</span>
                        </span>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-2 items-center">
                      {canPreview && (
                        <Button
                          size="sm"
                          variant="default"
                          onClick={() => setPreviewDoc(doc)}
                        >
                          Preview
                        </Button>
                      )}
                      <DocumentActions doc={doc} />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <DocumentPreviewDialog
        doc={previewDoc}
        open={!!previewDoc}
        onOpenChange={(v) => !v && setPreviewDoc(null)}
      />
    </section>
  );
};

export default ProjectDocumentsSection;
