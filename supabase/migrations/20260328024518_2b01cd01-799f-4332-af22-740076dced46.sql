
-- Fix RLS policies: replace overly permissive auth.uid() IS NOT NULL with role-gated checks

-- ============ PROJECTS ============
DROP POLICY IF EXISTS "Authenticated users can manage projects" ON projects;
CREATE POLICY "Editors can manage projects"
  ON projects FOR ALL TO authenticated
  USING (has_role_level(auth.uid(), 'EDITOR'::app_role))
  WITH CHECK (has_role_level(auth.uid(), 'EDITOR'::app_role));

-- ============ TEAM_MEMBERS ============
DROP POLICY IF EXISTS "Authenticated users can manage team members" ON team_members;
CREATE POLICY "Editors can manage team members"
  ON team_members FOR ALL TO authenticated
  USING (has_role_level(auth.uid(), 'EDITOR'::app_role))
  WITH CHECK (has_role_level(auth.uid(), 'EDITOR'::app_role));

-- ============ NEWS_POSTS ============
DROP POLICY IF EXISTS "Authenticated users can manage news" ON news_posts;
CREATE POLICY "Editors can manage news"
  ON news_posts FOR ALL TO authenticated
  USING (has_role_level(auth.uid(), 'EDITOR'::app_role))
  WITH CHECK (has_role_level(auth.uid(), 'EDITOR'::app_role));

-- ============ PROJECT_UPDATES ============
DROP POLICY IF EXISTS "Authenticated users can manage project updates" ON project_updates;
CREATE POLICY "Editors can manage project updates"
  ON project_updates FOR ALL TO authenticated
  USING (has_role_level(auth.uid(), 'EDITOR'::app_role))
  WITH CHECK (has_role_level(auth.uid(), 'EDITOR'::app_role));

-- ============ INVESTOR_LEADS ============
-- Fix SELECT: restrict to EDITOR+
DROP POLICY IF EXISTS "Authenticated users can view investor leads" ON investor_leads;
CREATE POLICY "Editors can view investor leads"
  ON investor_leads FOR SELECT TO authenticated
  USING (has_role_level(auth.uid(), 'EDITOR'::app_role));

-- Fix UPDATE: restrict to EDITOR+
DROP POLICY IF EXISTS "Authenticated users can update investor leads" ON investor_leads;
CREATE POLICY "Editors can update investor leads"
  ON investor_leads FOR UPDATE TO authenticated
  USING (has_role_level(auth.uid(), 'EDITOR'::app_role))
  WITH CHECK (has_role_level(auth.uid(), 'EDITOR'::app_role));

-- ============ CONSULTATION_BOOKINGS ============
-- Fix SELECT: restrict to EDITOR+
DROP POLICY IF EXISTS "Authenticated users can view consultation bookings" ON consultation_bookings;
CREATE POLICY "Editors can view consultation bookings"
  ON consultation_bookings FOR SELECT TO authenticated
  USING (has_role_level(auth.uid(), 'EDITOR'::app_role));
