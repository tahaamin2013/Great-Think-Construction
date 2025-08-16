"use client";
import { useEffect, useRef } from "react";

type AdProps = {
  slot: string;
  layout?: string;
  format?: string;
};

export default function Ad({ slot, layout = "in-article", format = "fluid" }: AdProps) {
  const adRef = useRef<HTMLModElement>(null);

  useEffect(() => {
    try {
      if (typeof window !== "undefined" && (window as any).adsbygoogle) {
        (window.adsbygoogle = (window.adsbygoogle || [])).push({});
      }
    } catch (err) {
      console.error("AdSense error:", err);
    }
  }, [slot]);

  return (
    <ins
      ref={adRef}
      className="adsbygoogle"
      style={{ display: "block", textAlign: "center" }}
      data-ad-client="ca-pub-9571755808195636"
      data-ad-slot={slot}
      data-ad-layout={layout}
      data-ad-format={format}
      data-full-width-responsive="true"
    ></ins>
  );
}
