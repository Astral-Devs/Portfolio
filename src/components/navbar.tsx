'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < lastScrollY) {
        setShowNavbar(true); // Show navbar when scrolling up
      } else {
        setShowNavbar(false); // Hide navbar when scrolling down
      }
      setLastScrollY(window.scrollY); // Update last scroll position
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll); // Cleanup on unmount
  }, [lastScrollY]);

  return (
    <nav
      className={`bg-gradient-to-br from-blue-950 to-indigo-900 text-white text-lg flex justify-end font-sans w-full fixed transition-transform duration-300 ${
        showNavbar ? 'transform translate-y-0' : 'transform -translate-y-full'
      }`}
    >
      
      <ul className="flex">
        <li className="py-3 hover:bg-indigo-700">
          <Link href="/" className="p-3 px-4">
            Home
          </Link>
        </li>
        <li className="py-3 hover:bg-indigo-700">
          <Link href="/projects" className="p-3 px-4">
            Projects
          </Link>
        </li>
        <li className="py-3 hover:bg-indigo-700">
          <Link href="/blogs" className="p-3 px-4">
            Blogs
          </Link>
        </li>
        <li className="py-3 hover:bg-indigo-700">
          <Link href="/contact" className="p-3 px-4">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

