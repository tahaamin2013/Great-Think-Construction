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
      className="my-5 bg-gradient-to-r from-yellow-400 to-orange-500 p-8 px-24 rounded-2xl text-white flex sm:flex-row flex-col justify-between items-center overflow-hidden relative"
    >
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="z-10"
      >
        <h1 className="text-6xl font-semibold mb-4">
          Ready to <span className="text-orange-500 font-black">Ignite</span>{" "}
          <br />
          Your <span className="text-black font-black">Project</span>?
        </h1>
        <Link href="/request-estimate" className="w-fit">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full flex items-center"
          >
            <Sparkles className="mr-2" /> Let's Go!
          </motion.button>
        </Link>
      </motion.div>
      <motion.div
        className="relative h-52 w-96"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <Image
          alt="Van Image"
          layout="fill"
          src="/van-image.png"
          className="object-contain"
        />
      </motion.div>
      <motion.div
        className="absolute -bottom-16 -right-16 w-64 h-64 bg-yellow-300 rounded-full opacity-20"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
    </motion.div>
  );
};

export default StartJourneyBanner;
