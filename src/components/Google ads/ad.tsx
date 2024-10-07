'use client'
import { useEffect } from 'react';

export const AdComponent = () => {
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
                data-ad-client="ca-pub-9571755808195636"
                data-ad-slot="7006463954"
                data-ad-format="auto"
                data-full-width-responsive="true"
            />
        </div>
    );
}
