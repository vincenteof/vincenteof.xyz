'use client';

import React from 'react';
import { projects } from '@/data/projects';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-bold text-center mb-4">Featured Projects</h2>
      <p className="text-lg text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
        Here are some of the projects I'm proud to have worked on. 
      </p>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
      {/* Optional: Add a "View All" button if you have more projects on a separate page */}
      {/* <div className="text-center mt-12">
        <a href="/projects" className="text-lg font-medium text-cyan-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
          View All Projects
        </a>
      </div> */}
    </section>
  );
};

export default Projects;
