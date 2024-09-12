import React from 'react';
import { Building2, Target, ArrowRight } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white p-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16">
          <h1 className="text-6xl font-extrabold text-gray-900 mb-4">
            Great Think <span className="text-yellow-600">Construction</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">Building tomorrow's landmarks with today's innovation.</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-2 relative overflow-hidden rounded-3xl shadow-2xl">
            <img src="/api/placeholder/1200/800" alt="Construction site" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/80 to-transparent flex items-end p-8">
              <h2 className="text-4xl font-bold text-white">Crafting Excellence</h2>
            </div>
          </div>

          <Section 
            icon={<Building2 className="text-yellow-600" size={32} />}
            title="About Us"
            content="At Great Think Construction Corp., we transform visions into reality. Our commitment to exceptional craftsmanship and innovation drives us to deliver outstanding results for both residential and commercial projects."
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <Section 
            icon={<Target className="text-red-600" size={32} />}
            title="Our Mission"
            content="We strive to exceed expectations by fostering strong client relationships, embracing cutting-edge technologies, and upholding the highest standards of quality and sustainability in every project we undertake."
          />

          <div className="lg:col-span-2 relative overflow-hidden rounded-3xl shadow-2xl">
            <img src="/api/placeholder/1200/800" alt="Completed project" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-l from-red-600/80 to-transparent flex items-end justify-end p-8">
              <h2 className="text-4xl font-bold text-white">Building the Future</h2>
            </div>
          </div>
        </div>

        <div className="text-center">

          <button className="bg-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-red-700 transition-colors duration-300 flex items-center mx-auto group">
            Let's build your project
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={24} />
          </button>
        </div>
      </div>

      <footer className="mt-20 text-center text-gray-600">
        <p>&copy; 2024 Great Think Construction Corp. All rights reserved.</p>
      </footer>
    </div>
  );
};

const Section = ({ icon, title, content }: any) => (
  <div className="bg-gray-100 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300">
    <div className="flex items-center mb-4">
      {icon}
      <h2 className="text-2xl font-bold ml-4 text-gray-800">{title}</h2>
    </div>
    <p className="text-gray-700 leading-relaxed">{content}</p>
  </div>
);

export default AboutUs;