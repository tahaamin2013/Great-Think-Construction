"use client";

import React, { useState, useCallback, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { services } from "@/store/Constructionservices";
import Link from "next/link";

interface Service {
  title: string;
  images: string[];
}

// const services: Service[] = [
//   { title: "Home Renovation", images: ["/hero-bg.jpg"] },
//   { title: "Kitchen Remodeling", images: ["/hero-bg.jpg"] },
//   { title: "Bathroom Upgrades", images: ["/hero-bg.jpg"] },
//   { title: "Flooring Installation", images: ["/hero-bg.jpg"] },
//   { title: "Painting Services", images: ["/hero-bg.jpg"] },
//   { title: "Roofing Repairs", images: ["/hero-bg.jpg"] },
//   { title: "Electrical Work", images: ["/hero-bg.jpg"] },
//   { title: "Plumbing Services", images: ["/hero-bg.jpg"] },
// ];

const Herosection: React.FC = () => {
  const [activeService, setActiveService] = useState<Service>(services[0]);
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const currentIndex = useRef(0);

  const updateActiveService = useCallback((index: number) => {
    currentIndex.current = index;
    setActiveService(services[index]);
  }, []);

  React.useEffect(() => {
    if (!carouselApi) {
      return;
    }

    carouselApi.on("select", () => {
      updateActiveService(carouselApi.selectedScrollSnap());
    });
  }, [carouselApi, updateActiveService]);

  const handleNext = useCallback(() => {
    if (carouselApi) {
      carouselApi.scrollNext();
    }
  }, [carouselApi]);

  const handlePrevious = useCallback(() => {
    if (carouselApi) {
      carouselApi.scrollPrev();
    }
  }, [carouselApi]);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 my-5 relative overflow-hidden">
      {/* Background Patterns */}
      <div className="absolute top-0 left-0 w-24 h-24 bg-red-100 opacity-50 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-100 opacity-50 rounded-full translate-x-1/2 translate-y-1/2" />

      <div className="flex flex-col-reverse lg:flex-row sm:gap-6 gap-0 relative">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 bg-white p-6 sm:p-10 lg:p-16 rounded-3xl flex flex-col items-start justify-center gap-5 relative lg:pb-0 pb-14 mt-6 lg:mt-0">
          <span className="px-3 py-2 bg-red-500 rounded-full text-white text-sm sm:text-base">
            All in One Renovation
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-6xl xl:text-6xl font-black leading-tight">
Great Think Construction Corp.          </h1>
          <p className="text-sm sm:text-base">
            Insured & Licensed NYS LIC#&apos;s 2009603
          </p>
          <Link
          href="/request-estimate"
          >
          <Button className="bg-yellow-500 rounded-xl py-6 px-5 z-[60] hover:bg-yellow-600">Get a Free Quote Today!</Button>
          </Link>


          {/* Small Decorative Element */}
          <div className="absolute bottom-4 right-4 w-12 h-12 border-4 border-red-200 rounded-full" />
          {/* Dot Pattern */}
          <div
            className="absolute bottom-0 left-0 w-52 h-40 opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(circle, #000 1px, transparent 1px)",
              backgroundSize: "10px 10px",
            }}
          />
        </div>

        <div className="w-full lg:w-[54%] h-full relative overflow-hidden">
          <div className="w-full sm:h-[650px] h-[350px] relative">
            <Image
              src={activeService.images[0]}
              alt={activeService.title}
              layout="fill"
              objectFit="cover"
              className="rounded-3xl transition-opacity duration-500"
              style={{
                WebkitMaskImage: "url('/clip_shape_of_herosection.png')",
                maskImage: "url('/clip_shape_of_herosection.png')",
                WebkitMaskSize: "cover",
                maskSize: "cover",
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
              }}
            />
          </div>
{/* Info of Selected Tab */}
          <div className="absolute bottom-20 text-white mx-5 z-50">
            <h2 className="text-3xl font-bold">
            {activeService.title}
            </h2>
          </div>

{/* Tabs */}
          <div className="absolute bottom-0 left-0 right-0 p-4 z-50 items-center justify-center flex">
            <Carousel
              opts={{
                align: "start",
                // loop: true,
              }}
              className="w-full max-w-md"
              setApi={setCarouselApi}
            >
              <CarouselContent className="mx-2">
                {services.map((service, index) => (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/2 lg:basis-1/3"
                  >
                    <div
                    //   variant={
                    //     service.title === activeService.title
                    //       ? "secondary"
                    //       : "outline"
                    //   }
                      className={`h-9 px-4 py-2 items-center justify-center text-center whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:opacity-50 hover:bg-zinc-200 cursor-pointer shadow hover:bg-primary/90 transition-all duration-300 truncate max-w-36 ease-in-out
                        ${
                        service.title === activeService.title
                          ? "bg-yellow-500 hover:!bg-yellow-600 text-white font-bold"
                          : "bg-white text-black"
                      }
                      `}
                      onClick={() => {
                        updateActiveService(index);
                        carouselApi?.scrollTo(index);
                      }}
                    >
                      {service.title}
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious onClick={handlePrevious} />
              <CarouselNext onClick={handleNext} />
            </Carousel>
          </div>

          {/* Overlay Pattern */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-zinc-100/20 mix-blend-overlay" />
        </div>
      </div>
    </div>
  );
};

export default Herosection;
