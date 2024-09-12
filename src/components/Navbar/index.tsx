"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { PiChatsTeardropFill, PiListBold, PiX } from "react-icons/pi";
import { motion, AnimatePresence } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from 'next/image'

const navLinks = [
  { link: "/", name: "Home" },
  { link: "/about", name: "About Us" },
  { link: "/request-estimate", name: "Request Estimate" },
  { link: "/service", name: "Services" },
  { link: "/project", name: "Projects" },
  { link: "/contact", name: "Contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`sticky top-0 left-0 right-0 z-[60] rounded-lg transition-all bg-yellow-400/80 backdrop-blur-md duration-300 mx-2 py-4 text-white ${
        isSticky ? "shadow-md mx-[0rem]" : ""
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <motion.div
                  className="flex items-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/"
                    className="font-bold text-2xl text-yellow-600 hover:text-yellow-500 transition-colors"
                  >
                    <Image src="/Logo in blue.svg" alt="GTC Logo" width={200} height={200} />
                  </Link>
                </motion.div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Great Think Construction Corp.</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map((navlink, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                <Link
                  href={navlink.link}
                  className="text-[#0d3648] hover:bg-gray-100 px-3 py-2 rounded-md text-lg font-medium transition-colors"
                >
                  {navlink.name}
                </Link>
              </motion.div>
            ))}
          </div>
          <motion.div
            className="hidden md:flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center text-gray-700">
              <PiChatsTeardropFill className="h-6 w-6 mr-2 text-yellow-600" />
              <div>
                <p className="text-xs font-medium">Need Help?</p>
                <Link href="tel:+17186669256" className="text-sm font-bold">
                (718) 666-9256
                </Link>
              </div>
            </div>
          </motion.div>
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={isMenuOpen ? "close" : "open"}
                  initial={{ opacity: 0, rotate: -180 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 180 }}
                  transition={{ duration: 0.3 }}
                >
                  {isMenuOpen ? (
                    <PiX className="h-6 w-6" />
                  ) : (
                    <PiListBold className="h-6 w-6" />
                  )}
                </motion.div>
              </AnimatePresence>
            </Button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((navlink, index) => (
                <motion.div
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={navlink.link}
                    className="text-gray-700 hover:bg-gray-100 hover:text-gray-900 block px-3 py-3 rounded-md text-base font-medium transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {navlink.name}
                  </Link>
                </motion.div>
              ))}
            </div>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex items-center px-5">
                <PiChatsTeardropFill className="h-6 w-6 text-yellow-600" />
                <div className="ml-3">
                  <p className="text-xs font-medium text-gray-700">
                    Need Help?
                  </p>
                  <Link href="tel:+17186669256" className="text-sm font-bold text-gray-900">
                  (718) 666-9256
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
