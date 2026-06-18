import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  ArrowDown,
  ArrowUp,
  Loader2,
  Pencil,
  Plus,
  Search,
  Star,
  Trash2,
} from "lucide-react";
import { toast } from "sonner";
import {
  Resource,
  ResourceKind,
  RESOURCE_KINDS,
  fetchAllResources,
} from "@/lib/resources";

const BUCKET = "project-documents";

const empty: Partial<Resource> = {
  kind: "presentation",
  title: "",
  description: "",
  category: "",
  cover_url: "",
  file_url: "",
  video_url: "",
  external_url: "",
  file_type: "",
  icon: "",
  is_published: false,
  is_featured: false,
  sort_order: 0,
};

const AdminResources = () => {
  const [items, setItems] = useState<Resource[]>([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [kindFilter, setKindFilter] = useState<ResourceKind | "all">("all");
  const [editing, setEditing] = useState<Partial<Resource> | null>(null);
  const [saving, setSaving] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState<Resource | null>(null);
  const [uploading, setUploading] = useState<"cover" | "file" | null>(null);

  const load = () => {
    setLoading(true);
    fetchAllResources()
      .then(setItems)
      .catch((e) => toast.error(e.message))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    load();
  }, []);

  const filtered = items.filter((r) => {
    if (kindFilter !== "all" && r.kind !== kindFilter) return false;
    const q = query.trim().toLowerCase();
    if (!q) return true;
    return (
      r.title.toLowerCase().includes(q) ||
      (r.category ?? "").toLowerCase().includes(q) ||
      (r.description ?? "").toLowerCase().includes(q)
    );
  });

  const upload = async (file: File, kind: "cover" | "file") => {
    setUploading(kind);
    try {
      const path = `resources/${Date.now()}-${file.name.replace(/[^\w.\-]+/g, "_")}`;
      const { error } = await supabase.storage.from(BUCKET).upload(path, file);
      if (error) throw error;
      const { data } = supabase.storage.from(BUCKET).getPublicUrl(path);
      const url = data.publicUrl;
      setEditing((cur) =>
        kind === "cover"
          ? { ...cur, cover_url: url }
          : {
              ...cur,
              file_url: url,
              file_type: file.type || cur?.file_type || "",
              file_size_bytes: file.size,
            }
      );
      toast.success("Uploaded");
    } catch (e: any) {
      toast.error(e.message);
    } finally {
      setUploading(null);
    }
  };

  const save = async () => {
    if (!editing?.title || !editing.kind) {
      toast.error("Title and kind are required");
      return;
    }
    setSaving(true);
    try {
      const payload: any = {
        kind: editing.kind,
        category: editing.category || null,
        title: editing.title,
        description: editing.description || null,
        cover_url: editing.cover_url || null,
        file_url: editing.file_url || null,
        video_url: editing.video_url || null,
        external_url: editing.external_url || null,
        file_type: editing.file_type || null,
        file_size_bytes: editing.file_size_bytes ?? null,
        icon: editing.icon || null,
        sort_order: editing.sort_order ?? 0,
        is_published: !!editing.is_published,
        is_featured: !!editing.is_featured,
      };

      // Featured exclusivity
      if (payload.is_featured) {
        await supabase
          .from("resources")
          .update({ is_featured: false })
          .neq("id", editing.id ?? "00000000-0000-0000-0000-000000000000");
      }

      if (editing.id) {
        const { error } = await supabase.from("resources").update(payload).eq("id", editing.id);
        if (error) throw error;
      } else {
        const { error } = await supabase.from("resources").insert(payload);
        if (error) throw error;
      }
      toast.success("Saved");
      setEditing(null);
      load();
    } catch (e: any) {
      toast.error(e.message);
    } finally {
      setSaving(false);
    }
  };

  const togglePublished = async (r: Resource) => {
    const { error } = await supabase
      .from("resources")
      .update({ is_published: !r.is_published })
      .eq("id", r.id);
    if (error) return toast.error(error.message);
    load();
  };

  const toggleFeatured = async (r: Resource) => {
    if (!r.is_featured) {
      await supabase.from("resources").update({ is_featured: false }).neq("id", r.id);
    }
    const { error } = await supabase
      .from("resources")
      .update({ is_featured: !r.is_featured })
      .eq("id", r.id);
    if (error) return toast.error(error.message);
    load();
  };

  const move = async (r: Resource, dir: -1 | 1) => {
    const { error } = await supabase
      .from("resources")
      .update({ sort_order: r.sort_order + dir })
      .eq("id", r.id);
    if (error) return toast.error(error.message);
    load();
  };

  const del = async () => {
    if (!confirmDelete) return;
    const { error } = await supabase.from("resources").delete().eq("id", confirmDelete.id);
    if (error) return toast.error(error.message);
    toast.success("Deleted");
    setConfirmDelete(null);
    load();
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h1 className="text-2xl font-bold">Resources</h1>
          <p className="text-sm text-muted-foreground">
            Manage the Intelligence Center library: presentations, research, videos, downloads,
            media and technology entries.
          </p>
        </div>
        <Button onClick={() => setEditing({ ...empty })}>
          <Plus className="w-4 h-4 mr-1.5" /> New Resource
        </Button>
      </div>

      <Card className="p-4 flex flex-col md:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search…"
            className="pl-9"
          />
        </div>
        <Select value={kindFilter} onValueChange={(v) => setKindFilter(v as any)}>
          <SelectTrigger className="md:w-56">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All kinds</SelectItem>
            {RESOURCE_KINDS.map((k) => (
              <SelectItem key={k.value} value={k.value}>
                {k.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </Card>

      <Card className="overflow-hidden">
        {loading ? (
          <div className="p-12 text-center">
            <Loader2 className="w-6 h-6 animate-spin mx-auto text-muted-foreground" />
          </div>
        ) : (
          <table className="w-full text-sm">
            <thead className="bg-muted/40 text-left text-xs uppercase tracking-wider text-muted-foreground">
              <tr>
                <th className="px-4 py-3">Title</th>
                <th className="px-4 py-3">Kind</th>
                <th className="px-4 py-3">Category</th>
                <th className="px-4 py-3 text-center">Order</th>
                <th className="px-4 py-3 text-center">Featured</th>
                <th className="px-4 py-3 text-center">Published</th>
                <th className="px-4 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((r) => (
                <tr key={r.id} className="border-t border-border/40">
                  <td className="px-4 py-3 font-medium">{r.title}</td>
                  <td className="px-4 py-3 text-muted-foreground capitalize">{r.kind}</td>
                  <td className="px-4 py-3 text-muted-foreground">{r.category ?? "—"}</td>
                  <td className="px-4 py-3 text-center">
                    <div className="inline-flex items-center gap-1">
                      <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => move(r, -1)}>
                        <ArrowUp className="w-3.5 h-3.5" />
                      </Button>
                      <span className="text-xs w-6 text-center">{r.sort_order}</span>
                      <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => move(r, 1)}>
                        <ArrowDown className="w-3.5 h-3.5" />
                      </Button>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <button onClick={() => toggleFeatured(r)} title="Toggle featured">
                      <Star
                        className={`w-4 h-4 ${
                          r.is_featured ? "fill-primary text-primary" : "text-muted-foreground"
                        }`}
                      />
                    </button>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <Switch checked={r.is_published} onCheckedChange={() => togglePublished(r)} />
                  </td>
                  <td className="px-4 py-3 text-right">
                    <div className="inline-flex gap-1">
                      <Button variant="ghost" size="icon" onClick={() => setEditing(r)}>
                        <Pencil className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setConfirmDelete(r)}
                      >
                        <Trash2 className="w-4 h-4 text-destructive" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={7} className="px-4 py-12 text-center text-muted-foreground">
                    No resources yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </Card>

      {/* Editor */}
      <Sheet open={!!editing} onOpenChange={(o) => !o && setEditing(null)}>
        <SheetContent className="w-full sm:max-w-2xl overflow-y-auto">
          <SheetHeader>
            <SheetTitle>{editing?.id ? "Edit resource" : "New resource"}</SheetTitle>
          </SheetHeader>
          {editing && (
            <div className="mt-6 space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Kind</Label>
                  <Select
                    value={editing.kind}
                    onValueChange={(v) => setEditing({ ...editing, kind: v as ResourceKind })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {RESOURCE_KINDS.map((k) => (
                        <SelectItem key={k.value} value={k.value}>
                          {k.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Category</Label>
                  <Input
                    value={editing.category ?? ""}
                    onChange={(e) => setEditing({ ...editing, category: e.target.value })}
                    placeholder="Technology"
                  />
                </div>
              </div>

              <div>
                <Label>Title</Label>
                <Input
                  value={editing.title ?? ""}
                  onChange={(e) => setEditing({ ...editing, title: e.target.value })}
                />
              </div>

              <div>
                <Label>Description</Label>
                <Textarea
                  rows={3}
                  value={editing.description ?? ""}
                  onChange={(e) => setEditing({ ...editing, description: e.target.value })}
                />
              </div>

              <div>
                <Label>Cover image</Label>
                <div className="flex items-center gap-3">
                  <Input
                    value={editing.cover_url ?? ""}
                    onChange={(e) => setEditing({ ...editing, cover_url: e.target.value })}
                    placeholder="https://…"
                  />
                  <label className="cursor-pointer">
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => e.target.files?.[0] && upload(e.target.files[0], "cover")}
                    />
                    <Button asChild variant="outline" size="sm">
                      <span>{uploading === "cover" ? "Uploading…" : "Upload"}</span>
                    </Button>
                  </label>
                </div>
              </div>

              <div>
                <Label>File (PDF or other)</Label>
                <div className="flex items-center gap-3">
                  <Input
                    value={editing.file_url ?? ""}
                    onChange={(e) => setEditing({ ...editing, file_url: e.target.value })}
                    placeholder="https://…"
                  />
                  <label className="cursor-pointer">
                    <input
                      type="file"
                      className="hidden"
                      onChange={(e) => e.target.files?.[0] && upload(e.target.files[0], "file")}
                    />
                    <Button asChild variant="outline" size="sm">
                      <span>{uploading === "file" ? "Uploading…" : "Upload"}</span>
                    </Button>
                  </label>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>File type</Label>
                  <Input
                    value={editing.file_type ?? ""}
                    onChange={(e) => setEditing({ ...editing, file_type: e.target.value })}
                    placeholder="PDF"
                  />
                </div>
                <div>
                  <Label>File size (bytes)</Label>
                  <Input
                    type="number"
                    value={editing.file_size_bytes ?? ""}
                    onChange={(e) =>
                      setEditing({
                        ...editing,
                        file_size_bytes: e.target.value ? Number(e.target.value) : null,
                      })
                    }
                  />
                </div>
              </div>

              <div>
                <Label>Video URL (YouTube, Vimeo or MP4)</Label>
                <Input
                  value={editing.video_url ?? ""}
                  onChange={(e) => setEditing({ ...editing, video_url: e.target.value })}
                />
              </div>

              <div>
                <Label>External URL</Label>
                <Input
                  value={editing.external_url ?? ""}
                  onChange={(e) => setEditing({ ...editing, external_url: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Icon (lucide name)</Label>
                  <Input
                    value={editing.icon ?? ""}
                    onChange={(e) => setEditing({ ...editing, icon: e.target.value })}
                    placeholder="Cpu, Brain, Network…"
                  />
                </div>
                <div>
                  <Label>Sort order</Label>
                  <Input
                    type="number"
                    value={editing.sort_order ?? 0}
                    onChange={(e) =>
                      setEditing({ ...editing, sort_order: Number(e.target.value) || 0 })
                    }
                  />
                </div>
              </div>

              <div className="flex items-center gap-6 pt-2">
                <label className="flex items-center gap-2">
                  <Switch
                    checked={!!editing.is_published}
                    onCheckedChange={(v) => setEditing({ ...editing, is_published: v })}
                  />
                  <span className="text-sm">Published</span>
                </label>
                <label className="flex items-center gap-2">
                  <Switch
                    checked={!!editing.is_featured}
                    onCheckedChange={(v) => setEditing({ ...editing, is_featured: v })}
                  />
                  <span className="text-sm">Featured</span>
                </label>
              </div>

              <div className="flex gap-3 pt-4 border-t border-border/40">
                <Button onClick={save} disabled={saving}>
                  {saving ? <Loader2 className="w-4 h-4 mr-1.5 animate-spin" /> : null}
                  Save
                </Button>
                <Button variant="ghost" onClick={() => setEditing(null)}>
                  Cancel
                </Button>
              </div>
            </div>
          )}
        </SheetContent>
      </Sheet>

      <AlertDialog open={!!confirmDelete} onOpenChange={(o) => !o && setConfirmDelete(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete resource?</AlertDialogTitle>
            <AlertDialogDescription>
              This permanently removes "{confirmDelete?.title}". Uploaded files in storage are kept.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={del} className="bg-destructive text-destructive-foreground">
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default AdminResources;
