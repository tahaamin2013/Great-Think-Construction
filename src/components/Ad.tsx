"use client";
import { useEffect } from "react";

export default function Ad() {
  useEffect(() => {
    try {
      // Load ad
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("AdSense error:", e);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client="ca-pub-9571755808195636"
      data-ad-slot="2173578983"
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  );
}
