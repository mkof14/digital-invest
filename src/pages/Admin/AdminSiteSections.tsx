import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useUserRole } from '@/hooks/useUserRole';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Input } from '@/components/ui/input';
import { ArrowLeft, Layout, Save } from 'lucide-react';
import { toast } from 'sonner';
import { Badge } from '@/components/ui/badge';

interface SiteSection {
  id: string;
  key: string;
  display_name: string;
  description: string | null;
  is_visible: boolean;
  show_in_main_nav: boolean;
  show_in_footer: boolean;
  min_role_to_view: string;
  sort_order: number;
}

const AdminSiteSections = () => {
  const navigate = useNavigate();
  const { role: currentUserRole, isLoading: roleLoading } = useUserRole();
  const [sections, setSections] = useState<SiteSection[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [changedSections, setChangedSections] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (!roleLoading && (!currentUserRole || !['ADMIN', 'SUPER_ADMIN'].includes(currentUserRole))) {
      navigate('/admin');
      toast.error('Access denied. Admin role required.');
    }
  }, [currentUserRole, roleLoading, navigate]);

  useEffect(() => {
    if (currentUserRole && ['ADMIN', 'SUPER_ADMIN'].includes(currentUserRole)) {
      fetchSections();
    }
  }, [currentUserRole]);

  const fetchSections = async () => {
    try {
      const { data, error } = await supabase
        .from('site_sections')
        .select('*')
        .order('sort_order', { ascending: true });

      if (error) throw error;
      setSections(data || []);
    } catch (error) {
      console.error('Error fetching sections:', error);
      toast.error('Failed to load site sections');
    } finally {
      setIsLoading(false);
    }
  };

  const updateSection = (id: string, field: keyof SiteSection, value: any) => {
    setSections(prev => prev.map(section => 
      section.id === id ? { ...section, [field]: value } : section
    ));
    setChangedSections(prev => new Set(prev).add(id));
  };

  const saveSection = async (id: string) => {
    const section = sections.find(s => s.id === id);
    if (!section) return;

    try {
      const { error } = await supabase
        .from('site_sections')
        .update({
          is_visible: section.is_visible,
          show_in_main_nav: section.show_in_main_nav,
          show_in_footer: section.show_in_footer,
          min_role_to_view: section.min_role_to_view,
          sort_order: section.sort_order,
        })
        .eq('id', id);

      if (error) throw error;

      toast.success(`Updated ${section.display_name}`);
      setChangedSections(prev => {
        const newSet = new Set(prev);
        newSet.delete(id);
        return newSet;
      });
    } catch (error) {
      console.error('Error updating section:', error);
      toast.error('Failed to update section');
    }
  };

  const saveAllChanges = async () => {
    const promises = Array.from(changedSections).map(id => saveSection(id));
    await Promise.all(promises);
    toast.success('All changes saved');
  };

  if (roleLoading || isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">Loading...</div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-foreground">Site Sections</h2>
          <p className="text-muted-foreground">Control visibility and access for site pages</p>
        </div>
        <div className="flex gap-2">
          {changedSections.size > 0 && (
            <Button onClick={saveAllChanges} className="gap-2">
              <Save className="h-4 w-4" />
              Save All Changes ({changedSections.size})
            </Button>
          )}
          <Button variant="ghost" onClick={() => navigate('/admin')}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Dashboard
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Layout className="h-5 w-5" />
            Page Visibility & Access Control
          </CardTitle>
          <CardDescription>
            Configure which pages are visible and who can access them
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Page</TableHead>
                  <TableHead>Visible</TableHead>
                  <TableHead>Main Nav</TableHead>
                  <TableHead>Footer</TableHead>
                  <TableHead>Min Role</TableHead>
                  <TableHead>Order</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sections.map((section) => {
                  const hasChanges = changedSections.has(section.id);

                  return (
                    <TableRow key={section.id} className={hasChanges ? 'bg-muted/50' : ''}>
                      <TableCell>
                        <div>
                          <div className="font-medium">{section.display_name}</div>
                          <div className="text-xs text-muted-foreground">{section.key}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Switch
                          checked={section.is_visible}
                          onCheckedChange={(checked) => updateSection(section.id, 'is_visible', checked)}
                        />
                      </TableCell>
                      <TableCell>
                        <Switch
                          checked={section.show_in_main_nav}
                          onCheckedChange={(checked) => updateSection(section.id, 'show_in_main_nav', checked)}
                        />
                      </TableCell>
                      <TableCell>
                        <Switch
                          checked={section.show_in_footer}
                          onCheckedChange={(checked) => updateSection(section.id, 'show_in_footer', checked)}
                        />
                      </TableCell>
                      <TableCell>
                        <Select
                          value={section.min_role_to_view}
                          onValueChange={(value) => updateSection(section.id, 'min_role_to_view', value)}
                        >
                          <SelectTrigger className="w-[140px]">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="PUBLIC">Public</SelectItem>
                            <SelectItem value="VIEWER">Viewer+</SelectItem>
                            <SelectItem value="EDITOR">Editor+</SelectItem>
                            <SelectItem value="ADMIN">Admin+</SelectItem>
                            <SelectItem value="SUPER_ADMIN">Super Admin</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell>
                        <Input
                          type="number"
                          value={section.sort_order}
                          onChange={(e) => updateSection(section.id, 'sort_order', parseInt(e.target.value) || 0)}
                          className="w-[80px]"
                        />
                      </TableCell>
                      <TableCell className="text-right">
                        {hasChanges && (
                          <Button
                            size="sm"
                            onClick={() => saveSection(section.id)}
                            className="gap-1"
                          >
                            <Save className="h-3 w-3" />
                            Save
                          </Button>
                        )}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Access Control Levels</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <Badge>Public</Badge>
            <span>Anyone can access (no authentication required)</span>
          </div>
          <div className="flex items-center gap-2">
            <Badge>Viewer+</Badge>
            <span>Requires Viewer role or higher</span>
          </div>
          <div className="flex items-center gap-2">
            <Badge>Editor+</Badge>
            <span>Requires Editor role or higher</span>
          </div>
          <div className="flex items-center gap-2">
            <Badge>Admin+</Badge>
            <span>Requires Admin role or higher</span>
          </div>
          <div className="flex items-center gap-2">
            <Badge>Super Admin</Badge>
            <span>Only Super Admins can access</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminSiteSections;
