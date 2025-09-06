import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Cookies = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Cookie Policy
            </h1>
            <p className="text-lg text-muted-foreground">
              Learn how we use cookies to improve your experience.
            </p>
          </div>

          <div className="space-y-8">
            <Card className="border-0 shadow-tech">
              <CardHeader>
                <CardTitle>What Are Cookies</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Cookies are small text files that are stored on your computer or mobile device when you 
                  visit our website. They allow us to recognize your device and remember information about 
                  your visit, such as your preferred settings and how you use our site.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-tech">
              <CardHeader>
                <CardTitle>How We Use Cookies</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  We use cookies to enhance your browsing experience, analyze site traffic, personalize 
                  content, and provide social media features. This helps us improve our platform and 
                  provide better services to our users.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-tech">
              <CardHeader>
                <CardTitle>Types of Cookies We Use</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Essential Cookies</h4>
                    <p className="text-muted-foreground text-sm">
                      These cookies are necessary for the website to function properly and cannot be disabled.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Analytics Cookies</h4>
                    <p className="text-muted-foreground text-sm">
                      These help us understand how visitors interact with our website by collecting information anonymously.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Functional Cookies</h4>
                    <p className="text-muted-foreground text-sm">
                      These enable enhanced functionality and personalization, such as remembering your preferences.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-tech">
              <CardHeader>
                <CardTitle>Managing Cookies</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  You can control and manage cookies in various ways. Most web browsers automatically accept 
                  cookies, but you can modify your browser settings to decline cookies if you prefer. However, 
                  this may prevent you from taking full advantage of our website.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-tech">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about our use of cookies or other technologies, please contact us 
                  at info@digitalinvest.com. We're committed to transparency in our data practices.
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

export default Cookies;