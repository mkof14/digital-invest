import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? ''
    );

    const { socialMediaId } = await req.json();

    if (!socialMediaId) {
      return new Response(
        JSON.stringify({ error: 'socialMediaId is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Get referrer and user agent from headers
    const referrer = req.headers.get('referer') || null;
    const userAgent = req.headers.get('user-agent') || null;

    // Insert click record
    const { error: clickError } = await supabase
      .from('social_media_clicks')
      .insert({
        social_media_id: socialMediaId,
        referrer,
        user_agent,
      });

    if (clickError) throw clickError;

    // Update click count and last clicked timestamp
    const { error: updateError } = await supabase.rpc('increment_social_click', {
      social_id: socialMediaId
    });

    if (updateError) {
      // If function doesn't exist, use direct update
      await supabase
        .from('social_media_links')
        .update({
          click_count: supabase.raw('click_count + 1'),
          last_clicked_at: new Date().toISOString(),
        })
        .eq('id', socialMediaId);
    }

    return new Response(
      JSON.stringify({ success: true }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});