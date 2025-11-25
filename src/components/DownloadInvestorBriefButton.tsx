import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Download, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { trackPDFDownload } from '@/lib/analytics';

interface DownloadInvestorBriefButtonProps {
  projectSlug: string;
  variant?: 'default' | 'outline' | 'secondary';
  size?: 'default' | 'sm' | 'lg';
  className?: string;
}

const DownloadInvestorBriefButton = ({ 
  projectSlug, 
  variant = 'outline',
  size = 'default',
  className = ''
}: DownloadInvestorBriefButtonProps) => {
  const [isDownloading, setIsDownloading] = useState(false);
  const { toast } = useToast();

  const handleDownload = async () => {
    try {
      setIsDownloading(true);

      const { data, error } = await supabase.functions.invoke(`investor-brief/${projectSlug}`, {
        method: 'GET',
      });

      if (error) {
        throw error;
      }

      // The response is already the PDF bytes
      const blob = new Blob([data], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${projectSlug}-investor-brief.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);

      // Track PDF download
      trackPDFDownload('investor_brief', projectSlug);

      toast({
        title: 'Download started',
        description: 'Your investor brief is being downloaded.',
      });

    } catch (error: any) {
      console.error('Error downloading PDF:', error);
      toast({
        title: 'Download failed',
        description: 'Unable to generate the brief. Please try again later.',
        variant: 'destructive',
      });
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <Button
      onClick={handleDownload}
      disabled={isDownloading}
      variant={variant}
      size={size}
      className={className}
    >
      {isDownloading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Generating...
        </>
      ) : (
        <>
          <Download className="mr-2 h-4 w-4" />
          Download Investor Brief (PDF)
        </>
      )}
    </Button>
  );
};

export default DownloadInvestorBriefButton;
