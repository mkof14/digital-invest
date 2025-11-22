interface MarkdownContentProps {
  content: string;
  className?: string;
}

/**
 * Simple Markdown renderer component
 * Renders basic Markdown formatting: headings, paragraphs, lists, bold, italic, links
 */
export function MarkdownContent({ content, className = '' }: MarkdownContentProps) {
  // Simple Markdown to HTML conversion
  const renderMarkdown = (text: string): string => {
    let html = text;

    // Headers
    html = html.replace(/^### (.*$)/gim, '<h3 class="text-xl font-semibold mt-6 mb-3">$1</h3>');
    html = html.replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold mt-8 mb-4">$1</h2>');
    html = html.replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold mt-8 mb-4">$1</h1>');

    // Bold
    html = html.replace(/\*\*(.*?)\*\*/gim, '<strong class="font-semibold">$1</strong>');

    // Italic
    html = html.replace(/\*(.*?)\*/gim, '<em class="italic">$1</em>');

    // Links
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/gim, '<a href="$2" class="text-primary hover:underline" target="_blank" rel="noopener noreferrer">$1</a>');

    // Unordered lists
    html = html.replace(/^\- (.*$)/gim, '<li class="ml-4">$1</li>');
    html = html.replace(/(<li.*<\/li>)/s, '<ul class="list-disc space-y-2 my-4">$1</ul>');

    // Paragraphs (split by double newline)
    const paragraphs = html.split('\n\n');
    html = paragraphs
      .map((para) => {
        // Don't wrap if already wrapped in a tag
        if (para.trim().startsWith('<')) {
          return para;
        }
        // Replace single newlines within paragraphs with <br>
        const withBreaks = para.replace(/\n/g, '<br>');
        return `<p class="mb-4">${withBreaks}</p>`;
      })
      .join('\n');

    return html;
  };

  return (
    <div
      className={`prose prose-slate dark:prose-invert max-w-none ${className}`}
      dangerouslySetInnerHTML={{ __html: renderMarkdown(content) }}
    />
  );
}
