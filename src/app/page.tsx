import Aboutus from "@/components/Aboutus";
import FAQSection from "@/components/FAQ";
import Herosection from "@/components/Herosection/Herosection";
import Services from "@/components/Services";
import StartJourneyBanner from "@/components/startjourneybanner/page";
import TeamMemberDashboard from "@/components/Team";
import TestimonialsCarousel from "@/components/Testimonials";
import WhoChooseUs from "@/components/whychooseus";


export default async function Home() {
  return (
    <main>
      <Herosection />
      <Aboutus />
      <Services />
      <WhoChooseUs />
      <TeamMemberDashboard />
      <FAQSection />
      <TestimonialsCarousel />
      <StartJourneyBanner />
    </main>
  );
}
