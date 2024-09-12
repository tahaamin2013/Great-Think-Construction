import React from 'react';
import { PhoneCall } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link'

const ContactUsBanner = () => {
  return (
    <div className="relative w-full -mt-16">
      <div className="absolute left-[5%] sm:left-[10%] lg:left-[15%] -top-32 sm:-top-24 lg:-top-44 w-[90%] sm:w-[80%] lg:w-[70%] max-w-5xl">
        <div className="bg-red-600 text-white p-6 sm:p-8 lg:p-12 rounded-3xl overflow-hidden flex flex-col lg:flex-row items-center">
          <div className="flex-grow space-y-4 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Contact Us Now</h2>
            <p className="text-sm sm:text-base">
            Contact Great Think Construction for questions or a custom quote. <br /> Let's build something great!
            </p>
            <Link
            href="/request-estimate"
            >
            <button className="bg-white mt-2 text-red-600 px-4 py-2 rounded-full font-semibold flex items-center mx-auto lg:mx-0">
              GET A QUOTE
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            </Link>

            <div className="flex items-center justify-center lg:justify-start">
              <PhoneCall className="w-5 h-5 mr-2" />
              <Link href="tel:+17186669256">(718) 666-9256</Link>
            </div>
          </div>
          <div className="hidden lg:block relative w-60 h-60 mt-8 lg:mt-0 lg:ml-8">
            <div className="absolute bg-yellow-500 h-96 w-96 rounded-2xl rotate-12 -top-12 left-16" />
            <div className="relative w-full h-full rounded-full overflow-hidden border-8 bg-zinc-300 border-white z-10">
              <Image
                src="/contact-Image-2.jpg"
                alt="Contact us"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsBanner;