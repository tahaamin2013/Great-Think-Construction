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
      </body>
    </html>
  );
}
