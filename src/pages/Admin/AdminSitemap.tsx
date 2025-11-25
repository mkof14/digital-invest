import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Download, ExternalLink, FileText, CheckCircle2, AlertCircle, Activity } from 'lucide-react';
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
        <h1 className="text-3xl font-bold mb-2">SEO & Analytics</h1>
        <p className="text-muted-foreground">
          Manage sitemaps, analytics, and search engine optimization
        </p>
      </div>

      {/* Analytics & Tracking Status */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="h-5 w-5" />
            Analytics & Tracking Status
          </CardTitle>
          <CardDescription>
            Monitor your analytics and tracking tools setup
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-3">
            {/* Google Analytics 4 */}
            <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-success/10 rounded-full">
                  <CheckCircle2 className="h-4 w-4 text-success" />
                </div>
                <div>
                  <p className="font-medium">Google Analytics 4</p>
                  <p className="text-xs text-muted-foreground">ID: G-75E86NT2XC</p>
                </div>
              </div>
              <Badge variant="outline" className="bg-success/10 text-success border-success/20">
                Active
              </Badge>
            </div>

            {/* Microsoft Clarity */}
            <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-warning/10 rounded-full">
                  <AlertCircle className="h-4 w-4 text-warning" />
                </div>
                <div>
                  <p className="font-medium">Microsoft Clarity</p>
                  <p className="text-xs text-muted-foreground">Heat maps & Session recordings</p>
                </div>
              </div>
              <Badge variant="outline" className="bg-warning/10 text-warning border-warning/20">
                Setup Required
              </Badge>
            </div>
          </div>

          <Separator />

          <div className="p-4 bg-blue-500/5 border border-blue-500/20 rounded-lg space-y-2">
            <div className="flex items-start gap-2">
              <AlertCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
              <div className="space-y-2">
                <p className="text-sm font-medium text-blue-500">Setup Microsoft Clarity</p>
                <p className="text-xs text-muted-foreground">
                  To enable heat maps and session recordings, visit the Clarity dashboard,
                  create a project, and replace <code className="px-1 py-0.5 bg-muted rounded text-[10px]">YOUR_CLARITY_PROJECT_ID</code> in <code className="px-1 py-0.5 bg-muted rounded text-[10px]">index.html</code>.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open('https://clarity.microsoft.com/', '_blank')}
                  className="mt-2"
                >
                  <ExternalLink className="h-3 w-3 mr-2" />
                  Open Microsoft Clarity
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

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

      {/* Google Search Console Submission */}
      <Card>
        <CardHeader>
          <CardTitle>Google Search Console Submission</CardTitle>
          <CardDescription>
            Step-by-step guide to submit your sitemap to Google
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="p-4 bg-muted rounded-lg space-y-3">
              <h4 className="font-semibold">Step 1: Add Property</h4>
              <p className="text-sm text-muted-foreground">
                Go to Google Search Console and add your domain as a property
              </p>
              <Button
                variant="outline"
                onClick={() => window.open('https://search.google.com/search-console/welcome', '_blank')}
                className="w-full"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Open Google Search Console
              </Button>
            </div>

            <div className="p-4 bg-muted rounded-lg space-y-3">
              <h4 className="font-semibold">Step 2: Verify Ownership</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Use the HTML meta tag method (already added to your site):
              </p>
              <code className="block px-3 py-2 bg-background rounded text-xs overflow-x-auto">
                {`<meta name="google-site-verification" content="YOUR_CODE" />`}
              </code>
              <p className="text-xs text-muted-foreground mt-2">
                Replace YOUR_CODE with the verification code from Google Search Console
              </p>
            </div>

            <div className="p-4 bg-muted rounded-lg space-y-3">
              <h4 className="font-semibold">Step 3: Submit Sitemap</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Navigate to Sitemaps section and paste this URL:
              </p>
              <div className="flex gap-2">
                <code className="flex-1 px-3 py-2 bg-background rounded text-sm">
                  {sitemapUrl}
                </code>
                <Button variant="outline" size="sm" onClick={handleCopySitemapUrl}>
                  {copied ? 'Copied!' : 'Copy'}
                </Button>
              </div>
              <Button
                variant="outline"
                onClick={() => window.open(googleSearchConsoleUrl, '_blank')}
                className="w-full mt-2"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Go to Sitemaps Section
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Bing Webmaster Tools Submission */}
      <Card>
        <CardHeader>
          <CardTitle>Bing Webmaster Tools Submission</CardTitle>
          <CardDescription>
            Step-by-step guide to submit your sitemap to Bing
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="p-4 bg-muted rounded-lg space-y-3">
              <h4 className="font-semibold">Step 1: Add Your Site</h4>
              <p className="text-sm text-muted-foreground">
                Sign in with your Microsoft account and add digitalinvest.com
              </p>
              <Button
                variant="outline"
                onClick={() => window.open('https://www.bing.com/webmasters/about', '_blank')}
                className="w-full"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Open Bing Webmaster Tools
              </Button>
            </div>

            <div className="p-4 bg-muted rounded-lg space-y-3">
              <h4 className="font-semibold">Step 2: Verify Ownership</h4>
              <p className="text-sm text-muted-foreground">
                Options: Import from Google Search Console OR use XML file method
              </p>
            </div>

            <div className="p-4 bg-muted rounded-lg space-y-3">
              <h4 className="font-semibold">Step 3: Submit Sitemap</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Go to Configure My Site → Sitemaps and paste this URL:
              </p>
              <div className="flex gap-2">
                <code className="flex-1 px-3 py-2 bg-background rounded text-sm">
                  {sitemapUrl}
                </code>
                <Button variant="outline" size="sm" onClick={handleCopySitemapUrl}>
                  {copied ? 'Copied!' : 'Copy'}
                </Button>
              </div>
              <Button
                variant="outline"
                onClick={() => window.open(bingWebmasterUrl, '_blank')}
                className="w-full mt-2"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Go to Sitemaps Section
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Sitemap Information */}
      <Card>
        <CardHeader>
          <CardTitle>Sitemap Information</CardTitle>
          <CardDescription>What's included in your sitemap</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <h3 className="font-medium">Pages Included:</h3>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>Homepage and main pages</li>
              <li>All project pages</li>
              <li>Investment resources pages</li>
              <li>Company and legal pages</li>
              <li>News and blog posts</li>
              <li>Team and corporate pages</li>
            </ul>
          </div>

          <div className="p-4 bg-muted rounded-lg">
            <p className="text-sm text-muted-foreground">
              <strong>Note:</strong> After submission, it may take 1-7 days for search engines to 
              process your sitemap. Monitor indexing status in Google Search Console and Bing Webmaster Tools.
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
