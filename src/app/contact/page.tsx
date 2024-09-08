'use client'

import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaHardHat } from 'react-icons/fa';

const ContactUs: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section className="bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-500 py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-40 h-40 bg-yellow-200 rounded-full opacity-50 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-yellow-600 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-yellow-400 rounded-full opacity-20 animate-spin-slow"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-5xl font-extrabold text-center text-yellow-900 mb-12 animate-text-shadow">
          Let&apos;s Build Together!
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white bg-opacity-90 rounded-lg shadow-2xl p-8 transform hover:scale-105 transition duration-300">
            <h3 className="text-3xl font-bold text-yellow-600 mb-6 flex items-center">
              <FaHardHat className="mr-3" /> Get in Touch
            </h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-yellow-700 font-medium mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formState.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border-2 border-yellow-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition duration-300" 
                  required 
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-yellow-700 font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formState.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border-2 border-yellow-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition duration-300" 
                  required 
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-yellow-700 font-medium mb-2">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={4} 
                  value={formState.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border-2 border-yellow-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition duration-300" 
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="bg-yellow-500 text-white font-bold py-3 px-6 rounded-md hover:bg-yellow-600 transition duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>
          
          <div className="space-y-8">
            <div className="bg-yellow-400 bg-opacity-90 rounded-lg shadow-2xl p-8 transform hover:scale-105 transition duration-300">
              <h3 className="text-3xl font-bold text-yellow-800 mb-6">Contact Information</h3>
              <ul className="space-y-4">
                <li className="flex items-center text-yellow-900 hover:text-yellow-700 transition duration-300">
                  <FaPhone className="text-2xl mr-4" />
                  <span className="text-xl">+1 (123) 456-7890</span>
                </li>
                <li className="flex items-center text-yellow-900 hover:text-yellow-700 transition duration-300">
                  <FaEnvelope className="text-2xl mr-4" />
                  <span className="text-xl">info@greatthink.com</span>
                </li>
                <li className="flex items-center text-yellow-900 hover:text-yellow-700 transition duration-300">
                  <FaMapMarkerAlt className="text-2xl mr-4" />
                  <span className="text-xl">123 Construction Ave, Building City, 12345</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-yellow-200 bg-opacity-90 rounded-lg shadow-2xl p-8 transform hover:scale-105 transition duration-300">
              <h3 className="text-3xl font-bold text-yellow-800 mb-6">Business Hours</h3>
              <ul className="space-y-2">
                <li className="flex justify-between text-xl">
                  <span className="text-yellow-700">Monday - Friday:</span>
                  <span className="text-yellow-900 font-medium">9:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between text-xl">
                  <span className="text-yellow-700">Saturday:</span>
                  <span className="text-yellow-900 font-medium">10:00 AM - 4:00 PM</span>
                </li>
                <li className="flex justify-between text-xl">
                  <span className="text-yellow-700">Sunday:</span>
                  <span className="text-yellow-900 font-medium">Closed</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;