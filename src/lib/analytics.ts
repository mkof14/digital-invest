// Google Analytics 4 Event Tracking

declare global {
  interface Window {
    gtag?: (
      command: 'event' | 'config' | 'js',
      targetId: string | Date,
      config?: Record<string, any>
    ) => void;
    dataLayer?: any[];
  }
}

export const trackEvent = (
  eventName: string,
  eventParams?: Record<string, any>
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
};

// Predefined event tracking functions
export const trackInvestorLead = (projectName?: string, amountRange?: string) => {
  trackEvent('investor_lead_submission', {
    project: projectName || 'general',
    amount_range: amountRange || 'not_specified',
    event_category: 'engagement',
    event_label: 'investor_interest'
  });
};

export const trackConsultationBooking = (projectName: string, date: string) => {
  trackEvent('consultation_booking', {
    project: projectName,
    booking_date: date,
    event_category: 'engagement',
    event_label: 'schedule_consultation'
  });
};

export const trackPDFDownload = (documentType: 'investor_brief' | 'handbook', projectName?: string) => {
  trackEvent('pdf_download', {
    document_type: documentType,
    project: projectName || 'general',
    event_category: 'engagement',
    event_label: 'document_download'
  });
};

export const trackHandbookDownload = () => {
  trackEvent('handbook_download', {
    event_category: 'engagement',
    event_label: 'investor_handbook'
  });
};

export const trackPageView = (pagePath: string, pageTitle: string) => {
  trackEvent('page_view', {
    page_path: pagePath,
    page_title: pageTitle
  });
};

export const trackFormStart = (formType: string) => {
  trackEvent('form_start', {
    form_type: formType,
    event_category: 'engagement'
  });
};

export const trackFormError = (formType: string, errorMessage: string) => {
  trackEvent('form_error', {
    form_type: formType,
    error_message: errorMessage,
    event_category: 'error'
  });
};
