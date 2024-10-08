import Footer from "@/components/Footer";
import type { Metadata } from "next";
import "./globals.css";
import Menu from "@/components/Menu/Menu";
import { AdComponent } from "@/components/Google ads/ad";

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
        {/* <AdComponent
          // Adclient="ca-pub-9571755808195636"
          // Adslot="5006986571"
        /> */}
      </body>
    </html>
  );
}
