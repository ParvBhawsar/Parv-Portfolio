import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Brain, Users, TrendingUp } from 'lucide-react';

const AboutSection = () => {
  const education = [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "SRMIST, Kattankulathur",
      status: "Sophomore",
      icon: GraduationCap,
    },
    {
      degree: "BS in Data Science & Applications",
      institution: "IIT Madras",
      status: "Ongoing",
      icon: Brain,
    }
  ];

  const strengths = [
    {
      title: "Communication",
      description: "Articulating complex ideas clearly and building meaningful connections",
      icon: Users,
    },
    {
      title: "Problem-Solving",
      description: "Analytical thinking with creative approaches to challenges",
      icon: Brain,
    },
    {
      title: "Research & Learning",
      description: "Continuous curiosity-driven exploration and knowledge acquisition",
      icon: GraduationCap,
    },
    {
      title: "Adaptability",
      description: "Thriving in dynamic environments with changing requirements",
      icon: TrendingUp,
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {/* Header */}
          <div className="text-center space-y-4">
            <Badge variant="outline" className="border-accent text-accent">
              About Me
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold text-primary">
              I like to talk about{' '}
              <span className="text-gradient">Tech, Markets, Research & Chess</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              As a passionate student with a curiosity-driven mindset, I'm on a dual academic journey 
              exploring the fascinating intersections of technology, financial markets, research methodologies, 
              and strategic thinking through chess.
            </p>
          </div>

          {/* Education Timeline */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-center text-primary">Education Journey</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {education.map((edu, index) => (
                <Card key={index} className="card-hover bg-card border-border">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 rounded-lg bg-accent/10">
                        <edu.icon className="h-6 w-6 text-accent" />
                      </div>
                      <div className="space-y-2">
                        <Badge variant="secondary" className="text-xs">
                          {edu.status}
                        </Badge>
                        <h4 className="text-lg font-semibold text-primary">
                          {edu.degree}
                        </h4>
                        <p className="text-muted-foreground">
                          {edu.institution}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Core Strengths */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-center text-primary">Core Strengths</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {strengths.map((strength, index) => (
                <Card key={index} className="card-hover bg-card border-border text-center">
                  <CardContent className="p-6 space-y-4">
                    <div className="mx-auto w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <strength.icon className="h-6 w-6 text-accent" />
                    </div>
                    <h4 className="text-lg font-semibold text-primary">
                      {strength.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {strength.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Learning Next */}
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold text-primary">Currently Exploring</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {['Quantitative Finance', 'Machine Learning', 'Strategic Consulting', 'Market Analysis'].map((topic) => (
                <Badge key={topic} variant="outline" className="border-accent text-accent px-4 py-2">
                  {topic}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;