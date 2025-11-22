import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Copy, Check, Mail, Eye, Info } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { allTemplates, placeholderGuide, type EmailTemplateId } from '@/lib/brandedEmailTemplates';
import { Separator } from '@/components/ui/separator';

const AdminEmailTemplates = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const { toast } = useToast();

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

  const sampleParams = {
    recipientName: 'John Smith',
    projectName: 'BioMath Core',
    senderName: 'Digital Invest Team',
    meetingLink: 'https://calendly.com/example',
    customNotes: 'Looking forward to discussing this opportunity with you.'
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-foreground">Email Templates</h2>
        <p className="text-muted-foreground">Branded email templates for investor, media, partner, and career communication</p>
      </div>

      {/* Placeholder Guide */}
      <Card className="border-l-4 border-l-info">
        <CardHeader>
          <div className="flex items-start gap-2">
            <Info className="h-5 w-5 text-info mt-0.5" />
            <div>
              <CardTitle className="text-lg">Template Placeholders</CardTitle>
              <CardDescription>Use these placeholders in templates - they will be replaced with actual data</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            {Object.entries(placeholderGuide).map(([key, description]) => (
              <div key={key} className="flex gap-2">
                <Badge variant="secondary" className="font-mono">
                  {`{{${key}}}`}
                </Badge>
                <span className="text-muted-foreground">{description}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Templates List */}
      <div className="grid gap-6">
        {allTemplates.map((template) => {
          const subject = template.subject(sampleParams);
          const htmlBody = template.htmlBody(sampleParams);
          const textBody = template.textBody(sampleParams);

          return (
            <Card key={template.id} className="border border-border/50">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <Mail className="h-5 w-5" />
                      {template.label}
                    </CardTitle>
                    <CardDescription>{template.description}</CardDescription>
                  </div>
                  <Badge variant="outline" className="font-mono text-xs">
                    {template.id}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Subject Line */}
                <div>
                  <label className="text-sm font-medium text-muted-foreground mb-2 block">
                    Subject Line
                  </label>
                  <div className="flex gap-2">
                    <div className="flex-1 p-3 bg-muted/30 rounded-lg border border-border">
                      <p className="text-sm font-medium">{subject}</p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => copyToClipboard(subject, `${template.id}-subject`)}
                    >
                      {copiedField === `${template.id}-subject` ? (
                        <Check className="h-4 w-4" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </div>

                <Separator />

                {/* Body Tabs */}
                <Tabs defaultValue="text" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="text">Plain Text</TabsTrigger>
                    <TabsTrigger value="html">HTML Preview</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="text" className="space-y-2">
                    <div className="flex justify-between items-center">
                      <label className="text-sm font-medium text-muted-foreground">
                        Plain Text Body
                      </label>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => copyToClipboard(textBody, `${template.id}-text`)}
                      >
                        {copiedField === `${template.id}-text` ? (
                          <>
                            <Check className="h-4 w-4 mr-2" />
                            Copied
                          </>
                        ) : (
                          <>
                            <Copy className="h-4 w-4 mr-2" />
                            Copy Text
                          </>
                        )}
                      </Button>
                    </div>
                    <Textarea
                      value={textBody}
                      readOnly
                      className="font-mono text-xs min-h-[300px]"
                    />
                  </TabsContent>
                  
                  <TabsContent value="html" className="space-y-2">
                    <div className="flex justify-between items-center">
                      <label className="text-sm font-medium text-muted-foreground">
                        HTML Email Preview
                      </label>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4 mr-2" />
                            Full Preview
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl max-h-[90vh] overflow-auto">
                          <DialogHeader>
                            <DialogTitle>{template.label}</DialogTitle>
                            <DialogDescription>
                              HTML email preview with sample data
                            </DialogDescription>
                          </DialogHeader>
                          <div
                            className="border border-border rounded-lg p-4 bg-background"
                            dangerouslySetInnerHTML={{ __html: htmlBody }}
                          />
                        </DialogContent>
                      </Dialog>
                    </div>
                    <div
                      className="border border-border rounded-lg p-4 bg-muted/20 max-h-[400px] overflow-auto"
                      dangerouslySetInnerHTML={{ __html: htmlBody }}
                    />
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default AdminEmailTemplates;
