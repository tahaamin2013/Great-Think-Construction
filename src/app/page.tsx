import Aboutus from "@/components/Aboutus";
import FAQSection from "@/components/FAQ";
import Herosection from "@/components/Herosection/Herosection";
import Services from "@/components/Services";
import StartJourneyBanner from "@/components/startjourneybanner/page";
import TeamMemberDashboard from "@/components/Team";
import TestimonialsCarousel from "@/components/Testimonials";
import WhoChooseUs from "@/components/whychooseus";
import Head from "next/head";


export default async function Home() {
  return (
    <main>
      <head>
        <meta name="google-site-verification" content="kbZftFb3pR-ngRLtJmVt4LDNKB2G6G9e6KKnTgpRSXY" />
      </head>
      <Herosection />
      <Aboutus />
      <Services />
      <WhoChooseUs />
      {/* <TeamMemberDashboard /> */}
      <FAQSection />
      <TestimonialsCarousel />
      <StartJourneyBanner />
    </main>
  );
}
