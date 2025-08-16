'use client'

import React from 'react'
import { FaDocker, FaGitAlt, FaNodeJs, FaReact } from 'react-icons/fa'
import {
  SiBun,
  SiCss3,
  SiExpress,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiSolidity,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from 'react-icons/si'
import { Tooltip } from 'react-tooltip'

const iconSize = 'w-8 h-8'
const skillCategories = [
  {
    title: 'Languages',
    skills: [
      {
        name: 'TypeScript',
        icon: <SiTypescript className={`${iconSize} text-blue-500`} />,
      },
      {
        name: 'JavaScript',
        icon: <SiJavascript className={`${iconSize} text-yellow-400`} />,
      },
      {
        name: 'Solidity',
        icon: (
          <SiSolidity
            className={`${iconSize} text-[#363636] dark:text-white`}
          />
        ),
      },
    ],
  },
  {
    title: 'Frontend',
    skills: [
      {
        name: 'React',
        icon: <FaReact className={`${iconSize} text-cyan-400`} />,
      },
      {
        name: 'Next.js',
        icon: (
          <SiNextdotjs className={`${iconSize} text-black dark:text-white`} />
        ),
      },
      {
        name: 'HTML5',
        icon: <SiHtml5 className={`${iconSize} text-orange-500`} />,
      },
      {
        name: 'CSS3',
        icon: <SiCss3 className={`${iconSize} text-blue-600`} />,
      },
      {
        name: 'Tailwind CSS',
        icon: <SiTailwindcss className={`${iconSize} text-sky-400`} />,
      },
    ],
  },
  {
    title: 'Backend',
    skills: [
      {
        name: 'Node.js',
        icon: <FaNodeJs className={`${iconSize} text-green-600`} />,
      },
      {
        name: 'Bun',
        icon: <SiBun className={`${iconSize} text-black dark:text-white`} />,
      },
      {
        name: 'Express',
        icon: (
          <SiExpress className={`${iconSize} text-gray-800 dark:text-white`} />
        ),
      },
      {
        name: 'Prisma',
        icon: <SiPrisma className={`${iconSize} text-[#2D3748] dark:text-[#3982CE]`} />,
      },
      {
        name: 'PostgreSQL',
        icon: <SiPostgresql className={`${iconSize} text-[#336791]`} />,
      },
    ],
  },
  {
    title: 'Tools & Platforms',
    skills: [
      {
        name: 'Git',
        icon: <FaGitAlt className={`${iconSize} text-[#F14E32]`} />,
      },
      {
        name: 'Docker',
        icon: <FaDocker className={`${iconSize} text-blue-400`} />,
      },
      {
        name: 'Vercel',
        icon: <SiVercel className={`${iconSize} text-black dark:text-white`} />,
      },
    ],
  },
]

const TechStack = () => {
  return (
    <section id="tech-stack" className="py-12 sm:py-16">
      <h2 className="text-3xl font-bold text-center mb-4">Tech Stack</h2>
      <p className="text-lg text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
        The tools and technologies I’ve mastered to bring ideas to life.
      </p>
      <div className="container mx-auto px-4">
        {/* Large Card Container */}
        <div className="p-8 sm:p-10 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
            {skillCategories.map((category, index) => (
              <div key={index}>
                <h3 className="text-xl font-semibold mb-5 text-gray-800 dark:text-gray-200">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-4">
                  {category.skills.map((skill, skillIndex) => {
                    const tooltipId = `skill-icon-tooltip-${index}-${skillIndex}`
                    return (
                      <div
                        key={skillIndex}
                        data-tooltip-id={tooltipId}
                        className="transition-transform duration-200 cursor-pointer hover:scale-125"
                        tabIndex={0}
                        aria-label={skill.name}
                      >
                        {skill.icon}
                        <Tooltip
                          id={tooltipId}
                          content={skill.name}
                          place="top"
                        />
                        {/* 原有实现：
                        <Tag text={skill.name} icon={skill.icon} />
                        <Tooltip id={`skill-tag-tooltip-${index}-${skillIndex}`} content={skill.name} place="top" />
                        */}
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechStack
