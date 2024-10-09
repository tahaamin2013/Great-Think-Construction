'use client'
import { useEffect } from 'react';

export const HorizontalAd = () => {
    useEffect(() => {
        try {
            // Load AdSense ads after the component mounts
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (error) {
            console.error('Adsense error:', error);
        }
    }, []);
    return (
        <div className='flex w-full justify-center items-center'>
            <ins
                className="adsbygoogle"
                style={{ display: 'block'}}
                data-ad-format="fluid"
                data-ad-layout-key="-gc+3e+8a-8g-bb"
                data-ad-client="ca-pub-9571755808195636"
                data-ad-slot="5773875974"
            />
        </div>
    );
}
