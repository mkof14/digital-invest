import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { getDocumentUrl, ProjectDocumentRecord, isPreviewable } from './documentUtils';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

interface Props {
  doc: ProjectDocumentRecord | null;
  open: boolean;
  onOpenChange: (v: boolean) => void;
}

const DocumentPreviewDialog = ({ doc, open, onOpenChange }: Props) => {
  if (!doc) return null;
  const url = getDocumentUrl(doc);
  const previewable = isPreviewable(doc);
  const isImage = (doc.file_type || '').startsWith('image/') || /\.(png|jpe?g|gif|webp|svg)$/i.test(doc.file_name || '');

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl h-[85vh] flex flex-col">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between gap-4 pr-8">
            <span className="truncate">{doc.title}</span>
            <Button size="sm" variant="outline" asChild>
              <a href={url} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-1.5" /> Open
              </a>
            </Button>
          </DialogTitle>
        </DialogHeader>
        <div className="flex-1 min-h-0 bg-muted rounded-lg overflow-hidden">
          {previewable ? (
            isImage ? (
              <div className="w-full h-full flex items-center justify-center p-4">
                <img src={url} alt={doc.title} className="max-w-full max-h-full object-contain" />
              </div>
            ) : (
              <iframe src={url} title={doc.title} className="w-full h-full border-0" />
            )
          ) : (
            <div className="w-full h-full flex items-center justify-center p-8 text-center">
              <div>
                <p className="text-muted-foreground mb-4">
                  Preview not available for this file type.
                </p>
                <Button asChild>
                  <a href={url} target="_blank" rel="noopener noreferrer" download={doc.file_name || undefined}>
                    Download {doc.file_name || 'file'}
                  </a>
                </Button>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DocumentPreviewDialog;
