import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';
import logo from '@/assets/fusionface-logo.jpg';

export const Header = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/989024645653', '_blank');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="FusionFace" className="w-10 h-10 rounded-lg" />
          <div>
            <h1 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              FusionFace
            </h1>
            <p className="text-xs text-muted-foreground">AI Video Fusion</p>
          </div>
        </div>

        {/* Contact Button */}
        <Button 
          variant="outline" 
          size="sm"
          onClick={openWhatsApp}
          className="border-primary/30 hover:bg-primary/10"
        >
          <MessageCircle className="w-4 h-4 mr-2" />
          Contact
        </Button>
      </div>
    </header>
  );
};