'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MailIcon, PhoneIcon, MessageCircleIcon, ArrowRightIcon, CheckCircleIcon } from "lucide-react";

const EstimatePage = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-yellow-100 text-gray-800">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <motion.header 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h1 className="text-6xl font-extrabold mb-2 text-yellow-600 tracking-tight">
            Great Think Construction
          </h1>
          <p className="text-2xl text-yellow-700 font-light">Building Dreams, Crafting Realities</p>
        </motion.header>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left column: What to Expect */}
          <motion.div 
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-yellow-200 h-full">
              <h2 className="text-3xl font-bold mb-6 text-yellow-600">What to Expect</h2>
              <p className="text-gray-600 mb-6">
                Thank you for choosing Great Think Construction for your residential and commercial construction needs. We value your time and commitment to enhancing your living or working space.
              </p>
              <ul className="space-y-4">
                {[
                  {title: "Detailed Information Gathering", description: "Your responses will help us understand your project requirements in detail."},
                  {title: "Tailored Solutions", description: "Our team will review your questionnaire and prepare a customized plan for your project."},
                  {title: "Convenient Scheduling", description: "After filling out the form, click the yellow button to schedule an appointment at your convenience."},
                  {title: "Transparent Communication", description: "We are committed to open and transparent communication throughout the process."}
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    className="flex items-start"
                  >
                    <CheckCircleIcon className="w-6 h-6 mr-3 text-yellow-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-yellow-700">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right column: Estimate Form */}
          <motion.div 
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:col-span-7"
          >
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-yellow-200">
              {/* Progress bar */}
              <div className="mb-8">
                <div className="h-2 bg-yellow-100 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full"
                    initial={{ width: '0%' }}
                    animate={{ width: `${(currentStep / 3) * 100}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                <div className="flex justify-between mt-2 text-sm font-medium text-yellow-600">
                  <span>Client Info</span>
                  <span>Project Details</span>
                  <span>Review</span>
                </div>
              </div>

              {/* Form steps */}
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                {currentStep === 1 && (
                  <>
                    <Input placeholder="Client Name" className="border-yellow-300 focus:ring-yellow-500 focus:border-yellow-500 rounded-xl py-3" />
                    <Input placeholder="Client Address" className="border-yellow-300 focus:ring-yellow-500 focus:border-yellow-500 rounded-xl py-3" />
                    <Input placeholder="Client Phone" className="border-yellow-300 focus:ring-yellow-500 focus:border-yellow-500 rounded-xl py-3" />
                    <Input placeholder="Client Email" className="border-yellow-300 focus:ring-yellow-500 focus:border-yellow-500 rounded-xl py-3" />
                  </>
                )}

                {currentStep === 2 && (
                  <Textarea
                    className="w-full h-64 border-yellow-300 focus:ring-yellow-500 focus:border-yellow-500 resize-none rounded-xl"
                    placeholder="Describe your project in detail..."
                  />
                )}

                {currentStep === 3 && (
                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-yellow-600">Terms and Conditions</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      <li>This estimate is valid for 30 days from the date of issue.</li>
                      <li>A 50% deposit is required to begin work, with the balance due upon completion.</li>
                      <li>Any changes to the scope of work may result in additional charges.</li>
                      <li>Great Think Construction Company guarantees all workmanship for a period of 5 years.</li>
                    </ul>
                  </div>
                )}
              </motion.div>

              {/* Navigation buttons */}
              <div className="mt-8 flex justify-between">
                {currentStep > 1 && (
                  <Button onClick={prevStep} className="bg-yellow-100 text-yellow-700 px-6 py-3 rounded-full hover:bg-yellow-200 transition-colors duration-200 font-medium">
                    Previous
                  </Button>
                )}
                <Button
                  onClick={currentStep < 3 ? nextStep : () => {}}
                  className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-8 py-3 rounded-full hover:from-yellow-500 hover:to-yellow-700 transition-colors duration-200 font-medium flex items-center"
                >
                  {currentStep < 3 ? (
                    <>
                      Next
                      <ArrowRightIcon className="ml-2 w-5 h-5" />
                    </>
                  ) : (
                    'Submit Estimate Request'
                  )}
                </Button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Contact information */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 bg-white rounded-3xl p-8 shadow-lg border border-yellow-200"
        >
          <h2 className="text-3xl font-bold mb-6 text-yellow-600">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a href="tel:+17186669256" className="flex items-center text-yellow-700 hover:text-yellow-500 transition-colors duration-200">
              <PhoneIcon className="w-6 h-6 mr-3" />
              <span className="font-medium">+1(718) 666-9256</span>
            </a>
            <a href="mailto:info@greatthink.com" className="flex items-center text-yellow-700 hover:text-yellow-500 transition-colors duration-200">
              <MailIcon className="w-6 h-6 mr-3" />
              <span className="font-medium">info@greatthink.com</span>
            </a>
            <a href="#" className="flex items-center text-yellow-700 hover:text-yellow-500 transition-colors duration-200">
              <MessageCircleIcon className="w-6 h-6 mr-3" />
              <span className="font-medium">Live Chat</span>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EstimatePage;