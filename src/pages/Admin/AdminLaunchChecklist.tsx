import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import {
  CheckCircle2,
  AlertCircle,
  Circle,
  Rocket,
  Search,
  BarChart3,
  FileText,
  Shield,
  Zap,
  Globe,
  ExternalLink,
  ChevronDown,
  ChevronRight
} from 'lucide-react';
import { cn } from '@/lib/utils';

type ChecklistStatus = 'complete' | 'partial' | 'pending';

interface ChecklistItem {
  id: string;
  title: string;
  description: string;
  status: ChecklistStatus;
  priority: 'critical' | 'high' | 'medium';
  link?: string;
}

interface ChecklistCategory {
  id: string;
  title: string;
  icon: any;
  items: ChecklistItem[];
}

const AdminLaunchChecklist = () => {
  const [expandedCategories, setExpandedCategories] = useState<string[]>([
    'seo',
    'analytics',
    'content',
    'compliance',
    'deployment',
    'performance'
  ]);

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev =>
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const checklist: ChecklistCategory[] = [
    {
      id: 'seo',
      title: 'SEO & Search Engines',
      icon: Search,
      items: [
        {
          id: 'meta-tags',
          title: 'Dynamic Meta Tags',
          description: 'Meta tags implemented for all pages (title, description, OG, Twitter)',
          status: 'complete',
          priority: 'critical'
        },
        {
          id: 'structured-data',
          title: 'Schema.org Structured Data',
          description: 'JSON-LD structured data for Organization, Projects, Articles, Breadcrumbs',
          status: 'complete',
          priority: 'high'
        },
        {
          id: 'sitemap',
          title: 'XML Sitemap Generated',
          description: 'Sitemap.xml created and accessible at /sitemap.xml',
          status: 'complete',
          priority: 'critical',
          link: '/sitemap.xml'
        },
        {
          id: 'google-console',
          title: 'Google Search Console',
          description: 'Site verified and sitemap submitted to Google Search Console',
          status: 'partial',
          priority: 'critical',
          link: '/admin/sitemap'
        },
        {
          id: 'bing-webmaster',
          title: 'Bing Webmaster Tools',
          description: 'Site verified and sitemap submitted to Bing Webmaster Tools',
          status: 'partial',
          priority: 'high',
          link: '/admin/sitemap'
        },
        {
          id: 'robots-txt',
          title: 'robots.txt Configuration',
          description: 'robots.txt file properly configured for crawlers',
          status: 'complete',
          priority: 'high',
          link: '/robots.txt'
        },
        {
          id: 'canonical-urls',
          title: 'Canonical URLs',
          description: 'Canonical tags implemented on all pages',
          status: 'complete',
          priority: 'medium'
        }
      ]
    },
    {
      id: 'analytics',
      title: 'Analytics & Tracking',
      icon: BarChart3,
      items: [
        {
          id: 'ga4',
          title: 'Google Analytics 4',
          description: 'GA4 tracking code installed (G-75E86NT2XC)',
          status: 'complete',
          priority: 'critical'
        },
        {
          id: 'clarity',
          title: 'Microsoft Clarity',
          description: 'Clarity script added for heat maps and session recordings',
          status: 'partial',
          priority: 'high',
          link: '/admin/sitemap'
        },
        {
          id: 'event-tracking',
          title: 'Event Tracking',
          description: 'Track key events: form submissions, downloads, CTA clicks',
          status: 'pending',
          priority: 'medium'
        },
        {
          id: 'conversion-goals',
          title: 'Conversion Goals',
          description: 'Define and configure conversion goals in GA4',
          status: 'pending',
          priority: 'medium'
        }
      ]
    },
    {
      id: 'content',
      title: 'Content & Pages',
      icon: FileText,
      items: [
        {
          id: 'projects-complete',
          title: 'All Projects Populated',
          description: 'All 5 projects have complete descriptions and data',
          status: 'complete',
          priority: 'critical',
          link: '/admin/projects'
        },
        {
          id: 'news-content',
          title: 'News & Insights',
          description: 'News section populated with initial content',
          status: 'complete',
          priority: 'high',
          link: '/admin/news'
        },
        {
          id: 'team-members',
          title: 'Team Members',
          description: 'Team page with complete member information',
          status: 'complete',
          priority: 'high',
          link: '/admin/team'
        },
        {
          id: 'legal-pages',
          title: 'Legal Pages Complete',
          description: 'Terms, Privacy, Risk Disclosure, Compliance pages finalized',
          status: 'complete',
          priority: 'critical'
        },
        {
          id: 'corporate-pages',
          title: 'Corporate Pages',
          description: 'About, Values, ESG, Governance, Security pages complete',
          status: 'complete',
          priority: 'high'
        },
        {
          id: 'content-review',
          title: 'Content Review',
          description: 'Final review of all content for typos and accuracy',
          status: 'pending',
          priority: 'high'
        }
      ]
    },
    {
      id: 'compliance',
      title: 'Compliance & Legal',
      icon: Shield,
      items: [
        {
          id: 'global-disclaimer',
          title: 'Global Legal Disclaimer',
          description: 'Site-wide legal disclaimer in footer',
          status: 'complete',
          priority: 'critical'
        },
        {
          id: 'investor-disclaimers',
          title: 'Investor Page Disclaimers',
          description: 'InvestorPageDisclaimer on all investment-related pages',
          status: 'complete',
          priority: 'critical'
        },
        {
          id: 'form-language',
          title: 'Form Compliance Language',
          description: 'All forms use neutral, non-binding language',
          status: 'complete',
          priority: 'critical'
        },
        {
          id: 'forbidden-terms',
          title: 'Forbidden Terms Audit',
          description: 'Verify no crowdfunding/ICO/guaranteed returns language',
          status: 'pending',
          priority: 'critical'
        },
        {
          id: 'risk-warnings',
          title: 'Risk Warnings',
          description: 'Risk disclosures on all project pages',
          status: 'complete',
          priority: 'critical'
        },
        {
          id: 'legal-review',
          title: 'Legal Review',
          description: 'Final legal review by qualified counsel',
          status: 'pending',
          priority: 'critical'
        }
      ]
    },
    {
      id: 'deployment',
      title: 'Deployment & Infrastructure',
      icon: Globe,
      items: [
        {
          id: 'env-vars',
          title: 'Environment Variables',
          description: 'All required env vars configured in production (Supabase, GA4)',
          status: 'complete',
          priority: 'critical'
        },
        {
          id: 'domain-setup',
          title: 'Custom Domain',
          description: 'digitalinvest.com domain connected and SSL configured',
          status: 'complete',
          priority: 'critical'
        },
        {
          id: 'database-backup',
          title: 'Database Backup',
          description: 'Database backup strategy configured',
          status: 'pending',
          priority: 'high'
        },
        {
          id: 'edge-functions',
          title: 'Edge Functions Deployed',
          description: 'Investor brief PDF and handbook PDF functions working',
          status: 'complete',
          priority: 'high'
        },
        {
          id: 'error-monitoring',
          title: 'Error Monitoring',
          description: 'Set up error tracking and monitoring',
          status: 'pending',
          priority: 'medium'
        },
        {
          id: 'production-testing',
          title: 'Production Testing',
          description: 'Test all critical flows on production domain',
          status: 'pending',
          priority: 'critical'
        }
      ]
    },
    {
      id: 'performance',
      title: 'Performance & Optimization',
      icon: Zap,
      items: [
        {
          id: 'image-optimization',
          title: 'Image Optimization',
          description: 'All images converted to WebP/AVIF with compression',
          status: 'complete',
          priority: 'high'
        },
        {
          id: 'lazy-loading',
          title: 'Lazy Loading',
          description: 'Images and components lazy loaded where appropriate',
          status: 'complete',
          priority: 'medium'
        },
        {
          id: 'lighthouse-score',
          title: 'Lighthouse Audit',
          description: 'Run Lighthouse audit and address critical issues',
          status: 'pending',
          priority: 'high'
        },
        {
          id: 'mobile-responsive',
          title: 'Mobile Responsiveness',
          description: 'Test all pages on mobile devices',
          status: 'pending',
          priority: 'critical'
        },
        {
          id: 'page-speed',
          title: 'Page Speed',
          description: 'Optimize page load times under 3 seconds',
          status: 'pending',
          priority: 'high'
        },
        {
          id: 'accessibility',
          title: 'Accessibility (WCAG)',
          description: 'Basic accessibility compliance (alt tags, keyboard nav)',
          status: 'pending',
          priority: 'medium'
        }
      ]
    }
  ];

  const getStatusIcon = (status: ChecklistStatus) => {
    switch (status) {
      case 'complete':
        return <CheckCircle2 className="h-5 w-5 text-success" />;
      case 'partial':
        return <AlertCircle className="h-5 w-5 text-warning" />;
      case 'pending':
        return <Circle className="h-5 w-5 text-muted-foreground" />;
    }
  };

  const getStatusBadge = (status: ChecklistStatus) => {
    switch (status) {
      case 'complete':
        return (
          <Badge variant="outline" className="bg-success/10 text-success border-success/20">
            Complete
          </Badge>
        );
      case 'partial':
        return (
          <Badge variant="outline" className="bg-warning/10 text-warning border-warning/20">
            In Progress
          </Badge>
        );
      case 'pending':
        return (
          <Badge variant="outline" className="bg-muted text-muted-foreground">
            Pending
          </Badge>
        );
    }
  };

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'critical':
        return <Badge variant="destructive" className="text-xs">Critical</Badge>;
      case 'high':
        return <Badge variant="outline" className="text-xs border-orange-500/20 bg-orange-500/10 text-orange-500">High</Badge>;
      case 'medium':
        return <Badge variant="outline" className="text-xs">Medium</Badge>;
    }
  };

  const calculateProgress = () => {
    const allItems = checklist.flatMap(cat => cat.items);
    const completeItems = allItems.filter(item => item.status === 'complete').length;
    const partialItems = allItems.filter(item => item.status === 'partial').length;
    return Math.round(((completeItems + partialItems * 0.5) / allItems.length) * 100);
  };

  const getCategoryProgress = (category: ChecklistCategory) => {
    const completeItems = category.items.filter(item => item.status === 'complete').length;
    const partialItems = category.items.filter(item => item.status === 'partial').length;
    return Math.round(((completeItems + partialItems * 0.5) / category.items.length) * 100);
  };

  const getCriticalPending = () => {
    return checklist
      .flatMap(cat => cat.items)
      .filter(item => item.priority === 'critical' && item.status !== 'complete');
  };

  const overallProgress = calculateProgress();
  const criticalPending = getCriticalPending();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Pre-Launch Checklist</h1>
        <p className="text-muted-foreground">
          Track your progress toward commercial launch readiness
        </p>
      </div>

      {/* Overall Progress */}
      <Card className="border-2 border-primary/20">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Rocket className="h-6 w-6 text-primary" />
              </div>
              <div>
                <CardTitle>Overall Launch Readiness</CardTitle>
                <CardDescription>
                  {overallProgress}% complete · {criticalPending.length} critical items remaining
                </CardDescription>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-primary">{overallProgress}%</div>
              <p className="text-xs text-muted-foreground">Ready for Launch</p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Progress value={overallProgress} className="h-3" />

          {criticalPending.length > 0 && (
            <div className="mt-6 p-4 bg-destructive/5 border border-destructive/20 rounded-lg">
              <div className="flex items-start gap-2">
                <AlertCircle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-destructive mb-2">
                    Critical Items Requiring Attention
                  </p>
                  <ul className="space-y-1">
                    {criticalPending.map(item => (
                      <li key={item.id} className="text-sm text-muted-foreground">
                        • {item.title}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Checklist Categories */}
      <div className="space-y-4">
        {checklist.map(category => {
          const CategoryIcon = category.icon;
          const isExpanded = expandedCategories.includes(category.id);
          const categoryProgress = getCategoryProgress(category);
          const completeCount = category.items.filter(item => item.status === 'complete').length;

          return (
            <Card key={category.id}>
              <CardHeader className="cursor-pointer" onClick={() => toggleCategory(category.id)}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 flex-1">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <CategoryIcon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <CardTitle className="text-lg">{category.title}</CardTitle>
                        <Badge variant="outline" className="text-xs">
                          {completeCount}/{category.items.length}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-3">
                        <Progress value={categoryProgress} className="h-2 flex-1 max-w-xs" />
                        <span className="text-sm text-muted-foreground">{categoryProgress}%</span>
                      </div>
                    </div>
                  </div>
                  {isExpanded ? (
                    <ChevronDown className="h-5 w-5 text-muted-foreground" />
                  ) : (
                    <ChevronRight className="h-5 w-5 text-muted-foreground" />
                  )}
                </div>
              </CardHeader>

              {isExpanded && (
                <CardContent className="pt-0">
                  <Separator className="mb-4" />
                  <div className="space-y-3">
                    {category.items.map(item => (
                      <div
                        key={item.id}
                        className={cn(
                          'flex items-start gap-3 p-4 rounded-lg border transition-colors',
                          item.status === 'complete'
                            ? 'bg-success/5 border-success/20'
                            : item.status === 'partial'
                            ? 'bg-warning/5 border-warning/20'
                            : 'bg-muted/30 border-border'
                        )}
                      >
                        <div className="mt-0.5">{getStatusIcon(item.status)}</div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2 mb-1">
                            <div className="flex items-center gap-2 flex-wrap">
                              <p className="font-medium text-sm">{item.title}</p>
                              {getPriorityBadge(item.priority)}
                            </div>
                            {getStatusBadge(item.status)}
                          </div>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                          {item.link && (
                            <Button
                              variant="link"
                              size="sm"
                              className="h-auto p-0 mt-2 text-xs"
                              asChild
                            >
                              {item.link.startsWith('http') ? (
                                <a href={item.link} target="_blank" rel="noopener noreferrer">
                                  <ExternalLink className="h-3 w-3 mr-1" />
                                  View Details
                                </a>
                              ) : (
                                <a href={item.link}>
                                  View Details →
                                </a>
                              )}
                            </Button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              )}
            </Card>
          );
        })}
      </div>

      {/* Launch Readiness Summary */}
      <Card className="border-2 border-primary/20 bg-primary/5">
        <CardHeader>
          <CardTitle>Launch Readiness Summary</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-background rounded-lg border border-border">
              <p className="text-sm text-muted-foreground mb-1">Complete</p>
              <p className="text-2xl font-bold text-success">
                {checklist.flatMap(c => c.items).filter(i => i.status === 'complete').length}
              </p>
            </div>
            <div className="p-4 bg-background rounded-lg border border-border">
              <p className="text-sm text-muted-foreground mb-1">In Progress</p>
              <p className="text-2xl font-bold text-warning">
                {checklist.flatMap(c => c.items).filter(i => i.status === 'partial').length}
              </p>
            </div>
            <div className="p-4 bg-background rounded-lg border border-border">
              <p className="text-sm text-muted-foreground mb-1">Pending</p>
              <p className="text-2xl font-bold text-muted-foreground">
                {checklist.flatMap(c => c.items).filter(i => i.status === 'pending').length}
              </p>
            </div>
          </div>

          {overallProgress >= 90 && criticalPending.length === 0 && (
            <div className="mt-4 p-4 bg-success/10 border border-success/20 rounded-lg">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-success" />
                <p className="font-semibold text-success">
                  🎉 All critical items complete! Ready for final review and launch.
                </p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminLaunchChecklist;
