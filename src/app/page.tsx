import Aboutus from "@/components/Aboutus";
import FAQSection from "@/components/FAQ";
import { AdComponent } from "@/components/Google ads/ad";
import { Multiplex } from "@/components/Google ads/Multiplexad";
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
      <AdComponent
      />
      <WhoChooseUs />
      <FAQSection />
      <TestimonialsCarousel />
      <StartJourneyBanner />
      <Multiplex
      />
      <a href="https://calculateatar.com" target="_blank" rel="noopener noreferrer" className="text-sm">👍 Calculate ATAR</a>

    </main>
  );
}
