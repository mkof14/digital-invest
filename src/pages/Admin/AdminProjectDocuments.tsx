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
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import {
  ArrowLeft,
  Upload,
  Trash2,
  Eye,
  EyeOff,
  ChevronDown,
  ExternalLink,
  Pencil,
  ArrowUp,
  ArrowDown,
  Search,
} from 'lucide-react';
import { toast } from 'sonner';
import { format } from 'date-fns';
import { useUserRole } from '@/hooks/useUserRole';
import DocumentActions from '@/components/documents/DocumentActions';
import DocumentPreviewDialog from '@/components/documents/DocumentPreviewDialog';
import {
  formatFileSize,
  getFileExtension,
  getFileTypeColor,
  isPreviewable,
  ProjectDocumentRecord,
} from '@/components/documents/documentUtils';

interface Project {
  id: string;
  slug: string;
  title: string;
}

interface ProjectDocument extends ProjectDocumentRecord {
  project_id: string | null;
  project_slug: string;
  is_visible: boolean;
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
  const [search, setSearch] = useState('');
  const [filterProject, setFilterProject] = useState<string>('all');

  // Form state
  const [selectedProjectId, setSelectedProjectId] = useState<string>('');
  const [title, setTitle] = useState('');
  const [documentType, setDocumentType] = useState('');
  const [description, setDescription] = useState('');
  const [externalUrl, setExternalUrl] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [sortOrder, setSortOrder] = useState(0);

