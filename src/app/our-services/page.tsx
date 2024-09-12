"use client";
import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { services, furtherCategories } from "@/store/Constructionservices";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import MediaItem from "@/components/Services/MediaItem";

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

const Home: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const filteredServices =
    activeCategory === "all"
      ? services
      : services.filter((service) => service.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Modern Design Services</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Modern Design Services</h1>
          <p className="text-xl">
            Transform your space with our expert solutions
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="mb-8 flex flex-wrap justify-center gap-4">
          {furtherCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                activeCategory === category.id
                  ? "bg-blue-600 text-white"
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
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;

{
  /*

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
)} */
}
