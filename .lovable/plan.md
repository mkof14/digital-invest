

## Plan: Add Global React Error Boundary

### Problem
The app crashes with a blank white screen on runtime errors (like the current `dispatcher.useEffect` issue). Users see nothing and have no way to recover.

### Solution
Add an Error Boundary component that catches React render errors, shows a friendly fallback UI, and logs the error. Also wrap the app root so future crashes are recoverable with a "Try Again" button.

### Changes

**1. Create `src/components/ErrorBoundary.tsx`**
- Class component (Error Boundaries require class components in React)
- `componentDidCatch` logs errors to console with timestamp and component stack
- Fallback UI: centered card with error icon, "Something went wrong" message, and a "Reload" button that calls `window.location.reload()`
- Styled with Tailwind, works in both light/dark themes
- Shows error details in a collapsible section (dev-friendly)

**2. Update `src/main.tsx`**
- Wrap `<App />` with `<ErrorBoundary>` at the root level
- This catches errors even before React Query or Router initialize

```text
Before:                    After:
createRoot(root).render(   createRoot(root).render(
  <App />                    <ErrorBoundary>
)                              <App />
                             </ErrorBoundary>
                           )
```

### Technical Notes
- Error Boundary must be a class component (React limitation -- hooks can't catch render errors)
- Placed outside `<App>` so it catches errors in QueryClientProvider, Router, etc.
- The fallback UI uses inline styles as a safety net (in case Tailwind CSS itself fails to load)

