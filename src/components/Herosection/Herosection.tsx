"use client";

import React, { useState, useEffect, useRef, useMemo, useCallback } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { services } from "@/store/Constructionservices";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Service {
  title: string;
  images: string[];
}

const shuffleArray = (array: Service[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const Skeleton: React.FC = () => (
  <div className="animate-pulse">
    <div className="w-full sm:h-[650px] h-[350px] bg-gray-300 rounded-3xl" />
  </div>
);

const Herosection: React.FC = () => {
  const filteredServices = useMemo(() => {
    const filtered = services.filter((service) => !service.images[0].endsWith(".mp4"));
    return shuffleArray([...filtered]);
  }, []);

  const [activeServiceIndex, setActiveServiceIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const changeImage = useCallback((direction: "next" | "prev") => {
    setActiveServiceIndex((prevIndex) => {
      if (direction === "next") {
        return (prevIndex + 1) % filteredServices.length;
      } else {
        return (prevIndex - 1 + filteredServices.length) % filteredServices.length;
      }
    });
  }, [filteredServices.length]);

  useEffect(() => {
    const startInterval = () => {
      intervalRef.current = setInterval(() => {
        changeImage("next");
      }, 5000);
    };

    startInterval();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [changeImage]);

  const handleManualChange = useCallback((direction: "next" | "prev") => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    changeImage(direction);
    intervalRef.current = setInterval(() => {
      changeImage("next");
    }, 5000);
  }, [changeImage]);

  const activeService = filteredServices[activeServiceIndex];

  useEffect(() => {
    setIsLoading(true);
    const img = new window.Image();
    img.src = activeService.images[0];
    img.onload = () => setIsLoading(false);
  }, [activeService]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 sm:px-6 lg:px-8 my-5 relative overflow-hidden"
    >
      {/* Background Patterns */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute top-0 left-0 w-24 h-24 bg-red-100 opacity-50 rounded-full -translate-x-1/2 -translate-y-1/2"
      />
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, -10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
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
          <motion.span
            whileHover={{ scale: 1.05 }}
            className="px-3 py-2 bg-red-500 rounded-full text-white text-sm sm:text-base"
          >
            All in One Renovation
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-3xl sm:text-4xl lg:text-6xl xl:text-6xl font-black leading-tight"
          >
            Great Think Construction Corp.{" "}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-sm sm:text-base"
          >
            Insured & Licensed NYS LIC#&apos;s 2009603
          </motion.p>
          <Link href="/request-estimate">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-yellow-500 rounded-xl py-6 px-5 z-[60] hover:bg-yellow-600">
                Get a Free Quote Today!
              </Button>
            </motion.div>
          </Link>

          {/* Small Decorative Element */}
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute bottom-4 right-4 w-12 h-12 border-4 border-red-200 rounded-full"
          />
          {/* Dot Pattern */}
          <div
            className="absolute bottom-0 left-0 w-52 h-40 opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(circle, #000 1px, transparent 1px)",
              backgroundSize: "10px 10px",
            }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full lg:w-[54%] h-full relative overflow-hidden"
        >
          {isLoading ? (
            <Skeleton />
          ) : (
            <AnimatePresence mode="wait">
              <motion.div
                key={activeServiceIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full sm:h-[650px] h-[350px] relative"
              >
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
              </motion.div>
            </AnimatePresence>
          )}
         

<div className="flex w-full absolute bottom-4 px-4 items-center justify-between">
          {/* Image Navigation Buttons */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => handleManualChange("prev")}
            className="bg-white flex space-x-2 z-50 bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white"
          >
            <ChevronLeft />
          </motion.button>
           {/* Info of Selected Tab */}
           <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-white mx-5 z-50 text-center"
          >
            <h2 className="text-3xl font-bold capitalize">{activeService.title}</h2>
          </motion.div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => handleManualChange("next")}
            className="bg-white flex space-x-2 z-50 bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white"
          >
            <ChevronRight />
          </motion.button>
          </div>

          {/* Overlay Pattern */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-zinc-100/20 mix-blend-overlay" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Herosection;