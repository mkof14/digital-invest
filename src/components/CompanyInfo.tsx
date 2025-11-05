import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  MapPin, 
  Phone, 
  Mail,
  Linkedin,
  Facebook,
  Youtube,
  Building2,
  Users,
  Target,
  TrendingUp,
  Globe,
  Award
} from 'lucide-react';

const CompanyInfo = () => {
  const stats = [
    { label: "Years in Market", value: "14+", icon: Award },
    { label: "Platform Services", value: "5", icon: Target },
    { label: "Expert Team", value: "25+", icon: Users },
    { label: "Diagnostic Accuracy", value: "97%", icon: TrendingUp }
  ];

  const domains = [
    "Precision Medicine",
    "Artificial Intelligence", 
    "Applied Mathematics",
    "Cybernetics",
    "Big Data",
    "Predictive Analytics",
    "Digital Health",
    "Healthcare",
    "Genetics",
    "System Biology",
    "Life Science",
    "Biotechnology Research"
  ];

  return (
    <div className="space-y-16">
      {/* Company Overview */}
      <section className="text-center py-16">
        <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
          Digital Invest Inc.
        </Badge>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Technology <span className="text-primary">Visionary</span>
          <br />and Strategic <span className="text-accent">Consultant</span>
        </h1>
        
        <p className="text-xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
          Digital Invest Inc. (formerly GENEX Company) — a biotechnology research company 
          operating since 2010 in advanced human genome analysis and biomathematical modeling. 
          Our CEO Michael Kofman is an experienced technology leader with over 30 years of experience.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 text-center hover:card-hover transition-all duration-300 group">
              <stat.icon className="w-8 h-8 mx-auto mb-2 text-primary group-hover:text-primary-glow transition-colors" />
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>
      </section>

      {/* About Digital Invest */}
      <section className="py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About Digital Invest Inc.
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Digital Invest Inc. (formerly GENEX Company) has been operating since 2010, specializing in advanced 
                human genome analysis and biomathematical modeling. We are experienced experts in 
                biotechnology, big data, cloud computing, and artificial intelligence.
              </p>
              <p>
                For over 6 years, we've been pursuing an ambitious mission: creating a biomathematical model adapted 
                for each individual. This model is based on mathematical understanding of processes 
                occurring in the human body at all levels and their interactions.
              </p>
              <p>
                BioMath Life Platform represents the technical embodiment of our scientific and business vision, 
                enabling the transition from statistical diagnostic methods to mathematical ones, opening wide 
                opportunities for predicting disease development and body response to treatment.
              </p>
            </div>
            <div className="mt-6">
              <Button variant="default" size="lg">
                Learn More About the Company
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <Card className="p-8 bg-card">
              <Building2 className="w-20 h-20 mx-auto mb-6 text-primary" />
              <h3 className="text-xl font-semibold text-center mb-4">Our Mission</h3>
              <p className="text-center text-muted-foreground">
                Revolutionize healthcare through biomathematical modeling 
                and personalized medicine, making advanced technologies accessible to everyone.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Expertise Domains */}
      <section className="py-16 bg-card/20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Areas of Expertise</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            BioMath Life Platform is a cross-domain project covering many 
            advanced technological areas
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {domains.map((domain, index) => (
            <Card key={index} className="p-4 text-center hover:card-hover transition-all duration-300 group">
              <Badge variant="outline" className="w-full text-xs py-2 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                {domain}
              </Badge>
            </Card>
          ))}
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Leadership</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Experienced team of technology leaders and medical experts
          </p>
        </div>
        
        <Card className="p-8 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="text-center lg:text-left">
              <div className="w-32 h-32 rounded-full bg-card mx-auto lg:mx-0 mb-4 flex items-center justify-center border-2 border-primary">
                <Users className="w-16 h-16 text-primary" />
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold mb-2">Michael Kofman</h3>
              <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20">
                CEO & Founder
              </Badge>
              <p className="text-muted-foreground mb-4">
                CEO/President of Digital Invest Inc. Over 30 years of experience in leading, founding, and consulting 
                companies in the USA and Europe. Technology visionary, strategic consultant, and entrepreneur. 
                Since 2010, leading the company in biomathematical modeling and precision medicine.
              </p>
              <div className="flex space-x-4">
                <Button variant="outline" size="sm">
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </Button>
                <Button variant="outline" size="sm">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-card/20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-muted-foreground text-lg">
            We'd be happy to hear from you
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Details */}
          <Card className="p-8">
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">
                  301 S McDowell Street, Suite 125-1609<br />
                  Charlotte, NC 28204
                </span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:info@digitalinvest.com" className="text-muted-foreground hover:text-foreground transition-colors">
                  info@digitalinvest.com
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <a href="tel:19802108177" className="text-muted-foreground hover:text-foreground transition-colors">
                  (980) 210-8177
                </a>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="font-semibold mb-4">Social Media</h4>
              <div className="flex space-x-4">
                <Button variant="outline" size="sm">
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </Button>
                <Button variant="outline" size="sm">
                  <Facebook className="w-4 h-4 mr-2" />
                  Facebook
                </Button>
                <Button variant="outline" size="sm">
                  <Youtube className="w-4 h-4 mr-2" />
                  YouTube
                </Button>
              </div>
            </div>
          </Card>
          
          {/* Contact Form */}
          <Card className="p-8">
            <h3 className="text-xl font-semibold mb-6">Send Us a Message</h3>
            
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <select className="w-full p-3 rounded-md border border-border bg-background">
                  <option>General Question</option>
                  <option>Document Request</option>
                  <option>Call Back Request</option>
                  <option>Schedule a Meeting</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Your Name</label>
                <input 
                  type="text" 
                  className="w-full p-3 rounded-md border border-border bg-background"
                  placeholder="Enter your name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full p-3 rounded-md border border-border bg-background"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea 
                  rows={4}
                  className="w-full p-3 rounded-md border border-border bg-background"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              
              <Button variant="default" className="w-full">
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </section>

      {/* Investment Opportunity */}
      <section className="py-16 text-center">
        <Card className="p-12 bg-card max-w-4xl mx-auto">
          <Globe className="w-16 h-16 mx-auto mb-6 text-primary" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Investment Opportunity
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Digital Invest Inc. offers a unique opportunity to invest in the future of medicine. 
            BioMath Life Platform represents breakthrough technology with enormous commercial potential.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" size="lg" className="text-lg px-8 py-4">
              Learn About Investment
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4">
              Download Presentation
            </Button>
          </div>
        </Card>
      </section>
    </div>
  );
};

export default CompanyInfo;