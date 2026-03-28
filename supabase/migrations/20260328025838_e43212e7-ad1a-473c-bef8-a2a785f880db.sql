
-- 1. Fix site_sections SELECT policy to respect min_role_to_view
DROP POLICY IF EXISTS "Anyone can view site sections" ON site_sections;
CREATE POLICY "Public can view public site sections"
  ON site_sections FOR SELECT TO anon
  USING (min_role_to_view = 'PUBLIC');

CREATE POLICY "Authenticated can view site sections by role"
  ON site_sections FOR SELECT TO authenticated
  USING (
    min_role_to_view = 'PUBLIC'
    OR has_role_level(auth.uid(), min_role_to_view::app_role)
  );

-- 2. Add unique constraint on user_roles(user_id) to prevent race conditions
ALTER TABLE user_roles ADD CONSTRAINT user_roles_user_id_unique UNIQUE (user_id);
