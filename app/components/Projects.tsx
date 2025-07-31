import React from 'react';
import { projects } from '@/data/projects';

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <a href={project.link} className="text-blue-500 hover:underline">View Project</a>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <a href="/projects" className="text-blue-500 hover:underline">View All Projects</a>
      </div>
    </section>
  );
};

export default Projects;
