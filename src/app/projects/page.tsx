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
  {
    title: "Random Project Title",
    image: "images.png",
    technologies: ["rust.png", "pytorch.png", "C.png"],
    description:
      "This is a test card to show that this card component works. ",
    source: "#",
  },
  {
    title: "Random Project Title",
    image: "images.png",
    technologies: ["rust.png", "pytorch.png", "C.png"],
    description:
      "This is a test card to show that this card component works. ",

  },
  {
    title: "Random Project Title",
    image: "images.png",
    technologies: ["rust.png", "pytorch.png", "C.png"],
    description:
      "This is a test card to show that this card component works. ",
    source: "#",
    demo: "#",
  },
  {
    title: "Random Project Title",
    image: "images.png",
    technologies: ["rust.png", "pytorch.png", "C.png"],
    description:
      "This is a test card to show that this card component works. ",

    demo: "#",
  },
  {
    title: "Random Project Title",
    image: "images.png",
    technologies: ["rust.png", "pytorch.png", "C.png"],
    description:
      "This is a test card to show that this card component works. ",
    source: "#",
    demo: "#",
  },
];

export default function ProjectPage() {
  return (
    <div className=" bg-white">
      <Navbar/>
      <h2 className="text-5xl pt-20 pb-8 text-center font-serif text-gray-800">Projects</h2>

      <div className=' grid grid-cols-1 place-items-center '>
        {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
      </div>
    </div>
  )
}