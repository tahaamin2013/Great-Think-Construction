"use client";
import { useEffect } from "react";

export const Multiplex = () => {
    useEffect(() => {
        try {
            // Load AdSense ads after the component mounts
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (error) {
            console.error("Adsense error:", error);
        }
    }, []);

    return (
        <div>
            <ins
                className="adsbygoogle"
                style={{ display: "block" }}
                data-full-width-responsive="true"
                data-ad-format="fluid"
                data-ad-layout-key="-65+c8+2f-r+83"
                data-ad-client="ca-pub-9571755808195636"
                data-ad-slot="4329998023"
            />
        </div>
    );
};
