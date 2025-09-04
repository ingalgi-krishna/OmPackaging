// app/page.tsx
import { HeroSection } from '@/components/sections/hero-section';
import { CoreValues } from '@/components/sections/core-values';
import { ServicesHighlight } from '@/components/sections/services-highlight';
import { ProcessSteps } from '@/components/sections/process-steps';
import { Testimonials } from '@/components/sections/testimonials';
import { SlidingLogos } from '@/components/sections/partners-clients';
import homeData from '@/data/home.json';

export default function HomePage() {
  return (
    <>
      <HeroSection data={homeData.hero} />
      <SlidingLogos data={homeData.partners} />
      <CoreValues data={homeData.coreValues} />
      <ServicesHighlight data={homeData.services} />
      <ProcessSteps data={homeData.process} />
      <Testimonials data={homeData.testimonials} />
    </>
  );
}