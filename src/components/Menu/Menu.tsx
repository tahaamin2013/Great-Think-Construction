"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { MenuIcon, X } from "lucide-react";
import ServiceBar from "../servicesbar/ServicesETSection";

const menuLinks = [
  { path: "/", label: "Home" },
  { path: "/work", label: "Work" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
  { path: "/lab", label: "Lab" },
];

const exteriorServices = [
  "Roofing",
  "Pointing",
  "Concrete",
  "Fence",
  "Vinyl Fence",
  "Steps",
  "Sidewalks",
  "Extensions",
  "Brick-Block Porch",
  "Waterproofing",
  "Paving Stone",
  "Gutters",
  "Kitchen",
  "Bathroom",
  "Plumbing",
  "Electric",
  "Doors",
  "Windows",
  "Flooring",
  "Basement Finish",
  "California Stucco",
  "Renovation",
];

const Menu: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const Logo = "/Logo v3.svg";

  const tl = useRef<gsap.core.Timeline | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useGSAP(
    () => {
      gsap.set(".menu-link-item-holder", { y: 75 });

      tl.current = gsap
        .timeline({ paused: true })
        .to(".menu-overlay", {
          duration: 1.25,
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          ease: "power4.inOut",
        })
        .to(".menu-link-item-holder", {
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power4.inOut",
          delay: -0.75,
        });
    },
    { scope: container }
  );

  useEffect(() => {
    if (isMenuOpen) {
      tl.current?.play();
    } else {
      tl.current?.reverse();
    }
  }, [isMenuOpen]);

  return (
    <div className="z-[60] sticky top-0 left-0" ref={container}>
      <ServiceBar
        title="Exterior Work"
        services={exteriorServices}
        side={false}
      />
      <div className="w-full px-8 py-3 z-10 flex justify-between items-center bg-yellow-400">
        <div className="menu-logo">
          <Link
            href={"/"}
            className="cursor-pointer font-sans text-xl font-semibold tracking-tight flex items-center"
          >
            <Image
              src={Logo}
              alt="Great Think Construction Logo"
              width={80}
              height={80}
              className="mr-2"
            />
          </Link>
        </div>
        <div className="text-center flex flex-col items-center justify-center gap-0">
          <p className="text-3xl font-bold text-center -mb-2 uppercase">Great Think</p>
          <p className="font-semibold text-xs">Construction Corp.</p>
          <div className="h-[0.05rem] w-full bg-black" />
          <span className="text-[0.45rem]">NEW YORK STATE</span>
        </div>

        <div className="menu-open" onClick={toggleMenu}>
          <p className="cursor-pointer font-sans text-lg font-medium uppercase tracking-wide">
            <MenuIcon />
          </p>
        </div>

        <div
          className="menu-overlay fixed top-0 left-0 w-full h-screen p-8 bg-yellow-400 z-20 flex"
          style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)" }}
        >
          <div className="menu-overlay-bar fixed top-0 left-0 w-full px-8 py-3 z-10 flex justify-between items-center">
            <div className="menu-logo">
              <Link
                href={"/"}
                className="text-black cursor-pointer font-sans text-xl font-semibold tracking-tight flex items-center"
              >
                <Image
                  src={Logo}
                  alt="Great Think Construction Logo"
                  width={80}
                  height={80}
                  className="mr-2"
                />
                {/* Great Think Construction */}
              </Link>
            </div>
            <div className="text-center flex flex-col items-center justify-center gap-0">
              <p className="text-3xl font-bold text-center -mb-2 uppercase">
                Great Think
              </p>
              <p className="font-semibold text-xs">Construction Corp.</p>
              <div className="h-[0.05rem] w-full bg-black" />
              <span className="text-[0.45rem]">NEW YORK STATE</span>
            </div>{" "}
            <div className="menu-close" onClick={toggleMenu}>
              <p className="text-black cursor-pointer font-sans text-lg font-medium uppercase tracking-wide">
                <X />
              </p>
            </div>
          </div>

          <div className="menu-close-icon flex-[2] mb-16 flex items-end cursor-pointer">
            <p
              className="text-[100px] leading-[70%] font-light"
              onClick={toggleMenu}
            >
              &#x2715;
            </p>
          </div>

          <div className="menu-copy md:flex-[4] flex-[9] flex flex-col justify-between gap-18 pt-14 mb-16">
            <div className="menu-links">
              {menuLinks.map((link) => (
                <div
                  className="menu-link-item w-max"
                  key={link.label}
                  style={{
                    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                  }}
                >
                  <div
                    className="menu-link-item-holder relative"
                    onClick={toggleMenu}
                  >
                    <Link
                      href={link.path}
                      className="text-black text-[72px] font-bold leading-[1.1] tracking-tight hover:text-gray-800 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="menu-info flex">
              <div className="menu-info-col flex-1 flex flex-col justify-end">
                <p className="text-black font-sans text-base font-medium">
                  greatthinkconstruction92@gmail.com
                </p>
                <p className="text-black font-sans text-base font-medium">
                  (718) 666-9256
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
