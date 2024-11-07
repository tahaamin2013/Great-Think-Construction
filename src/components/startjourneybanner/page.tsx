"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import Link from "next/link";

const StartJourneyBanner = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="my-5 bg-gradient-to-r from-yellow-400 to-orange-500 p-4 sm:p-6 md:p-8 rounded-2xl text-white overflow-hidden relative"
    >
      <div className="flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-12">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="z-10"
        >
          <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 text-center lg:text-left">
            Ready to <span className="text-orange-500 font-black">Ignite</span>{" "}
            <br className="hidden sm:inline" />
            Your <span className="text-black font-black">Project</span>?
          </span>
          <div className="flex justify-center lg:justify-start">
            <Link href="/request-estimate" className="w-fit">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full flex items-center text-lg"
              >
                <Sparkles className="mr-2" /> Let&apos;s Go!
              </motion.button>
            </Link>
          </div>
        </motion.div>
        <motion.div
          className="relative w-full sm:w-3/4 md:w-2/3 lg:w-1/2 aspect-[4/2]"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Image
            alt="Van Image"
            src="/VanImage2.jpg"
            fill
            className="object-cover rounded-3xl"
          />
        </motion.div>
      </div>
      <motion.div
        className="absolute -bottom-16 -right-16 w-32 h-32 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 bg-yellow-300 rounded-full opacity-20"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
    </motion.div>
  );
};

export default StartJourneyBanner;