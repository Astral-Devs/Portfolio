import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-br from-blue-950 to-indigo-900 text-white text-lg flex justify-end font-sans">
      <ul className="flex">
        <li className="py-3 hover:bg-indigo-700">
          <Link href="/" className=" p-3 px-4">Home</Link>
        </li>
        <li className="py-3 hover:bg-indigo-700">
          <Link href="/projects" className='p-3 px-4'>Projects</Link>
        </li>
        <li className=" py-3 hover:bg-indigo-700">
          <Link href="/blog" className='p-3 px-4'>Blogs</Link>
        </li>
        <li className="py-3 hover:bg-indigo-700">
          <Link href="/contact" className='p-3 px-4'>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

