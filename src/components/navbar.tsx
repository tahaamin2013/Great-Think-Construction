'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Navigation items
  const navItems = [
    { name: 'HOME', path: '/' },

  ];

  return (
    <header 
      className="bg-white shadow-md fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold text-zinc-900"><span className='text-[#0C4E1E]'>PAK</span><span className='text-[#DD8024]'>INDIA</span>WAR.COM</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                href={item.path}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 
                  ${pathname === item.path 
                    ? 'text-blue-600-400' 
                    : 'text-zinc-700 hover:text-blue-600-200-blue-400'
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

       
        </nav>
      </div>

      {/* Mobile menu */}
      <div 
        className={`md:hidden bg-white-900 shadow-lg ${
          mobileMenuOpen ? 'max-h-screen py-4' : 'max-h-0 py-0 overflow-hidden'
        } transition-all duration-300 ease-in-out`}
      >
        <div className="container mx-auto px-4 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                pathname === item.path
                  ? 'text-blue-600 bg-blue-50-400-800'
                  : 'text-zinc-700 hover:text-blue-600 hover:bg-zinc-50-200-blue-400-zinc-800'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;