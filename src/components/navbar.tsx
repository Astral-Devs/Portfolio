import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-br from-blue-950 to-indigo-900 text-white text-lg flex justify-end font-sans">
      <ul className="flex">
        <li className="py-3 hover:bg-indigo-700">
          <Link to="/" className="p-3 px-4">Home</Link>
        </li>
        <li className="py-3 hover:bg-indigo-700">
          <Link to="/projects" className="p-3 px-4">Projects</Link>
        </li>
        <li className="py-3 hover:bg-indigo-700">
          <Link to="/blogs" className="p-3 px-4">Blogs</Link>
        </li>
        <li className="py-3 hover:bg-indigo-700">
          <Link to="/contact" className="p-3 px-4">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
