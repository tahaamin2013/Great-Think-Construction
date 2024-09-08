"use client";

import React from "react";
import { Building2, Hammer, Ruler, HardHat, Truck } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-yellow-100 to-yellow-300">
      <div className="relative w-96 h-96">
        {/* Animated construction tape */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="w-[200%] h-full flex items-center justify-around animate-slide">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="h-8 w-32 bg-black transform -skew-x-12 mx-4"
              ></div>
            ))}
          </div>
        </div>

        {/* Central rotating gear */}
        <div className="absolute inset-8 border-8 border-yellow-500 rounded-full animate-spin-slow">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-3/4 h-3/4 border-8 border-yellow-600 rounded-full"></div>
          </div>
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute top-1/2 left-1/2 w-6 h-24 bg-yellow-600 transform -translate-x-1/2 -translate-y-1/2 origin-bottom"
              style={{ rotate: `${i * 45}deg` }}
            ></div>
          ))}
        </div>

        {/* Company logo and name */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
          <Building2 className="w-24 h-24 text-yellow-700 animate-bounce" />
          <h2 className="text-3xl font-bold text-yellow-800 mt-4 animate-pulse">
            Great Think
          </h2>
          <h3 className="text-xl font-semibold text-yellow-700 animate-pulse">
            Construction
          </h3>
        </div>

        {/* Orbiting construction tools */}
        <div
          className="absolute inset-0 animate-spin-reverse"
          style={{ animationDuration: "15s" }}
        >
          <HardHat className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 text-yellow-600 animate-wiggle" />
          <Truck
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-12 h-12 text-yellow-600 animate-wiggle"
            style={{ animationDelay: "0.5s" }}
          />
          <Ruler
            className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 text-yellow-600 animate-wiggle"
            style={{ animationDelay: "1s" }}
          />
          <Hammer
            className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-12 h-12 text-yellow-600 animate-wiggle"
            style={{ animationDelay: "1.5s" }}
          />
        </div>
      </div>

      {/* Loading text */}
      <p className="mt-8 text-2xl font-semibold text-yellow-800 animate-pulse">
        Building your future...
      </p>
    </div>
  );
}
