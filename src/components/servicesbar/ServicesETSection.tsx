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
        className={`flex items-center absolute bottom-[0.00rem] ${
          side ? "justify-end" : "justify-start"
        }`}
      >
        <div
          className={`py-2 px-4 bg-gradient-to-br from-orange-500 to-yellow-600 text-white font-bold text-xl whitespace-nowrap ${
            side ? "rounded-l-xl" : "rounded-r-xl"
          }`}
        >
          {title}
        </div>
      </div>
      <div
        className={`bg-gradient-to-r from-black to-zinc-800 text-white w-full overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl flex`}
      >
        <div
          ref={containerRef}
          className="whitespace-nowrap overflow-hidden flex-grow py-0 px-8"
        >
          <div className="inline-block">
            {services.map((service, index) => (
              <span
                key={index}
                className="inline-block mx-4 text-2xl font-medium text-white transition-all duration-300"
              >
                {service}
              </span>
            ))}
          </div>
          <div className="inline-block">
            {services.map((service, index) => (
              <span
                key={`duplicate-${index}`}
                className="inline-block mx-4 text-2xl font-medium text-white transition-all duration-300"
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
