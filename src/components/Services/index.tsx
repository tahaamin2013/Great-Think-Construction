"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, Loader2, Play, Search, Square } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { furtherCategories, services } from "@/store/Constructionservices";

const ServicesSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 9;

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

  const MediaItem: React.FC<{
    src: string;
    alt: string;
    inDialog?: boolean;
  }> = ({ src, alt, inDialog = false }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [showControls, setShowControls] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const isVideo = (url: string): boolean =>
      url.toLowerCase().endsWith(".mp4");

    const handlePlay = (e: React.MouseEvent) => {
      e.stopPropagation();
      if (videoRef.current) {
        setIsLoading(true);
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
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 transition-opacity">
              {isLoading ? (
                <Loader2 className="w-12 h-12 text-white animate-spin" />
              ) : isPlaying ? (
                <Button
                  onClick={handleStop}
                  variant="secondary"
                  size="icon"
                  className="rounded-full bg-white bg-opacity-50 hover:bg-opacity-75"
                  aria-label="Stop video"
                >
                  <Square className="w-6 h-6 text-gray-800" />
                </Button>
              ) : (
                <Button
                  onClick={handlePlay}
                  variant="secondary"
                  size="icon"
                  className="rounded-full bg-white bg-opacity-50 hover:bg-opacity-75"
                  aria-label="Play video"
                >
                  <Play className="w-6 h-6 text-gray-800" />
                </Button>
              )}
            </div>
          )}
        </div>
      );
    } else {
      return (
        <div className="relative w-full h-full">
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-center transition-all duration-300 ease-in-out group-hover:scale-105"
          />
        </div>
      );
    }
  };

  const ServiceCard: React.FC<{ service: any }> = ({ service }) => (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="group"
    >
      <Dialog>
        <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 bg-white">
          <CardContent className="p-0">
            <Carousel
              className="w-full"
              plugins={[plugin.current] as any}
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
            >
              <CarouselContent>
                {service.images.map((media: any, index: number) => (
                  <CarouselItem key={index} className="h-64 md:h-80">
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
                  <CarouselPrevious className="bg-white text-gray-800" />
                  <CarouselNext className="bg-white text-gray-800" />
                </>
              )}
            </Carousel>
          </CardContent>
          <CardHeader>
            <CardTitle className="text-xl md:text-2xl font-semibold text-gray-800">
              {service.title}
            </CardTitle>
            <p className="text-gray-600 text-sm md:text-base">
              {service.description}
            </p>
          </CardHeader>
        </Card>
        <DialogContent className="sm:max-w-[800px] bg-white">
          <div className="grid gap-6 py-4">
            <Carousel plugins={[plugin.current] as any} className="w-full">
              <CarouselContent>
                {service.images.map((media: any, index: number) => (
                  <CarouselItem key={index} className="h-[300px] md:h-[400px]">
                    <div className="relative w-full h-full">
                      <MediaItem
                        src={media}
                        alt={`${service.title} - Media ${index + 1}`}
                        inDialog
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {service.images.length > 1 && (
                <>
                  <CarouselPrevious className="bg-white text-gray-800" />
                  <CarouselNext className="bg-white text-gray-800" />
                </>
              )}
            </Carousel>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              {service.title}
            </h2>
            <p className="text-base md:text-lg text-gray-600">
              {service.description}
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </motion.div>
  );

  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12 text-center">
          Our Services
        </h2>

        <div className="mb-12 flex flex-col items-center space-y-6">
          <div className="relative w-full max-w-md">
            <Input
              type="text"
              placeholder="Search services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pr-10 border-gray-300 focus:border-yellow-500 focus:ring-yellow-500"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {furtherCategories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                className={`m-1 ${
                  activeCategory === category.id
                    ? "bg-yellow-400 text-white"
                    : "text-gray-600 border-gray-300 hover:bg-yellow-50"
                }`}
                onClick={() => {
                  setActiveCategory(category.id);
                  setCurrentPage(1);
                }}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-semibold text-gray-700">
            {furtherCategories.find((cat) => cat.id === activeCategory)?.name}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {currentItems.length > 0 ? (
              currentItems.map((service, index) => (
                <ServiceCard key={index} service={service} />
              ))
            ) : (
              <p className="text-center text-gray-600 col-span-full text-xl">
                No services available in this category.
              </p>
            )}
          </AnimatePresence>
        </div>

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
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <Button
                  variant="ghost"
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`${
                      currentPage === page
                        ? "bg-yellow-400 text-white"
                        : "text-gray-800 hover:bg-gray-50"
                    }`}
                  >
                    {page}
                  </Button>
                )
              )}
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
    </section>
  );
};

export default ServicesSection;
