"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { furtherCategories, services } from "@/store/Constructionservices";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { AnimatePresence, motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { CreatePluginType } from "embla-carousel";
import { Loader2, Play, Search, Square } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const ServicesSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9; // 3 rows of 3 items each

  const normalizeCategory = (category: string) =>
    category.toLowerCase().replace(/ /g, "-");

  const filteredServices = services.filter((service) =>
    (activeCategory === "all" || normalizeCategory(service.category) === activeCategory) &&
    (service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
     service.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const totalPages = Math.ceil(filteredServices.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredServices.slice(indexOfFirstItem, indexOfLastItem);

  const plugin = useRef(
    Autoplay({
      delay: 2000,
      stopOnInteraction: true,
    }) as unknown as CreatePluginType<any, {}>
  );

  const MediaItem: React.FC<{ src: string; alt: string; inDialog?: boolean }> = ({ src, alt, inDialog = false }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [showControls, setShowControls] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);
  
    const isVideo = (url: string) => url.toLowerCase().endsWith(".mp4");
  
    const handlePlay = (e: React.MouseEvent) => {
      e.stopPropagation();
      if (videoRef.current) {
        setIsLoading(true);
        videoRef.current.playbackRate = 0.5;
        videoRef.current
          .play()
          .then(() => {
            setIsPlaying(true);
            setIsLoading(false);
          })
          .catch((error) => {
            console.error("Error playing video:", error);
            setIsLoading(false);
          });
      }
    };
  
    const handleStop = (e: React.MouseEvent) => {
      e.stopPropagation();
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
        setIsPlaying(false);
      }
    };
  
    useEffect(() => {
      if (inDialog && videoRef.current) {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }, [inDialog]);
  
    useEffect(() => {
      if (videoRef.current) {
        videoRef.current.playbackRate = 0.5;
      }
    }, []);
  
    if (isVideo(src)) {
      return (
        <div 
          className="relative w-full h-full"
          onMouseEnter={() => setShowControls(true)}
          onMouseLeave={() => setShowControls(false)}
        >
          <video
            ref={videoRef}
            src={src}
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            title={alt}
            onPlaying={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          >
            Your browser does not support the video tag.
          </video>
          {showControls && !inDialog && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity">
              {isLoading ? (
                <Loader2 className="w-12 h-12 text-white animate-spin" />
              ) : isPlaying ? (
                <button
                  onClick={handleStop}
                  className="p-2 bg-red-500 rounded-full"
                  aria-label="Stop video"
                >
                  <Square className="w-8 h-8 text-white" />
                </button>
              ) : (
                <button
                  onClick={handlePlay}
                  className="p-2 bg-green-500 rounded-full"
                  aria-label="Play video"
                >
                  <Play className="w-8 h-8 text-white" />
                </button>
              )}
            </div>
          )}
        </div>
      );
    } else {
      return (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center transition-all duration-500 ease-in-out group-hover:scale-110"
        />
      );
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

 // Helper function to generate page numbers for pagination
 const generatePaginationItems = () => {
  const items = [];
  const maxVisiblePages = 5;

  if (totalPages <= maxVisiblePages) {
    for (let i = 1; i <= totalPages; i++) {
      items.push(
        <PaginationItem key={i}>
          <PaginationLink
            onClick={() => handlePageChange(i)}
            isActive={currentPage === i}
          >
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }
  } else {
    // Always show first page
    items.push(
      <PaginationItem key={1}>
        <PaginationLink
          onClick={() => handlePageChange(1)}
          isActive={currentPage === 1}
        >
          1
        </PaginationLink>
      </PaginationItem>
    );

    // Add ellipsis if necessary
    if (currentPage > 3) {
      items.push(
        <PaginationItem key="ellipsis-start">
          <PaginationEllipsis />
        </PaginationItem>
      );
    }

    // Add pages around current page
    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);
    for (let i = start; i <= end; i++) {
      items.push(
        <PaginationItem key={i}>
          <PaginationLink
            onClick={() => handlePageChange(i)}
            isActive={currentPage === i}
          >
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }

    // Add ellipsis if necessary
    if (currentPage < totalPages - 2) {
      items.push(
        <PaginationItem key="ellipsis-end">
          <PaginationEllipsis />
        </PaginationItem>
      );
    }

    // Always show last page
    items.push(
      <PaginationItem key={totalPages}>
        <PaginationLink
          onClick={() => handlePageChange(totalPages)}
          isActive={currentPage === totalPages}
        >
          {totalPages}
        </PaginationLink>
      </PaginationItem>
    );
  }

  return items;
};

  return (
    <section className="bg-white py-16 px-4 rounded-2xl">
      <h2 className="text-4xl font-bold text-yellow-800 mb-8 text-center">
        Our Services
      </h2>

      {/* Search Bar */}
      <div className="mb-8 flex justify-center">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search services..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border border-yellow-300 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-yellow-500" />
        </div>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center mb-8">
        {furtherCategories.map((category) => (
          <button
            key={category.id}
            className={`px-6 py-3 m-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
              activeCategory === category.id
                ? "bg-gradient-to-r from-yellow-400 to-yellow-600 text-white shadow-lg"
                : "bg-white text-yellow-700 hover:bg-yellow-100 hover:text-yellow-800"
            }`}
            onClick={() => {
              setActiveCategory(category.id);
              setCurrentPage(1);
            }}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Selected Category Name */}
      <div className="text-center mb-12">
        <h3 className="text-3xl font-semibold text-yellow-700">
          {furtherCategories.find((cat) => cat.id === activeCategory)?.name}
        </h3>
      </div>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence>
          {currentItems.length > 0 ? (
            currentItems.map((service, serviceIndex) => (
              <motion.div
                key={serviceIndex}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="group"
              >
                <Dialog>
                  <div className="relative overflow-hidden rounded-lg shadow-lg w-full max-h-fit">
                    <Carousel
                      className="w-full"
                      onMouseEnter={plugin.current.leave}
                    >
                      <CarouselContent>
                        {service.images.map((media, index) => (
                          <CarouselItem
                            key={index}
                            className="h-80 flex items-center justify-center"
                          >
                            <DialogTrigger asChild>
                              <div className="relative w-full h-full cursor-pointer">
                                <MediaItem src={media} alt={service.title} />
                              </div>
                            </DialogTrigger>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      {service.images.length > 1 && (
                        <>
                          <CarouselPrevious />
                          <CarouselNext />
                        </>
                      )}
                    </Carousel>
                  </div>
                  <DialogContent className="sm:max-w-[800px]">
                    <div className="grid gap-6 py-4">
                      <Carousel plugins={[plugin.current]} className="w-full">
                        <CarouselContent>
                          {service.images.map((media, index) => (
                            <CarouselItem
                              key={index}
                              className="h-[400px] flex items-center justify-center"
                            >
                              <div className="relative w-full h-full">
                                <MediaItem
                                  src={media}
                                  alt={`${service.title} - Media ${index + 1}`}
                                />
                              </div>
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        {service.images.length > 1 && (
                          <>
                            <CarouselPrevious />
                            <CarouselNext />
                          </>
                        )}
                      </Carousel>
                      <h2 className="text-3xl font-bold text-yellow-800">
                        {service.title}
                      </h2>
                      <p className="text-lg text-yellow-700">
                        {service.description}
                      </p>
                    </div>
                  </DialogContent>
                </Dialog>
                {/* Non-clickable text area */}
                <div className="bg-white p-6 rounded-lg shadow-md transform transition-all duration-500 -translate-y-8 group-hover:-translate-y-10">
                  <h3 className="text-2xl font-semibold text-yellow-700 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-yellow-600 text-base">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))
          ) : (
            <p className="text-center text-yellow-700 col-span-full text-xl">
              No services available in this category.
            </p>
          )}
        </AnimatePresence>
      </div>

     {/* Pagination */}
     {totalPages > 1 && (
        <Pagination className="mt-8">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
              />
            </PaginationItem>
            {generatePaginationItems()}
            <PaginationItem>
              <PaginationNext
                onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </section>
  );
};

export default ServicesSection;