// import Footer from "@/components/Footer";
import type { Metadata } from "next";
import "./globals.css";
import { Multiplex } from "@/components/Google ads/Multiplexad";
// import Navbar from "../components/Navbar";
// import Menu from "@/components/Menu/Menu";

export const metadata: Metadata = {
  title: "Construction Company Brooklyn - Great Think Construction",
  description: "Discover the best construction companies near you, from residential to commercial projects, including top-rated construction companies in NYC, Brooklyn, and across the USA. Visit top construction company websites for services.",
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
        <div className="">
          {/* <Menu /> */}
         {/* <Navbar />  */}
          {children}
          <Multiplex />
          {/* <Footer /> */}
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
