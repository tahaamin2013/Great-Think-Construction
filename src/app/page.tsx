import Aboutus from "@/components/Aboutus";
import FAQSection from "@/components/FAQ";
import { AdComponent } from "@/components/Google ads/ad";
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
        // Adclient="ca-pub-9571755808195636"
        // Adslot="5006986571"
      />
      <WhoChooseUs />
      {/* <TeamMemberDashboard /> */}
      <FAQSection />
      <TestimonialsCarousel />
      <StartJourneyBanner />
      <AdComponent
        // Adclient="ca-pub-9571755808195636"
        // Adslot="5006986571"
      />
    </main>
  );
}
