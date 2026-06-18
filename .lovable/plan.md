
# Digital Invest Intelligence Center

A premium, structured resource hub at `/resources` plus an admin manager at `/admin/resources`. All content is database-driven so the admin can add, edit, feature, publish, and reorder items without touching code.

The existing `/resources` route (currently `ResourcesLibrary`) will be replaced by the new Intelligence Center. The standalone `MediaKit`, `DocumentLibrary` routes stay, but their content is also exposed inside the hub.

---

## 1. Data model (new table)

A single `resources` table backs every section so search and filters can run against one source.

| Column | Purpose |
|---|---|
| `kind` | enum: `presentation`, `research`, `video`, `download`, `media`, `technology` |
| `category` | free text shown on the card (Technology, Healthcare, Robotics, …) |
| `title`, `description` | shown on cards and in viewer |
| `cover_url` | thumbnail (Lovable Cloud public storage) |
| `file_url` | PDF / asset link for `download`, `presentation`, `media`, `research` |
| `video_url` | external embed (YouTube / Vimeo / MP4) for `video` |
| `external_url` | optional "Open Resource" link |
| `file_type`, `file_size_bytes` | shown in the Download Center table |
| `icon` | lucide icon name for `technology` cards |
| `is_published`, `is_featured`, `sort_order` |  |

RLS: public read of `is_published = true`; admin (ADMIN+) full CRUD via the existing role system. GRANTs follow the project standard.

A new public storage bucket `resource-assets` holds covers and PDFs that should be world-readable.

---

## 2. Public pages

### `/resources` — Intelligence Center landing
- Hero: title, subtitle, four quick-link pills (Presentations / Research / Videos / Downloads) that scroll to sections.
- Sticky toolbar: instant search input (filters titles, descriptions, categories client-side) + filter pills (All · Presentations · Research · Videos · Downloads · Media · Technology) with the existing `story-link` animated underline.
- **Featured Resource** — large horizontal card above the sections, single item where `is_featured = true`.
- **Presentations** — card grid (cover, title, short description, "View Presentation").
- **Research & Publications** — editorial reading cards.
- **Video Library** — large thumbnail cards with duration badge, "Watch" opens modal player.
- **Download Center** — premium table (Document / Type / Size / Download).
- **Media Kit** — six static cards (Company Description, Executive Bio, Logos, Brand Assets, Photos, Contact) wired to existing assets/pages.
- **Technology Library** — interactive icon cards.

### `/resources/:id` — Document viewer
PDF viewer using the project's existing `PdfViewer` component (already in `src/components/presentation/PdfViewer.tsx`). Toolbar: zoom, fullscreen, download, share (copy link), previous / next (navigates within the same `kind`).

### Video modal
Lightweight shadcn `Dialog` with an `<iframe>` for YouTube/Vimeo or `<video controls>` for MP4. No autoplay.

---

## 3. Admin — `/admin/resources`
Reuses `AdminLayout`. Standard list + drawer editor pattern matching `AdminProjects` / `AdminNews`:
- Search + kind filter
- Sort by `sort_order` with up/down buttons
- Toggle `is_published` and `is_featured` inline (featured is mutually exclusive — toggling one clears others)
- Upload cover and PDF to `resource-assets` bucket via existing storage helper
- Paste external video URL
- Delete with confirm

New nav entry in `AdminLayout` sidebar: "Resources".

---

## 4. Navigation

Add `Resources` to the primary `Navigation` component (between existing items). Keep existing items untouched.

---

## 5. Performance & UX

- Page is lazy-loaded via the existing `App.tsx` lazy pattern.
- Cards use `OptimizedImage` with `loading="lazy"`.
- Search and filters operate on the already-fetched list (no extra requests).
- Tailwind utilities only — no new animation libraries.
- Respects the engagement layer's reduced-motion rules; no new global animations introduced.

---

## 6. Out of scope (per the brief)

No blog, no dates on cards, no counters, no marketing copy, no glassmorphism, no new gradients.

---

## Technical breakdown

**New files**
- `supabase` migration: `resources` table + RLS + bucket policies
- `src/pages/Resources/IntelligenceCenter.tsx` — landing
- `src/pages/Resources/ResourceViewer.tsx` — single resource viewer
- `src/pages/Resources/sections/` — `FeaturedResource.tsx`, `PresentationsGrid.tsx`, `ResearchGrid.tsx`, `VideoLibrary.tsx`, `DownloadCenter.tsx`, `MediaKitGrid.tsx`, `TechnologyLibrary.tsx`
- `src/components/resources/ResourceCard.tsx`, `VideoPlayerDialog.tsx`, `ResourceToolbar.tsx`
- `src/pages/Admin/AdminResources.tsx`
- `src/lib/resources.ts` — query helpers + types

**Edited files**
- `src/App.tsx` — replace `/resources` route, add `/resources/:id`, register admin route
- `src/components/Navigation.tsx` — add **Resources** link
- `src/pages/Admin/AdminLayout.tsx` — add sidebar item

**Storage bucket**
- `resource-assets` (public) — created via the `supabase--storage_create_bucket` tool

After your approval I'll run the migration first (it must be approved separately before the types regenerate), then ship the code in one pass.
