"use client";

import { services } from "@/store/Constructionservices";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";
import { Blurhash } from "react-blurhash";

interface Service {
  title: string;
  images: string[];
  blurhash: string[]; // Add this line
}

const shuffleArray = (array: Service[]) => [...array].sort(() => Math.random() - 0.5);

const Herosection: React.FC = () => {
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);
  const [nextServiceIndex, setNextServiceIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const filteredServices = React.useMemo(() => 
    shuffleArray(services.filter(service => !service.images[0].endsWith(".mp4"))),
  []);

  const preloadImage = useCallback((src: string) => {
    return new Promise((resolve, reject) => {
      const img = new window.Image();
      img.src = src;
      img.onload = resolve;
      img.onerror = reject;
    });
  }, []);

  const changeImage = useCallback(async (direction: "next" | "prev") => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setImageLoaded(false);

    const newIndex = direction === "next"
      ? (activeServiceIndex + 1) % filteredServices.length
      : (activeServiceIndex - 1 + filteredServices.length) % filteredServices.length;

    setNextServiceIndex(newIndex);

    await preloadImage(filteredServices[newIndex].images[0]);

    setActiveServiceIndex(newIndex);
    setNextServiceIndex((newIndex + 1) % filteredServices.length);
    setIsTransitioning(false);
  }, [activeServiceIndex, filteredServices, isTransitioning, preloadImage]);

  useEffect(() => {
    const intervalId = setInterval(() => changeImage("next"), 5000);
    return () => clearInterval(intervalId);
  }, [changeImage]);

  useEffect(() => {
    // Preload next image
    preloadImage(filteredServices[nextServiceIndex].images[0]);
  }, [nextServiceIndex, filteredServices, preloadImage]);

  const activeService = filteredServices[activeServiceIndex];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 sm:px-6 lg:px-8 my-10 relative overflow-hidden"
    >
      {/* Background Patterns */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], rotate: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
        className="absolute top-0 left-0 w-24 h-24 bg-red-100 opacity-50 rounded-full -translate-x-1/2 -translate-y-1/2"
      />
      <motion.div
        animate={{ scale: [1, 1.1, 1], rotate: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-0 right-0 w-32 h-32 bg-blue-100 opacity-50 rounded-full translate-x-1/2 translate-y-1/2"
      />
      
      <div className="flex flex-col-reverse lg:flex-row sm:gap-6 gap-0 relative">
 {/* Left Section */}
 <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full lg:w-1/2 bg-white p-6 sm:p-10 lg:p-16 rounded-3xl flex flex-col items-start justify-center gap-5 relative lg:pb-0 pb-14 mt-6 lg:mt-0"
        >
          <motion.span whileHover={{ scale: 1.05 }} className="px-3 py-2 bg-red-500 rounded-full text-white text-sm sm:text-base">
            All in One Renovation
          </motion.span>
          <h1 className="text-3xl sm:text-4xl lg:text-6xl xl:text-6xl font-black leading-tight">
            Great Think Construction Corp.
          </h1>
          <p className="text-sm sm:text-base">
            Insured & Licensed NYS LIC#&apos;s 2009603
          </p>
          {/* Call to Action */}
          <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-gray-200">
            <Link href="/request-estimate" className="w-fit">
              <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full text-sm font-semibold flex items-center transition duration-300 ease-in-out transform hover:scale-105">
                GET A FREE ESTIMATE
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </Link>
            <div className="flex items-center">
              < Phone className="h-10 w-10 text-gray-400 mr-3" />
              <div>
                <p className="text-xs font-medium text-gray-500">Call, Text or Whatsapp us</p>
                <Link href="tel:+17186669256" className="text-lg font-bold text-gray-900">(718) 666-9256</Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Section */}
        <div className="w-full lg:w-[54%] h-full relative overflow-hidden">
      <div className="w-full sm:h-[650px] h-[350px] relative">
          <motion.div
            key={activeServiceIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            {!imageLoaded && (
              <Blurhash
                hash={activeService.blurhash[0]}
                width="100%"
                height="100%"
                resolutionX={32}
                resolutionY={32}
                punch={1}
                style={{
                  WebkitMaskImage: "url('/clip_shape_of_herosection.png')",
                  maskImage: "url('/clip_shape_of_herosection.png')",
                  WebkitMaskSize: "cover",
                  maskSize: "cover",
                  WebkitMaskRepeat: "no-repeat",
                  maskRepeat: "no-repeat",
                }}
              />
            )}
            <Image
              src={activeService.images[0]}
              alt={activeService.title}
              layout="fill"
              objectFit="cover"
              className={`rounded-3xl transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
              priority={true}
              onLoad={() => setImageLoaded(true)}
              style={{
                WebkitMaskImage: "url('/clip_shape_of_herosection.png')",
                maskImage: "url('/clip_shape_of_herosection.png')",
                WebkitMaskSize: "cover",
                maskSize: "cover",
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
              }}
            />
          </motion.div>
      </div>

          <div className="flex w-full absolute bottom-4 px-4 items-end justify-between">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => changeImage("prev")}
              className="bg-white flex space-x-2 z-50 bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white"
            >
              <ChevronLeft />
            </motion.button>
            <motion.div
              key={activeServiceIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-white mx-5 z-50 text-center"
            >
              <h2 className="text-3xl font-bold capitalize">{activeService.title}</h2>
            </motion.div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => changeImage("next")}
              className="bg-white flex space-x-2 z-50 bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white"
            >
              <ChevronRight />
            </motion.button>
          </div>

          {/* Overlay Pattern */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-zinc-100/20 mix-blend-overlay" />
        </div>
      </div>
    </motion.div>
  );
};

export default Herosection;