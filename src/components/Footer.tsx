import { Button } from '@/components/ui/button';
import { MessageCircle, Mail, Globe } from 'lucide-react';
import logo from '@/assets/fusionface-logo.jpg';

export const Footer = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/989024645653', '_blank');
  };

  return (
    <footer className="bg-muted/50 border-t border-border py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="FusionFace" className="w-10 h-10 rounded-lg" />
              <div>
                <h3 className="text-lg font-bold bg-gradient-primary bg-clip-text text-transparent">
                  FusionFace
                </h3>
                <p className="text-xs text-muted-foreground">AI Video Fusion Studio</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Transform your face into epic creatures with cutting-edge AI fusion technology. 
              Professional quality videos for social media and personal use.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• AI Face-Animal Fusion</li>
              <li>• Custom Video Creation</li>
              <li>• Professional Editing</li>
              <li>• Multiple Format Export</li>
              <li>• Custom Soundtracks</li>
              <li>• Express Delivery</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-3">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={openWhatsApp}
                className="w-full justify-start border-primary/30 hover:bg-primary/10"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp: +98 902 464 5653
              </Button>
              
              <div className="text-sm text-muted-foreground">
                <div className="flex items-center gap-2 mb-2">
                  <Mail className="w-4 h-4" />
                  Available 24/7 for orders
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4" />
                  Worldwide service
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 FusionFace. All rights reserved.
            </p>
            <div className="flex gap-4 text-sm text-muted-foreground">
              <span>💳 PayPal accepted</span>
              <span>🏦 IBAN transfers</span>
              <span>🔒 Secure payments</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};