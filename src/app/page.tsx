import Herosectionv2 from "@/components/Herosection/Herosectionv2";
import Services from "@/components/Services";

export default async function Home() {

  return (
    <main>
      <Herosectionv2 />
      <Services />
      {/* <Herosectionv2 /> */}
      {/* <Services /> */}
      {/* <ServicesOverview />
      <MainHerosection />
      <HeroSection />
      <AboutUs />
      <Image src="/home_a_feature2_m.jpg" alt="" width={600} height={600} />
      <div className="flex p-[20px] flex-col">
        <div className="mt-[16px] block">
          <a
            href="/"
            className="relative min-h-[280px] max-w-[320px] mb-[16px] cursor-pointer block"
          >
            <div className="overflow-hidden absolute top-0 left-0 w-full h-full">
              <Image
                className="max-w-full object-cover"
                src="/home_a_residential_m.jpg"
                alt=""
                width={600}
                height={600}
              />
            </div>
            <div className="p-[20px] relative">Hi</div>
          </a>
          <a
            href="/"
            className="relative min-h-[280px] max-w-[320px] mb-[16px] cursor-pointer block"
          >
            <div className="overflow-hidden absolute top-0 left-0 w-full h-full">
              <Image
                className="max-w-full object-cover"
                src="/home_a_residential_m.jpg"
                alt=""
                width={600}
                height={600}
              />
            </div>
            <div className="p-[20px] relative">Hi</div>
          </a>
        </div>
      </div>
      <OurServices /> */}
    </main>
  );
}
