import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Download, ArrowLeft } from 'lucide-react';
import { toast } from 'sonner';
import { format } from 'date-fns';

interface HandbookDownload {
  id: string;
  name: string;
  email: string;
  created_at: string;
  comments: string | null;
}

const AdminHandbookDownloads = () => {
  const navigate = useNavigate();
  const [downloads, setDownloads] = useState<HandbookDownload[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchDownloads();
  }, []);

  const fetchDownloads = async () => {
    try {
      const { data, error } = await supabase
        .from('investor_leads')
        .select('id, name, email, created_at, comments')
        .eq('source', 'investor-handbook')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setDownloads(data || []);
    } catch (error) {
      console.error('Error fetching downloads:', error);
      toast.error('Failed to load downloads');
    } finally {
      setIsLoading(false);
    }
  };

  const exportToCSV = () => {
    if (downloads.length === 0) {
      toast.error('No data to export');
      return;
    }

    // Create CSV header
    const headers = ['Name', 'Email', 'Download Date', 'Comments'];
    
    // Create CSV rows
    const rows = downloads.map(download => [
      download.name,
      download.email,
      format(new Date(download.created_at), 'yyyy-MM-dd HH:mm:ss'),
      download.comments || ''
    ]);

    // Combine headers and rows
    const csvContent = [
      headers.join(','),
      ...rows.map(row => 
        row.map(cell => `"${cell.toString().replace(/"/g, '""')}"`).join(',')
      )
    ].join('\n');

    // Create blob and trigger download
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    
    link.setAttribute('href', url);
    link.setAttribute('download', `handbook-downloads-${format(new Date(), 'yyyy-MM-dd')}.csv`);
    link.style.visibility = 'hidden';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast.success('CSV exported successfully');
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-8 px-4">
        <Button
          variant="ghost"
          onClick={() => navigate('/admin')}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Admin Dashboard
        </Button>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Investor Handbook Downloads</CardTitle>
              <CardDescription>
                Track who has downloaded the investor handbook for follow-up
              </CardDescription>
            </div>
            <Button onClick={exportToCSV} className="gap-2">
              <Download className="h-4 w-4" />
              Export to CSV
            </Button>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="text-center py-8">Loading downloads...</div>
            ) : downloads.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                No handbook downloads yet
              </div>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Download Date</TableHead>
                      <TableHead>Comments</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {downloads.map((download) => (
                      <TableRow key={download.id}>
                        <TableCell className="font-medium">{download.name}</TableCell>
                        <TableCell>{download.email}</TableCell>
                        <TableCell>
                          {format(new Date(download.created_at), 'MMM dd, yyyy HH:mm')}
                        </TableCell>
                        <TableCell className="text-muted-foreground">
                          {download.comments || '—'}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                <div className="mt-4 text-sm text-muted-foreground">
                  Total downloads: {downloads.length}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminHandbookDownloads;
