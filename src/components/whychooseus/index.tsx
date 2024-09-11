import React from 'react';
import Image from 'next/image';

const WhyChooseUs = () => {
  return (
    <section className="container mx-auto px-4 py-8 sm:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mx-auto">
        {/* Left column */}
        <div className="space-y-4 sm:space-y-6">
          <h2 className="text-sm font-semibold text-gray-600 uppercase">Why Choose Us</h2>
          <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">Comprehensive Expertise, Exceptional Quality</h3>
          <p className="text-gray-600 text-sm sm:text-base">
            At Great Think Construction Corp, we offer a wide range of services from masonry and concrete work to painting and home improvements. Our experienced team ensures top-notch results in every project, big or small. We pride ourselves on our attention to detail and ability to provide full-service solutions tailored to your specific needs.
          </p>
          <button className="bg-red-600 text-white px-4 sm:px-6 py-2 rounded-full hover:bg-red-700 transition text-sm sm:text-base">
            Explore Our Services
          </button>
          <div className="flex justify-between mt-6 sm:mt-8 w-full bg-white rounded-2xl py-6 sm:py-8 px-4 sm:px-8 lg:px-16">
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
          <div className="absolute inset-0 w-3/5 h-3/4 z-10">
            <Image
              src="/construction-enginerering-whychooseus_1.jpg"
              alt="Great Think Construction Project 1"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="absolute bottom-0 right-0 sm:right-12 lg:right-24 w-1/2 h-2/3">
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