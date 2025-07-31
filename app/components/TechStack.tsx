import React from 'react';
import { skills } from '@/data/skills';

const TechStack = () => {
  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold text-center mb-8">Tech Stack</h2>
      <div className="container mx-auto flex flex-wrap justify-center">
        {skills.map((skill, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-4 m-2">
            <p className="font-bold">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
