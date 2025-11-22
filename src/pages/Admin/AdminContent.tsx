import { useState, useEffect } from 'react';
import { useUserRole } from '@/hooks/useUserRole';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Loader2, Lock, Shield, Save, X, FileText } from 'lucide-react';
import { toast } from 'sonner';
import {
  ContentBlock,
  getAllContentBlocks,
  updateContentBlock,
  getAllSections,
} from '@/lib/contentService';
import { supabase } from '@/integrations/supabase/client';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';

const SECTION_DISPLAY_NAMES: Record<string, string> = {
  about: 'About',
  compliance: 'Compliance & Legal',
  risk: 'Risk Factors',
  security: 'Security',
  governance: 'Governance',
  esg: 'ESG',
  values: 'Values',
  careers: 'Careers',
  press: 'Press Center',
  mediaKit: 'Media Kit',
  investorDocuments: 'Investor Documents',
  investorHandbook: 'Investor Handbook',
  developerApi: 'Developer & API',
  infrastructure: 'Technology & Infrastructure',
  internalDocs: 'Internal Documents',
};

export default function AdminContent() {
  const { role, isLoading: roleLoading } = useUserRole();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [contentBlocks, setContentBlocks] = useState<ContentBlock[]>([]);
  const [sections, setSections] = useState<string[]>([]);
  const [selectedSection, setSelectedSection] = useState<string | null>(null);
  const [selectedBlock, setSelectedBlock] = useState<ContentBlock | null>(null);
  const [editContent, setEditContent] = useState('');
  const [editDialogOpen, setEditDialogOpen] = useState(false);

  useEffect(() => {
    if (!roleLoading && role) {
      fetchData();
    }
  }, [roleLoading, role]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const [blocksData, sectionsData] = await Promise.all([
        getAllContentBlocks(),
        getAllSections(),
      ]);
      setContentBlocks(blocksData);
      setSections(sectionsData);
      if (sectionsData.length > 0 && !selectedSection) {
        setSelectedSection(sectionsData[0]);
      }
    } catch (error) {
      console.error('Error fetching content:', error);
      toast.error('Failed to load content blocks');
    } finally {
      setLoading(false);
    }
  };

  const handleEditClick = (block: ContentBlock) => {
    setSelectedBlock(block);
    setEditContent(block.content);
    setEditDialogOpen(true);
  };

  const handleSave = async () => {
    if (!selectedBlock) return;

    // Check permissions
    if (!canEditBlock(selectedBlock)) {
      toast.error('You do not have permission to edit this content block');
      return;
    }

    setSaving(true);
    try {
      const { data: { user } } = await supabase.auth.getUser();
      const result = await updateContentBlock(
        selectedBlock.id,
        editContent,
        user?.id || null
      );

      if (result.success) {
        toast.success('Content block updated successfully');
        setEditDialogOpen(false);
        fetchData(); // Refresh data
      } else {
        toast.error(result.error || 'Failed to update content block');
      }
    } catch (error) {
      console.error('Error saving content:', error);
      toast.error('An error occurred while saving');
    } finally {
      setSaving(false);
    }
  };

  const canEditBlock = (block: ContentBlock): boolean => {
    if (!role) return false;

    // Super admin can edit everything
    if (role === 'SUPER_ADMIN') return true;

    // If block is locked, only super admin can edit
    if (block.is_locked) return false;

    // Check role level
    const roleOrder: Record<string, number> = {
      VIEWER: 1,
      EDITOR: 2,
      ADMIN: 3,
      SUPER_ADMIN: 4,
    };

    const userRoleLevel = roleOrder[role] || 0;
    const requiredRoleLevel = roleOrder[block.min_role_to_edit] || 0;

    return userRoleLevel >= requiredRoleLevel;
  };

  const getPermissionBadge = (block: ContentBlock) => {
    if (block.is_locked) {
      return (
        <Badge variant="destructive" className="gap-1">
          <Lock className="h-3 w-3" />
          Locked
        </Badge>
      );
    }
    if (block.min_role_to_edit === 'ADMIN') {
      return (
        <Badge variant="secondary" className="gap-1">
          <Shield className="h-3 w-3" />
          Admin+
        </Badge>
      );
    }
    return null;
  };

  const filteredBlocks = selectedSection
    ? contentBlocks.filter((block) => block.section === selectedSection)
    : [];

  const isComplianceSection = ['compliance', 'risk', 'security', 'governance'].includes(
    selectedSection || ''
  );

  if (roleLoading || loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (!role || role === 'VIEWER') {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Access Denied</CardTitle>
          <CardDescription>
            You need at least EDITOR role to access the Content Manager.
          </CardDescription>
        </CardHeader>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Content Manager</h1>
        <p className="text-muted-foreground mt-2">
          Edit the main text content for Digital Invest Inc. pages.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Sidebar - Sections */}
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle className="text-lg">Sections</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {sections.map((section) => (
              <Button
                key={section}
                variant={selectedSection === section ? 'default' : 'ghost'}
                className="w-full justify-start"
                onClick={() => setSelectedSection(section)}
              >
                {SECTION_DISPLAY_NAMES[section] || section}
              </Button>
            ))}
          </CardContent>
        </Card>

        {/* Main area - Content blocks list */}
        <div className="md:col-span-3 space-y-4">
          {selectedSection && (
            <>
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold">
                  {SECTION_DISPLAY_NAMES[selectedSection] || selectedSection}
                </h2>
                {isComplianceSection && (
                  <Badge variant="secondary" className="gap-1">
                    <Shield className="h-3 w-3" />
                    Compliance / Legal
                  </Badge>
                )}
              </div>

              {filteredBlocks.length === 0 ? (
                <Card>
                  <CardContent className="py-8 text-center text-muted-foreground">
                    No content blocks in this section.
                  </CardContent>
                </Card>
              ) : (
                <div className="space-y-3">
                  {filteredBlocks.map((block) => {
                    const canEdit = canEditBlock(block);
                    return (
                      <Card key={block.id}>
                        <CardHeader>
                          <div className="flex items-start justify-between">
                            <div className="space-y-1">
                              <CardTitle className="text-lg">{block.title}</CardTitle>
                              <CardDescription>
                                <code className="text-xs bg-muted px-2 py-1 rounded">
                                  {block.key}
                                </code>
                              </CardDescription>
                              {block.description && (
                                <p className="text-sm text-muted-foreground mt-2">
                                  {block.description}
                                </p>
                              )}
                            </div>
                            <div className="flex items-center gap-2">
                              {getPermissionBadge(block)}
                              <Button
                                size="sm"
                                onClick={() => handleEditClick(block)}
                                disabled={!canEdit}
                              >
                                <FileText className="h-4 w-4 mr-2" />
                                {canEdit ? 'Edit' : 'View'}
                              </Button>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="text-sm text-muted-foreground space-y-1">
                            <p>
                              Last updated:{' '}
                              {new Date(block.updated_at).toLocaleDateString()}
                            </p>
                            {!canEdit && (
                              <p className="text-orange-600">
                                {block.is_locked
                                  ? 'Locked: Only SUPER_ADMIN can edit'
                                  : `Requires ${block.min_role_to_edit} role to edit`}
                              </p>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {/* Edit Dialog */}
      <Dialog open={editDialogOpen} onOpenChange={setEditDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh]">
          <DialogHeader>
            <DialogTitle>{selectedBlock?.title}</DialogTitle>
            <DialogDescription>
              <code className="text-xs bg-muted px-2 py-1 rounded">
                {selectedBlock?.key}
              </code>
            </DialogDescription>
          </DialogHeader>

          <ScrollArea className="h-[60vh] pr-4">
            <div className="space-y-4">
              {selectedBlock?.description && (
                <p className="text-sm text-muted-foreground">
                  {selectedBlock.description}
                </p>
              )}

              <div className="space-y-2">
                <label className="text-sm font-medium">Content (Markdown)</label>
                <Textarea
                  value={editContent}
                  onChange={(e) => setEditContent(e.target.value)}
                  className="min-h-[300px] font-mono text-sm"
                  disabled={!canEditBlock(selectedBlock!)}
                />
              </div>

              {selectedBlock && !canEditBlock(selectedBlock) && (
                <div className="p-4 bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-md">
                  <p className="text-sm text-orange-800 dark:text-orange-200">
                    {selectedBlock.is_locked
                      ? '🔒 This content block is locked. Only SUPER_ADMIN can edit it.'
                      : `⚠️ You need ${selectedBlock.min_role_to_edit} role to edit this content block.`}
                  </p>
                </div>
              )}

              <div className="space-y-1 text-sm text-muted-foreground">
                <p>Minimum role to edit: {selectedBlock?.min_role_to_edit}</p>
                <p>Locked: {selectedBlock?.is_locked ? 'Yes' : 'No'}</p>
                <p>
                  Last updated:{' '}
                  {selectedBlock
                    ? new Date(selectedBlock.updated_at).toLocaleString()
                    : ''}
                </p>
              </div>
            </div>
          </ScrollArea>

          <div className="flex justify-end gap-2 pt-4 border-t">
            <Button variant="outline" onClick={() => setEditDialogOpen(false)}>
              <X className="h-4 w-4 mr-2" />
              Cancel
            </Button>
            {selectedBlock && canEditBlock(selectedBlock) && (
              <Button onClick={handleSave} disabled={saving}>
                {saving ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Saving...
                  </>
                ) : (
                  <>
                    <Save className="h-4 w-4 mr-2" />
                    Save Changes
                  </>
                )}
              </Button>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
