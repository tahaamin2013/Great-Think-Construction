"use client";

import React, { useState, useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { services } from "@/store/Constructionservices";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carouselformobile";
import { ArrowLeft, ArrowRight } from "lucide-react";

const HeroSection: React.FC = () => {
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);

  const activeCategory = services[currentCategoryIndex];

  // Handle next category
  const handleNextCategory = () => {
    setCurrentCategoryIndex((prevIndex) =>
      prevIndex === services.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Handle previous category
  const handlePreviousCategory = () => {
    setCurrentCategoryIndex((prevIndex) =>
      prevIndex === 0 ? services.length - 1 : prevIndex - 1
    );
  };

  // Handle manual category selection
  const handleCategoryChange = (index: number) => {
    setCurrentCategoryIndex(index);
  };

  return (
    <div className="flex flex-col lg:flex-row py-10 items-center justify-between bg-white shadow-sm rounded-2xl my-5 sm:my-8 md:my-12 px-4 sm:px-8 md:px-12 lg:px-0 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="lg:ml-24 my-12 sm:my-16 md:my-20 lg:my-24 w-full lg:w-[40%] flex flex-col gap-6 sm:gap-7 md:gap-9 z-30"
      >
        <div className="text-center items-center justify-center flex-col w-full">
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-black-600 text-2xl mb-3 block"
          >
            All in One Renovation
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-black-600 font-bold text-5xl sm:text-7xl leading-tight mb-4"
          >
            GREAT THINK
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-black-600 text-2xl sm:text-3xl font-semibold mb-1"
          >
            CONSTRUCTION CORP.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-black-600 text-xl sm:text-xl mb-6"
          >
            Insured & Licensed NYS LIC#&apos;s 2009603
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Link href="/request-estimate">
              <Button className="w-fit py-3 sm:py-4 md:py-5 px-4 sm:px-6 md:px-8 rounded-xl text-sm sm:text-base md:text-lg font-semibold transition-all hover:scale-105 bg-red-600 text-white hover:bg-[#0d3648]">
                Get a Free Quote Today!
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.div>

      <div className="w-full sm:w-[50%] md:w-[50%] mt-8 sm:mt-0 relative">
        <div className="absolute -right-24 -top-18 sm:-right-32 sm:-top-36 rounded-3xl h-[36rem] w-[32rem] bg-gradient-to-br from-[#fcbf4a] to-[#fca94a] -rotate-[20deg]" />

        <div className="z-20 relative sm:mr-4 md:mr-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="relative z-10 max-w-[90%] max-h-[90%] mx-auto overflow-hidden"
          >
            <div
              className="w-full pb-[100%] bg-white rounded-xl overflow-hidden border-4 border-white shadow-xl"
              style={{
                clipPath:
                  "polygon(50% 0%, 100% 25%, 100% 100%, 0% 100%, 0% 25%)",
                borderRadius: "30px",
              }}
            >
              <Image
                layout="fill"
                src={activeCategory.images[0]} // Show first image of the current category
                alt={`${activeCategory.title} category`}
                className="absolute top-0 left-0 w-full h-full object-cover object-center"
              />
            </div>
          </motion.div>
        </div>

        <Carousel className="max-w-xl mx-auto my-8 sm:block hidden">
          <CarouselContent>
            {services
              .slice(currentCategoryIndex, currentCategoryIndex + 3)
              .map((category, index) => (
                <CarouselItem key={category.title} className="basis-1/3">
                  <Button
                    onClick={() =>
                      handleCategoryChange(index + currentCategoryIndex)
                    }
                    className={`py-2 px-4 rounded-lg text-sm w-36 truncate overflow-hidden text-ellipsis whitespace-nowrap ${
                      index + currentCategoryIndex === currentCategoryIndex
                        ? "bg-yellow-600 text-white"
                        : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                    }`}
                  >
                    {category.title}
                  </Button>
                </CarouselItem>
              ))}
          </CarouselContent>

          <Button
            onClick={() => {
              console.log("Previous button clicked");
              setCurrentCategoryIndex((prevIndex) =>
                prevIndex === 0 ? services.length - 1 : prevIndex - 1
              );
            }}
            className="absolute h-10 w-10 rounded-full -left-6 border -top-[18rem] z-50 bg-white shadow-md hover:bg-gray-200 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 text-gray-600" />
            <span className="sr-only">Previous slide</span>
          </Button>

          <Button
            onClick={() => {
              console.log("Next button clicked");
              setCurrentCategoryIndex((prevIndex) =>
                prevIndex + 1 >= services.length ? 0 : prevIndex + 1
              );
            }}
            className="absolute h-10 w-10 rounded-full right-3 border -top-[18rem] z-50 bg-white shadow-md hover:bg-gray-200 transition-colors"
          >
            <ArrowRight className="h-5 w-5 text-gray-600" />
            <span className="sr-only">Next slide</span>
          </Button>
        </Carousel>

        <Carousel className="max-w-xl mx-auto my-8 sm:hidden block">
          <CarouselContent>
            {services
              .slice(currentCategoryIndex, currentCategoryIndex + 3)
              .map((category, index) => (
                <CarouselItem key={category.title} className="basis-1/3">
                  <Button
                    onClick={() =>
                      handleCategoryChange(index + currentCategoryIndex)
                    }
                    className={`py-2 px-4 rounded-lg text-sm w-36 truncate overflow-hidden text-ellipsis whitespace-nowrap ${
                      index + currentCategoryIndex === currentCategoryIndex
                        ? "bg-yellow-600 text-white"
                        : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                    }`}
                  >
                    {category.title}
                  </Button>
                </CarouselItem>
              ))}
          </CarouselContent>

          <Button
            onClick={() => {
              console.log("Previous button clicked");
              setCurrentCategoryIndex((prevIndex) =>
                prevIndex === 0 ? services.length - 3 : prevIndex - 3
              );
            }}
            className="absolute h-10 w-10 rounded-full left-3 -top-[13rem] z-50 bg-white shadow-md hover:bg-gray-200 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 text-gray-600" />
            <span className="sr-only">Previous slide</span>
          </Button>

          <Button
            onClick={() => {
              console.log("Next button clicked");
              setCurrentCategoryIndex((prevIndex) =>
                prevIndex + 3 >= services.length ? 0 : prevIndex + 3
              );
            }}
            className="absolute h-10 w-10 rounded-full right-3 -top-[13rem] z-50 bg-white shadow-md hover:bg-gray-200 transition-colors"
          >
            <ArrowRight className="h-5 w-5 text-gray-600" />
            <span className="sr-only">Next slide</span>
          </Button>
        </Carousel>
      </div>
    </div>
  );
};

export default HeroSection;
