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
  Coffee
} from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "parv.bhawsar@example.com",
      href: "mailto:parv.bhawsar@example.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 xxxxx xxxxx",
      href: "tel:+91xxxxxxxxx"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "/in/parvbhawsar",
      href: "https://linkedin.com/in/parvbhawsar"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "@parvbhawsar",
      href: "https://github.com/parvbhawsar"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields before submitting.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    
    setFormData({ name: '', email: '', message: '' });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {/* Header */}
          <div className="text-center space-y-4">
            <Badge variant="outline" className="border-accent text-accent">
              Get In Touch
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold text-primary">
              Let's <span className="text-gradient">Connect</span> & Collaborate
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Whether you want to discuss technology, markets, research opportunities, 
              or even a game of chess - I'd love to hear from you!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-primary">Send a Message</h3>
                    <p className="text-muted-foreground">
                      I typically respond within 24 hours
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-primary">
                          Name *
                        </label>
                        <Input
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          placeholder="Your full name"
                          className="border-border focus:border-accent"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-primary">
                          Email *
                        </label>
                        <Input
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="your.email@example.com"
                          className="border-border focus:border-accent"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-primary">
                        Message *
                      </label>
                      <Textarea
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder="What would you like to discuss?"
                        rows={4}
                        className="border-border focus:border-accent resize-none"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full hero-gradient text-white hover:opacity-90 transition-opacity"
                    >
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </div>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-primary">Other Ways to Connect</h3>
                  <p className="text-muted-foreground">
                    Choose your preferred method of communication
                  </p>
                </div>

                <div className="grid gap-4">
                  {contactInfo.map((contact, index) => (
                    <Card key={index} className="card-hover bg-card border-border">
                      <CardContent className="p-6">
                        <a 
                          href={contact.href}
                          className="flex items-center space-x-4 group"
                          target={contact.href.startsWith('http') ? '_blank' : undefined}
                          rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          <div className="p-3 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                            <contact.icon className="h-6 w-6 text-accent" />
                          </div>
                          <div>
                            <p className="font-medium text-primary group-hover:text-accent transition-colors">
                              {contact.label}
                            </p>
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

              {/* Location & Availability */}
              <Card className="bg-warm-accent border-border">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <h4 className="font-semibold text-primary">Based in India</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Currently studying at SRMIST, Kattankulathur & IIT Madras. 
                    Open to remote opportunities and collaborations.
                  </p>
                  
                  <div className="flex items-center space-x-3 pt-2">
                    <Coffee className="h-5 w-5 text-accent" />
                    <span className="text-sm font-medium text-primary">
                      Always up for a virtual coffee chat!
                    </span>
                  </div>
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