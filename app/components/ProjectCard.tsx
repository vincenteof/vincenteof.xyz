import React from 'react';
import Image from 'next/image';
import { IconType } from 'react-icons';
import { AiOutlineGithub } from 'react-icons/ai';
import { MdLanguage } from 'react-icons/md';

import Tag from './Tag';

// Define the type for a single project
export interface Project {
  title: string;
  description: string;
  tags: {
    name: string;
    icon: IconType;
  }[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  status: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const statusStyles = project.status.startsWith('Live')
    ? {
        dot: 'bg-green-500',
        background: 'bg-green-100 dark:bg-green-900/50',
        text: 'text-green-800 dark:text-green-300',
      }
    : {
        dot: 'bg-yellow-500',
        background: 'bg-yellow-100 dark:bg-yellow-900/50',
        text: 'text-yellow-800 dark:text-yellow-300',
      };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col">
      <div className="relative h-48 w-full">
        <Image
          src={project.image}
          alt={`${project.title} screenshot`}
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
          <div className="flex items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-cyan-500 dark:text-gray-400 dark:hover:text-cyan-400 transition-colors duration-300"
                aria-label="Visit live site"
              >
                <MdLanguage size={22} />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-300"
                aria-label="Visit GitHub repository"
              >
                <AiOutlineGithub size={22} />
              </a>
            )}
          </div>
        </div>
        
        <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm leading-relaxed flex-grow">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <Tag key={index} text={tag.name} icon={tag.icon} />
          ))}
        </div>

        <div className="mt-auto pt-4">
          <div
            className={`inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 ${statusStyles.background}`}
          >
            <span className={`w-2 h-2 rounded-full ${statusStyles.dot}`}></span>
            <span className={`text-xs font-semibold ${statusStyles.text}`}>
              {project.status}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
