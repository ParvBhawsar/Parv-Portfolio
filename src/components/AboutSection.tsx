import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { GraduationCap, Brain, Users, TrendingUp, ChevronRight, Star, Award } from 'lucide-react';

const AboutSection = () => {
  const [activeStrength, setActiveStrength] = useState(0);

  const education = [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "SRMIST, Kattankulathur",
      status: "Sophomore",
      year: "2023-2027",
      icon: GraduationCap,
      color: "bg-blue-500/10 text-blue-600",
      achievements: ["Dean's List", "Programming Club Lead"]
    },
    {
      degree: "BS in Data Science & Applications",
      institution: "IIT Madras",
      status: "Ongoing",
      year: "2023-2027",
      icon: Brain,
      color: "bg-purple-500/10 text-purple-600",
      achievements: ["Online Program", "Research Focus"]
    }
  ];

  const strengths = [
    {
      title: "Communication",
      description: "Articulating complex ideas clearly and building meaningful connections across diverse audiences",
      icon: Users,
      color: "bg-green-500/10 text-green-600",
      details: "Leading presentations, facilitating discussions, and creating compelling narratives",
      metric: "95% presentation success rate"
    },
    {
      title: "Problem-Solving",
      description: "Analytical thinking with creative approaches to complex challenges",
      icon: Brain,
      color: "bg-blue-500/10 text-blue-600",
      details: "Breaking down complex problems, researching solutions, and implementing strategies",
      metric: "50+ projects completed"
    },
    {
      title: "Research & Learning",
      description: "Continuous curiosity-driven exploration and knowledge acquisition",
      icon: GraduationCap,
      color: "bg-purple-500/10 text-purple-600",
      details: "Academic research, market analysis, and emerging technology exploration",
      metric: "Lifelong learner mindset"
    },
    {
      title: "Adaptability",
      description: "Thriving in dynamic environments with changing requirements",
      icon: TrendingUp,
      color: "bg-orange-500/10 text-orange-600",
      details: "Quick to learn new technologies, adapt to new situations, and embrace change",
      metric: "Multiple domains mastered"
    }
  ];

  const exploringTopics = [
    { name: 'Quantitative Finance', level: 85, color: 'bg-blue-500' },
    { name: 'Machine Learning', level: 78, color: 'bg-purple-500' },
    { name: 'Strategic Consulting', level: 72, color: 'bg-green-500' },
    { name: 'Market Analysis', level: 80, color: 'bg-orange-500' }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-background via-secondary/20 to-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="floating-orb !w-32 !h-32 !top-10 !right-20"></div>
        <div className="floating-orb !w-20 !h-20 !bottom-20 !left-10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="space-y-20">
          {/* Enhanced Header */}
          <div className="text-center space-y-6 animate-fade-in">
            <div className="inline-flex items-center space-x-2 glass-card rounded-full px-6 py-3 backdrop-blur-md">
              <Star className="h-4 w-4 text-accent animate-pulse" />
              <Badge variant="outline" className="border-accent/30 text-accent bg-transparent">
                About Me
              </Badge>
            </div>
            <h2 className="text-4xl sm:text-6xl font-bold text-primary leading-tight">
              I love exploring{' '}
              <span className="text-gradient block sm:inline">Tech, Markets, Research & Chess</span>
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-muted-foreground leading-relaxed">
                As a passionate student with a <span className="text-accent font-medium">curiosity-driven mindset</span>, 
                I'm on a dual academic journey exploring the fascinating intersections of technology, 
                financial markets, research methodologies, and strategic thinking.
              </p>
            </div>
          </div>

          {/* Enhanced Education Timeline */}
          <div className="space-y-8 animate-slide-up">
            <div className="text-center space-y-4">
              <h3 className="text-3xl font-bold text-primary">Academic Journey</h3>
              <p className="text-muted-foreground">Pursuing excellence across multiple domains</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {education.map((edu, index) => (
                <Card key={index} className="group card-hover glass-card border-accent/20 backdrop-blur-md overflow-hidden">
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div className="flex items-start justify-between">
                        <div className={`p-4 rounded-2xl ${edu.color} group-hover:scale-110 transition-transform duration-300`}>
                          <edu.icon className="h-8 w-8" />
                        </div>
                        <div className="text-right space-y-1">
                          <Badge variant="secondary" className={`${edu.color} border-0`}>
                            {edu.status}
                          </Badge>
                          <p className="text-sm text-muted-foreground">{edu.year}</p>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <h4 className="text-xl font-bold text-primary group-hover:text-accent transition-colors">
                          {edu.degree}
                        </h4>
                        <p className="text-accent font-medium flex items-center">
                          <Award className="h-4 w-4 mr-2" />
                          {edu.institution}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 pt-2">
                          {edu.achievements.map((achievement) => (
                            <Badge key={achievement} variant="outline" className="text-xs border-primary/30">
                              {achievement}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Interactive Core Strengths */}
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h3 className="text-3xl font-bold text-primary">Core Strengths</h3>
              <p className="text-muted-foreground">Key capabilities that drive my success</p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Strength Cards */}
              <div className="grid sm:grid-cols-2 gap-6">
                {strengths.map((strength, index) => (
                  <Card 
                    key={index} 
                    className={`group cursor-pointer transition-all duration-300 ${
                      activeStrength === index 
                        ? 'glass-card border-accent/50 scale-105 shadow-xl shadow-accent/20' 
                        : 'card-hover bg-card border-border hover:border-accent/30'
                    }`}
                    onClick={() => setActiveStrength(index)}
                  >
                    <CardContent className="p-6 text-center space-y-4">
                      <div className={`mx-auto w-16 h-16 rounded-2xl ${strength.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <strength.icon className="h-8 w-8" />
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-lg font-bold text-primary group-hover:text-accent transition-colors">
                          {strength.title}
                        </h4>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {strength.description}
                        </p>
                      </div>
                      {activeStrength === index && (
                        <ChevronRight className="mx-auto h-4 w-4 text-accent animate-bounce" />
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Active Strength Details */}
              <Card className="glass-card border-accent/30 backdrop-blur-md">
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className={`p-4 rounded-2xl ${strengths[activeStrength].color}`}>
                      {(() => {
                        const IconComponent = strengths[activeStrength].icon;
                        return <IconComponent className="h-8 w-8" />;
                      })()}
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-primary">
                        {strengths[activeStrength].title}
                      </h4>
                      <Badge variant="secondary" className="mt-1">
                        {strengths[activeStrength].metric}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {strengths[activeStrength].description}
                    </p>
                    <p className="text-primary font-medium">
                      {strengths[activeStrength].details}
                    </p>
                  </div>

                  <Button 
                    variant="outline" 
                    className="w-full border-accent/30 text-accent hover:bg-accent/10"
                  >
                    Learn More
                    <ChevronRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Enhanced Learning Progress */}
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h3 className="text-3xl font-bold text-primary">Currently Exploring</h3>
              <p className="text-muted-foreground">Always expanding my knowledge horizon</p>
            </div>
            
            <Card className="glass-card border-accent/20 backdrop-blur-md">
              <CardContent className="p-8">
                <div className="grid sm:grid-cols-2 gap-8">
                  {exploringTopics.map((topic, index) => (
                    <div key={index} className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-primary">{topic.name}</span>
                        <span className="text-sm text-muted-foreground">{topic.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                        <div 
                          className={`h-full ${topic.color} rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${topic.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;