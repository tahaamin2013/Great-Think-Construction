"use client";  // Add this at the top of your file

import React from "react";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Clock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation"; // This is now valid because of "use client"

interface BlogProps {
  title: string;
  description: string;
  tableOfContents: string[];
  publishDate: string;
  readTime: string;
  content: string;
  photo: string;
}

const Blog: React.FC<BlogProps> = ({
  title,
  tableOfContents,
  publishDate,
  readTime,
  content,
  photo,
}) => {
  // Get current slug from the URL using useRouter
  const pathname = usePathname(); // Now works as a client component

  // Extract the slug from the pathname (assuming the format is "/blogs/[slug]")
  const currentSlug = pathname.split("/").pop() || ""; 

  return (
    <div className="container px-10 py-12">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main content */}
        <div className="lg:w-3/4">
          <a
            href="/blogs"
            className="text-yellow-700 hover:text-yellow-900 flex items-center gap-2 mb-6 group"
          >
            <ArrowLeft
              size={16}
              className="transform group-hover:-translate-x-1 transition-transform"
            />
            <span className="border-b border-transparent group-hover:border-yellow-700 transition-colors">
              Back to Blog
            </span>
          </a>

          <article className="max-w-3xl">
            <div className="mb-8">
              <h1 className="text-4xl font-bold mb-4 text-yellow-800">{title}</h1>
              <div className="w-24 h-1 bg-yellow-600 mb-6"></div>

              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{readTime}</span>
                  <span className="text-sm text-muted-foreground mx-2">•</span>
                  <span className="text-sm text-muted-foreground">{publishDate}</span>
                </div>
              </div>

              {/* Proper HTML rendering */}
              <div
                className="prose max-w-none scroll-mt-24"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            </div>
          </article>
        </div>

        {/* Sidebar - Table of Contents */}
        <div className="lg:w-1/4">
          <Card className="p-4 shadow-sm border-l-4 border-yellow-600">
            <span className="text-lg font-bold mb-4 text-yellow-800">Table of Contents</span>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              {tableOfContents.map((item, index) => {
                const id = item
                  .toLowerCase()
                  .replace(/\s+/g, "-")
                  .replace(/[?.]/g, "");
                return (
                  <li key={index}>
                    <a href={`#${id}`} className="hover:underline text-yellow-600">
                      {item}
                    </a>
                  </li>
                );
              })}
            </ul>
          </Card>
          {photo && (
            <Image
              width={600}
              height={400}
              src={photo}
              alt={title}
              className="w-full mt-[50px]  h-auto rounded-lg mb-6 shadow-md"
            />
          )}
        </div>
       
      </div>
  
    </div>
  );
};

export default Blog;