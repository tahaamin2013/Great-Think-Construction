"use client";

import { services } from "@/store/Constructionservices";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";

interface Service {
  title: string;
  images: string[];
}

const shuffleArray = (array: Service[]) => [...array].sort(() => Math.random() - 0.5);

const Herosection: React.FC = () => {
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);
  const [nextServiceIndex, setNextServiceIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

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
      {/* ... (keep the background patterns as they were) ... */}

      <div className="flex flex-col-reverse lg:flex-row sm:gap-6 gap-0 relative">
        {/* Left Section */}
        {/* ... (keep the left section as it was) ... */}

        {/* Right Section */}
        <div className="w-full lg:w-[54%] h-full relative overflow-hidden">
          <div className="w-full sm:h-[650px] h-[350px] relative">
            <AnimatePresence>
              <motion.div
                key={activeServiceIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <Image
                  src={activeService.images[0]}
                  alt={activeService.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-3xl"
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
            </AnimatePresence>
          </div>

          <div className="flex w-full absolute bottom-4 px-4 items-center justify-between">
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