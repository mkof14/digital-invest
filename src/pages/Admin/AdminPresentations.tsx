import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  Upload,
  Trash2,
  Eye,
  EyeOff,
  ExternalLink,
  Copy,
  Loader2,
} from "lucide-react";
import { toast } from "sonner";
import { useUserRole } from "@/hooks/useUserRole";

type ItemType = "pdf" | "video" | "link" | "image" | "page";

interface PresentationItem {
  id: string;
  title: string;
  description: string | null;
  item_type: ItemType;
  url: string;
  group_name: string | null;
  sort_order: number;
  is_visible: boolean;
  file_path: string | null;
  file_size: number | null;
  file_mime: string | null;
  created_at: string;
}

const BUCKET = "presentations";
const SIGNED_URL_TTL = 60 * 60 * 24 * 365 * 10; // 10 years

const formatSize = (b: number | null) => {
  if (!b) return "—";
  if (b < 1024) return `${b} B`;
  if (b < 1024 * 1024) return `${(b / 1024).toFixed(1)} KB`;
  return `${(b / 1024 / 1024).toFixed(1)} MB`;
};

const inferType = (file: File): ItemType => {
  if (file.type === "application/pdf") return "pdf";
  if (file.type.startsWith("image/")) return "image";
  if (file.type.startsWith("video/")) return "video";
  return "link";
};

