import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { RESOURCE_KINDS, ResourceKind } from "@/lib/resources";
import { cn } from "@/lib/utils";

interface Props {
  query: string;
  onQueryChange: (v: string) => void;
  activeFilter: ResourceKind | "all";
  onFilterChange: (f: ResourceKind | "all") => void;
}

const ResourceToolbar = ({ query, onQueryChange, activeFilter, onFilterChange }: Props) => {
  const filters: { value: ResourceKind | "all"; label: string }[] = [
    { value: "all", label: "All" },
    ...RESOURCE_KINDS,
  ];
  return (
    <div className="sticky top-14 z-30 bg-background/80 backdrop-blur-xl border-b border-border/40 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-4">
      <div className="flex flex-col md:flex-row md:items-center gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            placeholder="Search resources…"
            className="pl-9 h-10 bg-card border-border/60"
          />
        </div>
        <div className="flex gap-5 overflow-x-auto -mx-1 px-1 scrollbar-none">
          {filters.map((f) => {
            const active = activeFilter === f.value;
            return (
              <button
                key={f.value}
                onClick={() => onFilterChange(f.value)}
                className={cn(
                  "relative whitespace-nowrap text-sm font-medium pb-1 transition-colors",
                  active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                )}
              >
                {f.label}
                <span
                  className={cn(
                    "absolute left-0 right-0 -bottom-0.5 h-0.5 rounded-full bg-primary origin-left transition-transform duration-300",
                    active ? "scale-x-100" : "scale-x-0"
                  )}
                />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ResourceToolbar;
