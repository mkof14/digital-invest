import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Eye, Download, Link2, Share2, MoreHorizontal } from 'lucide-react';
import { toast } from 'sonner';
import { resolveDocumentUrl, ProjectDocumentRecord } from './documentUtils';

interface Props {
  doc: ProjectDocumentRecord;
  variant?: 'inline' | 'menu';
  size?: 'sm' | 'default';
  bucket?: string;
  isPublicBucket?: boolean;
}

const DocumentActions = ({
  doc,
  variant = 'inline',
  size = 'sm',
  bucket = 'project-documents',
  isPublicBucket = true,
}: Props) => {
  const getUrl = () => resolveDocumentUrl(doc, bucket, isPublicBucket);

  const handleView = async () => {
    const url = await getUrl();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleDownload = async () => {
    const url = await getUrl();
    if (doc.external_url && !doc.file_path) {
      window.open(url, '_blank', 'noopener,noreferrer');
      return;
    }
    try {
      const res = await fetch(url);
      const blob = await res.blob();
      const blobUrl = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = blobUrl;
      a.download = doc.file_name || doc.title;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(blobUrl);
      toast.success('Download started');
    } catch {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  const handleCopy = async () => {
    try {
      const url = await getUrl();
      await navigator.clipboard.writeText(url);
      toast.success(isPublicBucket ? 'Link copied' : 'Temporary link copied (valid 1 hour)');
    } catch {
      toast.error('Could not copy link');
    }
  };

  const handleShare = async () => {
    const url = await getUrl();
    const shareData = { title: doc.title, text: doc.description || doc.title, url };
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch {
        /* cancelled */
      }
    } else {
      try {
        await navigator.clipboard.writeText(url);
        toast.success('Link copied to clipboard');
      } catch {
        toast.error('Could not share');
      }
    }
  };

  if (variant === 'menu') {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button size="sm" variant="ghost">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={handleView}>
            <Eye className="h-4 w-4 mr-2" /> View
          </DropdownMenuItem>
          <DropdownMenuItem onClick={handleDownload}>
            <Download className="h-4 w-4 mr-2" /> Download
          </DropdownMenuItem>
          <DropdownMenuItem onClick={handleCopy}>
            <Link2 className="h-4 w-4 mr-2" /> Copy link
          </DropdownMenuItem>
          <DropdownMenuItem onClick={handleShare}>
            <Share2 className="h-4 w-4 mr-2" /> Share
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
    <div className="flex flex-wrap gap-2">
      <Button size={size} variant="outline" onClick={handleView} title="View">
        <Eye className="h-4 w-4" />
        <span className="ml-1.5 hidden sm:inline">View</span>
      </Button>
      <Button size={size} variant="outline" onClick={handleDownload} title="Download">
        <Download className="h-4 w-4" />
        <span className="ml-1.5 hidden sm:inline">Download</span>
      </Button>
      <Button size={size} variant="outline" onClick={handleCopy} title="Copy link">
        <Link2 className="h-4 w-4" />
        <span className="ml-1.5 hidden md:inline">Copy</span>
      </Button>
      <Button size={size} variant="outline" onClick={handleShare} title="Share">
        <Share2 className="h-4 w-4" />
        <span className="ml-1.5 hidden md:inline">Share</span>
      </Button>
    </div>
  );
};

export default DocumentActions;
