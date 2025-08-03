import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import CTASection from '@/components/CTASection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

export default function HomePage() {
  return (
    <>
    <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <CTASection />
      <FAQSection /> 
      <TestimonialsSection />
       <ContactSection />
       <Footer />
       <ScrollToTop />
    </>
  );
}
