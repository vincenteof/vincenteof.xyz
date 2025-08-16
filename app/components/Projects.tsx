'use client';

import React from 'react';
import Link from 'next/link';
import { HiArrowRight } from 'react-icons/hi';
import { projects } from '@/data/projects';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <section id="projects" className="py-12 sm:py-16">
      <h2 className="text-3xl font-bold text-center mb-4">Featured Projects</h2>
      <p className="text-lg text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
        Side projects I’ve created in my free time, driven by curiosity and passion.
      </p>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
      <div className="text-center mt-12">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 px-3 py-2 text-sm rounded-lg bg-white border border-gray-200 text-gray-800 shadow-xs hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-700 transition-all duration-300 ease-in-out"
        >
          View All Projects
          <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
};

export default Projects;
