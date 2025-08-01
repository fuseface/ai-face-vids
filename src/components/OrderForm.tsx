import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { AlertCircle, MessageCircle, Sparkles } from 'lucide-react';
import { PriceDisplay } from './PriceDisplay';
import { toast } from 'sonner';

export const OrderForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    aspectRatio: '1:1',
    quality: '1080p',
    frameRate: '30fps',
    style: 'realistic',
    music: 'epic',
    extraFeatures: [] as string[],
    specialRequests: ''
  });

  const styles = [
    { value: 'realistic', label: 'Realistic Fusion', price: 0 },
    { value: 'cinematic', label: 'Cinematic Style', price: 25 },
    { value: 'fantasy', label: 'Fantasy Adventure', price: 30 },
    { value: 'futuristic', label: 'Sci-Fi Future', price: 35 },
    { value: 'cartoon', label: 'Animated Cartoon', price: 20 }
  ];

  const musicStyles = [
    { value: 'none', label: 'No Music', price: 0 },
    { value: 'epic', label: 'Epic Adventure', price: 15 },
    { value: 'electronic', label: 'Electronic/Synth', price: 15 },
    { value: 'cinematic', label: 'Cinematic Score', price: 15 },
    { value: 'ambient', label: 'Ambient/Chill', price: 15 },
    { value: 'rock', label: 'Rock/Metal', price: 15 },
    { value: 'custom', label: 'Custom Music', price: 25 }
  ];

  const extraFeatures = [
    { id: 'green-screen', label: 'Green Screen Effects', price: 20 },
    { id: 'slow-motion', label: 'Slow Motion Sequences', price: 25 },
    { id: 'multiple-animals', label: 'Multiple Animal Fusion', price: 40 },
    { id: 'custom-background', label: 'Custom Background', price: 30 },
    { id: 'text-overlay', label: 'Text/Logo Overlay', price: 15 },
    { id: 'color-grading', label: 'Professional Color Grading', price: 35 }
  ];

  const handleExtraFeatureChange = (featureId: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      extraFeatures: checked 
        ? [...prev.extraFeatures, featureId]
        : prev.extraFeatures.filter(f => f !== featureId)
    }));
  };

  const generateWhatsAppMessage = () => {
    const selectedStyle = styles.find(s => s.value === formData.style)?.label || formData.style;
    const selectedMusic = musicStyles.find(m => m.value === formData.music)?.label || formData.music;
    const selectedFeatures = extraFeatures
      .filter(f => formData.extraFeatures.includes(f.id))
      .map(f => f.label)
      .join(', ');

    return `🎥 *FusionFace AI Video Order* 🎥

👤 *Customer Details:*
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

🎬 *Video Specifications:*
• Aspect Ratio: ${formData.aspectRatio}
• Quality: ${formData.quality}
• Frame Rate: ${formData.frameRate}
• Style: ${selectedStyle}
• Music: ${selectedMusic}

✨ *Extra Features:*
${selectedFeatures || 'None selected'}

📝 *Special Requests:*
${formData.specialRequests || 'None'}

⚠️ *IMPORTANT:* Customer needs to upload their face photo via WhatsApp for AI fusion processing.

💳 *Payment:* Available via PayPal or Bank Transfer (IBAN)`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email) {
      toast.error('Please fill in your name and email');
      return;
    }

    const message = generateWhatsAppMessage();
    const whatsappUrl = `https://wa.me/989024645653?text=${encodeURIComponent(message)}`;
    
    toast.success('Redirecting to WhatsApp to complete your order!');
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
        {/* Customer Information */}
        <Card className="bg-gradient-card border-primary/30 shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-primary" />
              Customer Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className="bg-muted/50 border-border"
                  required
                />
              </div>
              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="bg-muted/50 border-border"
                  required
                />
              </div>
            </div>
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                className="bg-muted/50 border-border"
                placeholder="+1234567890"
              />
            </div>
          </CardContent>
        </Card>

        {/* Face Photo Reminder */}
        <Card className="bg-gradient-card border-secondary/30 shadow-card">
          <CardContent className="pt-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-secondary mt-0.5" />
              <div>
                <h3 className="font-semibold text-secondary mb-2">Important: Face Photo Required</h3>
                <p className="text-sm text-muted-foreground">
                  After placing your order, you'll need to upload a clear, front-facing photo of yourself via WhatsApp. 
                  This photo will be used for the AI fusion process with your chosen animal.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Video Specifications */}
        <Card className="bg-gradient-card border-primary/30 shadow-card">
          <CardHeader>
            <CardTitle>Video Specifications</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label>Aspect Ratio</Label>
                <Select value={formData.aspectRatio} onValueChange={(value) => setFormData(prev => ({ ...prev, aspectRatio: value }))}>
                  <SelectTrigger className="bg-muted/50 border-border">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1:1">1:1 (Square - Instagram)</SelectItem>
                    <SelectItem value="16:9">16:9 (Landscape - YouTube)</SelectItem>
                    <SelectItem value="9:16">9:16 (Portrait - TikTok/Stories)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Quality</Label>
                <Select value={formData.quality} onValueChange={(value) => setFormData(prev => ({ ...prev, quality: value }))}>
                  <SelectTrigger className="bg-muted/50 border-border">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="720p">720p HD</SelectItem>
                    <SelectItem value="1080p">1080p Full HD (+€15)</SelectItem>
                    <SelectItem value="4K">4K Ultra HD (+€40)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Frame Rate</Label>
                <Select value={formData.frameRate} onValueChange={(value) => setFormData(prev => ({ ...prev, frameRate: value }))}>
                  <SelectTrigger className="bg-muted/50 border-border">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="30fps">30fps (Standard)</SelectItem>
                    <SelectItem value="60fps">60fps (Smooth) (+€20)</SelectItem>
                    <SelectItem value="120fps">120fps (Ultra Smooth) (+€50)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Video Style</Label>
                <Select value={formData.style} onValueChange={(value) => setFormData(prev => ({ ...prev, style: value }))}>
                  <SelectTrigger className="bg-muted/50 border-border">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {styles.map(style => (
                      <SelectItem key={style.value} value={style.value}>
                        {style.label} {style.price > 0 && `(+€${style.price})`}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label>Music Style</Label>
              <Select value={formData.music} onValueChange={(value) => setFormData(prev => ({ ...prev, music: value }))}>
                <SelectTrigger className="bg-muted/50 border-border">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {musicStyles.map(music => (
                    <SelectItem key={music.value} value={music.value}>
                      {music.label} {music.price > 0 && `(+€${music.price})`}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Extra Features */}
        <Card className="bg-gradient-card border-primary/30 shadow-card">
          <CardHeader>
            <CardTitle>Extra Features</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {extraFeatures.map(feature => (
                <div key={feature.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={feature.id}
                    checked={formData.extraFeatures.includes(feature.id)}
                    onCheckedChange={(checked) => handleExtraFeatureChange(feature.id, checked as boolean)}
                  />
                  <Label htmlFor={feature.id} className="text-sm">
                    {feature.label}
                    <Badge variant="outline" className="ml-2">+€{feature.price}</Badge>
                  </Label>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Special Requests */}
        <Card className="bg-gradient-card border-primary/30 shadow-card">
          <CardHeader>
            <CardTitle>Special Requests</CardTitle>
          </CardHeader>
          <CardContent>
            <Textarea
              value={formData.specialRequests}
              onChange={(e) => setFormData(prev => ({ ...prev, specialRequests: e.target.value }))}
              placeholder="Any specific animals, scenes, or effects you'd like? Describe your vision..."
              className="bg-muted/50 border-border min-h-20"
            />
          </CardContent>
        </Card>

        {/* Payment Info */}
        <Card className="bg-gradient-card border-secondary/30 shadow-card">
          <CardContent className="pt-6">
            <div className="text-center">
              <h3 className="font-semibold text-secondary mb-2">💳 Payment Methods Available</h3>
              <p className="text-sm text-muted-foreground">
                PayPal • Bank Transfer (IBAN) • Secure Payment Processing
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Submit Button */}
        <Button 
          type="submit" 
          size="lg" 
          className="w-full bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold py-6 animate-pulse-glow"
        >
          <MessageCircle className="w-5 h-5 mr-2" />
          Complete Order via WhatsApp
        </Button>

        <div className="text-center text-xs text-muted-foreground">
          By clicking above, you'll be redirected to WhatsApp to finalize your order
        </div>
      </form>

      <PriceDisplay
        basePrice={45}
        aspectRatio={formData.aspectRatio}
        quality={formData.quality}
        frameRate={formData.frameRate}
        style={formData.style}
        music={formData.music}
        extraFeatures={formData.extraFeatures}
      />
    </>
  );
};