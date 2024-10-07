"use client";

import MediaItem from "@/components/Services/MediaItem";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { furtherCategories, services } from "@/store/Constructionservices";
import Autoplay from "embla-carousel-autoplay";
import { ArrowLeft, ArrowRight } from "lucide-react";
import React, { useRef, useState } from "react";
import Pagination from "../Pagination";
import { Button } from "../ui/button";
import { ServiceAd } from "../Google ads/Service Ad"; // Importing the ad component

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

  const [searchTerm, setSearchTerm] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 4;

  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  const normalizeCategory = (category: string): string =>
    category.toLowerCase().replace(/ /g, "-");

  const filteredServices = services.filter(
    (service) =>
      (activeCategory === "all" ||
        normalizeCategory(service.category) === activeCategory) &&
      (service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const totalPages = Math.ceil(filteredServices.length / itemsPerPage);
  const currentItems = filteredServices.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const getRandomIndex = (length: number) => {
    return Math.floor(Math.random() * length);
  };

  return (
    <div className="min-h-screen py-4">
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
          {currentItems.length > 0 ? (
            currentItems.map((service, index) => {
              const randomPosition = getRandomIndex(3); // Get a random index within a set of 3 services

              return (
                <React.Fragment key={index}>
                  {/* Render the ad randomly within every group of three services */}
                  {index % 3 === randomPosition && <ServiceAd />}
                  <ServiceCard
                    {...service}
                    isActive={
                      activeCategory === service.category ||
                      activeCategory === "all"
                    }
                  />
                </React.Fragment>
              );
            })
          ) : (
            <p className="text-center text-gray-600 col-span-full text-xl">
              No services available in this category.
            </p>
          )}
        </div>
      </main>
      {totalPages > 1 && (
        <div className="mt-12 flex justify-center">
          <nav className="inline-flex rounded-md shadow-sm">
            <Button
              onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              variant="ghost"
              className="rounded-l-md px-2 mx-2 bg-white text-gray-800 border border-gray-300 hover:bg-gray-50"
            >
              <ArrowLeft />
            </Button>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              setCurrentPage={setCurrentPage}
            />
            <Button
              onClick={() =>
                setCurrentPage((prev) => Math.min(totalPages, prev + 1))
              }
              variant="ghost"
              disabled={currentPage === totalPages}
              className="rounded-r-md px-2 mx-2 bg-white text-gray-800 border border-gray-300 hover:bg-gray-50"
            >
              <ArrowRight />
            </Button>
          </nav>
        </div>
      )}
    </div>
  );
};

export default ServicesSection;
