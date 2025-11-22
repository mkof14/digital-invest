-- Add email workflow tracking fields to investor_leads table
ALTER TABLE public.investor_leads
ADD COLUMN source TEXT,
ADD COLUMN last_contacted_at TIMESTAMP WITH TIME ZONE,
ADD COLUMN last_email_type TEXT,
ADD COLUMN next_action_at TIMESTAMP WITH TIME ZONE,
ADD COLUMN internal_notes TEXT;

-- Add comment for documentation
COMMENT ON COLUMN public.investor_leads.source IS 'Source of the lead: project-page, contact, documents, etc.';
COMMENT ON COLUMN public.investor_leads.last_contacted_at IS 'Timestamp of last contact with this lead';
COMMENT ON COLUMN public.investor_leads.last_email_type IS 'Type of last email sent: intro, followup, checkin';
COMMENT ON COLUMN public.investor_leads.next_action_at IS 'Scheduled timestamp for next follow-up action';
COMMENT ON COLUMN public.investor_leads.internal_notes IS 'Admin notes about this lead';