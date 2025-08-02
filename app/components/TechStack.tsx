'use client';

import React from 'react';
import { skillCategories } from '@/data/skills';
import { Tooltip } from 'react-tooltip';

const TechStack = () => {
  return (
    <section id="tech-stack" className="py-20">
      <h2 className="text-3xl font-bold text-center mb-4">Tech Stack</h2>
      <p className="text-lg text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
        A curated list of technologies I'm proficient with and use in my projects.
      </p>
      <div className="container mx-auto px-4">
        {/* Large Card Container */}
        <div className="p-8 sm:p-10 bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-200 dark:border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
            {skillCategories.map((category, index) => (
              <div key={index}>
                <h3 className="text-xl font-semibold mb-5 text-gray-800 dark:text-gray-200">{category.title}</h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => {
                    const Icon = skill.icon;
                    const tooltipId = `skill-tag-tooltip-${index}-${skillIndex}`;
                    return (
                      <div key={skillIndex} data-tooltip-id={tooltipId}>
                        <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors hover:bg-gray-200 dark:hover:bg-gray-600 cursor-pointer">
                          <Icon className="text-lg" />
                          <span>{skill.name}</span>
                        </div>
                        <Tooltip id={tooltipId} content={skill.name} place="top" />
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
