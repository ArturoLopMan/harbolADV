import AboutSection from '@/components/sections/about';
import BrandsSection from '@/components/sections/brands';
import ContactSection from '@/components/sections/contact';
import HeroSection from '@/components/sections/hero';
import ServicesSection from '@/components/sections/services';
import WorkSection from '@/components/sections/work';
import Footer from '@/components/layout/footer';

export default function Home() {
  return (
    <div className="bg-white">
      <main>
        <HeroSection />
        <AboutSection />
        <WorkSection />
        <ServicesSection />
        <BrandsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
