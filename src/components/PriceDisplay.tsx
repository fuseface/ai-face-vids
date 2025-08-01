import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';

interface PriceDisplayProps {
  basePrice: number;
  aspectRatio: string;
  quality: string;
  frameRate: string;
  style: string;
  music: string;
  extraFeatures: string[];
}

export const PriceDisplay = ({ 
  basePrice, 
  aspectRatio, 
  quality, 
  frameRate, 
  style, 
  music, 
  extraFeatures 
}: PriceDisplayProps) => {
  const [totalPrice, setTotalPrice] = useState(basePrice);

  useEffect(() => {
    let price = basePrice;

    // Quality pricing
    if (quality === '1080p') price += 15;
    if (quality === '4K') price += 40;

    // Frame rate pricing
    if (frameRate === '60fps') price += 20;
    if (frameRate === '120fps') price += 50;

    // Aspect ratio pricing
    if (aspectRatio === '16:9') price += 10;
    if (aspectRatio === '9:16') price += 5;

    // Style pricing
    if (style === 'cinematic') price += 25;
    if (style === 'fantasy') price += 30;
    if (style === 'futuristic') price += 35;

    // Music pricing
    if (music !== 'none') price += 15;

    // Extra features pricing
    extraFeatures.forEach(feature => {
      if (feature === 'green-screen') price += 20;
      if (feature === 'slow-motion') price += 25;
      if (feature === 'multiple-animals') price += 40;
      if (feature === 'custom-background') price += 30;
    });

    setTotalPrice(price);
  }, [basePrice, aspectRatio, quality, frameRate, style, music, extraFeatures]);

  return (
    <Card className="fixed bottom-4 left-4 right-4 md:left-4 md:right-auto md:w-64 bg-gradient-card border border-primary/30 shadow-glow z-50">
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-muted-foreground">Total Price</span>
          <div className="flex items-center space-x-1">
            <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              €{totalPrice}
            </span>
          </div>
        </div>
        <div className="text-xs text-muted-foreground">
          AI Fusion Video Creation
        </div>
      </div>
    </Card>
  );
};