'use client'
import { useEffect } from 'react';

export const Multiplex = () => {
    useEffect(() => {
        try {
            // Load AdSense ads after the component mounts
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (error) {
            console.error('Adsense error:', error);
        }
    }, []);

    return (
        <div className='px-auto mx-auto'>
            <ins
                className="adsbygoogle"
                style={{ display: 'block' }}
                data-full-width-responsive="true"
                data-ad-format="autorelaxed"
                data-ad-client="ca-pub-9571755808195636"
                data-ad-slot="5006986571"
            />
        </div>
    );
}
