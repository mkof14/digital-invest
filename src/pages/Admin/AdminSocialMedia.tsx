import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { Loader2, Save, Plus, Trash2, TrendingUp, Eye } from "lucide-react";
import { useUserRole } from "@/hooks/useUserRole";
import { useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface SocialMediaLink {
  id: string;
  platform: string;
  display_name: string;
  url: string | null;
  is_visible: boolean;
  sort_order: number;
  icon_name: string;
  click_count: number;
  last_clicked_at: string | null;
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

  const { data: clickStats } = useQuery({
    queryKey: ["social-media-click-stats"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("social_media_clicks")
        .select("social_media_id, clicked_at");

      if (error) throw error;

      // Group by social media and count
      const stats = data.reduce((acc: any, click: any) => {
        if (!acc[click.social_media_id]) {
          acc[click.social_media_id] = { total: 0, last7Days: 0 };
        }
        acc[click.social_media_id].total++;

        const clickDate = new Date(click.clicked_at);
        const sevenDaysAgo = new Date();
        sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
        
        if (clickDate >= sevenDaysAgo) {
          acc[click.social_media_id].last7Days++;
        }

        return acc;
      }, {});

      return stats;
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
          Настройте ссылки на социальные сети и отслеживайте клики
        </p>
      </div>

      <Tabs defaultValue="links" className="w-full">
        <TabsList>
          <TabsTrigger value="links">Ссылки</TabsTrigger>
          <TabsTrigger value="analytics">Аналитика</TabsTrigger>
        </TabsList>

        <TabsContent value="links" className="space-y-4 mt-6">
          {socialLinks?.map((link) => (
            <Card key={link.id}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      {link.display_name}
                      {link.click_count > 0 && (
                        <Badge variant="secondary" className="ml-2">
                          <TrendingUp className="h-3 w-3 mr-1" />
                          {link.click_count} кликов
                        </Badge>
                      )}
                    </CardTitle>
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

                  {link.last_clicked_at && (
                    <div className="text-sm text-muted-foreground">
                      Последний клик: {new Date(link.last_clicked_at).toLocaleString('ru-RU')}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="analytics" className="mt-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {socialLinks?.map((link) => {
              const stats = clickStats?.[link.id] || { total: 0, last7Days: 0 };
              
              return (
                <Card key={link.id}>
                  <CardHeader>
                    <CardTitle className="text-lg">{link.display_name}</CardTitle>
                    <CardDescription>Статистика кликов</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Всего кликов:</span>
                        <span className="text-2xl font-bold">{link.click_count}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">За последние 7 дней:</span>
                        <Badge variant="secondary">
                          {stats.last7Days}
                        </Badge>
                      </div>
                      {link.last_clicked_at && (
                        <div className="pt-2 border-t">
                          <span className="text-xs text-muted-foreground">
                            Последний клик: {new Date(link.last_clicked_at).toLocaleDateString('ru-RU')}
                          </span>
                        </div>
                      )}
                      {!link.is_visible && (
                        <Badge variant="outline" className="w-full justify-center">
                          <Eye className="h-3 w-3 mr-1" />
                          Скрыто
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminSocialMedia;
