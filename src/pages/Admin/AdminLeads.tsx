import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { Loader2, Mail, Phone, MapPin, MessageSquare, Search, Copy, Check, Clock, FileText, Calendar as CalendarIcon, AlertCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { getIntroEmailTemplate, getFollowUpWithBriefTemplate, getCheckInTemplate, emailTemplateTypes, type EmailTemplate } from '@/lib/investorEmailTemplates';
import { allTemplates, getTemplateById, type EmailTemplateId, type TemplateParams } from '@/lib/brandedEmailTemplates';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

interface Lead {
  id: string;
  project_id: string;
  name: string;
  email: string;
  phone: string | null;
  country: string | null;
  amount_range: string;
  comments: string | null;
  status: string;
  created_at: string;
  source: string | null;
  last_contacted_at: string | null;
  last_email_type: string | null;
  next_action_at: string | null;
  internal_notes: string | null;
  projects: {
    title: string;
    slug: string;
    category: string;
  };
}

const AdminLeads = () => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState<{ id: string; title: string }[]>([]);
  const [filterStatus, setFilterStatus] = useState<string | 'all'>('all');
  const [filterProject, setFilterProject] = useState<string | 'all'>('all');
  const [filterEmailType, setFilterEmailType] = useState<string | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedLeadId, setExpandedLeadId] = useState<string | null>(null);
  const [selectedTemplate, setSelectedTemplate] = useState<{ leadId: string; template: EmailTemplate; type: string } | null>(null);
  const [selectedBrandedTemplate, setSelectedBrandedTemplate] = useState<EmailTemplateId | null>(null);
  const [brandedTemplatePreview, setBrandedTemplatePreview] = useState<{ leadId: string; subject: string; body: string; templateId: string } | null>(null);
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    fetchLeads();
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const { data, error } = await supabase
        .from('projects')
        .select('id, title')
        .eq('is_visible', true)
        .order('title');

      if (error) throw error;
      setProjects(data || []);
    } catch (error: any) {
      console.error('Error loading projects:', error);
    }
  };

  const fetchLeads = async () => {
    try {
      let query = supabase
        .from('investor_leads')
        .select(`
          *,
          projects (
            title,
            slug,
            category
          )
        `)
        .order('status')
        .order('created_at', { ascending: false });

      if (filterStatus !== 'all') {
        query = query.eq('status', filterStatus as any);
      }

      if (filterProject !== 'all') {
        query = query.eq('project_id', filterProject);
      }

      const { data, error } = await query;

      if (error) throw error;
      setLeads(data || []);
    } catch (error: any) {
      toast({
        title: 'Error loading leads',
        description: error.message,
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const filteredLeads = leads.filter((lead) => {
    if (!searchQuery && filterEmailType === 'all') return true;
    
    const matchesSearch = !searchQuery || (
      lead.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (lead.phone?.toLowerCase().includes(searchQuery.toLowerCase()) ?? false)
    );

    const matchesEmailType = filterEmailType === 'all' || 
      (filterEmailType === 'none' && !lead.last_email_type) ||
      lead.last_email_type === filterEmailType;

    return matchesSearch && matchesEmailType;
  });

  const updateLeadStatus = async (leadId: string, newStatus: any) => {
    try {
      const { error } = await supabase
        .from('investor_leads')
        .update({ status: newStatus })
        .eq('id', leadId);

      if (error) throw error;

      toast({
        title: 'Success',
        description: 'Lead status updated successfully',
      });

      fetchLeads();
    } catch (error: any) {
      toast({
        title: 'Error',
        description: error.message,
        variant: 'destructive',
      });
    }
  };

  const markAsContacted = async (leadId: string, emailType: string) => {
    try {
      const updates: any = {
        last_contacted_at: new Date().toISOString(),
        last_email_type: emailType,
      };

      // If status is NEW, update to CONTACTED
      const lead = leads.find(l => l.id === leadId);
      if (lead?.status === 'NEW') {
        updates.status = 'CONTACTED';
      }

      const { error } = await supabase
        .from('investor_leads')
        .update(updates)
        .eq('id', leadId);

      if (error) throw error;

      toast({
        title: 'Success',
        description: 'Lead marked as contacted',
      });

      setSelectedTemplate(null);
      setBrandedTemplatePreview(null);
      fetchLeads();
    } catch (error: any) {
      toast({
        title: 'Error',
        description: error.message,
        variant: 'destructive',
      });
    }
  };

  const updateInternalNotes = async (leadId: string, notes: string) => {
    try {
      const { error } = await supabase
        .from('investor_leads')
        .update({ internal_notes: notes })
        .eq('id', leadId);

      if (error) throw error;

      toast({
        title: 'Success',
        description: 'Notes updated successfully',
      });

      fetchLeads();
    } catch (error: any) {
      toast({
        title: 'Error',
        description: error.message,
        variant: 'destructive',
      });
    }
  };

  const updateNextActionDate = async (leadId: string, date: Date | undefined) => {
    try {
      const { error } = await supabase
        .from('investor_leads')
        .update({ next_action_at: date?.toISOString() || null })
        .eq('id', leadId);

      if (error) throw error;

      toast({
        title: 'Success',
        description: 'Follow-up date updated',
      });

      fetchLeads();
    } catch (error: any) {
      toast({
        title: 'Error',
        description: error.message,
        variant: 'destructive',
      });
    }
  };

  const isFollowUpDue = (lead: Lead) => {
    if (!lead.next_action_at) return false;
    return new Date(lead.next_action_at) < new Date();
  };

  const needsFirstContact = (lead: Lead) => {
    return lead.status === 'NEW' && !lead.last_contacted_at;
  };

  const generateEmailTemplate = (lead: Lead, type: 'intro' | 'followup' | 'checkin') => {
    const project = lead.projects ? {
      title: lead.projects.title,
      slug: lead.projects.slug,
      category: lead.projects.category,
    } : null;

    const leadData = {
      name: lead.name,
      email: lead.email,
      amount_range: lead.amount_range,
      country: lead.country || undefined,
    };

    let template: EmailTemplate;
    switch (type) {
      case 'intro':
        template = getIntroEmailTemplate(leadData, project);
        break;
      case 'followup':
        template = getFollowUpWithBriefTemplate(leadData, project);
        break;
      case 'checkin':
        template = getCheckInTemplate(leadData, project);
        break;
    }

    setSelectedTemplate({ leadId: lead.id, template, type });
  };

  const generateBrandedTemplate = (lead: Lead, templateId: EmailTemplateId) => {
    const template = getTemplateById(templateId);
    if (!template) return;

    const params: TemplateParams = {
      recipientName: lead.name,
      projectName: lead.projects?.title || undefined,
      senderName: 'Digital Invest Team',
      customNotes: undefined,
      meetingLink: undefined
    };

    const subject = template.subject(params);
    const body = template.textBody(params);

    setBrandedTemplatePreview({
      leadId: lead.id,
      subject,
      body,
      templateId
    });
  };

  const copyToClipboard = async (text: string, field: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      toast({
        title: 'Copied!',
        description: 'Text copied to clipboard',
      });
      setTimeout(() => setCopiedField(null), 2000);
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to copy to clipboard',
        variant: 'destructive',
      });
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'NEW':
        return 'bg-info text-info-foreground';
      case 'CONTACTED':
        return 'bg-warning text-warning-foreground';
      case 'QUALIFIED':
        return 'bg-success text-success-foreground';
      case 'DECLINED':
        return 'bg-muted text-muted-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  useEffect(() => {
    fetchLeads();
  }, [filterStatus, filterProject]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-foreground">Investor Leads</h2>
          <p className="text-muted-foreground">Manage expressions of interest from potential investors</p>
        </div>
        <div className="flex gap-2 flex-wrap">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by name or email..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 w-[250px]"
            />
          </div>
          <Select value={filterStatus} onValueChange={setFilterStatus}>
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="NEW">New</SelectItem>
              <SelectItem value="CONTACTED">Contacted</SelectItem>
              <SelectItem value="QUALIFIED">Qualified</SelectItem>
              <SelectItem value="DECLINED">Declined</SelectItem>
            </SelectContent>
          </Select>
          <Select value={filterProject} onValueChange={setFilterProject}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Project" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Projects</SelectItem>
              {projects.map((project) => (
                <SelectItem key={project.id} value={project.id}>
                  {project.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={filterEmailType} onValueChange={setFilterEmailType}>
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Email Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Emails</SelectItem>
              <SelectItem value="none">Not Contacted</SelectItem>
              <SelectItem value="intro">Intro</SelectItem>
              <SelectItem value="followup">Follow-up</SelectItem>
              <SelectItem value="checkin">Check-in</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid gap-6">
        {filteredLeads.map((lead) => (
          <Card 
            key={lead.id} 
            className={cn(
              "border border-border/50",
              needsFirstContact(lead) && "border-l-4 border-l-info",
              isFollowUpDue(lead) && "border-l-4 border-l-warning"
            )}
          >
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    {lead.name}
                    {needsFirstContact(lead) && (
                      <Badge className="bg-info text-info-foreground text-xs">
                        <AlertCircle className="h-3 w-3 mr-1" />
                        Needs First Contact
                      </Badge>
                    )}
                    {isFollowUpDue(lead) && (
                      <Badge className="bg-warning text-warning-foreground text-xs">
                        <Clock className="h-3 w-3 mr-1" />
                        Follow-up Due
                      </Badge>
                    )}
                  </CardTitle>
                  <CardDescription>
                    Project: {lead.projects.title} • Submitted {new Date(lead.created_at).toLocaleDateString()}
                    {lead.last_contacted_at && (
                      <> • Last contact: {new Date(lead.last_contacted_at).toLocaleDateString()}</>
                    )}
                  </CardDescription>
                </div>
                <div className="flex items-center gap-2">
                  {lead.last_email_type && (
                    <Badge variant="secondary" className="text-xs">
                      {lead.last_email_type}
                    </Badge>
                  )}
                  <Badge className={getStatusColor(lead.status)}>
                    {lead.status}
                  </Badge>
                  <Select
                    value={lead.status}
                    onValueChange={(value) => updateLeadStatus(lead.id, value)}
                  >
                    <SelectTrigger className="w-[140px]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="NEW">New</SelectItem>
                      <SelectItem value="CONTACTED">Contacted</SelectItem>
                      <SelectItem value="QUALIFIED">Qualified</SelectItem>
                      <SelectItem value="DECLINED">Declined</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                <div className="flex items-start gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground mt-1" />
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a href={`mailto:${lead.email}`} className="text-sm font-medium hover:text-primary">
                      {lead.email}
                    </a>
                  </div>
                </div>

                {lead.phone && (
                  <div className="flex items-start gap-2">
                    <Phone className="h-4 w-4 text-muted-foreground mt-1" />
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <a href={`tel:${lead.phone}`} className="text-sm font-medium hover:text-primary">
                        {lead.phone}
                      </a>
                    </div>
                  </div>
                )}

                {lead.country && (
                  <div className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground mt-1" />
                    <div>
                      <p className="text-sm text-muted-foreground">Country</p>
                      <p className="text-sm font-medium">{lead.country}</p>
                    </div>
                  </div>
                )}

                <div>
                  <p className="text-sm text-muted-foreground">Investment Range</p>
                  <p className="text-sm font-medium">
                    {lead.amount_range.replace('-', ' - ').replace('k', 'K').replace('plus', '+')}
                  </p>
                </div>
              </div>

              {lead.comments && (
                <div className="mt-4 p-4 bg-muted/30 rounded-lg">
                  <div className="flex items-start gap-2">
                    <MessageSquare className="h-4 w-4 text-muted-foreground mt-1" />
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Comments</p>
                      <p className="text-sm">{lead.comments}</p>
                    </div>
                  </div>
                </div>
              )}

              <Separator className="my-4" />

              {/* Email Tools Section */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-semibold flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    Email Tools
                  </h4>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setExpandedLeadId(expandedLeadId === lead.id ? null : lead.id)}
                  >
                    {expandedLeadId === lead.id ? 'Hide' : 'Show'}
                  </Button>
                </div>

                {expandedLeadId === lead.id && (
                  <div className="space-y-6 p-4 bg-muted/20 rounded-lg">
                    {/* Legacy Quick Templates */}
                    <div className="space-y-3">
                      <label className="text-xs font-medium text-muted-foreground uppercase">Quick Templates (Legacy)</label>
                      <div className="flex gap-2 flex-wrap">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => generateEmailTemplate(lead, 'intro')}
                        >
                          <Mail className="mr-2 h-4 w-4" />
                          Copy Intro Email
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => generateEmailTemplate(lead, 'followup')}
                        >
                          <Mail className="mr-2 h-4 w-4" />
                          Copy Follow-up with Brief
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => generateEmailTemplate(lead, 'checkin')}
                        >
                          <Mail className="mr-2 h-4 w-4" />
                          Copy Check-in Email
                        </Button>
                      </div>

                      {selectedTemplate && selectedTemplate.leadId === lead.id && (
                        <div className="space-y-3 p-4 border border-border rounded-lg bg-background">
                          <div>
                            <div className="flex justify-between items-center mb-2">
                              <label className="text-sm font-medium">Subject</label>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => copyToClipboard(selectedTemplate.template.subject, `subject-${lead.id}`)}
                              >
                                {copiedField === `subject-${lead.id}` ? (
                                  <Check className="h-4 w-4" />
                                ) : (
                                  <Copy className="h-4 w-4" />
                                )}
                              </Button>
                            </div>
                            <Input
                              value={selectedTemplate.template.subject}
                              readOnly
                              className="font-medium"
                            />
                          </div>

                          <div>
                            <div className="flex justify-between items-center mb-2">
                              <label className="text-sm font-medium">Body</label>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => copyToClipboard(selectedTemplate.template.body, `body-${lead.id}`)}
                              >
                                {copiedField === `body-${lead.id}` ? (
                                  <Check className="h-4 w-4" />
                                ) : (
                                  <Copy className="h-4 w-4" />
                                )}
                              </Button>
                            </div>
                            <Textarea
                              value={selectedTemplate.template.body}
                              readOnly
                              rows={12}
                              className="font-mono text-sm"
                            />
                          </div>

                          <div className="flex gap-2">
                            <Button
                              onClick={() => markAsContacted(lead.id, selectedTemplate.type)}
                              size="sm"
                            >
                              <Check className="mr-2 h-4 w-4" />
                              Mark as Contacted
                            </Button>
                            <Button
                              variant="outline"
                              onClick={() => setSelectedTemplate(null)}
                              size="sm"
                            >
                              Close
                            </Button>
                          </div>
                        </div>
                      )}
                    </div>

                    <Separator />

                    {/* Branded Email Templates */}
                    <div className="space-y-3">
                      <label className="text-xs font-medium text-muted-foreground uppercase">Branded Email Templates</label>
                      <Select 
                        value={selectedBrandedTemplate || ''} 
                        onValueChange={(value) => {
                          const templateId = value as EmailTemplateId;
                          setSelectedBrandedTemplate(templateId);
                          generateBrandedTemplate(lead, templateId);
                        }}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Choose a template..." />
                        </SelectTrigger>
                        <SelectContent>
                          {allTemplates.map((template) => (
                            <SelectItem key={template.id} value={template.id}>
                              {template.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>

                      {brandedTemplatePreview && brandedTemplatePreview.leadId === lead.id && (
                        <div className="space-y-3 p-4 border border-border rounded-lg bg-background">
                          <div>
                            <div className="flex justify-between items-center mb-2">
                              <label className="text-sm font-medium">Subject</label>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => copyToClipboard(brandedTemplatePreview.subject, `branded-subject-${lead.id}`)}
                              >
                                {copiedField === `branded-subject-${lead.id}` ? (
                                  <>
                                    <Check className="h-4 w-4 mr-1" />
                                    Copied
                                  </>
                                ) : (
                                  <>
                                    <Copy className="h-4 w-4 mr-1" />
                                    Copy
                                  </>
                                )}
                              </Button>
                            </div>
                            <Input
                              value={brandedTemplatePreview.subject}
                              readOnly
                              className="font-medium"
                            />
                          </div>

                          <div>
                            <div className="flex justify-between items-center mb-2">
                              <label className="text-sm font-medium">Body (Plain Text)</label>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => copyToClipboard(brandedTemplatePreview.body, `branded-body-${lead.id}`)}
                              >
                                {copiedField === `branded-body-${lead.id}` ? (
                                  <>
                                    <Check className="h-4 w-4 mr-1" />
                                    Copied
                                  </>
                                ) : (
                                  <>
                                    <Copy className="h-4 w-4 mr-1" />
                                    Copy
                                  </>
                                )}
                              </Button>
                            </div>
                            <Textarea
                              value={brandedTemplatePreview.body}
                              readOnly
                              rows={14}
                              className="font-mono text-xs"
                            />
                          </div>

                          <div className="flex gap-2">
                            <Button
                              onClick={() => markAsContacted(lead.id, brandedTemplatePreview.templateId)}
                              size="sm"
                            >
                              <Check className="mr-2 h-4 w-4" />
                              Mark as Contacted
                            </Button>
                            <Button
                              variant="outline"
                              onClick={() => {
                                setBrandedTemplatePreview(null);
                                setSelectedBrandedTemplate(null);
                              }}
                              size="sm"
                            >
                              Close
                            </Button>
                          </div>
                        </div>
                      )}
                    </div>

                    <Separator />
                    <div className="space-y-2">
                      <label className="text-sm font-medium flex items-center gap-2">
                        <MessageSquare className="h-4 w-4" />
                        Internal Notes
                      </label>
                      <Textarea
                        placeholder="Add private notes about this lead..."
                        value={lead.internal_notes || ''}
                        onChange={(e) => {
                          const updatedLeads = leads.map(l => 
                            l.id === lead.id ? { ...l, internal_notes: e.target.value } : l
                          );
                          setLeads(updatedLeads);
                        }}
                        onBlur={(e) => updateInternalNotes(lead.id, e.target.value)}
                        rows={3}
                        className="text-sm"
                      />
                    </div>

                    {/* Next Action Date */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium flex items-center gap-2">
                        <CalendarIcon className="h-4 w-4" />
                        Next Follow-up Date
                      </label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !lead.next_action_at && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {lead.next_action_at ? (
                              format(new Date(lead.next_action_at), "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={lead.next_action_at ? new Date(lead.next_action_at) : undefined}
                            onSelect={(date) => updateNextActionDate(lead.id, date)}
                            initialFocus
                            className="pointer-events-auto"
                          />
                        </PopoverContent>
                      </Popover>
                      {lead.next_action_at && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => updateNextActionDate(lead.id, undefined)}
                          className="w-full"
                        >
                          Clear Date
                        </Button>
                      )}
                    </div>
                  </div>
                )}
              </div>

              <Separator className="my-4" />

              <div className="flex gap-2">
                <Button variant="outline" size="sm" asChild>
                  <a href={`mailto:${lead.email}`}>
                    <Mail className="mr-2 h-4 w-4" />
                    Email
                  </a>
                </Button>
                {lead.phone && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={`tel:${lead.phone}`}>
                      <Phone className="mr-2 h-4 w-4" />
                      Call
                    </a>
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}

        {filteredLeads.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              {searchQuery 
                ? `No leads matching "${searchQuery}"`
                : filterStatus === 'all' 
                  ? 'No leads yet.' 
                  : `No leads with status "${filterStatus}".`}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminLeads;
