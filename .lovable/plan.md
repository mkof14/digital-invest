## Goal
Convert the hardcoded 1inow project page (and establish a reusable system for all future projects) to pull rich content from the database/API instead of embedding it in JSX. Legacy projects without DB sections will continue to work via fallback.

## Architecture

### 1. Database — Structured Project Sections
Add two JSONB columns to the existing `projects` table:
- `sections` — ordered array of rich content sections (hero, principles, cards, CTA, etc.)
- `brand` — scoped brand tokens (colors, fonts) so each project can have its own visual identity

A new `project_sections` type will be defined in TypeScript with these section kinds:
- `hero` — logo, tagline, description, primary/secondary buttons
- `section_nav` — sticky anchor navigation bar
- `text` — heading + paragraph (Overview, Promise, etc.)
- `principles` — grid of icon cards with title + description
- `negatives` — "What it is not" list
- `two_column_tags` — two side-by-side cards with tag pills
- `checklist` — checkmark list items
- `cards` — generic card grid (Privacy, Communication, etc.)
- `concept_strip` — icon + label grid
- `cta` — call-to-action box with buttons
- `investment_highlights`, `why_now`, `revenue_model`, `roadmap` — existing generic sections reused

### 2. Template System — `ProjectRichTemplate.tsx`
Create a new component `src/components/ProjectRichTemplate.tsx` that:
- Receives a `project` object with `brand` and `sections`
- Renders each section via a switch on `section.type`
- Applies brand colors inline (no hardcoded hex in the template)
- Supports the existing sticky section-nav with IntersectionObserver
- Uses the existing `OptimizedImage`, `Button`, `Card`, `Badge` components
- Reuses the existing `DownloadInvestorBriefButton`, `InvestorPageDisclaimer`, `InterestForm`

### 3. Refactor `ProjectDetail.tsx`
Make `ProjectDetail` a router component:
- Fetch project from Supabase (including the new `sections` and `brand` columns)
- If `sections` is present and non-empty → render `<ProjectRichTemplate project={...} />`
- If `sections` is absent/empty → render the current generic layout (Investment Highlights, Why Now, Roadmap, Risks, Sidebar) exactly as today

This ensures zero breakage for legacy projects.

### 4. Migrate 1inow Content to DB
Create a SQL migration that:
- Adds `sections` and `brand` columns
- Populates the `1inow` row with its full hardcoded content encoded as JSONB, including:
  - Brand colors (navy `#0D1A1F`, sage `#7FA88E`, etc.)
  - All 10+ sections (Hero, Overview, Principles, What It Is Not, Two Layers, Intelligence, Privacy, Concept, Promise, CTA)
  - Icon names mapped from Lucide (stored as strings, resolved at render time)
  - Navigation sections for the sticky nav

### 5. Routing Update — Remove Hardcoded 1inow Route
In `App.tsx`:
- Delete the explicit `<Route path="/projects/1inow" element={<OneInow />} />`
- The existing `/projects/:slug` catch-all will now serve 1inow from the database

### 6. Admin Panel — Section Editor
Update `AdminProjects.tsx` (or add a new tab) so admins can:
- View and edit the `sections` JSONB via a structured form (not raw JSON)
- Add/remove/reorder sections
- Pick section type from a dropdown
- Edit section-specific fields (title, content, items, icon name, etc.)
- Preview brand colors

## Implementation Order
1. Migration — add columns + seed 1inow data
2. `ProjectRichTemplate.tsx` — build the section renderer
3. `ProjectDetail.tsx` — add the `sections` branch + fallback
4. `App.tsx` — remove `/projects/1inow` route
5. Type definitions — update `src/integrations/supabase/types.ts` (or local types) to include `sections` and `brand`
6. Admin — add sections editor

## Files Affected
- `supabase/migrations/...sql`
- `src/components/ProjectRichTemplate.tsx` (new)
- `src/pages/ProjectDetail.tsx`
- `src/App.tsx`
- `src/integrations/supabase/types.ts`
- `src/pages/Admin/AdminProjects.tsx`
- `src/pages/Projects/OneInow.tsx` (can be deleted after migration)