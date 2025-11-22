-- Create availability_windows table
CREATE TABLE public.availability_windows (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  day_of_week INTEGER NOT NULL CHECK (day_of_week >= 0 AND day_of_week <= 6),
  start_time TEXT NOT NULL,
  end_time TEXT NOT NULL,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create consultation_bookings table
CREATE TABLE public.consultation_bookings (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  project TEXT NOT NULL,
  notes TEXT,
  date DATE NOT NULL,
  start_time TEXT NOT NULL,
  end_time TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'PENDING' CHECK (status IN ('PENDING', 'CONFIRMED', 'CANCELLED')),
  admin_notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.availability_windows ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.consultation_bookings ENABLE ROW LEVEL SECURITY;

-- RLS Policies for availability_windows
CREATE POLICY "Anyone can view active availability"
ON public.availability_windows FOR SELECT
USING (is_active = true);

CREATE POLICY "Admins can manage availability"
ON public.availability_windows FOR ALL
USING (has_role_level(auth.uid(), 'ADMIN'::app_role))
WITH CHECK (has_role_level(auth.uid(), 'ADMIN'::app_role));

-- RLS Policies for consultation_bookings
CREATE POLICY "Anyone can create consultation bookings"
ON public.consultation_bookings FOR INSERT
WITH CHECK (true);

CREATE POLICY "Authenticated users can view consultation bookings"
ON public.consultation_bookings FOR SELECT
USING (auth.uid() IS NOT NULL);

CREATE POLICY "Editors can update consultation bookings"
ON public.consultation_bookings FOR UPDATE
USING (has_role_level(auth.uid(), 'EDITOR'::app_role))
WITH CHECK (has_role_level(auth.uid(), 'EDITOR'::app_role));

-- Triggers for updated_at
CREATE TRIGGER update_availability_windows_updated_at
BEFORE UPDATE ON public.availability_windows
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_consultation_bookings_updated_at
BEFORE UPDATE ON public.consultation_bookings
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();