// frontend/app/page.tsx
import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import RinconSection from '@/components/sections/RinconSection';
import ForumSection from '@/components/sections/ForumSection';
import AboutUsSection from '@/components/sections/AboutUsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <RinconSection />
      <ForumSection />
      <AboutUsSection />
      <TestimonialsSection />
    </main>
  );
}