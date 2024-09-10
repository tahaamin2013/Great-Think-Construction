import React from 'react';
import Image from 'next/image';

const WhyChooseUs = () => {
  return (
    <section className="container mx-auto px-4 py-8 sm:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mx-auto">
        {/* Left column */}
        <div className="space-y-4 sm:space-y-6">
          <h2 className="text-sm font-semibold text-gray-600 uppercase">Why Choose Us</h2>
          <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">Committed High Quality Build</h3>
          <p className="text-gray-600 text-sm sm:text-base">
            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <button className="bg-red-600 text-white px-4 sm:px-6 py-2 rounded-full hover:bg-red-700 transition text-sm sm:text-base">
            Learn More
          </button>
          <div className="flex justify-between mt-6 sm:mt-8 w-full bg-white rounded-2xl py-6 sm:py-8 px-4 sm:px-8 lg:px-16">
            {['Completed Projects', 'Team Members', 'Approval Rate'].map((item, index) => (
              <div key={index} className="w-full sm:w-auto text-center sm:text-left mb-4 sm:mb-0">
                <h4 className="text-xl sm:text-2xl font-bold">{index === 0 ? '10k+' : index === 1 ? '400+' : '97%'}</h4>
                <p className="text-xs sm:text-sm text-gray-600">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right column - Images */}
        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] mt-8 lg:mt-0">
          <div className="absolute inset-0 w-3/5 h-3/4 z-10">
            <Image
              src="/construction-enginerering-whychooseus_1.jpg"
              alt="Construction Engineering 1"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="absolute bottom-0 right-0 sm:right-12 lg:right-24 w-1/2 h-2/3">
            <Image
              src="/construction-enginerering-whychooseus_2.jpg"
              alt="Construction Engineering 2"
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