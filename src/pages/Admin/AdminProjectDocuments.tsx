import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { ArrowLeft, Upload, Trash2, Eye, EyeOff, ChevronDown, FileText, ExternalLink } from 'lucide-react';
import { toast } from 'sonner';
import { format } from 'date-fns';
import { useUserRole } from '@/hooks/useUserRole';

interface Project {
  id: string;
  slug: string;
  title: string;
}

interface ProjectDocument {
  id: string;
  project_id: string | null;
  project_slug: string;
  title: string;
  document_type: string | null;
  description: string | null;
  file_path: string | null;
  file_name: string | null;
  file_type: string | null;
  file_size: number | null;
  external_url: string | null;
  is_visible: boolean;
  sort_order: number;
  created_at: string;
}

const AdminProjectDocuments = () => {
  const navigate = useNavigate();
  const { isEditor, isLoading: roleLoading } = useUserRole();
  const [projects, setProjects] = useState<Project[]>([]);
  const [documents, setDocuments] = useState<ProjectDocument[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [uploadOpen, setUploadOpen] = useState(true);
  const [isUploading, setIsUploading] = useState(false);

  // Form state
  const [selectedProjectId, setSelectedProjectId] = useState<string>('');
  const [title, setTitle] = useState('');
  const [documentType, setDocumentType] = useState('');
  const [description, setDescription] = useState('');
  const [externalUrl, setExternalUrl] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [sortOrder, setSortOrder] = useState(0);

  useEffect(() => {
    if (roleLoading) return;
    if (!isEditor()) {
      navigate('/admin');
      return;
    }
    fetchProjects();
    fetchDocuments();
  }, [roleLoading]);

  const fetchProjects = async () => {
    const { data, error } = await supabase
      .from('projects')
      .select('id, slug, title')
      .order('title');
    if (!error && data) setProjects(data);
  };

  const fetchDocuments = async () => {
    setIsLoading(true);
    const { data, error } = await supabase
      .from('project_documents')
      .select('*')
      .order('created_at', { ascending: false });
    if (!error && data) setDocuments(data);
    setIsLoading(false);
  };

  const resetForm = () => {
    setSelectedProjectId('');
    setTitle('');
    setDocumentType('');
    setDescription('');
    setExternalUrl('');
    setFile(null);
    setSortOrder(0);
  };

  const handleSubmit = async () => {
    if (!selectedProjectId) {
      toast.error('Select a project');
      return;
    }
    if (!title.trim()) {
      toast.error('Title required');
      return;
    }
    if (!file && !externalUrl.trim()) {
      toast.error('Provide either a file or an external URL');
      return;
    }

    const project = projects.find((p) => p.id === selectedProjectId);
    if (!project) return;

    setIsUploading(true);
    try {
      let filePath: string | null = null;
      let fileName: string | null = null;
      let fileType: string | null = null;
      let fileSize: number | null = null;

      if (file) {
        const path = `${project.slug}/${Date.now()}-${file.name}`;
        const { error: upErr } = await supabase.storage
          .from('project-documents')
          .upload(path, file);
        if (upErr) throw upErr;
        filePath = path;
        fileName = file.name;
        fileType = file.type;
        fileSize = file.size;
      }

      const { error: dbErr } = await supabase.from('project_documents').insert({
        project_id: project.id,
        project_slug: project.slug,
        title: title.trim(),
        document_type: documentType.trim() || null,
        description: description.trim() || null,
        file_path: filePath,
        file_name: fileName,
        file_type: fileType,
        file_size: fileSize,
        external_url: externalUrl.trim() || null,
        sort_order: sortOrder,
      });
      if (dbErr) throw dbErr;

      toast.success('Document added');
      resetForm();
      fetchDocuments();
    } catch (e: any) {
      console.error(e);
      toast.error(e.message || 'Upload failed');
    } finally {
      setIsUploading(false);
    }
  };

  const toggleVisibility = async (doc: ProjectDocument) => {
    const { error } = await supabase
      .from('project_documents')
      .update({ is_visible: !doc.is_visible })
      .eq('id', doc.id);
    if (error) {
      toast.error('Failed to update');
      return;
    }
    toast.success(doc.is_visible ? 'Hidden' : 'Visible');
    fetchDocuments();
  };

  const deleteDoc = async (doc: ProjectDocument) => {
    if (!confirm(`Delete "${doc.title}"?`)) return;
    try {
      if (doc.file_path) {
        await supabase.storage.from('project-documents').remove([doc.file_path]);
      }
      const { error } = await supabase
        .from('project_documents')
        .delete()
        .eq('id', doc.id);
      if (error) throw error;
      toast.success('Deleted');
      fetchDocuments();
    } catch (e: any) {
      toast.error(e.message || 'Delete failed');
    }
  };

  const formatSize = (b: number | null) => {
    if (!b) return '—';
    if (b < 1024) return b + ' B';
    if (b < 1024 * 1024) return (b / 1024).toFixed(1) + ' KB';
    return (b / 1024 / 1024).toFixed(1) + ' MB';
  };

  return (
    <div className="space-y-6">
      <Button variant="ghost" onClick={() => navigate('/admin')}>
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Admin
      </Button>

      <div>
        <h2 className="text-3xl font-bold text-foreground">Project Documents</h2>
        <p className="text-muted-foreground">
          Attach unlimited custom documents (any type, any name) to any project. They appear as buttons in the project hero section.
        </p>
      </div>

      {/* Collapsible upload panel */}
      <Card className="border border-border/50">
        <Collapsible open={uploadOpen} onOpenChange={setUploadOpen}>
          <CollapsibleTrigger asChild>
            <CardHeader className="cursor-pointer hover:bg-muted/30 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Upload className="h-5 w-5 text-primary" />
                  <CardTitle>Upload Documents</CardTitle>
                </div>
                <ChevronDown
                  className={`h-5 w-5 transition-transform ${uploadOpen ? 'rotate-180' : ''}`}
                />
              </div>
              <CardDescription>
                Click to expand. Add a file upload or an external link with any custom name and type.
              </CardDescription>
            </CardHeader>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <CardContent className="space-y-4 pt-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label>Project *</Label>
                  <Select value={selectedProjectId} onValueChange={setSelectedProjectId}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select project" />
                    </SelectTrigger>
                    <SelectContent>
                      {projects.map((p) => (
                        <SelectItem key={p.id} value={p.id}>
                          {p.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Title (button label) *</Label>
                  <Input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="e.g. Investor Presentation"
                  />
                </div>
                <div>
                  <Label>Document type (free text)</Label>
                  <Input
                    value={documentType}
                    onChange={(e) => setDocumentType(e.target.value)}
                    placeholder="e.g. Pitch Deck, Whitepaper, Brief, Roadmap..."
                  />
                </div>
                <div>
                  <Label>Sort order</Label>
                  <Input
                    type="number"
                    value={sortOrder}
                    onChange={(e) => setSortOrder(Number(e.target.value))}
                  />
                </div>
              </div>

              <div>
                <Label>Description (optional)</Label>
                <Textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={2}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label>Upload file (any format)</Label>
                  <Input
                    type="file"
                    onChange={(e) => setFile(e.target.files?.[0] || null)}
                  />
                  {file && (
                    <p className="text-xs text-muted-foreground mt-1">
                      {file.name} ({formatSize(file.size)})
                    </p>
                  )}
                </div>
                <div>
                  <Label>OR external URL</Label>
                  <Input
                    value={externalUrl}
                    onChange={(e) => setExternalUrl(e.target.value)}
                    placeholder="https://..."
                  />
                </div>
              </div>

              <div className="flex gap-2">
                <Button onClick={handleSubmit} disabled={isUploading}>
                  {isUploading ? 'Saving...' : 'Add Document'}
                </Button>
                <Button variant="outline" onClick={resetForm} disabled={isUploading}>
                  Reset
                </Button>
              </div>
            </CardContent>
          </CollapsibleContent>
        </Collapsible>
      </Card>

      {/* Documents list */}
      <Card className="border border-border/50">
        <CardHeader>
          <CardTitle>All Project Documents ({documents.length})</CardTitle>
          <CardDescription>Manage visibility, ordering and deletion</CardDescription>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <p className="text-center py-8 text-muted-foreground">Loading...</p>
          ) : documents.length === 0 ? (
            <p className="text-center py-8 text-muted-foreground">No documents yet</p>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Project</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Source</TableHead>
                    <TableHead>Order</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Added</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {documents.map((doc) => {
                    const project = projects.find((p) => p.id === doc.project_id);
                    return (
                      <TableRow key={doc.id}>
                        <TableCell className="font-medium">
                          {project?.title || doc.project_slug}
                        </TableCell>
                        <TableCell>{doc.title}</TableCell>
                        <TableCell className="text-muted-foreground text-sm">
                          {doc.document_type || '—'}
                        </TableCell>
                        <TableCell>
                          {doc.external_url ? (
                            <span className="inline-flex items-center gap-1 text-xs">
                              <ExternalLink className="h-3 w-3" /> URL
                            </span>
                          ) : doc.file_name ? (
                            <span className="inline-flex items-center gap-1 text-xs">
                              <FileText className="h-3 w-3" /> {doc.file_name}
                            </span>
                          ) : (
                            '—'
                          )}
                        </TableCell>
                        <TableCell>{doc.sort_order}</TableCell>
                        <TableCell>
                          {doc.is_visible ? (
                            <span className="text-success text-sm">Visible</span>
                          ) : (
                            <span className="text-muted-foreground text-sm">Hidden</span>
                          )}
                        </TableCell>
                        <TableCell className="text-sm text-muted-foreground">
                          {format(new Date(doc.created_at), 'MMM dd, yyyy')}
                        </TableCell>
                        <TableCell>
                          <div className="flex justify-end gap-1">
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => toggleVisibility(doc)}
                            >
                              {doc.is_visible ? (
                                <EyeOff className="h-4 w-4" />
                              ) : (
                                <Eye className="h-4 w-4" />
                              )}
                            </Button>
                            <Button size="sm" variant="ghost" onClick={() => deleteDoc(doc)}>
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
    </div>
  );
};

export default AdminProjectDocuments;
