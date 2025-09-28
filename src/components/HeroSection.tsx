import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import portraitImage from '@/assets/parv-portrait.jpg';

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 chess-pattern"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <Badge variant="secondary" className="bg-warm-accent text-primary border-0">
                Available for new opportunities
              </Badge>
              
              <div className="space-y-2">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-muted-foreground italic">
                  Hey, there
                </h2>
                <div className="space-y-1">
                  <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-primary leading-none">
                    I AM
                  </h1>
                  <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-primary leading-none">
                    PARV
                  </h1>
                </div>
              </div>
              
              <div className="text-right">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gradient">
                  TECH | MARKETS
                </h3>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gradient">
                  RESEARCH | CHESS
                </h3>
              </div>
            </div>

            <p className="text-lg text-muted-foreground max-w-md">
              Passionate sophomore student exploring the intersections of technology, 
              markets, research, and strategic thinking through chess.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection('#portfolio')}
                className="hero-gradient text-white hover:opacity-90 transition-opacity"
              >
                View My Work
              </Button>
              <Button 
                variant="outline" 
                onClick={() => scrollToSection('#about')}
                className="border-primary text-primary hover:bg-primary hover:text-white"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Right Content - Portrait */}
          <div className="flex justify-center lg:justify-end animate-slide-up">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-accent/20 shadow-2xl animate-float">
                <img 
                  src={portraitImage} 
                  alt="Parv Bhawsar - Portfolio" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary rounded-full animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button 
          variant="ghost" 
          size="sm"
          onClick={() => scrollToSection('#about')}
          className="flex flex-col items-center space-y-2 text-muted-foreground hover:text-accent"
        >
          <span className="text-sm">Scroll to explore</span>
          <ArrowDown className="h-4 w-4" />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;