import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex justify-center">
        <li className="mr-4">
          <Link href="/">Home</Link>
        </li>
        <li className="mr-4">
          <Link href="blog.tsx">Blog</Link>
        </li>
        <li className="mr-4">
          <Link href="/contact">Contact</Link>
        </li>
        <li className="mr-4">
          <Link href="/projects">Projects</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;