const AdminPresentations = () => {
  const navigate = useNavigate();
  const { isEditor, isLoading: roleLoading } = useUserRole();

  const [items, setItems] = useState<PresentationItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  // Form
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [itemType, setItemType] = useState<ItemType>("pdf");
  const [groupName, setGroupName] = useState("");
  const [sortOrder, setSortOrder] = useState(0);
  const [externalUrl, setExternalUrl] = useState("");
  const [file, setFile] = useState<File | null>(null);

  useEffect(() => {
    if (roleLoading) return;
    if (!isEditor()) {
      navigate("/admin");
      return;
    }
    fetchItems();
  }, [roleLoading]);

  const fetchItems = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("presentation_items")
      .select("*")
      .order("group_name", { ascending: true, nullsFirst: false })
      .order("sort_order", { ascending: true })
      .order("created_at", { ascending: true });
    if (error) toast.error(error.message);
    setItems((data as PresentationItem[]) || []);
    setLoading(false);
  };

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setItemType("pdf");
    setGroupName("");
    setSortOrder(0);
    setExternalUrl("");
    setFile(null);
  };

  const handleFileChange = (f: File | null) => {
    setFile(f);
    if (f) {
      setItemType(inferType(f));
      if (!title) setTitle(f.name.replace(/\.[^/.]+$/, ""));
    }
  };

  const handleSubmit = async () => {
    if (!title.trim()) return toast.error("Title is required");
    if (!file && !externalUrl.trim())
      return toast.error("Upload a file or paste an external URL");

    setSaving(true);
    try {
      let url = externalUrl.trim();
      let filePath: string | null = null;
      let fileMime: string | null = null;
      let fileSize: number | null = null;

      if (file) {
        const safeName = file.name.replace(/[^\w.\-]/g, "_");
        const path = `${Date.now()}-${safeName}`;
        const { error: upErr } = await supabase.storage
          .from(BUCKET)
          .upload(path, file, {
            contentType: file.type || undefined,
            upsert: false,
          });
        if (upErr) throw upErr;

        const { data: signed, error: signErr } = await supabase.storage
          .from(BUCKET)
          .createSignedUrl(path, SIGNED_URL_TTL);
        if (signErr || !signed) throw signErr ?? new Error("Sign URL failed");

        url = signed.signedUrl;
        filePath = path;
        fileMime = file.type;
        fileSize = file.size;
      }

      const { error: insErr } = await supabase
        .from("presentation_items")
        .insert({
          title: title.trim(),
          description: description.trim() || null,
          item_type: itemType,
          url,
          group_name: groupName.trim() || null,
          sort_order: sortOrder,
          file_path: filePath,
          file_mime: fileMime,
          file_size: fileSize,
        });
      if (insErr) throw insErr;

      toast.success("Presentation item added");
      resetForm();
      fetchItems();
    } catch (e: any) {
      console.error(e);
      toast.error(e.message || "Failed to save");
    } finally {
      setSaving(false);
    }
  };

  const toggleVisibility = async (it: PresentationItem) => {
    const { error } = await supabase
      .from("presentation_items")
      .update({ is_visible: !it.is_visible })
      .eq("id", it.id);
    if (error) return toast.error(error.message);
    fetchItems();
  };

  const remove = async (it: PresentationItem) => {
    if (!confirm(`Delete "${it.title}"?`)) return;
    try {
      if (it.file_path) {
        await supabase.storage.from(BUCKET).remove([it.file_path]);
      }
      const { error } = await supabase
        .from("presentation_items")
        .delete()
        .eq("id", it.id);
      if (error) throw error;
      toast.success("Deleted");
      fetchItems();
    } catch (e: any) {
      toast.error(e.message || "Delete failed");
    }
  };

  const copyUrl = (u: string) => {
    navigator.clipboard.writeText(u);
    toast.success("URL copied");
  };

  return (
    <div className="space-y-6">
      <Button variant="ghost" onClick={() => navigate("/admin")}>
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Admin
      </Button>

      <div>
        <h2 className="text-3xl font-bold text-foreground">Company Presentations</h2>
        <p className="text-muted-foreground">
          Upload PDFs, images, MP4 videos, or paste links. Items appear in the{" "}
          <a href="/company-presentation" className="text-primary underline" target="_blank" rel="noreferrer">
            Company Presentation hub
          </a>
          .
        </p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Upload className="h-5 w-5 text-primary" />
            <CardTitle>Add Item</CardTitle>
          </div>
          <CardDescription>
            File uploads (PDF/image/MP4) are stored securely and a permanent link
            is generated automatically.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label>Title *</Label>
              <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="e.g. Investor Deck Q1" />
            </div>
            <div>
              <Label>Group (sidebar section)</Label>
              <Input value={groupName} onChange={(e) => setGroupName(e.target.value)} placeholder="e.g. Main Decks" />
            </div>
            <div>
              <Label>Type</Label>
              <Select value={itemType} onValueChange={(v) => setItemType(v as ItemType)}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="pdf">PDF</SelectItem>
                  <SelectItem value="video">Video</SelectItem>
                  <SelectItem value="image">Image</SelectItem>
                  <SelectItem value="link">External link</SelectItem>
                  <SelectItem value="page">Internal page</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Sort order</Label>
              <Input type="number" value={sortOrder} onChange={(e) => setSortOrder(Number(e.target.value))} />
            </div>
          </div>

          <div>
            <Label>Description (optional)</Label>
            <Textarea rows={2} value={description} onChange={(e) => setDescription(e.target.value)} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label>Upload file (PDF, image, MP4)</Label>
              <Input
                type="file"
                accept="application/pdf,image/*,video/mp4,video/webm"
                onChange={(e) => handleFileChange(e.target.files?.[0] || null)}
              />
              {file && (
                <p className="text-xs text-muted-foreground mt-1">
                  {file.name} ({formatSize(file.size)})
                </p>
              )}
            </div>
            <div>
              <Label>OR external URL / internal path</Label>
              <Input
                value={externalUrl}
                onChange={(e) => setExternalUrl(e.target.value)}
                placeholder="https://… or /projects/biomath-core"
              />
            </div>
          </div>

          <div className="flex gap-2">
            <Button onClick={handleSubmit} disabled={saving}>
              {saving ? <><Loader2 className="h-4 w-4 mr-2 animate-spin" />Saving…</> : "Add Item"}
            </Button>
            <Button variant="outline" onClick={resetForm} disabled={saving}>Reset</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>All Items ({items.length})</CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <p className="text-center py-8 text-muted-foreground">Loading…</p>
          ) : items.length === 0 ? (
            <p className="text-center py-8 text-muted-foreground">No items yet</p>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Group</TableHead>
                    <TableHead>Size</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {items.map((it) => (
                    <TableRow key={it.id}>
                      <TableCell>
                        <div className="font-medium">{it.title}</div>
                        {it.description && (
                          <div className="text-xs text-muted-foreground line-clamp-1">{it.description}</div>
                        )}
                      </TableCell>
                      <TableCell><Badge variant="outline">{it.item_type}</Badge></TableCell>
                      <TableCell className="text-sm text-muted-foreground">{it.group_name || "—"}</TableCell>
                      <TableCell className="text-xs text-muted-foreground">{formatSize(it.file_size)}</TableCell>
                      <TableCell>
                        {it.is_visible ? (
                          <Badge variant="outline" className="text-success border-success/40">Visible</Badge>
                        ) : (
                          <Badge variant="outline" className="text-muted-foreground">Hidden</Badge>
                        )}
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-1">
                          <Button size="sm" variant="ghost" onClick={() => copyUrl(it.url)} title="Copy URL">
                            <Copy className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="ghost" asChild title="Open">
                            <a href={it.url} target="_blank" rel="noreferrer">
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          </Button>
                          <Button size="sm" variant="ghost" onClick={() => toggleVisibility(it)} title="Toggle visibility">
                            {it.is_visible ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                          </Button>
                          <Button size="sm" variant="ghost" onClick={() => remove(it)} title="Delete">
                            <Trash2 className="h-4 w-4 text-destructive" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminPresentations;
