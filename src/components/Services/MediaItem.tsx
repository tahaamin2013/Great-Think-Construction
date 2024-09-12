'use client'

import { useRef, useState } from "react";
import { Button } from "../ui/button";
import { Loader2, Play, Square } from "lucide-react";
import Image from 'next/image'

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

  export default MediaItem