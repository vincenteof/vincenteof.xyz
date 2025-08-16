'use client';

import React from 'react';
import { experiences } from '@/data/experience';
import ExperienceItem from './ExperienceItem';

const Experience = () => {
  return (
    <section id="experience" className="py-12 sm:py-16">
      <h2 className="text-3xl font-bold text-center mb-4">Work Experience</h2>
      <p className="text-lg text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-16">
        A timeline of my learning journey and the projects I’ve built along the way.
      </p>
      <div className="container mx-auto px-4">
        {experiences.map((exp, index) => (
          <ExperienceItem key={index} experience={exp} />
        ))}
      </div>
    </section>
  );
};

export default Experience;