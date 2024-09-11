"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const Loading: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 1;
        return newProgress > 100 ? 100 : newProgress;
      });
    }, 30);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      {loading ? (
        <div className="relative font-sans h-screen w-screen overflow-hidden flex items-center justify-center bg-white">
          <Image
            src="/loader-background.jpg"
            alt="Loader Background"
            layout="fill"
            objectFit="cover"
            className="opacity-50 animate-pulse"
          />


          <div className="z-10 text-center">
            <h1 className="text-7xl font-extrabold text-black font-sans mb-4 animate-bounce">
              Loading
              <span className="animate-pulse">.</span>
              <span className="animate-pulse delay-100">.</span>
              <span className="animate-pulse delay-200">.</span>
            </h1>
            
            <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-black rounded-full transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Animated particles */}
          {[...Array(20)].map((_, index) => (
            <div
              key={index}
              className="absolute w-2 h-2 bg-white rounded-full animate-float"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${3 + Math.random() * 2}s`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      ) : (
        children
      )}
    </>
  );
};

export default Loading;