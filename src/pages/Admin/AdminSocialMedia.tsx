import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { Loader2, Save, Plus, Trash2 } from "lucide-react";
import { useUserRole } from "@/hooks/useUserRole";
import { useNavigate } from "react-router-dom";

interface SocialMediaLink {
  id: string;
  platform: string;
  display_name: string;
  url: string | null;
  is_visible: boolean;
  sort_order: number;
  icon_name: string;
}

const AdminSocialMedia = () => {
  const navigate = useNavigate();
  const { role, isLoading: roleLoading } = useUserRole();
  const queryClient = useQueryClient();
  const [editingId, setEditingId] = useState<string | null>(null);

  // Redirect if not authorized
  if (!roleLoading && (!role || (role !== "ADMIN" && role !== "SUPER_ADMIN"))) {
    navigate("/admin");
    return null;
  }

  const { data: socialLinks, isLoading } = useQuery({
    queryKey: ["social-media-links"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("social_media_links")
        .select("*")
        .order("sort_order", { ascending: true });

      if (error) throw error;
      return data as SocialMediaLink[];
    },
  });

  const updateMutation = useMutation({
    mutationFn: async (link: SocialMediaLink) => {
      const { error } = await supabase
        .from("social_media_links")
        .update({
          url: link.url,
          display_name: link.display_name,
          is_visible: link.is_visible,
          sort_order: link.sort_order,
        })
        .eq("id", link.id);

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["social-media-links"] });
      toast.success("Социальная сеть обновлена");
      setEditingId(null);
    },
    onError: () => {
      toast.error("Ошибка при обновлении");
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase
        .from("social_media_links")
        .delete()
        .eq("id", id);

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["social-media-links"] });
      toast.success("Социальная сеть удалена");
    },
    onError: () => {
      toast.error("Ошибка при удалении");
    },
  });

  const handleUpdate = (link: SocialMediaLink) => {
    updateMutation.mutate(link);
  };

  const handleDelete = (id: string) => {
    if (confirm("Вы уверены, что хотите удалить эту социальную сеть?")) {
      deleteMutation.mutate(id);
    }
  };

  if (roleLoading || isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Управление социальными сетями</h1>
        <p className="text-muted-foreground">
          Настройте ссылки на социальные сети, которые отображаются в футере сайта
        </p>
      </div>

      <div className="space-y-4">
        {socialLinks?.map((link) => (
          <Card key={link.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>{link.display_name}</CardTitle>
                  <CardDescription>Платформа: {link.platform}</CardDescription>
                </div>
                <div className="flex items-center gap-2">
                  <Switch
                    checked={link.is_visible}
                    onCheckedChange={(checked) =>
                      handleUpdate({ ...link, is_visible: checked })
                    }
                  />
                  <Button
                    variant="destructive"
                    size="icon"
                    onClick={() => handleDelete(link.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor={`name-${link.id}`}>Название</Label>
                  <Input
                    id={`name-${link.id}`}
                    value={link.display_name}
                    onChange={(e) =>
                      handleUpdate({ ...link, display_name: e.target.value })
                    }
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor={`url-${link.id}`}>URL ссылки</Label>
                  <Input
                    id={`url-${link.id}`}
                    type="url"
                    placeholder="https://..."
                    value={link.url || ""}
                    onChange={(e) =>
                      handleUpdate({ ...link, url: e.target.value })
                    }
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor={`order-${link.id}`}>Порядок сортировки</Label>
                  <Input
                    id={`order-${link.id}`}
                    type="number"
                    value={link.sort_order}
                    onChange={(e) =>
                      handleUpdate({ ...link, sort_order: parseInt(e.target.value) })
                    }
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AdminSocialMedia;
