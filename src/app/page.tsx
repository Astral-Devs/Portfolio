'use client'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '@/components/navbar';
import BlogPage from './pages/BlogPage';
import ProjectPage from './pages/ProjectPage';
import MarkdownPage from '@/components/MarkdownPage';

export default function App() {
  return (
    <Router>
      <div className="h-screen w-full bg-white">
        <Navbar/>
        <Routes>
          <Route path="/" element={<div></div>} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/blogs/:source" element={<MarkdownPage />} />
          <Route path="/contact" element={<div>Contact Page</div>} />
        </Routes>
      </div>
    </Router>
  );
}
