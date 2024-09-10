import Footer from "@/components/Footer";
import Loading from "@/components/Loader";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Suspense } from "react";
import "./globals.css";

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
        className={`antialiased sm:container px-0 bg-[#ebebeb] scrollbar-thumb-rounded scrollbar-thumb-blue scrollbar-w-2 scrollbar-track-blue-lighter`}
      >
        {/* <CustomCursor /> */}
        <Suspense fallback={<Loading />}>
          <Navbar />
          {children}
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
