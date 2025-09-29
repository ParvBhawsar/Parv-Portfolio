import { useState, useEffect } from 'react';
import { ArrowDown, Sparkles, Code, TrendingUp, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import profilePhoto from '@/assets/profile-photo.jpg';

const HeroSection = () => {
  const [typedText, setTypedText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = ['TECH', 'MARKETS', 'RESEARCH', 'CHESS'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const iconMap = {
    TECH: Code,
    MARKETS: TrendingUp,
    RESEARCH: Sparkles,
    CHESS: Crown
  };

  const CurrentIcon = iconMap[words[currentWordIndex] as keyof typeof iconMap];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden hero-gradient-bg">
      {/* Floating Orbs */}
      <div className="floating-orb"></div>
      <div className="floating-orb"></div>
      <div className="floating-orb"></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 chess-pattern"></div>
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Status Badge */}
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <Badge variant="secondary" className="glass-card text-primary border-0 backdrop-blur-sm">
                <Sparkles className="h-3 w-3 mr-1" />
                Available for opportunities
              </Badge>
            </div>
            
            {/* Main Heading */}
            <div className="space-y-6">
              <div className="space-y-3">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-muted-foreground italic opacity-80">
                  Hey there,
                </h2>
                <div className="space-y-2">
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-primary leading-none tracking-tight">
                    I'M
                  </h1>
                  <div className="relative">
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gradient-warm leading-none tracking-tight">
                      PARV
                    </h1>
                    <div className="absolute -right-4 -top-2 lg:-right-8 lg:-top-4">
                      <div className="w-4 h-4 lg:w-6 lg:h-6 bg-accent rounded-full animate-glow"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Dynamic Tagline */}
              <div className="relative h-20 flex items-center">
                <div className="glass-card rounded-2xl p-6 backdrop-blur-md border-accent/20">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-full hero-gradient animate-scale-pulse">
                      <CurrentIcon className="h-6 w-6 text-white" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground font-medium">Currently exploring</p>
                      <h3 className="text-2xl lg:text-3xl font-bold text-gradient transition-all duration-500">
                        {words[currentWordIndex]}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-lg">
                Passionate sophomore student exploring the fascinating intersections of 
                <span className="text-accent font-medium"> technology</span>,
                <span className="text-primary font-medium"> markets</span>, and
                <span className="text-gradient font-medium"> strategic thinking</span>.
              </p>
              
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="border-accent/30 text-accent">
                  B.Tech CSE @ SRMIST
                </Badge>
                <Badge variant="outline" className="border-primary/30 text-primary">
                  BS Data Science @ IIT Madras
                </Badge>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                onClick={() => scrollToSection('#portfolio')}
                className="button-glow hero-gradient text-white hover:opacity-90 transition-all duration-300 transform hover:scale-105 px-8 py-6 text-lg"
                size="lg"
              >
                <Code className="h-5 w-5 mr-2" />
                Explore My Work
              </Button>
              <Button 
                variant="outline" 
                onClick={() => scrollToSection('#about')}
                className="glass-card border-accent/30 text-primary hover:bg-accent/10 px-8 py-6 text-lg backdrop-blur-sm"
                size="lg"
              >
                <Sparkles className="h-5 w-5 mr-2" />
                About Me
              </Button>
            </div>
          </div>

          {/* Right Content - Enhanced Portrait */}
          <div className="flex justify-center lg:justify-end animate-slide-up">
            <div className="relative group">
              {/* Main Portrait */}
              <div className="relative">
                <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-gradient-to-r from-accent to-primary shadow-2xl animate-glow group-hover:scale-105 transition-transform duration-500">
                  <img 
                    src={profilePhoto} 
                    alt="Parv Bhawsar - Tech, Markets, Research & Chess" 
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                
                {/* Floating Skills */}
                <div className="absolute -top-6 -left-6 glass-card rounded-2xl p-3 animate-float">
                  <Code className="h-6 w-6 text-accent" />
                </div>
                <div className="absolute -bottom-6 -right-6 glass-card rounded-2xl p-3 animate-float" style={{animationDelay: '1s'}}>
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <div className="absolute top-1/2 -right-8 glass-card rounded-2xl p-3 animate-float" style={{animationDelay: '2s'}}>
                  <Crown className="h-6 w-6 text-gradient" />
                </div>
                <div className="absolute top-1/4 -left-8 glass-card rounded-2xl p-3 animate-float" style={{animationDelay: '3s'}}>
                  <Sparkles className="h-6 w-6 text-accent" />
                </div>
              </div>

              {/* Achievement Ring */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-accent/30 animate-spin-slow" style={{animationDuration: '20s'}}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-3 animate-bounce">
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => scrollToSection('#about')}
            className="glass-card hover:bg-accent/10 text-muted-foreground hover:text-accent transition-all duration-300 backdrop-blur-sm"
          >
            <div className="flex flex-col items-center space-y-2">
              <span className="text-sm font-medium">Discover More</span>
              <ArrowDown className="h-4 w-4 animate-bounce" />
            </div>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;