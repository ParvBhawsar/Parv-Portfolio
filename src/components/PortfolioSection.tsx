import { useState } from 'react';
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
  Search,
  Star,
  ChevronRight,
  Calendar,
  Users,
  Award,
  TrendingUp,
  Zap
} from 'lucide-react';

const PortfolioSection = () => {
  const [selectedProject, setSelectedProject] = useState(0);

  const projects = [
    {
      title: "CureSync",
      subtitle: "Smart Skin Solutions",
      description: "A comprehensive Java full-stack application designed to identify skin rashes and infections. Features symptom analysis, personalized remedies, and lifestyle guidance with strong emphasis on user privacy and accessibility.",
      fullDescription: "CureSync revolutionizes dermatological care by providing instant, AI-powered skin condition identification. The platform combines computer vision with medical expertise to deliver accurate diagnoses and personalized treatment recommendations.",
      technologies: ["Java", "Spring Boot", "MySQL", "REST API", "React", "TensorFlow"],
      features: [
        "AI-powered skin condition identification with 94% accuracy",
        "Personalized treatment recommendations based on user profile",
        "Symptom tracking and progress monitoring",
        "Privacy-focused design with local data processing",
        "Accessibility-first approach with voice navigation",
        "Telemedicine integration for professional consultation"
      ],
      metrics: {
        accuracy: "94%",
        users: "500+",
        conditions: "50+",
        satisfaction: "4.8/5"
      },
      icon: Stethoscope,
      color: "bg-green-500/10 text-green-600 border-green-500/20",
      status: "Production Ready",
      category: "Healthcare Tech",
      timeline: "6 months",
      team: "4 members"
    },
    {
      title: "CureVision", 
      subtitle: "Chest X-Ray Classifier",
      description: "Advanced AI/ML project utilizing ResNet18 deep learning architecture to classify chest X-rays into Normal, Pneumonia, and Tuberculosis categories. Includes comprehensive dataset preprocessing and evaluation metrics.",
      fullDescription: "CureVision leverages state-of-the-art deep learning to assist radiologists in chest X-ray analysis. The system processes medical images in real-time, providing accurate classifications that support clinical decision-making.",
      technologies: ["Python", "PyTorch", "ResNet18", "OpenCV", "Scikit-learn", "DICOM"],
      features: [
        "ResNet18 transfer learning with custom architecture",
        "Multi-class medical image classification (Normal/Pneumonia/TB)",
        "Real-time image processing and analysis",
        "Comprehensive dataset preprocessing pipeline",
        "Advanced evaluation metrics and validation",
        "DICOM image format support for clinical integration"
      ],
      metrics: {
        accuracy: "96.2%",
        dataset: "10k+",
        processing: "<2s",
        precision: "95.8%"
      },
      icon: Search,
      color: "bg-blue-500/10 text-blue-600 border-blue-500/20", 
      status: "Research Complete",
      category: "AI/ML",
      timeline: "4 months",
      team: "Solo project"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Production Ready': return 'bg-green-500/10 text-green-600 border-green-500/20';
      case 'Research Complete': return 'bg-blue-500/10 text-blue-600 border-blue-500/20';
      case 'In Progress': return 'bg-yellow-500/10 text-yellow-600 border-yellow-500/20';
      case 'Planning': return 'bg-purple-500/10 text-purple-600 border-purple-500/20';
      default: return 'bg-muted text-muted-foreground border-muted/20';
    }
  };

  const currentProject = projects[selectedProject];

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-background via-secondary/10 to-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="floating-orb !w-28 !h-28 !top-16 !right-16"></div>
        <div className="floating-orb !w-20 !h-20 !bottom-32 !left-12"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="space-y-20">
          {/* Enhanced Header */}
          <div className="text-center space-y-6 animate-fade-in">
            <div className="inline-flex items-center space-x-2 glass-card rounded-full px-6 py-3 backdrop-blur-md">
              <Star className="h-4 w-4 text-accent animate-pulse" />
              <Badge variant="outline" className="border-accent/30 text-accent bg-transparent">
                Portfolio
              </Badge>
            </div>
            <h2 className="text-4xl sm:text-6xl font-bold text-primary leading-tight">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Exploring the intersection of technology and real-world problems through 
              innovative solutions in healthcare, AI/ML, and beyond.
            </p>
          </div>

          {/* Project Selector */}
          <div className="flex justify-center">
            <div className="flex gap-4 p-2 glass-card rounded-2xl backdrop-blur-md">
              {projects.map((project, index) => (
                <Button
                  key={index}
                  variant={selectedProject === index ? "default" : "ghost"}
                  onClick={() => setSelectedProject(index)}
                  className={`flex items-center space-x-3 px-6 py-4 transition-all duration-300 ${
                    selectedProject === index
                      ? "hero-gradient text-white shadow-lg"
                      : "hover:bg-accent/10 text-muted-foreground hover:text-accent"
                  }`}
                >
                  <project.icon className="h-5 w-5" />
                  <span className="font-medium">{project.title}</span>
                </Button>
              ))}
            </div>
          </div>

          {/* Enhanced Project Display */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Project Details */}
            <div className="space-y-8">
              <Card className="glass-card border-accent/20 backdrop-blur-md overflow-hidden">
                <CardContent className="p-8 space-y-6">
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div className={`p-4 rounded-2xl ${currentProject.color.split(' ')[0]}/20`}>
                      <currentProject.icon className={`h-10 w-10 ${currentProject.color.split(' ')[1]}`} />
                    </div>
                    <div className="flex flex-col gap-2">
                      <Badge 
                        variant="secondary" 
                        className={`text-xs ${getStatusColor(currentProject.status)}`}
                      >
                        {currentProject.status}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {currentProject.category}
                      </Badge>
                    </div>
                  </div>

                  {/* Title */}
                  <div className="space-y-2">
                    <h3 className="text-3xl font-bold text-primary">
                      {currentProject.title}
                    </h3>
                    <p className="text-xl text-accent font-medium">
                      {currentProject.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {currentProject.fullDescription}
                  </p>

                  {/* Meta Info */}
                  <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-accent/5 border border-accent/20">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-accent" />
                      <span className="text-sm font-medium">{currentProject.timeline}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-accent" />
                      <span className="text-sm font-medium">{currentProject.team}</span>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-primary flex items-center">
                      <Code className="h-4 w-4 mr-2" />
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {currentProject.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs border-primary/20">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="flex-1 border-primary/30 text-primary hover:bg-primary hover:text-white"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      View Code
                    </Button>
                    <Button 
                      size="sm"
                      className="flex-1 hero-gradient text-white hover:opacity-90"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Features & Metrics */}
            <div className="space-y-8">
              {/* Key Features */}
              <Card className="glass-card border-accent/20 backdrop-blur-md">
                <CardContent className="p-8 space-y-6">
                  <h4 className="text-xl font-bold text-primary flex items-center">
                    <Zap className="h-5 w-5 mr-2 text-accent" />
                    Key Features
                  </h4>
                  <ul className="space-y-3">
                    {currentProject.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3 text-sm text-muted-foreground">
                        <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Project Metrics */}
              <Card className="glass-card border-accent/20 backdrop-blur-md">
                <CardContent className="p-8 space-y-6">
                  <h4 className="text-xl font-bold text-primary flex items-center">
                    <TrendingUp className="h-5 w-5 mr-2 text-accent" />
                    Project Metrics
                  </h4>
                  <div className="grid grid-cols-2 gap-6">
                    {Object.entries(currentProject.metrics).map(([key, value]) => (
                      <div key={key} className="text-center space-y-2">
                        <div className="text-2xl font-bold text-gradient">
                          {value}
                        </div>
                        <p className="text-sm text-muted-foreground capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Awards/Recognition */}
              <Card className="glass-card border-accent/20 backdrop-blur-md">
                <CardContent className="p-8 space-y-4">
                  <h4 className="text-lg font-bold text-primary flex items-center">
                    <Award className="h-5 w-5 mr-2 text-accent" />
                    Recognition
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 p-3 rounded-lg bg-accent/5">
                      <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                        <Star className="h-4 w-4 text-accent" />
                      </div>
                      <div>
                        <p className="font-medium text-primary">Best Innovation Award</p>
                        <p className="text-xs text-muted-foreground">College Tech Fest 2024</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center space-y-6">
            <Card className="glass-card border-accent/20 backdrop-blur-md inline-block">
              <CardContent className="p-8">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-primary">More Projects Coming Soon</h3>
                  <p className="text-muted-foreground max-w-md">
                    Always working on something new and exciting. Stay tuned for updates!
                  </p>
                  <Button className="hero-gradient text-white hover:opacity-90 transition-opacity">
                    <Github className="h-4 w-4 mr-2" />
                    View All on GitHub
                    <ChevronRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;