import React from 'react';

interface ProjectCardProps {
  project: {
    image: string;
    title: string;
    technologies: string[];
    description: string;
    demo?: string; 
    source?: string; 
  };
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="sm:flex w-9/12 bg-white shadow-lg rounded-md overflow-hidden mb-8  p-[3px] hover:bg-gradient-to-br hover:from-pink-500 hover:via-purple-500 hover:to-blue-500 transition hover:scale-105">
      <div className="p-[3px] flex-1 bg-gray-200 rounded-l-md flex justify-center items-center ">
        <img src={project.image} alt={project.title} className="max-w-full max-h-full" />
      </div>
      
      <div className="bg-white flex-1 p-6 flex flex-col justify-center rounded-r-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">{project.title}</h1>
        <div className="flex items-center justify-center gap-3 mb-4">
          {project.technologies.map((tech, index) => (
            <img key={index} src={`tech/${tech}`} alt={tech} className="h-10 mr-2" />
          ))}
        </div>

        <p className="text-gray-600 text-base leading-relaxed mb-6">
          {project.description}
        </p>

        <div className="flex">
          {project.demo && (<a
            href={project.demo}
            className=" bg-blue-500 text-white border-2 border-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 hover:border-blue-600 transition mr-8"
          >
            Live Demo
          </a>)}

          {project.source && (<a
            href={project.source}
            className=" flex bg-slate-50 text-gray-800 border-2 border-zinc-400 px-4 py-2 rounded-lg hover:bg-slate-300 transition mr-8"
          >
            View Source

            <img src="/tech/github.png" alt="GitHub" className="w-5 h-5 ml-2 mt-1" />
          </a>)}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;