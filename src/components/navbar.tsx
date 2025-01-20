import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gradient-to-br from-blue-950 to-indigo-900 text-white flex justify-end font-sans">
      <ul className="flex">
        <li className="text-lg p-3 px-4 hover:bg-indigo-700">
          <Link href="/">Home</Link>
        </li>
        <li className="text-lg p-3 px-4 hover:bg-purple-700">
          <Link href="/projects">Projects</Link>
        </li>
        <li className="text-lg p-3 px-4 hover:bg-indigo-700">
          <Link href="/blog">Blog</Link>
        </li>
        <li className="text-lg p-3 px-4 hover:bg-indigo-700">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;