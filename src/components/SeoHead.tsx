 // components/SeoHead.tsx
"use client";
import { usePathname } from "next/navigation";
import Head from "next/head";

const SeoHead = () => {
  const pathname = usePathname();
  const canonicalUrl = `https://www.calculateatar.com${pathname}`;

  return (
    <Head>
      <link rel="canonical" href={canonicalUrl} />
    </Head>
  );
};

export default SeoHead;