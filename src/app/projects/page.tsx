import React from 'react';
import ProjectCard from '@/components/projectCard';
import Navbar from '@/components/navbar';

const projects = [
  {
    title: "Random Project Title",
    image: "images.png",
    technologies: ["react.png", "css.png", "python.png"],
    description:
      "This is a test card to show that this card component works. ",
    source: "#",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <div className="w-full h-screen bg-white">
      <Navbar/>

      <h2 className="text-5xl text-center font-serif text-gray-800 mb-8 mt-16">Projects</h2>

      <div className=' grid grid-cols-1 place-items-center '>
        {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
      </div>
    </div>
  )
}