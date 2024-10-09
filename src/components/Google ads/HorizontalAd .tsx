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
                style={{ display: 'block', width: '100px', height: '100px' }}
                data-full-width-responsive="true"
                data-ad-format="auto"
                data-ad-client="ca-pub-9571755808195636"
                data-ad-slot="4717781342"
            />
        </div>
    );
}
