import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Terms of Service
            </h1>
            <p className="text-lg text-muted-foreground">
              Please read these terms carefully before using our services.
            </p>
          </div>

          <div className="space-y-8">
            <Card className="border-0 shadow-tech">
              <CardHeader>
                <CardTitle>Acceptance of Terms</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  By accessing and using Digital Invest Inc.'s services, you accept and agree to be bound 
                  by the terms and provision of this agreement. These Terms of Service govern your use of 
                  our platform and services.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-tech">
              <CardHeader>
                <CardTitle>Use License</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Permission is granted to temporarily access our platform for personal, non-commercial 
                  transitory viewing only. This is the grant of a license, not a transfer of title, and 
                  under this license you may not modify or copy the materials.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-tech">
              <CardHeader>
                <CardTitle>Investment Disclaimers</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  All investment opportunities presented on our platform involve risk. Past performance 
                  is not indicative of future results. You should carefully consider your investment 
                  objectives and consult with financial advisors before making investment decisions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-tech">
              <CardHeader>
                <CardTitle>Healthcare Technology Compliance</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Our healthcare technology services are provided for informational purposes and are not 
                  intended to replace professional medical advice, diagnosis, or treatment. Always seek 
                  the advice of qualified healthcare providers.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-tech">
              <CardHeader>
                <CardTitle>Limitation of Liability</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  In no event shall Digital Invest Inc. or its suppliers be liable for any damages arising 
                  out of the use or inability to use our platform or services. This includes but is not 
                  limited to investment losses or technical service interruptions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Terms;