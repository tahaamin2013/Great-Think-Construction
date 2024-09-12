"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const Loading: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 200);

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
       <div className="flex items-center justify-center h-screen bg-white">
       <div className="relative w-24 h-24">
         {[...Array(3)].map((_, index) => (
           <div
             key={index}
             className="absolute top-0 w-8 h-8 bg-black rounded-full"
             style={{
               left: `${index * 32}px`,
               animation: `simpleJump 0.6s ${index * 0.15}s infinite alternate`
             }}
           />
         ))}
       </div>
     </div>
      ) : (
        children
      )}
    </>
  );
};

export default Loading;