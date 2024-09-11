import React from 'react';
import Image from 'next/image';
import { ArrowRight, BrickWall, Home, Phone } from 'lucide-react';

const AboutUs: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="lg:flex">
            {/* Image Section */}
            <div className="lg:w-1/2">
              <Image
                src="/author.png"
                alt="Construction CEO"
                width={800}
                height={800}
                className="object-cover w-full h-full"
              />
            </div>

  {/* Content Section */}
  <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-between">
          <div>
            <span className="inline-block bg-red-100 text-red-600 py-1 px-4 rounded-full text-lg font-semibold tracking-wide uppercase mb-4">
              About Us
            </span>
            {/* <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
              Great Think Construction
            </h1> */}
            <p className="text-gray-600 mb-8">
              At <span className="font-bold text-black">Great Think Construction</span>, we are your comprehensive solution for all your construction and renovation needs. With expertise spanning a wide range of services, we pride ourselves on delivering top-quality craftsmanship for both <span className="font-bold text-black">residential and commercial</span> projects.
            </p>

            {/* Features */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
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
          <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-gray-200">
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full text-sm font-semibold flex items-center transition duration-300 ease-in-out transform hover:scale-105">
              GET A QUOTE
              <ArrowRight className="ml-2 w-4 h-4" />
            </button>
            <div className="flex items-center">
              <Phone className="h-10 w-10 text-gray-400 mr-3" />
              <div>
                <p className="text-xs font-medium text-gray-500">Contact Us</p>
                <p className="text-lg font-bold text-gray-900">(718) 666-9256</p>
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