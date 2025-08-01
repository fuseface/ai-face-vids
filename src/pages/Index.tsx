import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { Examples } from '@/components/Examples';
import { OrderForm } from '@/components/OrderForm';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Features />
      <Examples />
      <section id="order-form" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Create Your <span className="bg-gradient-primary bg-clip-text text-transparent">Fusion Video</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Fill out the form below to get started with your AI fusion transformation
            </p>
          </div>
          <OrderForm />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Index;
