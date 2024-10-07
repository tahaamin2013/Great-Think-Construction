import Footer from "@/components/Footer";
import type { Metadata } from "next";
import "./globals.css";
import Menu from "@/components/Menu/Menu";

// const mulish = Mulish({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Construction Company Brooklyn | Great Think Construction Corp.",
  description: "Top commercial construction company in Brooklyn. We're trusted general contractors in Brooklyn.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9571755808195636"
          crossOrigin="anonymous"></script>
        <meta name='theme-color' content="#000" />
      </head>
      <body
        className={`antialiased px-0 bg-[#ebebeb] scrollbar-thumb-rounded scrollbar-thumb-blue scrollbar-w-2 scrollbar-track-blue-lighter`}
      >

        {/* <CustomCursor /> */}
        {/* <Suspense fallback={<Loading />}> */}
        {/* <InteriorBar /> */}
        {/* <Loading> */}
        <div className="sm:container">
          <Menu />
          {/* <Navbar /> */}
          {children}
          <Footer />
        </div>
        {/* </Loading> */}
        {/* </Suspense> */}
        <span className="font-bold text-4xl">Ads</span>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9571755808195636"
          crossOrigin="anonymous"></script>
        <ins className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-9571755808195636"
          data-ad-slot="7006463954"
          data-ad-format="auto"
          data-full-width-responsive="true"></ins>
        <script>
          (adsbygoogle = window.adsbygoogle || []).push({ });
        </script>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9571755808195636"
          crossOrigin="anonymous"></script>
        <ins className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-format="autorelaxed"
          data-ad-client="ca-pub-9571755808195636"
          data-ad-slot="5006986571"></ins>
        <script>
          (adsbygoogle = window.adsbygoogle || []).push({ });
        </script>

      </body>
    </html>
  );
}
