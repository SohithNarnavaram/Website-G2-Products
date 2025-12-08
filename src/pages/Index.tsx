import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CartDrawer } from '@/components/cart/CartDrawer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { HeroSection } from '@/components/sections/HeroSection';
import { BestSellersSection } from '@/components/sections/BestSellersSection';
import { ProductsSection } from '@/components/sections/ProductsSection';
import { BrandSection } from '@/components/sections/BrandSection';
import { PortfolioSection } from '@/components/sections/PortfolioSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { SocialSection } from '@/components/sections/SocialSection';
import { EnquirySection } from '@/components/sections/EnquirySection';
import { ContactSection } from '@/components/sections/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <BestSellersSection />
        <ProductsSection />
        <BrandSection />
        <PortfolioSection />
        <TestimonialsSection />
        <SocialSection />
        <EnquirySection />
        <ContactSection />
      </main>
      <Footer />
      <CartDrawer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
