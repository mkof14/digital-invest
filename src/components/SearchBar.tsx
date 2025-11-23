import { useState, useEffect } from "react";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

interface SearchResult {
  type: "project" | "news" | "page";
  title: string;
  url: string;
  excerpt?: string;
}

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (query.length < 2) {
      setResults([]);
      return;
    }

    const searchContent = async () => {
      const searchTerm = `%${query.toLowerCase()}%`;
      
      const [projects, news] = await Promise.all([
        supabase
          .from("projects")
          .select("slug, title, short_description")
          .or(`title.ilike.${searchTerm},short_description.ilike.${searchTerm}`)
          .eq("is_visible", true)
          .limit(5),
        supabase
          .from("news_posts")
          .select("slug, title, excerpt")
          .or(`title.ilike.${searchTerm},excerpt.ilike.${searchTerm}`)
          .eq("is_published", true)
          .limit(5)
      ]);

      const searchResults: SearchResult[] = [
        ...(projects.data || []).map(p => ({
          type: "project" as const,
          title: p.title,
          url: `/projects/${p.slug}`,
          excerpt: p.short_description
        })),
        ...(news.data || []).map(n => ({
          type: "news" as const,
          title: n.title,
          url: `/news/${n.slug}`,
          excerpt: n.excerpt
        }))
      ];

      setResults(searchResults);
    };

    const timer = setTimeout(searchContent, 300);
    return () => clearTimeout(timer);
  }, [query]);

  const handleResultClick = (url: string) => {
    navigate(url);
    setQuery("");
    setResults([]);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full max-w-md">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search projects, news..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsOpen(true)}
          className="pl-10 pr-10"
        />
        {query && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              setQuery("");
              setResults([]);
            }}
            className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7 p-0"
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>

      {isOpen && results.length > 0 && (
        <div className="absolute top-full mt-2 w-full bg-card border rounded-lg shadow-lg z-50 max-h-96 overflow-auto">
          {results.map((result, idx) => (
            <button
              key={idx}
              onClick={() => handleResultClick(result.url)}
              className="w-full text-left px-4 py-3 hover:bg-accent transition-colors border-b last:border-b-0"
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs px-2 py-1 rounded bg-primary/10 text-primary">
                  {result.type}
                </span>
                <h4 className="font-medium text-sm">{result.title}</h4>
              </div>
              {result.excerpt && (
                <p className="text-xs text-muted-foreground line-clamp-2">
                  {result.excerpt}
                </p>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
