"use client";

import React, { useEffect, useRef } from "react";

const interiorServices = [
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

const exteriorServices = [
  "Landscaping",
  "Roofing",
  "Siding",
  "Deck Construction",
  "Fencing",
  "Exterior Painting",
  "Driveway Paving",
  "Gutter Installation",
  "Outdoor Lighting",
  "Pool Installation",
];

const ServiceBar: React.FC<{ title: string; services: string[] }> = ({
  title,
  services,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const animate = () => {
      if (
        container.scrollLeft >=
        container.scrollWidth - container.clientWidth
      ) {
        container.scrollLeft = 0;
      } else {
        container.scrollLeft += 1;
      }
      requestAnimationFrame(animate);
    };

    const animation = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animation);
  }, []);

  return (
    <div className="bg-black w-full text-white py-2 px-3 overflow-hidden flex items-center">
      <div className="mr-4 font-bold text-lg whitespace-nowrap">{title}:</div>
      <div
        ref={containerRef}
        className="whitespace-nowrap overflow-hidden flex-grow"
      >
        <div className="inline-block">
          {services.map((service, index) => (
            <span
              key={index}
              className="inline-block mx-4 text-lg font-semibold"
            >
              {service}
            </span>
          ))}
        </div>
        <div className="inline-block">
          {services.map((service, index) => (
            <span
              key={index}
              className="inline-block mx-4 text-lg font-semibold"
            >
              {service}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const ServicesDisplay: React.FC = () => {
  return (
    <div className="sticky top-0 left-0 right-0 z-[60]">
      <ServiceBar title="Interior" services={interiorServices} />
      <ServiceBar title="Exterior" services={exteriorServices} />
    </div>
  );
};

export default ServicesDisplay;
