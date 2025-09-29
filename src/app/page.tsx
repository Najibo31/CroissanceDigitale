import { HeroSection } from '@/components/page/home/hero-section';
import { ServicesSection } from '@/components/page/home/services-section';
import { TeamSection } from '@/components/page/home/team-section';
import { ApproachSection } from '@/components/page/home/approach-section';
import { OffersSection } from '@/components/page/home/offers-section';
import { CtaSection } from '@/components/page/home/cta-section';
import { ReviewsSection } from '@/components/page/home/reviews-section';
import { AboutSection } from '@/components/page/home/about-section';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <TeamSection />
      <ApproachSection />
      <OffersSection />
      <CtaSection />
      <ReviewsSection />
      <AboutSection />
    </>
  );
}
