'use client'

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { ArrowRight, Home, Phone } from 'lucide-react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutUs: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLSpanElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const featureElements = featuresRef.current ? Array.from(featuresRef.current.children) : [];
    if (sectionRef.current) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      });

      tl.from(imageRef.current, {
        x: -100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      })
        .from(contentRef.current, {
          x: 100,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
        }, '-=0.5')
        .from(titleRef.current, {
          y: 30,
          opacity: 0,
          duration: 0.6,
          ease: 'power3.out',
        }, '-=0.3')
        .from(paragraphRef.current, {
          y: 30,
          opacity: 0,
          duration: 0.6,
          ease: 'power3.out',
        }, '-=0.3')
        .from(featureElements, {
          y: 30,
          opacity: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
        }, '-=0.3')
        .from(ctaRef.current, {
          y: 30,
          opacity: 0,
          duration: 0.6,
          ease: 'power3.out',
        }, '-=0.3');
    }
  }, []);

  return (
    <section className="bg-transparent py-3 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="lg:flex">
            {/* Image Section */}
            <div ref={imageRef} className="lg:w-1/2 relative">
              <Image
                src="/author2.png"
                alt="Construction CEO"
                width={800}
                height={800}
                className="object-top object-cover w-full h-[680px]"
              />
              <div className="absolute rounded-l-3xl bottom-6 bg-white px-5 py-3 right-0 w-52 transform transition-all duration-500 group-hover:translate-x-[-10px]">
                <span className="text-md font-extrabold">Muhammad Shahbaz</span>
                <p className="text-sm">Founder/Contractor</p>
              </div>
            </div>

            {/* Content Section */}
            <div ref={contentRef} className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-between">
              <div>
                <span ref={titleRef} className="inline-block bg-red-100 text-red-600 py-1 px-4 rounded-full text-lg font-semibold tracking-wide uppercase mb-4">
                  About Us
                </span>

                <p ref={paragraphRef} className="text-gray-600 mb-8">
                  At <span className="font-bold text-black">Great Think Construction</span>, we are your comprehensive solution for all your construction and renovation needs. With expertise spanning a wide range of services, we pride ourselves on delivering top-quality craftsmanship for both <span className="font-bold text-black">residential and commercial</span> projects.
                </p>

                {/* Features */}
                <div ref={featuresRef} className="grid md:grid-cols-2 gap-8 mb-8">
                  {[
                    'Roofing & Waterproofing',
                    'Concrete & Brickwork',
                    'Interior & Exterior',
                    'Stonework & Pavers'
                  ].map((title, index) => (
                    <div key={index} className="flex flex-col items-start">
                      <Home className="w-12 h-12 text-red-500 mb-3" />
                      <h3 className="font-bold text-lg mb-2">{title}</h3>
                      <p className="text-gray-600 text-sm">
                        Expert services tailored to your needs
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Call to Action */}
              <div ref={ctaRef} className="flex flex-wrap items-center gap-6 pt-6 border-t border-gray-200">
                <Link className="w-fit" href="/request-estimate">
                  <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full text-sm font-semibold flex items-center transition duration-300 ease-in-out transform hover:scale-105">
                    GET A QUOTE
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </Link>
                <div className="flex items-center">
                  <Phone className="h-10 w-10 text-gray-400 mr-3" />
                  <div>
                    <p className="text-xs font-medium text-gray-500">Call, Text or Whatsapp us
                    </p>
                    <Link href="tel:+17186669256" className="text-lg font-bold text-gray-900">(718) 666-9256</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;