import Aboutus from "@/components/Aboutus";
import FAQSection from "@/components/FAQ";
import Herosectionv2 from "@/components/Herosection/Herosectionv2";
import Services from "@/components/Services";
import TestimonialsCarousel from "@/components/Testimonials";

export default async function Home() {

  return (
    <main>
      <Herosectionv2 />
      <Aboutus />
      <Services />
      <FAQSection />
      <TestimonialsCarousel />
    </main>
  );
}
