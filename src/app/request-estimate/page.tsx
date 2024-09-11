'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBuilding, FaUserAlt, FaClipboardList, FaFileContract } from 'react-icons/fa';

const ConstructionInfo: React.FC = () => {
  const [activeSection, setActiveSection] = useState(0);

  const sections = [
    { title: "What to Expect", icon: FaBuilding },
    { title: "Client Info", icon: FaUserAlt },
    { title: "Project Details", icon: FaClipboardList },
    { title: "Review", icon: FaFileContract },
  ];

  return (
    <div className="bg-gray-100 min-h-screen text-gray-800 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4 text-gray-900">
            Great Think Construction
          </h1>
          <p className="text-xl text-gray-600">Building Dreams, Crafting Realities</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {sections.map((section, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveSection(index)}
              className={`p-4 rounded-lg shadow-md transition-all duration-300 flex flex-col items-center ${
                activeSection === index
                  ? 'bg-teal-500 text-white'
                  : 'bg-white text-gray-800 hover:bg-gray-50'
              }`}
            >
              <section.icon className="text-2xl mb-2" />
              <span className="text-sm font-medium">{section.title}</span>
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl p-8 shadow-lg"
          >
            {activeSection === 0 && (
              <div>
                <h2 className="text-3xl font-bold mb-6 text-teal-600">What to Expect</h2>
                <p className="mb-6 text-gray-600">Thank you for choosing Great Think Construction for your residential and commercial construction needs. We value your time and commitment to enhancing your living or working space.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { title: "Detailed Information Gathering", description: "Your responses will help us understand your project requirements in detail." },
                    { title: "Tailored Solutions", description: "Our team will review your questionnaire and prepare a customized plan for your project." },
                    { title: "Convenient Scheduling", description: "After filling out the form, click the button to schedule an appointment at your convenience." },
                    { title: "Transparent Communication", description: "We are committed to open and transparent communication throughout the process." },
                  ].map((item, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-teal-600 mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeSection === 1 && (
              <div>
                <h2 className="text-3xl font-bold mb-6 text-teal-600">Client Info</h2>
                <form className="space-y-4">
                  {["Name", "Address", "Phone", "Email"].map((field) => (
                    <div key={field}>
                      <label className="block text-sm font-medium mb-1 text-gray-600">{field}</label>
                      <input
                        type={field === "Email" ? "email" : "text"}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 transition duration-300"
                      />
                    </div>
                  ))}
                </form>
              </div>
            )}

            {activeSection === 2 && (
              <div>
                <h2 className="text-3xl font-bold mb-6 text-teal-600">Project Details</h2>
                <textarea
                  className="w-full h-48 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 transition duration-300"
                  placeholder="Describe your project in detail..."
                ></textarea>
              </div>
            )}

            {activeSection === 3 && (
              <div>
                <h2 className="text-3xl font-bold mb-6 text-teal-600">Review</h2>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Terms and Conditions</h3>
                <ul className="space-y-2 text-gray-600">
                  {[
                    "This estimate is valid for 30 days from the date of issue.",
                    "A 50% deposit is required to begin work, with the balance due upon completion.",
                    "Any changes to the scope of work may result in additional charges.",
                    "Great Think Construction Company guarantees all workmanship for a period of 5 years.",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-teal-500 mr-2">•</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <button className="bg-teal-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-teal-600 transition duration-300 shadow-md">
            Next
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Contact Us</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="tel:+17186669256" className="text-teal-600 hover:text-teal-800 transition duration-300">+1 (718) 666-9256</a>
            <a href="mailto:info@greatthink.com" className="text-teal-600 hover:text-teal-800 transition duration-300">info@greatthink.com</a>
            <button className="text-teal-600 hover:text-teal-800 transition duration-300">Live Chat</button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ConstructionInfo;