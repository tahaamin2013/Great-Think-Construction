'use client'
import { useEffect } from 'react';

export const TextBoxAd = () => {
    useEffect(() => {
        try {
            // Load AdSense ads after the component mounts
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (error) {
            console.error('Adsense error:', error);
        }
    }, []);

    return (
        <div>
            <ins
                className="adsbygoogle"
                style={{ display: 'block' }}
                data-full-width-responsive="true"
                ad-format="fluid"
                data-ad-layout-key="-gw-3+1f-3d+2z"
                data-ad-client="ca-pub-9571755808195636"
                data-ad-slot="6381446298"
            />
        </div>
    );
}
