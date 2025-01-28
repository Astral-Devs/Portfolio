
import React from 'react';
import BlogCard from '@/components/blogCard'; 

const blogs = [
  {
    title: 'Random Blog Title',
    date: '1-21-2025',
    des: 'This is a test card to show that this card component works. This is a test card to show that this card component works. This is a test card to show that this card component works. ',
    source: 'README',
  },
];

export default function BlogPage() {
  return (
    <div className="bg-white h-full">

      <div className=' grid grid-cols-1 place-items-center '>       
        {blogs.map((blog, index) => (
            <BlogCard key={index} blog={blog} />
          ))}
      </div>
    </div>
  )
}

