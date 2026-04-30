import * as React from "react";
import * as ReactDomClient from "react-dom/client";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

declare const __REACT_PACKAGE_PATH__: string;
declare const __REACT_DOM_PACKAGE_PATH__: string;
declare const __REACT_QUERY_PACKAGE_PATH__: string;

type ProbeRow = {
  label: string;
  value: string;
};

const runtimeQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      staleTime: Infinity,
    },
  },
});

const readReactDispatcher = () => {
  const internals = (React as unknown as {
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED?: {
      ReactCurrentDispatcher?: { current?: unknown };
    };
  }).__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

  return internals?.ReactCurrentDispatcher?.current ?? null;
};

const formatValue = (value: unknown) => {
  if (typeof value === "string") return value;
  if (typeof value === "function") return `[function ${(value as { name?: string }).name || "anonymous"}]`;
  if (value === null) return "null";
  if (value === undefined) return "undefined";
  try {
    return JSON.stringify(value, null, 2);
  } catch {
    return String(value);
  }
};

const DiagnosticsProbe = () => {
  const { data: queryStatus } = useQuery({
    queryKey: ["diagnostics-react-query-provider"],
    queryFn: async () => "QueryClientProvider hook check passed",
  });

  const rows = useMemo<ProbeRow[]>(() => {
    const dispatcher = readReactDispatcher();
    const reactDefault = (React as unknown as { default?: unknown }).default;
    const reactWindow = (window as unknown as { React?: unknown }).React;

    return [
      { label: "React.version", value: formatValue(React.version) },
      { label: "React package path", value: __REACT_PACKAGE_PATH__ },
      { label: "React DOM package path", value: __REACT_DOM_PACKAGE_PATH__ },
      { label: "TanStack Query package path", value: __REACT_QUERY_PACKAGE_PATH__ },
      { label: "React import has useEffect", value: formatValue(typeof React.useEffect) },
      { label: "React import has createElement", value: formatValue(typeof React.createElement) },
      { label: "React default equals namespace", value: formatValue(reactDefault ? reactDefault === React : "no default export") },
      { label: "window.React equals import", value: formatValue(reactWindow ? reactWindow === React : "window.React not set") },
      { label: "Dispatcher during render", value: dispatcher ? "active" : "null" },
      { label: "React DOM createRoot", value: formatValue(typeof ReactDomClient.createRoot) },
      { label: "React Query hook probe", value: queryStatus || "pending" },
    ];
  }, [queryStatus]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Runtime module probe</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {rows.map((row) => (
          <div key={row.label} className="grid gap-1 border-b border-border pb-3 last:border-b-0 last:pb-0 md:grid-cols-[240px_1fr]">
            <dt className="text-sm font-medium text-muted-foreground">{row.label}</dt>
            <dd className="break-all font-mono text-sm text-foreground">{row.value}</dd>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

const DiagnosticsReact = () => {
  const [snapshot, setSnapshot] = useState(() => new Date().toISOString());

  return (
    <main className="min-h-screen bg-background px-4 py-10 text-foreground">
      <div className="mx-auto max-w-5xl space-y-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="space-y-2">
            <p className="text-sm font-medium text-primary">Diagnostics</p>
            <h1 className="text-3xl font-bold tracking-normal md:text-4xl">React duplicate module check</h1>
            <p className="max-w-2xl text-muted-foreground">
              Runtime verification for React, React DOM, TanStack Query, dispatcher state, and package resolution paths.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" asChild>
              <Link to="/projects/biomath-core">Back to BioMath Core</Link>
            </Button>
            <Button onClick={() => setSnapshot(new Date().toISOString())}>Refresh snapshot</Button>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Snapshot</CardTitle>
          </CardHeader>
          <CardContent>
            <dl className="grid gap-3 md:grid-cols-[240px_1fr]">
              <dt className="text-sm font-medium text-muted-foreground">Captured at</dt>
              <dd className="font-mono text-sm">{snapshot}</dd>
              <dt className="text-sm font-medium text-muted-foreground">User agent</dt>
              <dd className="break-all font-mono text-sm">{navigator.userAgent}</dd>
              <dt className="text-sm font-medium text-muted-foreground">Current URL</dt>
              <dd className="break-all font-mono text-sm">{window.location.href}</dd>
            </dl>
          </CardContent>
        </Card>

        <QueryClientProvider client={runtimeQueryClient}>
          <DiagnosticsProbe />
        </QueryClientProvider>
      </div>
    </main>
  );
};

export default DiagnosticsReact;