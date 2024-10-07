"use client"
import { useEffect } from 'react';

export default function GoogleAd() {
    useEffect(() => {
        // Initialize the ads after the component has mounted on the client
        if (window) {
            try {
                (window.adsbygoogle = window.adsbygoogle || []).push({});
            } catch (e) {
                console.error('AdSense error:', e);
            }
        }
    }, []);

    return (
        <div>
            <script
                async
                src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9571755808195636"
                crossOrigin="anonymous"
            ></script>

            {/* Ad Code */}
            <ins
                className="adsbygoogle"
                style={{ display: 'block' }}
                data-ad-client="ca-pub-9571755808195636"
                data-ad-slot="1778958513"
                data-ad-format="auto"
                data-full-width-responsive="true"
            ></ins>
        </div>
    );
}
