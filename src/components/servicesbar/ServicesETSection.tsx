"use client";

import React, { useEffect, useRef } from "react";

interface ServiceBarProps {
  title: string;
  services: string[];
  side: boolean;
}

const ServiceBar: React.FC<ServiceBarProps> = ({ title, services, side }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const animate = () => {
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      } else {
        container.scrollLeft += 1;
      }
    };

    const intervalId = setInterval(animate, 30);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative">
      <div
        className={`bg-gradient-to-r from-black to-zinc-800 text-white w-full overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl flex`}
      >
        <div
          ref={containerRef}
          className="whitespace-nowrap overflow-hidden flex-grow py-0 px-8"
        >
          <div className="inline-block">
            {services.map((service, index) => (
              <span
                key={index}
                className="inline-block mx-4 text-md font-semibold text-white transition-all duration-300"
              >
                {service}
              </span>
            ))}
          </div>
          <div className="inline-block">
            {services.map((service, index) => (
              <span
                key={`duplicate-${index}`}
                className="inline-block mx-4 text-md font-semibold text-white transition-all duration-300"
              >
                {service}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceBar;
