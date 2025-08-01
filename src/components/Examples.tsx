import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Play, Eye, Clock } from 'lucide-react';

export const Examples = () => {
  const examples = [
    {
      title: 'Lion Warrior Fusion',
      description: 'Epic transformation with cinematic effects',
      style: 'Cinematic',
      duration: '30s',
      quality: '4K',
      price: '€120'
    },
    {
      title: 'Eagle Spirit',
      description: 'Soaring through mystical landscapes',
      style: 'Fantasy',
      duration: '45s',
      quality: '1080p',
      price: '€85'
    },
    {
      title: 'Wolf Pack Leader',
      description: 'Realistic forest environment fusion',
      style: 'Realistic',
      duration: '20s',
      quality: '1080p',
      price: '€60'
    },
    {
      title: 'Dragon Transform',
      description: 'Mythical creature with fire effects',
      style: 'Fantasy',
      duration: '60s',
      quality: '4K',
      price: '€150'
    }
  ];

  return (
    <section id="examples" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-gradient-primary text-primary-foreground">
            <Eye className="w-4 h-4 mr-1" />
            Portfolio Examples
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            See the <span className="bg-gradient-primary bg-clip-text text-transparent">Magic</span> in Action
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our stunning AI fusion creations and get inspired for your own transformation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {examples.map((example, index) => (
            <Card key={index} className="bg-gradient-card border-primary/30 shadow-card hover:shadow-glow transition-all duration-300 group cursor-pointer">
              <CardContent className="p-6">
                {/* Video Placeholder */}
                <div className="aspect-square bg-muted/50 rounded-lg mb-4 flex items-center justify-center border border-border group-hover:border-primary/50 transition-colors">
                  <Play className="w-12 h-12 text-primary opacity-70 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Content */}
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                  {example.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {example.description}
                </p>

                {/* Stats */}
                <div className="flex flex-wrap gap-2 mb-3">
                  <Badge variant="outline" className="text-xs">
                    {example.style}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    <Clock className="w-3 h-3 mr-1" />
                    {example.duration}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {example.quality}
                  </Badge>
                </div>

                {/* Price */}
                <div className="text-right">
                  <span className="text-lg font-bold text-primary">
                    {example.price}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            * Prices vary based on specifications and extra features
          </p>
        </div>
      </div>
    </section>
  );
};