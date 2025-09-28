import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Code, 
  Brain, 
  Shield, 
  Database, 
  ExternalLink, 
  Github,
  Stethoscope,
  Search
} from 'lucide-react';

const PortfolioSection = () => {
  const projects = [
    {
      title: "CureSync",
      subtitle: "Smart Skin Solutions",
      description: "A comprehensive Java full-stack application designed to identify skin rashes and infections. Features symptom analysis, personalized remedies, and lifestyle guidance with strong emphasis on user privacy and accessibility.",
      technologies: ["Java", "Spring Boot", "MySQL", "REST API", "Frontend"],
      features: [
        "AI-powered skin condition identification",
        "Personalized treatment recommendations",
        "Symptom tracking and analysis",
        "Privacy-focused design",
        "Accessibility-first approach"
      ],
      icon: Stethoscope,
      color: "bg-green-500/10 text-green-600",
      status: "Completed",
      category: "Healthcare Tech"
    },
    {
      title: "CureVision", 
      subtitle: "Chest X-Ray Classifier",
      description: "Advanced AI/ML project utilizing ResNet18 deep learning architecture to classify chest X-rays into Normal, Pneumonia, and Tuberculosis categories. Includes comprehensive dataset preprocessing and evaluation metrics.",
      technologies: ["Python", "PyTorch", "ResNet18", "Computer Vision", "ML"],
      features: [
        "ResNet18 transfer learning implementation",
        "Multi-class medical image classification",
        "Comprehensive dataset preprocessing",
        "Advanced evaluation metrics",
        "Medical imaging optimization"
      ],
      icon: Search,
      color: "bg-blue-500/10 text-blue-600", 
      status: "Completed",
      category: "AI/ML"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-green-500/10 text-green-600';
      case 'In Progress': return 'bg-yellow-500/10 text-yellow-600';
      case 'Planning': return 'bg-blue-500/10 text-blue-600';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {/* Header */}
          <div className="text-center space-y-4">
            <Badge variant="outline" className="border-accent text-accent">
              Portfolio
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold text-primary">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Exploring the intersection of technology and real-world problems through 
              innovative solutions in healthcare, AI/ML, and beyond.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-12">
            {projects.map((project, index) => (
              <Card key={index} className="card-hover bg-card border-border overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid lg:grid-cols-2 gap-0">
                    {/* Project Info */}
                    <div className="p-8 space-y-6">
                      <div className="flex items-start justify-between">
                        <div className={`p-3 rounded-lg ${project.color}`}>
                          <project.icon className="h-8 w-8" />
                        </div>
                        <div className="flex gap-2">
                          <Badge 
                            variant="secondary" 
                            className={`text-xs ${getStatusColor(project.status)}`}
                          >
                            {project.status}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {project.category}
                          </Badge>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <h3 className="text-2xl font-bold text-primary">
                            {project.title}
                          </h3>
                          <p className="text-lg text-accent font-medium">
                            {project.subtitle}
                          </p>
                        </div>

                        <p className="text-muted-foreground leading-relaxed">
                          {project.description}
                        </p>

                        <div className="space-y-3">
                          <h4 className="font-semibold text-primary">Key Features:</h4>
                          <ul className="space-y-2">
                            {project.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start space-x-2 text-sm text-muted-foreground">
                                <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex gap-3 pt-4">
                          <Button 
                            variant="outline" 
                            size="sm"
                            className="border-primary text-primary hover:bg-primary hover:text-white"
                          >
                            <Github className="h-4 w-4 mr-2" />
                            View Code
                          </Button>
                          <Button 
                            size="sm"
                            className="hero-gradient text-white hover:opacity-90"
                          >
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Learn More
                          </Button>
                        </div>
                      </div>
                    </div>

                    {/* Visual Element */}
                    <div className="bg-gradient-to-br from-accent/5 to-primary/5 p-8 flex items-center justify-center">
                      <div className="text-center space-y-4">
                        <div className={`w-24 h-24 rounded-full ${project.color} flex items-center justify-center mx-auto`}>
                          <project.icon className="h-12 w-12" />
                        </div>
                        <div className="space-y-2">
                          <h4 className="text-lg font-semibold text-primary">
                            {project.category}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            Innovative solution combining technology with real-world impact
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold text-primary">More Projects Coming Soon</h3>
            <p className="text-muted-foreground">
              Always working on something new and exciting. Stay tuned for updates!
            </p>
            <Button className="hero-gradient text-white hover:opacity-90 transition-opacity">
              <Github className="h-4 w-4 mr-2" />
              View All on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;