  // Edit modal
  const [editDoc, setEditDoc] = useState<ProjectDocument | null>(null);
  const [previewDoc, setPreviewDoc] = useState<ProjectDocument | null>(null);

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
      .order('project_slug', { ascending: true })
      .order('sort_order', { ascending: true });
    if (!error && data) setDocuments(data as ProjectDocument[]);
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
    if (!selectedProjectId) return toast.error('Select a project');
    if (!title.trim()) return toast.error('Title required');
    if (!file && !externalUrl.trim()) return toast.error('Provide either a file or an external URL');

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
    if (error) return toast.error('Failed to update');
    toast.success(doc.is_visible ? 'Hidden from public' : 'Now visible');
    fetchDocuments();
  };

  const deleteDoc = async (doc: ProjectDocument) => {
    if (!confirm(`Delete "${doc.title}"?`)) return;
    try {
      if (doc.file_path) {
        await supabase.storage.from('project-documents').remove([doc.file_path]);
      }
      const { error } = await supabase.from('project_documents').delete().eq('id', doc.id);
      if (error) throw error;
      toast.success('Deleted');
      fetchDocuments();
    } catch (e: any) {
      toast.error(e.message || 'Delete failed');
    }
  };

  const moveDoc = async (doc: ProjectDocument, direction: 'up' | 'down') => {
    const sameProject = documents.filter((d) => d.project_slug === doc.project_slug);
    const sorted = [...sameProject].sort((a, b) => a.sort_order - b.sort_order);
    const idx = sorted.findIndex((d) => d.id === doc.id);
    const swapWith = direction === 'up' ? sorted[idx - 1] : sorted[idx + 1];
    if (!swapWith) return;

    const updates = await Promise.all([
      supabase.from('project_documents').update({ sort_order: swapWith.sort_order }).eq('id', doc.id),
      supabase.from('project_documents').update({ sort_order: doc.sort_order }).eq('id', swapWith.id),
    ]);
    if (updates.some((u) => u.error)) {
      toast.error('Failed to reorder');
      return;
    }
    fetchDocuments();
  };

  const saveEdit = async () => {
    if (!editDoc) return;
    const { error } = await supabase
      .from('project_documents')
      .update({
        title: editDoc.title.trim(),
        document_type: editDoc.document_type?.trim() || null,
        description: editDoc.description?.trim() || null,
        external_url: editDoc.external_url?.trim() || null,
        sort_order: editDoc.sort_order,
      })
      .eq('id', editDoc.id);
    if (error) {
      toast.error('Save failed');
      return;
    }
    toast.success('Saved');
    setEditDoc(null);
    fetchDocuments();
  };

  const filteredDocs = documents.filter((d) => {
    if (filterProject !== 'all' && d.project_id !== filterProject) return false;
    if (search) {
      const s = search.toLowerCase();
      return (
        d.title.toLowerCase().includes(s) ||
        d.document_type?.toLowerCase().includes(s) ||
        d.file_name?.toLowerCase().includes(s)
      );
    }
    return true;
  });

  return (
    <div className="space-y-6">
      <Button variant="ghost" onClick={() => navigate('/admin')}>
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Admin
      </Button>

      <div>
        <h2 className="text-3xl font-bold text-foreground">Project Documents</h2>
        <p className="text-muted-foreground">
          Attach unlimited documents to any project. They appear as buttons in the hero and as cards in the public Documents section.
        </p>
      </div>

      {/* Upload panel */}
      <Card className="border border-border/50">
        <Collapsible open={uploadOpen} onOpenChange={setUploadOpen}>
          <CollapsibleTrigger asChild>
            <CardHeader className="cursor-pointer hover:bg-muted/30 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Upload className="h-5 w-5 text-primary" />
                  <CardTitle>Upload Documents</CardTitle>
                </div>
                <ChevronDown className={`h-5 w-5 transition-transform ${uploadOpen ? 'rotate-180' : ''}`} />
              </div>
              <CardDescription>
                Add a file (any format) or external link. Custom title and type allowed.
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
                        <SelectItem key={p.id} value={p.id}>{p.title}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Title (button label) *</Label>
                  <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="e.g. Investor Presentation" />
                </div>
                <div>
                  <Label>Document type (free text)</Label>
                  <Input value={documentType} onChange={(e) => setDocumentType(e.target.value)} placeholder="e.g. Pitch Deck, Whitepaper, Brief..." />
                </div>
                <div>
                  <Label>Sort order</Label>
                  <Input type="number" value={sortOrder} onChange={(e) => setSortOrder(Number(e.target.value))} />
                </div>
              </div>
              <div>
                <Label>Description (optional)</Label>
                <Textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={2} />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label>Upload file (any format)</Label>
                  <Input type="file" onChange={(e) => setFile(e.target.files?.[0] || null)} />
                  {file && <p className="text-xs text-muted-foreground mt-1">{file.name} ({formatFileSize(file.size)})</p>}
                </div>
                <div>
                  <Label>OR external URL</Label>
                  <Input value={externalUrl} onChange={(e) => setExternalUrl(e.target.value)} placeholder="https://..." />
                </div>
              </div>
              <div className="flex gap-2">
                <Button onClick={handleSubmit} disabled={isUploading}>
                  {isUploading ? 'Saving...' : 'Add Document'}
                </Button>
                <Button variant="outline" onClick={resetForm} disabled={isUploading}>Reset</Button>
              </div>
            </CardContent>
          </CollapsibleContent>
        </Collapsible>
      </Card>

      {/* Filters */}
      <Card className="border border-border/50">
        <CardHeader>
          <div className="flex items-center justify-between flex-wrap gap-3">
            <CardTitle>All Documents ({filteredDocs.length})</CardTitle>
            <div className="flex gap-2 items-center flex-wrap">
              <div className="relative">
                <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search..."
                  className="pl-8 w-56"
                />
              </div>
              <Select value={filterProject} onValueChange={setFilterProject}>
                <SelectTrigger className="w-56"><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All projects</SelectItem>
                  {projects.map((p) => (
                    <SelectItem key={p.id} value={p.id}>{p.title}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <CardDescription>Preview, edit, reorder, share or delete</CardDescription>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <p className="text-center py-8 text-muted-foreground">Loading...</p>
          ) : filteredDocs.length === 0 ? (
            <p className="text-center py-8 text-muted-foreground">No documents found</p>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-12">Type</TableHead>
                    <TableHead>Project</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Size</TableHead>
                    <TableHead>Order</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Added</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredDocs.map((doc) => {
                    const project = projects.find((p) => p.id === doc.project_id);
                    const ext = getFileExtension(doc);
                    const colorClass = getFileTypeColor(ext);
                    return (
                      <TableRow key={doc.id}>
                        <TableCell>
                          <div className={`w-10 h-10 rounded border flex items-center justify-center font-bold text-[10px] ${colorClass}`}>
                            {ext}
                          </div>
                        </TableCell>
                        <TableCell className="font-medium text-sm">{project?.title || doc.project_slug}</TableCell>
                        <TableCell>
                          <div>
                            <div className="font-medium">{doc.title}</div>
                            {doc.document_type && (
                              <div className="text-xs text-muted-foreground">{doc.document_type}</div>
                            )}
                            {doc.external_url && !doc.file_path && (
                              <Badge variant="outline" className="mt-1 text-[10px]">
                                <ExternalLink className="h-2.5 w-2.5 mr-1" /> External
                              </Badge>
                            )}
                          </div>
                        </TableCell>
                        <TableCell className="text-xs text-muted-foreground">{formatFileSize(doc.file_size)}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            <Button size="sm" variant="ghost" className="h-6 w-6 p-0" onClick={() => moveDoc(doc, 'up')}>
                              <ArrowUp className="h-3 w-3" />
                            </Button>
                            <span className="text-xs w-4 text-center">{doc.sort_order}</span>
                            <Button size="sm" variant="ghost" className="h-6 w-6 p-0" onClick={() => moveDoc(doc, 'down')}>
                              <ArrowDown className="h-3 w-3" />
                            </Button>
                          </div>
                        </TableCell>
                        <TableCell>
                          {doc.is_visible ? (
                            <Badge variant="outline" className="text-success border-success/40">Visible</Badge>
                          ) : (
                            <Badge variant="outline" className="text-muted-foreground">Hidden</Badge>
                          )}
                        </TableCell>
                        <TableCell className="text-xs text-muted-foreground">
                          {format(new Date(doc.created_at), 'MMM dd, yyyy')}
                        </TableCell>
                        <TableCell>
                          <div className="flex justify-end gap-1 items-center">
                            {isPreviewable(doc) && (
                              <Button size="sm" variant="ghost" onClick={() => setPreviewDoc(doc)} title="Preview">
                                <Eye className="h-4 w-4" />
                              </Button>
                            )}
                            <DocumentActions doc={doc} variant="menu" />
                            <Button size="sm" variant="ghost" onClick={() => setEditDoc(doc)} title="Edit">
                              <Pencil className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="ghost" onClick={() => toggleVisibility(doc)} title={doc.is_visible ? 'Hide' : 'Show'}>
                              {doc.is_visible ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                            </Button>
                            <Button size="sm" variant="ghost" onClick={() => deleteDoc(doc)} title="Delete">
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

      {/* Edit dialog */}
      <Dialog open={!!editDoc} onOpenChange={(v) => !v && setEditDoc(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit document</DialogTitle>
          </DialogHeader>
          {editDoc && (
            <div className="space-y-4">
              <div>
                <Label>Title</Label>
                <Input value={editDoc.title} onChange={(e) => setEditDoc({ ...editDoc, title: e.target.value })} />
              </div>
              <div>
                <Label>Document type</Label>
                <Input value={editDoc.document_type || ''} onChange={(e) => setEditDoc({ ...editDoc, document_type: e.target.value })} />
              </div>
              <div>
                <Label>Description</Label>
                <Textarea value={editDoc.description || ''} onChange={(e) => setEditDoc({ ...editDoc, description: e.target.value })} rows={2} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>External URL</Label>
                  <Input value={editDoc.external_url || ''} onChange={(e) => setEditDoc({ ...editDoc, external_url: e.target.value })} />
                </div>
                <div>
                  <Label>Sort order</Label>
                  <Input type="number" value={editDoc.sort_order} onChange={(e) => setEditDoc({ ...editDoc, sort_order: Number(e.target.value) })} />
                </div>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setEditDoc(null)}>Cancel</Button>
            <Button onClick={saveEdit}>Save</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <DocumentPreviewDialog
        doc={previewDoc}
        open={!!previewDoc}
        onOpenChange={(v) => !v && setPreviewDoc(null)}
      />
    </div>
  );
};

export default AdminProjectDocuments;
