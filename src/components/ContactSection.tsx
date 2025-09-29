import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { toast } from '@/hooks/use-toast';
import { 
  Mail, 
  Phone, 
  Linkedin, 
  Github, 
  Send,
  MapPin,
  Coffee,
  Star,
  CheckCircle,
  Clock,
  Globe,
  MessageSquare,
  Calendar
} from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "parv.bhawsar@example.com",
      href: "mailto:parv.bhawsar@example.com",
      color: "bg-red-500/10 text-red-600",
      available: "24/7"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 xxxxx xxxxx",
      href: "tel:+91xxxxxxxxx",
      color: "bg-green-500/10 text-green-600",
      available: "9 AM - 9 PM IST"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "/in/parvbhawsar",
      href: "https://linkedin.com/in/parvbhawsar",
      color: "bg-blue-500/10 text-blue-600",
      available: "Professional"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "@parvbhawsar",
      href: "https://github.com/parvbhawsar",
      color: "bg-purple-500/10 text-purple-600",
      available: "Open Source"
    }
  ];

  const responseTime = {
    email: "< 6 hours",
    linkedin: "< 12 hours",
    phone: "< 2 hours",
    github: "< 24 hours"
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields before submitting.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Message Sent Successfully! 🚀",
      description: "Thank you for reaching out. I'll get back to you within 24 hours.",
    });
    
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <section id="contact" className="py-20 particle-bg bg-gradient-to-br from-background via-secondary/10 to-background relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="floating-orb !w-32 !h-32 !top-16 !right-20 animate-pulse-glow"></div>
        <div className="floating-orb !w-24 !h-24 !bottom-24 !left-16 animate-glow"></div>
        <div className="floating-orb !w-20 !h-20 !top-1/3 !right-1/3 animate-float"></div>
      </div>
      
      {/* Interactive gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-accent/5 via-transparent to-hero-gradient-end/5 opacity-70"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="space-y-20">
          {/* Enhanced Header */}
          <div className="text-center space-y-6 animate-fade-in">
            <div className="inline-flex items-center space-x-2 glass-card rounded-full px-6 py-3 backdrop-blur-md">
              <Star className="h-4 w-4 text-accent animate-pulse" />
              <Badge variant="outline" className="border-accent/30 text-accent bg-transparent">
                Get In Touch
              </Badge>
            </div>
            <h2 className="text-4xl sm:text-6xl font-bold text-primary leading-tight">
              Let's <span className="text-gradient">Connect</span>
              <br />
              & <span className="text-gradient">Collaborate</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Whether you want to discuss technology, markets, research opportunities, 
              or even a friendly game of chess - I'd love to hear from you!
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form - Takes 2 columns */}
            <div className="lg:col-span-2">
              <Card className="glass-card border-accent/20 backdrop-blur-md animate-glow">
                <CardContent className="p-8">
                  <div className="space-y-8">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <MessageSquare className="h-6 w-6 text-accent animate-pulse-glow" />
                        <h3 className="text-2xl font-bold text-primary">Send a Message</h3>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>Usually responds in 6 hours</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>100% response rate</span>
                        </div>
                      </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div className="space-y-3">
                          <label className="text-sm font-medium text-primary flex items-center">
                            <span>Full Name</span>
                            <span className="text-red-500 ml-1">*</span>
                          </label>
                          <Input
                            value={formData.name}
                            onChange={(e) => handleInputChange('name', e.target.value)}
                            placeholder="Your full name"
                            className="glass-card border-accent/20 focus:border-accent backdrop-blur-sm h-12"
                          />
                        </div>
                        <div className="space-y-3">
                          <label className="text-sm font-medium text-primary flex items-center">
                            <span>Email Address</span>
                            <span className="text-red-500 ml-1">*</span>
                          </label>
                          <Input
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            placeholder="your.email@example.com"
                            className="glass-card border-accent/20 focus:border-accent backdrop-blur-sm h-12"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <label className="text-sm font-medium text-primary">
                          Subject (Optional)
                        </label>
                        <Input
                          value={formData.subject}
                          onChange={(e) => handleInputChange('subject', e.target.value)}
                          placeholder="What's this about?"
                          className="glass-card border-accent/20 focus:border-accent backdrop-blur-sm h-12"
                        />
                      </div>
                      
                      <div className="space-y-3">
                        <label className="text-sm font-medium text-primary flex items-center">
                          <span>Message</span>
                          <span className="text-red-500 ml-1">*</span>
                        </label>
                        <Textarea
                          value={formData.message}
                          onChange={(e) => handleInputChange('message', e.target.value)}
                          placeholder="What would you like to discuss? Feel free to share details about potential collaborations, questions, or just say hello!"
                          rows={6}
                          className="glass-card border-accent/20 focus:border-accent backdrop-blur-sm resize-none"
                        />
                      </div>

                      <Button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full button-glow hero-gradient text-white hover:opacity-90 transition-all duration-300 h-12 text-lg"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center space-x-2">
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            <span>Sending...</span>
                          </div>
                        ) : (
                          <>
                            <Send className="h-5 w-5 mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info & Additional Details */}
            <div className="space-y-8">
              {/* Contact Methods */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-primary">Other Ways to Connect</h3>
                <div className="space-y-4">
                  {contactInfo.map((contact, index) => (
                    <Card key={index} className="group card-hover glass-card border-accent/20 backdrop-blur-md animate-pulse-glow">
                      <CardContent className="p-6">
                        <a 
                          href={contact.href}
                          className="flex items-center space-x-4 group"
                          target={contact.href.startsWith('http') ? '_blank' : undefined}
                          rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          <div className={`p-3 rounded-xl ${contact.color} group-hover:scale-110 transition-transform duration-300 animate-scale-pulse`}>
                            <contact.icon className="h-6 w-6" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <p className="font-medium text-primary group-hover:text-accent transition-colors">
                                {contact.label}
                              </p>
                              <Badge variant="outline" className="text-xs border-accent/30">
                                {contact.available}
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              {contact.value}
                            </p>
                          </div>
                        </a>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Quick Facts */}
              <Card className="glass-card border-accent/20 backdrop-blur-md">
                <CardContent className="p-6 space-y-6">
                  <h4 className="font-bold text-primary flex items-center">
                    <Coffee className="h-5 w-5 mr-2 text-accent" />
                    Quick Facts
                  </h4>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-4 w-4 text-accent" />
                      <div>
                        <p className="text-sm font-medium text-primary">Based in India</p>
                        <p className="text-xs text-muted-foreground">Kattankulathur & Chennai</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Globe className="h-4 w-4 text-accent" />
                      <div>
                        <p className="text-sm font-medium text-primary">Open to Remote Work</p>
                        <p className="text-xs text-muted-foreground">Global collaborations welcome</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Calendar className="h-4 w-4 text-accent" />
                      <div>
                        <p className="text-sm font-medium text-primary">Available for</p>
                        <p className="text-xs text-muted-foreground">Internships, Projects & Consulting</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Fun Fact */}
              <Card className="glass-card border-accent/20 backdrop-blur-md bg-warm-accent/30">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="mx-auto w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                    <Coffee className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">Coffee Chat?</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Always up for a virtual coffee chat to discuss ideas, opportunities, or just to connect!
                    </p>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-accent/30 text-accent hover:bg-accent/10"
                  >
                    <Calendar className="h-4 w-4 mr-2" />
                    Schedule a Call
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;