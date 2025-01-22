import React from 'react';

interface BlogCardProps {
    blog: {
      title: string;
      date: string;
      des: string;
      source: string;
    };
  }



export default function BlogCard({ blog }: BlogCardProps) {
    return (
        <div className="max-w- mx-auto bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden" onClick={blog.source}>
        <div className="p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-2">{blog.title}</h2>
          <p className="text-sm text-gray-500 mb-4">{blog.date}</p>
          <p className="text-gray-700">{blog.des}</p>
        </div>
      </div>
    );
  }
