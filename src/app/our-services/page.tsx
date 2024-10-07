"use client";

import MediaItem from "@/components/Services/MediaItem";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { furtherCategories, services } from "@/store/Constructionservices";
import React, { useState } from "react";
import { AdComponent } from "@/components/Google ads/ad";

interface ServiceItem {
  images: string[];
  title: string;
  description: string;
  category: string;
}

const ImageDialog: React.FC<{ src: string; alt: string }> = ({ src, alt }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="relative h-48 cursor-pointer">
          <MediaItem src={src} alt={alt} />
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-3xl">
        <div className="relative w-full h-[calc(100vh-200px)]">
          <MediaItem src={src} alt={alt} inDialog={false} />
        </div>
      </DialogContent>
    </Dialog>
  );
};

const ServiceCard: React.FC<ServiceItem & { isActive: boolean }> = ({
  title,
  images,
  description,
  isActive,
}) => {
  return (
    <div
      className={`bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ${
        isActive ? "scale-105 shadow-lg" : "scale-100 hover:shadow-lg"
      }`}
    >
      <ImageDialog src={images[0]} alt={title} />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600 mt-2">{description}</p>
      </div>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredServices =
  activeCategory === "all"
    ? services
    : services.filter((service) => service.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-100 py-4">
      <h1 className="text-5xl font-bold mb-4 text-center">Our Services</h1>

      <main className="container mx-auto px-4 py-12">
        <div className="mb-8 flex flex-wrap justify-center gap-4">
          {furtherCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                activeCategory === category.id
                  ? "bg-red-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      
              {filteredServices.map((service, index) => (
                <ServiceCard
                key={index}
                {...service}
                isActive={
                  activeCategory === service.category || activeCategory === "all"
                }
              />              ))}
        </div>
      </main>
      <AdComponent
        Adclient="ca-pub-9571755808195636"
        Adslot="5006986571"
      />
    </div>
  );
 
};

export default ServicesSection;