import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Download, ArrowLeft, Upload, FileText, Trash2, Eye, EyeOff, Search } from 'lucide-react';
import { toast } from 'sonner';
import { format } from 'date-fns';
import { useUserRole } from '@/hooks/useUserRole';
import DocumentActions from '@/components/documents/DocumentActions';
import DocumentPreviewDialog from '@/components/documents/DocumentPreviewDialog';
import {
  formatFileSize as fmtFileSize,
  getFileExtension,
  getFileTypeColor,
  isPreviewable,
  ProjectDocumentRecord,
} from '@/components/documents/documentUtils';

interface HandbookDownload {
  id: string;
  name: string;
  email: string;
  created_at: string;
  comments: string | null;
}

interface InvestorDocument {
  id: string;
  title: string;
  description: string | null;
  file_name: string;
  file_path: string;
  file_type: string;
  file_size: number;
  category: string;
  is_visible: boolean;
  created_at: string;
}

const AdminHandbookDownloads = () => {
  const navigate = useNavigate();
  const { isAdmin, isLoading: roleLoading } = useUserRole();
  const [downloads, setDownloads] = useState<HandbookDownload[]>([]);
  const [documents, setDocuments] = useState<InvestorDocument[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadDialogOpen, setUploadDialogOpen] = useState(false);
  
  // Upload form state
  const [uploadFile, setUploadFile] = useState<File | null>(null);
  const [uploadTitle, setUploadTitle] = useState('');
  const [uploadDescription, setUploadDescription] = useState('');
  const [uploadCategory, setUploadCategory] = useState('general');

  // Preview / search
  const [previewDoc, setPreviewDoc] = useState<InvestorDocument | null>(null);
  const [search, setSearch] = useState('');
  const [filterCategory, setFilterCategory] = useState<string>('all');

  useEffect(() => {
    if (roleLoading) return;
    
    if (!isAdmin()) {
      navigate('/admin');
      return;
    }
    fetchDownloads();
    fetchDocuments();
  }, [roleLoading, isAdmin]);

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

  const fetchDocuments = async () => {
    try {
      const { data, error } = await supabase
        .from('investor_documents')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setDocuments(data || []);
    } catch (error) {
      console.error('Error fetching documents:', error);
      toast.error('Failed to load documents');
    }
  };

  const handleUpload = async () => {
    if (!uploadFile || !uploadTitle) {
      toast.error('Please provide a file and title');
      return;
    }

    setIsUploading(true);
    try {
      const fileExt = uploadFile.name.split('.').pop();
      const fileName = `${Date.now()}-${uploadFile.name}`;
      const filePath = `${fileName}`;

      // Upload file to storage
      const { error: uploadError } = await supabase.storage
        .from('investor-documents')
        .upload(filePath, uploadFile);

      if (uploadError) throw uploadError;

      // Save metadata to database
      const { error: dbError } = await supabase
        .from('investor_documents')
        .insert({
          title: uploadTitle,
          description: uploadDescription || null,
          file_name: uploadFile.name,
          file_path: filePath,
          file_type: uploadFile.type,
          file_size: uploadFile.size,
          category: uploadCategory,
        });

      if (dbError) throw dbError;

      toast.success('Document uploaded successfully');
      setUploadDialogOpen(false);
      resetUploadForm();
      fetchDocuments();
    } catch (error: any) {
      console.error('Error uploading document:', error);
      toast.error(error.message || 'Failed to upload document');
    } finally {
      setIsUploading(false);
    }
  };

  const resetUploadForm = () => {
    setUploadFile(null);
    setUploadTitle('');
    setUploadDescription('');
    setUploadCategory('general');
  };

  const toggleVisibility = async (docId: string, currentVisibility: boolean) => {
    try {
      const { error } = await supabase
        .from('investor_documents')
        .update({ is_visible: !currentVisibility })
        .eq('id', docId);

      if (error) throw error;
      toast.success(`Document ${!currentVisibility ? 'shown' : 'hidden'}`);
      fetchDocuments();
    } catch (error: any) {
      console.error('Error updating visibility:', error);
      toast.error('Failed to update visibility');
    }
  };

  const deleteDocument = async (docId: string, filePath: string) => {
    if (!confirm('Are you sure you want to delete this document?')) return;

    try {
      // Delete from storage
      const { error: storageError } = await supabase.storage
        .from('investor-documents')
        .remove([filePath]);

      if (storageError) throw storageError;

      // Delete from database
      const { error: dbError } = await supabase
        .from('investor_documents')
        .delete()
        .eq('id', docId);

      if (dbError) throw dbError;

      toast.success('Document deleted successfully');
      fetchDocuments();
    } catch (error: any) {
      console.error('Error deleting document:', error);
      toast.error(error.message || 'Failed to delete document');
    }
  };

  const downloadDocument = async (filePath: string, fileName: string) => {
    try {
      const { data, error } = await supabase.storage
        .from('investor-documents')
        .download(filePath);

      if (error) throw error;

      const url = URL.createObjectURL(data);
      const link = document.createElement('a');
      link.href = url;
      link.download = fileName;
      link.click();
      URL.revokeObjectURL(url);

      toast.success('Download started');
    } catch (error: any) {
      console.error('Error downloading document:', error);
      toast.error('Failed to download document');
    }
  };

  const exportToCSV = () => {
    if (downloads.length === 0) {
      toast.error('No data to export');
      return;
    }

    const headers = ['Name', 'Email', 'Download Date', 'Comments'];
    const rows = downloads.map(download => [
      download.name,
      download.email,
      format(new Date(download.created_at), 'yyyy-MM-dd HH:mm:ss'),
      download.comments || ''
    ]);

    const csvContent = [
      headers.join(','),
      ...rows.map(row => 
        row.map(cell => `"${cell.toString().replace(/"/g, '""')}"`).join(',')
      )
    ].join('\n');

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

  const formatFileSize = (bytes: number) => fmtFileSize(bytes);

  // Helper: convert investor document to ProjectDocumentRecord shape
  const toRecord = (d: InvestorDocument): ProjectDocumentRecord => ({
    id: d.id,
    title: d.title,
    document_type: d.category || null,
    description: d.description,
    file_path: d.file_path,
    file_name: d.file_name,
    file_type: d.file_type,
    file_size: d.file_size,
    external_url: null,
    sort_order: 0,
  });

  const filteredDocs = documents.filter((d) => {
    if (filterCategory !== 'all' && d.category !== filterCategory) return false;
    if (search) {
      const s = search.toLowerCase();
      return (
        d.title.toLowerCase().includes(s) ||
        d.file_name.toLowerCase().includes(s) ||
        d.description?.toLowerCase().includes(s)
      );
    }
    return true;
  });

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

        {/* Document Management Section */}
        <Card className="mb-8">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Investor Documents Library</CardTitle>
              <CardDescription>
                Upload and manage documents (PDF, DOCX, XLSX, etc.)
              </CardDescription>
            </div>
            <Dialog open={uploadDialogOpen} onOpenChange={setUploadDialogOpen}>
              <DialogTrigger asChild>
                <Button className="gap-2">
                  <Upload className="h-4 w-4" />
                  Upload Document
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle>Upload New Document</DialogTitle>
                  <DialogDescription>
                    Add a document to the investor library
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div>
                    <Label htmlFor="file">File *</Label>
                    <Input
                      id="file"
                      type="file"
                      accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx"
                      onChange={(e) => setUploadFile(e.target.files?.[0] || null)}
                    />
                    {uploadFile && (
                      <p className="text-sm text-muted-foreground mt-1">
                        {uploadFile.name} ({formatFileSize(uploadFile.size)})
                      </p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="title">Title *</Label>
                    <Input
                      id="title"
                      value={uploadTitle}
                      onChange={(e) => setUploadTitle(e.target.value)}
                      placeholder="e.g., Q4 Financial Report"
                    />
                  </div>
                  <div>
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      value={uploadDescription}
                      onChange={(e) => setUploadDescription(e.target.value)}
                      placeholder="Optional description"
                      rows={3}
                    />
                  </div>
                  <div>
                    <Label htmlFor="category">Category</Label>
                    <Select value={uploadCategory} onValueChange={setUploadCategory}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General</SelectItem>
                        <SelectItem value="financial">Financial</SelectItem>
                        <SelectItem value="legal">Legal</SelectItem>
                        <SelectItem value="technical">Technical</SelectItem>
                        <SelectItem value="marketing">Marketing</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex gap-2 pt-4">
                    <Button
                      onClick={handleUpload}
                      disabled={isUploading || !uploadFile || !uploadTitle}
                      className="flex-1"
                    >
                      {isUploading ? 'Uploading...' : 'Upload'}
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => {
                        setUploadDialogOpen(false);
                        resetUploadForm();
                      }}
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </CardHeader>
          <CardContent>
            {/* Filters */}
            <div className="flex flex-wrap gap-3 mb-4 items-center">
              <div className="relative flex-1 min-w-[200px]">
                <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search documents..."
                  className="pl-8"
                />
              </div>
              <Select value={filterCategory} onValueChange={setFilterCategory}>
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All categories</SelectItem>
                  <SelectItem value="general">General</SelectItem>
                  <SelectItem value="financial">Financial</SelectItem>
                  <SelectItem value="legal">Legal</SelectItem>
                  <SelectItem value="technical">Technical</SelectItem>
                  <SelectItem value="marketing">Marketing</SelectItem>
                </SelectContent>
              </Select>
              <Badge variant="secondary">{filteredDocs.length} docs</Badge>
            </div>

            {filteredDocs.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                {documents.length === 0 ? 'No documents uploaded yet' : 'No documents match your filters'}
              </div>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-12">Type</TableHead>
                      <TableHead>Title</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Size</TableHead>
                      <TableHead>Uploaded</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredDocs.map((doc) => {
                      const record = toRecord(doc);
                      const ext = getFileExtension(record);
                      const colorClass = getFileTypeColor(ext);
                      return (
                        <TableRow key={doc.id}>
                          <TableCell>
                            <div className={`w-10 h-10 rounded border flex items-center justify-center font-bold text-[10px] ${colorClass}`}>
                              {ext}
                            </div>
                          </TableCell>
                          <TableCell>
                            <div>
                              <p className="font-medium">{doc.title}</p>
                              {doc.description && (
                                <p className="text-xs text-muted-foreground line-clamp-1">{doc.description}</p>
                              )}
                              <p className="text-xs text-muted-foreground/70 truncate max-w-[280px]">{doc.file_name}</p>
                            </div>
                          </TableCell>
                          <TableCell className="capitalize text-sm">{doc.category}</TableCell>
                          <TableCell className="text-sm">{formatFileSize(doc.file_size)}</TableCell>
                          <TableCell className="text-sm">
                            {format(new Date(doc.created_at), 'MMM dd, yyyy')}
                          </TableCell>
                          <TableCell>
                            {doc.is_visible ? (
                              <Badge variant="outline" className="text-success border-success/40">Visible</Badge>
                            ) : (
                              <Badge variant="outline" className="text-muted-foreground">Hidden</Badge>
                            )}
                          </TableCell>
                          <TableCell>
                            <div className="flex gap-1 justify-end items-center">
                              {isPreviewable(record) && (
                                <Button variant="ghost" size="sm" onClick={() => setPreviewDoc(doc)} title="Preview">
                                  <Eye className="h-4 w-4" />
                                </Button>
                              )}
                              <DocumentActions
                                doc={record}
                                variant="menu"
                                bucket="investor-documents"
                                isPublicBucket={false}
                              />
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => toggleVisibility(doc.id, doc.is_visible)}
                                title={doc.is_visible ? 'Hide' : 'Show'}
                              >
                                {doc.is_visible ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => deleteDocument(doc.id, doc.file_path)}
                                title="Delete"
                              >
                                <Trash2 className="h-4 w-4 text-destructive" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>

        <DocumentPreviewDialog
          doc={previewDoc ? toRecord(previewDoc) : null}
          open={!!previewDoc}
          onOpenChange={(v) => !v && setPreviewDoc(null)}
          bucket="investor-documents"
          isPublicBucket={false}
        />

        {/* Downloads Tracking Section */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Handbook Download Tracking</CardTitle>
              <CardDescription>
                Track who has downloaded the investor handbook
              </CardDescription>
            </div>
            <Button onClick={exportToCSV} className="gap-2" variant="outline">
              <Download className="h-4 w-4" />
              Export CSV
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
