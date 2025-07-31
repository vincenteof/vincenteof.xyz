import React from 'react';
import { experiences } from '@/data/experience';

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <h2 className="text-3xl font-bold text-center mb-8">Experience</h2>
      <div className="container mx-auto">
        {experiences.map((exp, index) => (
          <div key={index} className="mb-8">
            <h3 className="text-xl font-bold">{exp.role} at {exp.company}</h3>
            <p className="text-gray-500">{exp.period}</p>
            <p className="mt-2">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
