import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Brain, 
  Users, 
  TrendingUp, 
  Award, 
  Gamepad2, 
  Building, 
  HandHeart,
  Crown,
  ChevronRight,
  Calendar,
  MapPin,
  Star
} from 'lucide-react';

const WorkSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const experiences = [
    {
      title: "ChatGPT Lab Member",
      organization: "OpenAI (India)",
      type: "Community",
      category: "Tech",
      description: "Contributing to AI research and development initiatives, exploring cutting-edge technologies",
      impact: "Collaborated on AI research projects",
      duration: "2024 - Present",
      location: "Remote",
      icon: Brain,
      color: "bg-green-500/10 text-green-600 border-green-500/20",
      achievements: ["AI Research", "Community Building", "Innovation"]
    },
    {
      title: "Class Representative",
      organization: "SRMIST",
      type: "Leadership",
      category: "Leadership",
      description: "Bridging communication between students and faculty, organizing academic events",
      impact: "Improved student-faculty relations",
      duration: "2023 - Present",
      location: "Kattankulathur",
      icon: Users,
      color: "bg-blue-500/10 text-blue-600 border-blue-500/20",
      achievements: ["Communication", "Event Management", "Advocacy"]
    },
    {
      title: "Lead, Outreach & Sponsorship",
      organization: "Ramanujan Mathematics Club",
      type: "Leadership",
      category: "Leadership",
      description: "Managing external partnerships and funding initiatives for mathematical events",
      impact: "Secured ₹50k+ in sponsorships",
      duration: "2023 - Present",
      location: "SRMIST",
      icon: TrendingUp,
      color: "bg-purple-500/10 text-purple-600 border-purple-500/20",
      achievements: ["Partnership", "Fundraising", "Strategy"]
    },
    {
      title: "Council Member",
      organization: "Shah Maat Chess Society (IIT Madras BS)",
      type: "Community",
      category: "Chess",
      description: "Organizing chess tournaments and strategic thinking workshops",
      impact: "Organized 10+ tournaments",
      duration: "2023 - Present",
      location: "Online",
      icon: Crown,
      color: "bg-yellow-500/10 text-yellow-600 border-yellow-500/20",
      achievements: ["Strategy", "Organization", "Competition"]
    },
    {
      title: "Committee Member",
      organization: "Directorate of Student Affairs (SRMIST)",
      type: "Administration",
      category: "Service",
      description: "Contributing to student welfare and campus development initiatives",
      impact: "Enhanced student services",
      duration: "2023 - Present",
      location: "Kattankulathur",
      icon: Building,
      color: "bg-red-500/10 text-red-600 border-red-500/20",
      achievements: ["Administration", "Welfare", "Development"]
    },
    {
      title: "Club Member",
      organization: "Rubik's Club (SRMIST)",
      type: "Community",
      category: "Problem-Solving",
      description: "Exploring problem-solving through speedcubing and puzzle competitions",
      impact: "Sub-30 second solver",
      duration: "2023 - Present",
      location: "SRMIST",
      icon: Gamepad2,
      color: "bg-indigo-500/10 text-indigo-600 border-indigo-500/20",
      achievements: ["Problem-Solving", "Speed", "Logic"]
    },
    {
      title: "Volunteer",
      organization: "Placfv's Placement Cell (SRMIST)",
      type: "Service",
      category: "Service",
      description: "Supporting placement activities and career guidance for fellow students",
      impact: "Assisted 100+ students",
      duration: "2023 - Present",
      location: "SRMIST",
      icon: HandHeart,
      color: "bg-teal-500/10 text-teal-600 border-teal-500/20",
      achievements: ["Mentoring", "Guidance", "Support"]
    }
  ];

  const categories = ['All', 'Leadership', 'Tech', 'Chess', 'Service', 'Problem-Solving'];
  
  const filteredExperiences = selectedCategory === 'All' 
    ? experiences 
    : experiences.filter(exp => exp.category === selectedCategory);

  const stats = [
    { label: "Active Roles", value: "7+", icon: Award },
    { label: "Leadership Positions", value: "3", icon: Crown },
    { label: "Institutions", value: "2", icon: Building },
    { label: "Domain Areas", value: "4", icon: TrendingUp }
  ];

  return (
    <section id="work" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="floating-orb !w-24 !h-24 !top-20 !right-10"></div>
        <div className="floating-orb !w-16 !h-16 !bottom-40 !left-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="space-y-20">
          {/* Enhanced Header */}
          <div className="text-center space-y-6 animate-fade-in">
            <div className="inline-flex items-center space-x-2 glass-card rounded-full px-6 py-3 backdrop-blur-md">
              <Star className="h-4 w-4 text-accent animate-pulse" />
              <Badge variant="outline" className="border-accent/30 text-accent bg-transparent">
                Experience & Leadership
              </Badge>
            </div>
            <h2 className="text-4xl sm:text-6xl font-bold text-primary leading-tight">
              Building <span className="text-gradient">Communities</span>
              <br />
              & Leading <span className="text-gradient">Initiatives</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Through various leadership roles and community involvement, I've developed 
              strong organizational skills and a passion for bringing people together 
              around shared interests and goals.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`transition-all duration-300 ${
                  selectedCategory === category
                    ? "hero-gradient text-white shadow-lg shadow-accent/20"
                    : "glass-card border-accent/30 hover:border-accent/50 hover:bg-accent/5"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Enhanced Experience Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredExperiences.map((exp, index) => (
              <Card 
                key={index} 
                className={`group card-hover glass-card backdrop-blur-md border-2 ${exp.color} overflow-hidden relative`}
              >
                <CardContent className="p-6 space-y-6">
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div className={`p-4 rounded-2xl ${exp.color.split(' ')[0]}/20 group-hover:scale-110 transition-transform duration-300`}>
                      <exp.icon className={`h-8 w-8 ${exp.color.split(' ')[1]}`} />
                    </div>
                    <Badge 
                      variant="secondary" 
                      className={`text-xs ${exp.color}`}
                    >
                      {exp.type}
                    </Badge>
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-lg font-bold text-primary group-hover:text-accent transition-colors line-clamp-2">
                        {exp.title}
                      </h3>
                      <p className="text-sm font-medium text-accent flex items-center">
                        <Building className="h-3 w-3 mr-1" />
                        {exp.organization}
                      </p>
                    </div>
                    
                    <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    {/* Meta Info */}
                    <div className="space-y-2 text-xs text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {exp.duration}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-3 w-3 mr-1" />
                        {exp.location}
                      </div>
                    </div>
                    
                    {/* Impact */}
                    <div className="p-3 rounded-lg bg-accent/5 border border-accent/20">
                      <p className="text-sm font-medium text-accent">
                        {exp.impact}
                      </p>
                    </div>
                    
                    {/* Achievements */}
                    <div className="flex flex-wrap gap-1">
                      {exp.achievements.map((achievement) => (
                        <Badge 
                          key={achievement} 
                          variant="outline" 
                          className="text-xs border-primary/20 text-primary/70"
                        >
                          {achievement}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Learn More Button */}
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="w-full group-hover:bg-accent/10 transition-colors"
                  >
                    Learn More
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Enhanced Stats */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="glass-card border-accent/20 backdrop-blur-md text-center group">
                <CardContent className="p-8 space-y-4">
                  <div className="mx-auto w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="h-8 w-8 text-accent" />
                  </div>
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-gradient">
                      {stat.value}
                    </div>
                    <p className="text-muted-foreground font-medium">
                      {stat.label}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;