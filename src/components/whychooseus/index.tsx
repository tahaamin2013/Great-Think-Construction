'use client'

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const WhyChooseUs = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonRef = useRef(null);
  const statsRef = useRef(null);
  const image1Ref = useRef(null);
  const image2Ref = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    const paragraph = paragraphRef.current;
    const button = buttonRef.current;
    const stats = statsRef.current;
    const image1 = image1Ref.current;
    const image2 = image2Ref.current;

    gsap.set([heading, paragraph, button, stats, image1, image2], { autoAlpha: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none"
      }
    });

    tl.fromTo(heading, { y: 50 }, { duration: 0.6, y: 0, autoAlpha: 1, ease: "power2.out" })
      .fromTo(paragraph, { y: 30 }, { duration: 0.4, y: 0, autoAlpha: 1, ease: "power2.out" }, "-=0.2")
      .fromTo(button, { y: 20 }, { duration: 0.3, y: 0, autoAlpha: 1, ease: "back.out(1.7)" }, "-=0.1")
      .fromTo(stats, { scaleY: 0 }, { duration: 0.5, scaleY: 1, autoAlpha: 1, ease: "elastic.out(1, 0.5)" }, "-=0.2")
      .fromTo(image1, { x: -50, rotation: -5 }, { duration: 0.7, x: 0, rotation: 0, autoAlpha: 1, ease: "power2.out" }, "-=0.5")
      .fromTo(image2, { x: 50, rotation: 5 }, { duration: 0.7, x: 0, rotation: 0, autoAlpha: 1, ease: "power2.out" }, "-=0.6");

    // Subtle floating animation for images
    gsap.to(image1, {
      y: -10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    gsap.to(image2, {
      y: 10,
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    // Clean up
    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section ref={sectionRef} className="container mx-auto px-4 py-8 sm:py-16 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mx-auto">
        {/* Left column */}
        <div className="space-y-4 sm:space-y-6">
          <h2 className="text-sm font-semibold text-gray-600 uppercase">Why Choose Us</h2>
          <h3 ref={headingRef} className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">Comprehensive Expertise, Exceptional Quality</h3>
          <p ref={paragraphRef} className="text-gray-600 text-sm sm:text-base mb-2">
            At Great Think Construction Corp, we offer a wide range of services from masonry and concrete work to painting and home improvements. Our experienced team ensures top-notch results in every project, big or small. We pride ourselves on our attention to detail and ability to provide full-service solutions tailored to your specific needs.
          </p>
          
          <Link href="/our-services" className="w-fit mt-2">
  <button ref={buttonRef} className="bg-red-600 text-white px-4 sm:px-6 py-2 rounded-full hover:bg-red-700 transition text-sm sm:text-base mt-4">
    Explore Our Services
  </button>
</Link>


          <div ref={statsRef} className="flex justify-between mt-6 sm:mt-8 w-full bg-white rounded-2xl py-6 sm:py-8 px-4 sm:px-8 lg:px-16">
            {['Services Offered', 'Client Satisfaction'].map((item, index) => (
              <div key={index} className="w-full sm:w-auto text-center sm:text-left mb-4 sm:mb-0">
                <h4 className="text-xl sm:text-2xl font-bold">{index === 0 ? '30+' : '98%'}</h4>
                <p className="text-xs sm:text-sm text-gray-600">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right column - Images */}
        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] mt-8 lg:mt-0">
          <div ref={image1Ref} className="absolute inset-0 w-3/5 h-3/4 z-10">
            <Image
              src="/construction-enginerering-whychooseus_1.jpg"
              alt="Great Think Construction Project 1"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div ref={image2Ref} className="absolute bottom-0 right-0 sm:right-12 lg:right-24 w-1/2 h-2/3">
            <Image
              src="/construction-enginerering-whychooseus_2.jpg"
              alt="Great Think Construction Project 2"
              layout="fill"
              objectFit="cover"
              className="rounded-lg object-left"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;