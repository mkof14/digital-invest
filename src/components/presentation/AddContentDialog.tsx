import { useCallback, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useUserRole } from "@/hooks/useUserRole";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
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
import { Loader2, UploadCloud, Link2, LogIn } from "lucide-react";
import { toast } from "sonner";
import { Link } from "react-router-dom";

type ItemType = "pdf" | "video" | "link" | "image" | "page";

const BUCKET = "presentations";
const SIGNED_URL_TTL = 60 * 60 * 24 * 365 * 10;

const inferType = (file: File): ItemType => {
  if (file.type === "application/pdf") return "pdf";
  if (file.type.startsWith("image/")) return "image";
  if (file.type.startsWith("video/")) return "video";
  return "link";
};

interface Props {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  onCreated?: () => void;
  defaultGroup?: string;
}

const AddContentDialog = ({ open, onOpenChange, onCreated, defaultGroup }: Props) => {
  const { isEditor, isLoading: roleLoading } = useUserRole();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [groupName, setGroupName] = useState(defaultGroup || "");
  const [itemType, setItemType] = useState<ItemType>("pdf");
  const [file, setFile] = useState<File | null>(null);
  const [externalUrl, setExternalUrl] = useState("");
  const [dragOver, setDragOver] = useState(false);
  const [saving, setSaving] = useState(false);

  const reset = () => {
    setTitle("");
    setDescription("");
    setGroupName(defaultGroup || "");
    setItemType("pdf");
    setFile(null);
    setExternalUrl("");
  };

  const handleFile = useCallback((f: File | null) => {
    if (!f) return;
    setFile(f);
    setItemType(inferType(f));
    if (!title) setTitle(f.name.replace(/\.[^/.]+$/, ""));
  }, [title]);

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    handleFile(e.dataTransfer.files?.[0] || null);
  };

  const submit = async (mode: "file" | "link") => {
    if (!title.trim()) return toast.error("Введите название");
    if (mode === "file" && !file) return toast.error("Выберите файл");
    if (mode === "link" && !externalUrl.trim()) return toast.error("Вставьте ссылку");

    setSaving(true);
    try {
      let url = externalUrl.trim();
      let filePath: string | null = null;
      let fileMime: string | null = null;
      let fileSize: number | null = null;
      let type = itemType;

      if (mode === "file" && file) {
        const safeName = file.name.replace(/[^\w.\-]/g, "_");
        const path = `${Date.now()}-${safeName}`;
        const { error: upErr } = await supabase.storage
          .from(BUCKET)
          .upload(path, file, { contentType: file.type || undefined, upsert: false });
        if (upErr) throw upErr;

        const { data: signed, error: signErr } = await supabase.storage
          .from(BUCKET)
          .createSignedUrl(path, SIGNED_URL_TTL);
        if (signErr || !signed) throw signErr ?? new Error("Sign URL failed");

        url = signed.signedUrl;
        filePath = path;
        fileMime = file.type;
        fileSize = file.size;
        type = inferType(file);
      }

      const { error } = await supabase.from("presentation_items").insert({
        title: title.trim(),
        description: description.trim() || null,
        item_type: type,
        url,
        group_name: groupName.trim() || "Uploaded",
        sort_order: 0,
        file_path: filePath,
        file_mime: fileMime,
        file_size: fileSize,
      });
      if (error) throw error;

      toast.success("Добавлено в презентацию");
      reset();
      onOpenChange(false);
      onCreated?.();
    } catch (e: any) {
      toast.error(e.message || "Не удалось сохранить");
    } finally {
      setSaving(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>Добавить контент</DialogTitle>
          <DialogDescription>
            Загрузите PDF, изображение или видео — или вставьте ссылку (YouTube, Vimeo, сайт, внутренняя страница).
          </DialogDescription>
        </DialogHeader>

        {!roleLoading && !isEditor() ? (
          <div className="text-center py-8 space-y-3">
            <p className="text-sm text-muted-foreground">
              Только редакторы могут добавлять контент.
            </p>
            <Button asChild>
              <Link to="/auth">
                <LogIn className="h-4 w-4 mr-2" /> Войти
              </Link>
            </Button>
          </div>
        ) : (
          <Tabs defaultValue="file">
            <TabsList className="grid grid-cols-2 w-full">
              <TabsTrigger value="file">
                <UploadCloud className="h-4 w-4 mr-2" /> Файл
              </TabsTrigger>
              <TabsTrigger value="link">
                <Link2 className="h-4 w-4 mr-2" /> Ссылка
              </TabsTrigger>
            </TabsList>

            <TabsContent value="file" className="space-y-3 mt-4">
              <label
                onDragOver={(e) => {
                  e.preventDefault();
                  setDragOver(true);
                }}
                onDragLeave={() => setDragOver(false)}
                onDrop={onDrop}
                className={`block border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${
                  dragOver ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"
                }`}
              >
                <input
                  type="file"
                  className="hidden"
                  accept="application/pdf,image/*,video/mp4,video/webm"
                  onChange={(e) => handleFile(e.target.files?.[0] || null)}
                />
                <UploadCloud className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                {file ? (
                  <>
                    <p className="text-sm font-medium">{file.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {(file.size / 1024 / 1024).toFixed(2)} MB · {file.type || "файл"}
                    </p>
                  </>
                ) : (
                  <>
                    <p className="text-sm">Перетащите файл сюда или нажмите</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      PDF, JPG, PNG, MP4, WEBM
                    </p>
                  </>
                )}
              </label>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <Label className="text-xs">Название</Label>
                  <Input value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div>
                  <Label className="text-xs">Раздел в меню</Label>
                  <Input
                    value={groupName}
                    onChange={(e) => setGroupName(e.target.value)}
                    placeholder="Uploaded"
                  />
                </div>
              </div>
              <div>
                <Label className="text-xs">Описание (необязательно)</Label>
                <Textarea rows={2} value={description} onChange={(e) => setDescription(e.target.value)} />
              </div>

              <Button onClick={() => submit("file")} disabled={saving} className="w-full">
                {saving ? (
                  <><Loader2 className="h-4 w-4 mr-2 animate-spin" /> Загружаю…</>
                ) : (
                  "Добавить"
                )}
              </Button>
            </TabsContent>

            <TabsContent value="link" className="space-y-3 mt-4">
              <div>
                <Label className="text-xs">URL или внутренний путь</Label>
                <Input
                  value={externalUrl}
                  onChange={(e) => setExternalUrl(e.target.value)}
                  placeholder="https://youtube.com/... или /projects/biomath-core"
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <Label className="text-xs">Тип</Label>
                  <Select value={itemType} onValueChange={(v) => setItemType(v as ItemType)}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="video">Видео (YouTube/Vimeo/MP4)</SelectItem>
                      <SelectItem value="link">Внешний сайт</SelectItem>
                      <SelectItem value="page">Внутренняя страница</SelectItem>
                      <SelectItem value="pdf">PDF по ссылке</SelectItem>
                      <SelectItem value="image">Картинка по ссылке</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className="text-xs">Раздел в меню</Label>
                  <Input
                    value={groupName}
                    onChange={(e) => setGroupName(e.target.value)}
                    placeholder="Uploaded"
                  />
                </div>
              </div>
              <div>
                <Label className="text-xs">Название</Label>
                <Input value={title} onChange={(e) => setTitle(e.target.value)} />
              </div>
              <div>
                <Label className="text-xs">Описание (необязательно)</Label>
                <Textarea rows={2} value={description} onChange={(e) => setDescription(e.target.value)} />
              </div>

              <Button onClick={() => submit("link")} disabled={saving} className="w-full">
                {saving ? (
                  <><Loader2 className="h-4 w-4 mr-2 animate-spin" /> Сохраняю…</>
                ) : (
                  "Добавить"
                )}
              </Button>
            </TabsContent>
          </Tabs>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default AddContentDialog;
