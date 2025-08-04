import React from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#002f49] relative text-white px-4 sm:px-8 md:px-16 lg:px-24 pt-12 pb-5 my-10 rounded-[2rem]">
      {/* Decoration */}
      <div className="w-48 sm:w-64 md:w-80 lg:w-[26rem] h-48 sm:h-56 md:h-64 lg:h-72 bg-[#0d3648] absolute z-10 top-0 left-0 rounded-br-[3rem] sm:rounded-br-[4rem] md:rounded-br-[5rem] lg:rounded-br-[6rem]" />

      {/* Content */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 relative z-20">
        {/* Company Info */}
        <div className="w-full lg:w-1/3">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <span className="text-red-500 mr-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
            </span>
            Great Think Cons.
          </h2>
          <p className="mb-4 text-gray-400 text-sm">
            Great things start here! Reach out now!
          </p>
          <div className="flex items-center">
            <input
              type="email"
              placeholder="Enter email address"
              className="bg-[#001a2f] px-3 py-2 rounded-l-md w-full text-sm"
            />
            <button className="bg-[#001a2f] px-3 py-2 rounded-r-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>
          <div className="flex space-x-4 mt-4">
            {[FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterestP].map(
              (Icon, index) => (
                <Link
                  key={index}
                  href="#"
                  className="text-gray-400 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </Link>
              )
            )}
          </div>
        </div>

        {/* Links and Contact */}
        <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 lg:gap-10 mt-8 lg:mt-0">
          <div>
            <h3 className="font-semibold text-lg mb-2 text-white">
              About Company
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { label: "About Us", path: "/about" },
                { label: "Services", path: "/our-services" },
                { label: "Contact Us", path: "/contact" },
              ].map((item, index) => (
                <li key={index}>
                  <Link href={item.path} className="text-gray-400 hover:text-white">
                    — {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2 text-white">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <svg
                  className="h-5 w-5 mr-2 text-yellow-500 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <Link href="tel:+17186669256">(718) 666-9256</Link>
              </li>
              <li className="flex items-center">
                <svg
                  className="h-5 w-5 mr-2 text-yellow-500 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>greatthinkc@gmail.com</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 mr-2 text-yellow-500 mt-1 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>777 East 31st Street, Brooklyn, NY</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-[50px] pt-8 flex flex-col md:flex-row items-center justify-between border-t border-gray-800 text-center text-gray-400 text-sm">
        <div>
          <p>© Great Think Construction 2024 | All Rights Reserved</p>
          <div className="mt-2 flex flex-wrap">
            <Link href="/terms-and-condition" className="hover:text-white mr-4 mb-2">
              Terms & Condition
            </Link>
            <Link href="/privacy-policy" className="hover:text-white mr-4 mb-2">
              Privacy Policy
            </Link>
           
            <Link href="/contact" className="hover:text-white mb-2">
              Contact Us
            </Link>
             <Link href="/carrateri-speciali" className="hover:text-white mb-2">
              speciali carrateri
            </Link>
          </div>
        </div>
        <div>
          <Link href="https://webkin-solutions.vercel.app/" target="_blank" className="flex mb-2">
            Design by <span className="text-white ml-1">Webkin Solutions</span>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
