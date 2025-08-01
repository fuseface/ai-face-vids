import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play, Sparkles, Star } from 'lucide-react';
import heroImage from '@/assets/hero-fusion.jpg';

export const Hero = () => {
  const scrollToForm = () => {
    document.getElementById('order-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/50 to-background/90" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Badge */}
        <Badge className="mb-6 bg-gradient-primary text-primary-foreground animate-float">
          <Sparkles className="w-4 h-4 mr-1" />
          AI Fusion Technology
        </Badge>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Transform Your Face Into
          <span className="block bg-gradient-primary bg-clip-text text-transparent animate-pulse-glow">
            Epic Creatures
          </span>
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Experience the magic of AI fusion technology. Seamlessly blend your face with majestic animals 
          to create stunning, professional-quality videos that will amaze your audience.
        </p>

        {/* Features */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {[
            'Lions & Tigers',
            'Wolves & Eagles',
            'Fantasy Creatures',
            'Custom Animals'
          ].map((feature, index) => (
            <div key={index} className="flex items-center gap-2 text-sm bg-muted/50 px-3 py-2 rounded-full border border-border">
              <Star className="w-4 h-4 text-primary" />
              {feature}
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            onClick={scrollToForm}
            className="bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold px-8 py-6 animate-pulse-glow"
          >
            <Play className="w-5 h-5 mr-2" />
            Create My Fusion Video
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary/30 hover:bg-primary/10 px-8 py-6"
            onClick={() => document.getElementById('examples')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Examples
          </Button>
        </div>

        {/* Price Preview */}
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground mb-2">Starting from</p>
          <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            €45
          </div>
          <p className="text-sm text-muted-foreground">Professional AI Fusion Video</p>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-5 w-16 h-16 bg-accent/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
    </section>
  );
};