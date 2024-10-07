// ca-pub-9571755808195636
// 7006463954

export const AdComponent = ({Adclient, Adslot}: any) => {
    return (
            <ins
                className="adsbygoogle"
                style={{ display: 'block' }}
                data-ad-client={`${Adclient}`}
                data-ad-slot={`${Adslot}`}
                data-ad-format="auto"
                data-full-width-responsive="true"
            />
    );
}
