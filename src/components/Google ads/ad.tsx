'use client'
import { useEffect } from 'react';

// ca-pub-9571755808195636
// 7006463954

export const AdComponent = ({Adclient, Adslot}: any) => {
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
                data-ad-client={Adclient}
                data-ad-slot={Adslot}
                data-ad-format="auto"
                data-full-width-responsive="true"
            />
        </div>
    );
}
