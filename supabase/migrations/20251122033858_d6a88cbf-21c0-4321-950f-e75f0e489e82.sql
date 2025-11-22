-- Make project_id nullable for investor_leads to support handbook downloads
ALTER TABLE investor_leads 
ALTER COLUMN project_id DROP NOT NULL;

-- Also make amount_range have a default value
ALTER TABLE investor_leads 
ALTER COLUMN amount_range SET DEFAULT 'undisclosed';