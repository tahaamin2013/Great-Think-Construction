import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import "./globals.css";
import Menu from "@/components/Menu/Menu";

// const mulish = Mulish({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Great Think Construction Corp.",
  description: "Your Trusted Partner in Construction Excellence",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <body
        className={`antialiased px-0 bg-[#ebebeb] scrollbar-thumb-rounded scrollbar-thumb-blue scrollbar-w-2 scrollbar-track-blue-lighter`}
        >
          <Menu />
        {/* <CustomCursor /> */}
        {/* <Suspense fallback={<Loading />}> */}
        {/* <InteriorBar /> */}
        {/* <Loading> */}
          <div className="sm:container">
          {/* <Navbar /> */}
          {children}
          <Footer />
          </div>
          {/* </Loading> */}
        {/* </Suspense> */}
      </body>
    </html>
  );
}
