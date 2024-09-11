import Aboutus from "@/components/Aboutus";
import FAQSection from "@/components/FAQ";
import Herosection from "@/components/Herosection/Herosection";
import Loader from "@/components/Loader";
import Services from "@/components/Services";
import ServiceBar from "@/components/servicesbar/ServicesETSection";
import StartJourneyBanner from "@/components/startjourneybanner/page";
import TeamMemberDashboard from "@/components/Team";
import TestimonialsCarousel from "@/components/Testimonials";
import WhoChooseUs from "@/components/whychooseus";
import Link from "next/link";

const interiorServices = [
  "Kitchen",
  "Bathroom",
  "Plumbing",
  "Electric",
  "Doors",
  "Windows",
  "Flooring",
  "Basement Finish",
  "California Stucco",
  "Renovation",
];

const exteriorServices = [
  "Roofing",
  "Pointing",
  "Concrete",
  "Fence",
  "Vinyl Fence",
  "Steps",
  "Sidewalks",
  "Extensions",
  "Brick-Block Porch",
  "Waterproofing",
  "Paving Stone",
  "Gutters",
];

export default async function Home() {
  return (
    <main>
      <Herosection />
      <ServiceBar
        title="Exterior Work"
        services={exteriorServices}
        side={false}
      />

      {/* <Herosectionv2 /> */}
      <Aboutus />
      <ServiceBar
        title="Interior Work"
        services={interiorServices}
        side={false}
      />
      <Services />
      <WhoChooseUs />
      <TeamMemberDashboard />
      <FAQSection />
      <TestimonialsCarousel />
      <StartJourneyBanner />
    </main>
  );
}
