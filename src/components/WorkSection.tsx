import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Brain, 
  Users, 
  TrendingUp, 
  Award, 
  Gamepad2, 
  Building, 
  HandHeart,
  Crown
} from 'lucide-react';

const WorkSection = () => {
  const experiences = [
    {
      title: "ChatGPT Lab Member",
      organization: "OpenAI (India)",
      type: "Community",
      description: "Contributing to AI research and development initiatives",
      icon: Brain,
      color: "bg-green-500/10 text-green-600",
    },
    {
      title: "Class Representative",
      organization: "SRMIST",
      type: "Leadership",
      description: "Bridging communication between students and faculty",
      icon: Users,
      color: "bg-blue-500/10 text-blue-600",
    },
    {
      title: "Lead, Outreach & Sponsorship",
      organization: "Ramanujan Mathematics Club",
      type: "Leadership",
      description: "Managing external partnerships and funding initiatives",
      icon: TrendingUp,
      color: "bg-purple-500/10 text-purple-600",
    },
    {
      title: "Council Member",
      organization: "Shah Maat Chess Society (IIT Madras BS)",
      type: "Community",
      description: "Organizing chess tournaments and strategic thinking workshops",
      icon: Crown,
      color: "bg-yellow-500/10 text-yellow-600",
    },
    {
      title: "Committee Member",
      organization: "Directorate of Student Affairs (SRMIST)",
      type: "Administration",
      description: "Contributing to student welfare and campus development",
      icon: Building,
      color: "bg-red-500/10 text-red-600",
    },
    {
      title: "Club Member",
      organization: "Rubik's Club (SRMIST)",
      type: "Community",
      description: "Exploring problem-solving through speedcubing",
      icon: Gamepad2,
      color: "bg-indigo-500/10 text-indigo-600",
    },
    {
      title: "Volunteer",
      organization: "Placfv's Placement Cell (SRMIST)",
      type: "Service",
      description: "Supporting placement activities and career guidance",
      icon: HandHeart,
      color: "bg-teal-500/10 text-teal-600",
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Leadership': return 'bg-accent/10 text-accent';
      case 'Community': return 'bg-primary/10 text-primary';
      case 'Service': return 'bg-green-500/10 text-green-600';
      case 'Administration': return 'bg-orange-500/10 text-orange-600';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <section id="work" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {/* Header */}
          <div className="text-center space-y-4">
            <Badge variant="outline" className="border-accent text-accent">
              Experience & Leadership
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold text-primary">
              Building <span className="text-gradient">Communities</span> & Leading <span className="text-gradient">Initiatives</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Through various leadership roles and community involvement, I've developed 
              strong organizational skills and a passion for bringing people together 
              around shared interests and goals.
            </p>
          </div>

          {/* Experience Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {experiences.map((exp, index) => (
              <Card key={index} className="card-hover bg-card border-border">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <div className={`p-3 rounded-lg ${exp.color}`}>
                      <exp.icon className="h-6 w-6" />
                    </div>
                    <Badge 
                      variant="secondary" 
                      className={`text-xs ${getTypeColor(exp.type)}`}
                    >
                      {exp.type}
                    </Badge>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-primary line-clamp-2">
                      {exp.title}
                    </h3>
                    <p className="text-sm font-medium text-accent">
                      {exp.organization}
                    </p>
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {exp.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Key Achievements */}
          <div className="text-center space-y-8">
            <h3 className="text-3xl font-bold text-primary">Key Impact Areas</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-gradient">7+</div>
                <p className="text-muted-foreground">Active Roles</p>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-gradient">3</div>
                <p className="text-muted-foreground">Leadership Positions</p>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-gradient">2</div>
                <p className="text-muted-foreground">Institution Involvement</p>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-gradient">4</div>
                <p className="text-muted-foreground">Domain Areas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;