
-- Fix SECURITY DEFINER view: set it to SECURITY INVOKER instead
ALTER VIEW public.public_team_members SET (security_invoker = on);
