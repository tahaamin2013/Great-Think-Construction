'use client'

import React, { useState } from "react";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

const categories = [
  {
    name: "Residential",
    image: "/hero-bg.jpg",
    description: "Modern solutions for residential buildings and homes."
  },
  {
    name: "Commercial",
    image: "/author.png",
    description: "Innovative approaches for commercial structures and offices."
  },
  {
    name: "Industrial",
    image: "/brick-face-work/4.jpeg",
    description: "Cutting-edge technologies for industrial facilities and factories."
  }
];

const Herosectionv2 = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <div className="flex flex-col sm:flex-row items-center sm:justify-between justify-center bg-white shadow-sm rounded-2xl my-5 sm:my-8 md:my-12 px-5 sm:px-8 md:px-12 lg:px-0 overflow-hidden">
      <div className="sm:ml-8 md:ml-16 lg:ml-24 my-12 sm:my-16 md:my-20 lg:my-24 w-full sm:w-[50%] md:w-[55%] flex flex-col gap-6 sm:gap-7 md:gap-9 z-30">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative w-fit"
        >
          <div className="text-red-500 w-24 sm:w-28 md:w-32 h-[1.8rem] bg-red-100 rounded-md py-1 px-6 sm:px-7 md:px-8 -skew-x-[14deg]"></div>
          <p className="absolute left-4 sm:left-6 md:left-8 top-[6px] text-[10px] sm:text-[11px] md:text-[12px] text-red-500 font-bold uppercase tracking-wider">
            Features
          </p>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#002f49] leading-tight"
        >
          Solutions To Modern <span className="text-zinc-800 bg-gradient-to-r from-zinc-800 to-zinc-600 bg-clip-text text-transparent">industry</span>{" "}
          Challenges
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-[#002f49] text-sm sm:text-base md:text-lg leading-relaxed"
        >
          {activeCategory.description}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Button className="w-fit py-4 sm:py-5 md:py-6 px-6 sm:px-8 md:px-10 rounded-xl text-sm sm:text-base md:text-lg font-semibold transition-all hover:scale-105">
            Discover More
          </Button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-wrap gap-4 mt-4"
        >
          {categories.map((category) => (
            <Button
              key={category.name}
              onClick={() => setActiveCategory(category)}
              className={`py-2 px-4 rounded-lg text-sm ${
                activeCategory.name === category.name
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
            >
              {category.name}
            </Button>
          ))}
        </motion.div>
      </div>
      <div className="w-full sm:w-[50%] md:w-[50%] mt-8 sm:mt-0 relative">
        <div className="absolute -right-24 -top-28 sm:-right-32 sm:-top-36 rounded-3xl h-[36rem] w-[32rem] bg-gradient-to-br from-[#fcbf4a] to-[#fca94a] -rotate-[20deg]" />

        <div className="z-20 relative sm:mr-4 md:mr-8">
          <div className="bg-red-600 w-[100%] h-[100%] relative" />
          <div className="absolute right-[0.8rem] -top-3 z-10 w-[94%] h-[105.5%] mx-auto">
            <div
              className="w-full h-full bg-white rounded-xl shadow-lg"
              style={{
                clipPath: "polygon(50% 0%, 100% 25%, 100% 100%, 0% 100%, 0% 25%)",
                borderRadius: "30px",
              }}
            >
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="relative z-10 max-w-[90%] max-h-[90%] mx-auto overflow-hidden"
          >
            <div
              className="w-full pb-[100%] bg-white rounded-xl overflow-hidden border-4 border-white shadow-xl"
              style={{
                clipPath: "polygon(50% 0%, 100% 25%, 100% 100%, 0% 100%, 0% 25%)",
                borderRadius: "30px",
              }}
            >
              <img
                src={activeCategory.image}
                alt={`${activeCategory.name} category`}
                className="absolute top-0 left-0 w-full h-full object-cover object-center"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Herosectionv2;