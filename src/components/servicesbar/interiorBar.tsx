'use client'

import React, { useEffect, useRef } from 'react';

const services = [
  'Kitchen',
  'Bathroom',
  'Plumbing',
  'Electric',
  'Doors',
  'Windows',
  'Flooring',
  'Basement Finish',
  'California Stucco',
  'Renovation',
];

const InteriorBar: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const animate = () => {
      if (container.scrollLeft >= (container.scrollWidth - container.clientWidth)) {
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
    <div className="bg-black w-full text-white sticky top-0 left-0 right-0 z-[60] py-2 px-3 rounded-b-2xl overflow-hidden flex items-center">
      <div className="mr-4 font-bold text-lg whitespace-nowrap">Interior:</div>
      <div
        ref={containerRef}
        className="whitespace-nowrap overflow-hidden flex-grow"
      >
        <div className="inline-block">
          {services.map((service, index) => (
            <span key={index} className="inline-block mx-4 text-lg font-semibold">
              {service}
            </span>
          ))}
        </div>
        <div className="inline-block">
          {services.map((service, index) => (
            <span key={index} className="inline-block mx-4 text-lg font-semibold">
              {service}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InteriorBar;