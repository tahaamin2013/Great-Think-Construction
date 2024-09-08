import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import "./globals.css";
import Loading from "@/components/Loader";
import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const mulish = Mulish({ subsets: ["latin"] });

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
        className={`${mulish.className} antialiased sm:container px-0 bg-[#ebebeb]`}
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
