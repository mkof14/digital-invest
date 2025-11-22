import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, ExternalLink, FileText, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';

const AdminSitemap = () => {
  const [copied, setCopied] = useState(false);

  const sitemapUrl = `${window.location.origin}/sitemap.xml`;

  const handleCopySitemapUrl = () => {
    navigator.clipboard.writeText(sitemapUrl);
    setCopied(true);
    toast.success('Sitemap URL copied to clipboard');
    setTimeout(() => setCopied(false), 2000);
  };

  const handleOpenSitemap = () => {
    window.open('/sitemap.xml', '_blank');
  };

  const googleSearchConsoleUrl = 'https://search.google.com/search-console/sitemaps';
  const bingWebmasterUrl = 'https://www.bing.com/webmasters/sitemaps';

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Sitemap Management</h1>
        <p className="text-muted-foreground">
          Manage and submit your sitemap to search engines
        </p>
      </div>

      {/* Sitemap Status */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-green-600" />
            Sitemap Active
          </CardTitle>
          <CardDescription>
            Your sitemap.xml file is available and contains all public pages
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-3">
            <code className="flex-1 px-3 py-2 bg-muted rounded text-sm">
              {sitemapUrl}
            </code>
            <Button variant="outline" size="sm" onClick={handleCopySitemapUrl}>
              {copied ? 'Copied!' : 'Copy URL'}
            </Button>
            <Button variant="outline" size="sm" onClick={handleOpenSitemap}>
              <ExternalLink className="h-4 w-4 mr-2" />
              View
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Submit to Search Engines */}
      <Card>
        <CardHeader>
          <CardTitle>Submit to Search Engines</CardTitle>
          <CardDescription>
            Submit your sitemap to Google and Bing for better indexing
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center gap-3">
                <FileText className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="font-medium">Google Search Console</p>
                  <p className="text-sm text-muted-foreground">
                    Submit to Google for search indexing
                  </p>
                </div>
              </div>
              <Button
                variant="outline"
                onClick={() => window.open(googleSearchConsoleUrl, '_blank')}
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Submit to Google
              </Button>
            </div>

            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center gap-3">
                <FileText className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="font-medium">Bing Webmaster Tools</p>
                  <p className="text-sm text-muted-foreground">
                    Submit to Bing for search indexing
                  </p>
                </div>
              </div>
              <Button
                variant="outline"
                onClick={() => window.open(bingWebmasterUrl, '_blank')}
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Submit to Bing
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Sitemap Instructions */}
      <Card>
        <CardHeader>
          <CardTitle>Sitemap Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <h3 className="font-medium">What's Included:</h3>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>Homepage and main pages</li>
              <li>All project pages</li>
              <li>Investment resources pages</li>
              <li>Company and legal pages</li>
              <li>News and blog posts</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="font-medium">How to Submit:</h3>
            <ol className="list-decimal list-inside text-sm text-muted-foreground space-y-1">
              <li>Click "Submit to Google" or "Submit to Bing" above</li>
              <li>Sign in to your Search Console / Webmaster Tools account</li>
              <li>Add your property (digitalinvest.com) if not already added</li>
              <li>Navigate to Sitemaps section</li>
              <li>Paste the sitemap URL and submit</li>
            </ol>
          </div>

          <div className="p-4 bg-muted rounded-lg">
            <p className="text-sm text-muted-foreground">
              <strong>Note:</strong> Sitemap submission helps search engines discover and index
              your pages more efficiently. It may take a few days for search engines to process
              your sitemap after submission.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* robots.txt Info */}
      <Card>
        <CardHeader>
          <CardTitle>robots.txt</CardTitle>
          <CardDescription>
            Your robots.txt file directs search engine crawlers
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-3">
            <code className="flex-1 px-3 py-2 bg-muted rounded text-sm">
              {window.location.origin}/robots.txt
            </code>
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open('/robots.txt', '_blank')}
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              View
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminSitemap;
