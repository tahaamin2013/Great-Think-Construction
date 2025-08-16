import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className="bg-[#0f0f0f] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* About Us Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">About Us</h3>
            <p className="text-sm text-gray-300 mb-6">
              PakIndiaWar.com gives you real-time updates, news, and stories on the Pakistan and India conflict in simple English. Stay informed with easy-to-understand war updates, facts, and leader statements.
            </p>
            <div className="mb-2">
              <p className="text-sm">Email Us: <a href="mailto:pakindiawar2025@gmail.com" className="text-gray-300">pakindiawar2025@gmail.com</a></p>
            </div>
        
    
          </div>

          {/* Top Posts Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">Top Posts</h3>
            {[
              {
                image: "/india white flag.webp",
                title: "India Raises White Flag at LOC – What Happened?",
                date: "May 7, 2025",
                slug: "india-raises-white-flag-loc"
              },
              {
                image: "/India Attacks Multiple Places in Pakistan Full Report.jpeg",
                title: "India Attacks Multiple Places in Pakistan",
                date: "May 7, 2025",
                slug: "india-attacks-multiple-places-in-pakistan"
              }
            ].map((post, idx) => (
              <div key={idx} className="flex mb-4">
                <div className="w-20 h-14 relative overflow-hidden rounded">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={1200} // ✅ REQUIRED
                    height={800} // ✅ REQUIRED
                    className="object-cover"
                  />
                </div>
                <div className="ml-3">
                  <Link href={`/blogs/${post.slug}`} className="text-sm hover:text-blue-400">{post.title}</Link>
                  <p className="text-xs text-gray-400 mt-1">{post.date}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Top Comments Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">Top Comments</h3>
            <div className="mb-4">
              <div className="flex items-center mb-1">
                <span className="text-blue-400 text-sm">Arif Malik</span>
                <span className="text-gray-400 text-xs mx-1">on</span>
              </div>
              <p className="text-sm hover:text-blue-400">
                “Proud moment for our nation 🇵🇰.”
              </p>
            </div>
            <div className="mb-4">
              <div className="flex items-center mb-1">
                <span className="text-blue-400 text-sm">Seema Rajput</span>
                <span className="text-gray-400 text-xs mx-1">on</span>
              </div>
              <p  className="text-sm hover:text-blue-400">
                “Sad to hear about innocent lives lost 😢.”
              </p>
            </div>
          </div>
        </div>
      </div>


      {/* Copyright */}
      <div className="border-t flex items-center flex-row justify-between border-gray-800">
        <div className="container mx-auto px-4 py-4 text-center text-sm text-gray-400">
          © 2025 PakIndiaWar.com. All Rights Reserved.
        </div>
        <div className='hidden md:flex flex-row gap-[30px]'>
          <Link href='/about'>About</Link>
          <Link href='/disclaimer'>Disclaimer</Link>
          <Link href='/policy'>Policy</Link>
          <Link href='/terms-and-conditions'>Terms </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
