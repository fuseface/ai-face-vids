import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Zap, 
  Palette, 
  Music, 
  Shield, 
  Clock, 
  Star,
  Sparkles,
  Camera,
  Settings
} from 'lucide-react';

export const Features = () => {
  const features = [
    {
      icon: Zap,
      title: 'AI-Powered Fusion',
      description: 'Advanced deep learning algorithms for seamless face-animal blending',
      color: 'text-primary'
    },
    {
      icon: Palette,
      title: 'Multiple Styles',
      description: 'Choose from realistic, cinematic, fantasy, or futuristic aesthetics',
      color: 'text-secondary'
    },
    {
      icon: Music,
      title: 'Custom Soundtracks',
      description: 'Professional music library with epic, electronic, and ambient tracks',
      color: 'text-accent'
    },
    {
      icon: Camera,
      title: 'Ultra HD Quality',
      description: 'Up to 4K resolution with 120fps for crystal clear results',
      color: 'text-primary'
    },
    {
      icon: Settings,
      title: 'Flexible Formats',
      description: 'Perfect aspect ratios for Instagram, YouTube, TikTok, and Stories',
      color: 'text-secondary'
    },
    {
      icon: Clock,
      title: 'Fast Delivery',
      description: '24-48 hour turnaround for most orders with premium quality',
      color: 'text-accent'
    },
    {
      icon: Shield,
      title: 'Secure Process',
      description: 'Your photos are processed securely and deleted after completion',
      color: 'text-primary'
    },
    {
      icon: Star,
      title: 'Unlimited Revisions',
      description: 'We work with you until you\'re 100% satisfied with the result',
      color: 'text-secondary'
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-gradient-primary text-primary-foreground">
            <Sparkles className="w-4 h-4 mr-1" />
            Why Choose FusionFace
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Cutting-Edge <span className="bg-gradient-primary bg-clip-text text-transparent">Technology</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience the most advanced AI fusion technology with professional results that exceed expectations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="bg-gradient-card border-primary/30 shadow-card hover:shadow-glow transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 rounded-full bg-muted/50 group-hover:bg-primary/10 transition-colors">
                    <feature.icon className={`w-6 h-6 ${feature.color} group-hover:scale-110 transition-transform`} />
                  </div>
                </div>
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};