
REVOKE EXECUTE ON FUNCTION public.increment_social_click(uuid) FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.increment_social_click(uuid) TO service_role;

REVOKE EXECUTE ON FUNCTION public.get_user_role(uuid) FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.get_user_role(uuid) TO service_role;

-- Trigger helper doesn't need to be SECURITY DEFINER
ALTER FUNCTION public.update_updated_at_column() SECURITY INVOKER;
REVOKE EXECUTE ON FUNCTION public.update_updated_at_column() FROM PUBLIC, anon, authenticated;
