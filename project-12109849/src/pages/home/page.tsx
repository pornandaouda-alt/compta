import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import HeroSection from './components/HeroSection';
import WhyUsSection from './components/WhyUsSection';
import ServicesSection from './components/ServicesSection';
import ModulesSection from './components/ModulesSection';
import TestimonialsSection from './components/TestimonialsSection';
import PricingSection from './components/PricingSection';
import FAQSection from './components/FAQSection';
import CTASection from './components/CTASection';
import ContactFormSection from './components/ContactFormSection';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <WhyUsSection />
        <ServicesSection />
        <ModulesSection />
        <TestimonialsSection />
        <PricingSection />
        <FAQSection />
        <CTASection />
        <ContactFormSection />
      </main>
      <Footer />
    </>
  );
}