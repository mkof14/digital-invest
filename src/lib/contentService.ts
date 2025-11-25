import { supabase } from '@/integrations/supabase/client';

export interface ContentBlock {
  id: string;
  key: string;
  section: string;
  title: string;
  description: string | null;
  content: string;
  min_role_to_edit: string;
  is_locked: boolean;
  updated_at: string;
  updated_by_user_id: string | null;
  created_at: string;
}

/**
 * Fetch a single content block by key
 */
export async function getContentBlock(key: string): Promise<ContentBlock | null> {
  const { data, error } = await supabase
    .from('content_blocks')
    .select('*')
    .eq('key', key)
    .maybeSingle();

  if (error) {
    console.error('Error fetching content block:', error);
    return null;
  }

  return data;
}

/**
 * Fetch all content blocks for a specific section
 */
export async function getContentBlocksBySection(section: string): Promise<ContentBlock[]> {
  const { data, error } = await supabase
    .from('content_blocks')
    .select('*')
    .eq('section', section)
    .order('key');

  if (error) {
    console.error('Error fetching content blocks by section:', error);
    return [];
  }

  return data || [];
}

/**
 * Fetch all content blocks grouped by section
 */
export async function getAllContentBlocks(): Promise<ContentBlock[]> {
  const { data, error } = await supabase
    .from('content_blocks')
    .select('*')
    .order('section')
    .order('key');

  if (error) {
    console.error('Error fetching all content blocks:', error);
    return [];
  }

  return data || [];
}

/**
 * Update a content block
 */
export async function updateContentBlock(
  id: string,
  content: string,
  userId: string | null
): Promise<{ success: boolean; error?: string }> {
  const { error } = await supabase
    .from('content_blocks')
    .update({
      content,
      updated_by_user_id: userId,
      updated_at: new Date().toISOString(),
    })
    .eq('id', id);

  if (error) {
    console.error('Error updating content block:', error);
    return { success: false, error: error.message };
  }

  return { success: true };
}

/**
 * Render a content block with fallback
 * Returns the block's content if available, otherwise returns the fallback
 */
export function renderContentBlock(block: ContentBlock | null, fallback: string): string {
  if (block && block.content) {
    return block.content;
  }
  return fallback;
}

/**
 * Get list of all unique sections
 */
export async function getAllSections(): Promise<string[]> {
  const { data, error } = await supabase
    .from('content_blocks')
    .select('section')
    .order('section');

  if (error) {
    console.error('Error fetching sections:', error);
    return [];
  }

  // Get unique sections
  const sections = Array.from(new Set(data?.map((item) => item.section) || []));
  return sections;
}
