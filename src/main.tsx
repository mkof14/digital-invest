import { createRoot } from 'react-dom/client'
import { Suspense } from 'react'
import App from './App.tsx'
import ErrorBoundary from './components/ErrorBoundary.tsx'
import './index.css'
import './i18n'

createRoot(document.getElementById("root")!).render(
  <ErrorBoundary>
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" /></div>}>
      <App />
    </Suspense>
  </ErrorBoundary>
);
