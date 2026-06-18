import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { applySEO } from "@/lib/routeSEO";

/**
 * Auto-updates document <head> SEO tags (title, description,
 * canonical, Open Graph and Twitter cards) on every client-side
 * navigation. Mount once inside <BrowserRouter>.
 *
 * Per-page pages that need richer SEO (e.g. project detail with
 * dynamic title from DB) can still call updateMetaTags() themselves
 * — meta tags dedupe by name/property, so the later call wins.
 */
export default function RouteSEO() {
  const location = useLocation();
  useEffect(() => {
    applySEO(location.pathname);
  }, [location.pathname]);
  return null;
}
