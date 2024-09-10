import React from 'react';
import Image from 'next/image';
import { Facebook, Linkedin, Instagram, Share2 } from 'lucide-react';

const TeamMemberDashboard: React.FC = () => {
  return (
    <div className="bg-red-600 p-8 rounded-3xl text-white font-sans my-10">
      <div className="flex justify-between mb-12">
        <Image src="/api/placeholder/24/24" alt="Framer" width={24} height={24} className="invert" />
        <Image src="/api/placeholder/24/24" alt="elastic" width={24} height={24} className="invert" />
        <Image src="/api/placeholder/24/24" alt="Trustpilot" width={24} height={24} className="invert" />
        <Image src="/api/placeholder/24/24" alt="Webflow" width={24} height={24} className="invert" />
        <Image src="/api/placeholder/24/24" alt="Evernote" width={24} height={24} className="invert" />
      </div>
      
      <div className="mb-8">
        <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold">TEAM MEMBER</span>
        <h1 className="text-5xl font-bold mt-4 leading-tight">Bridging the Gap<br />Dreams Between</h1>
      </div>
      
      <div className="flex space-x-4">
        {['Dianne Russell', 'Wade Warren', 'David Miller'].map((name, index) => (
          <div key={index} className="bg-white rounded-xl overflow-hidden text-black w-1/3">
            <div className="relative h-48">
              <Image src={`/api/placeholder/300/200`} alt={name} layout="fill" objectFit="cover" />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg">{name}</h3>
              <p className="text-sm text-gray-600">{index === 1 ? 'Marketing Coordinator' : 'Web Designer'}</p>
              <div className="flex justify-between mt-4">
                {index === 1 ? (
                  <div className="flex space-x-2">
                    <Facebook size={20} className="text-gray-400" />
                    <Linkedin size={20} className="text-gray-400" />
                    <Instagram size={20} className="text-gray-400" />
                  </div>
                ) : (
                  <Share2 size={20} className="text-gray-400" />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMemberDashboard;