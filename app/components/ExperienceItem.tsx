'use client';

import React from 'react';
import Image from 'next/image';
import { MdLanguage } from 'react-icons/md';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { Tooltip } from 'react-tooltip';

import Tag from './Tag';

import { IconType } from 'react-icons';

interface ExperienceItemProps {
  experience: {
    company: string;
    role: string;
    period: string;
    location: string;
    logo: string;
    companyUrl?: string;
    linkedinUrl?: string;
    technologies: {
      name: string;
      icon: IconType;
    }[];
    achievements: string[];
  };
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ experience }) => {
  const companyId = experience.company.replace(/\s+/g, '-');
  const websiteTooltipId = `${companyId}-website-tooltip`;
  const linkedinTooltipId = `${companyId}-linkedin-tooltip`;

  return (
    <div className="mb-12 p-8 sm:p-10 bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-200 dark:border-gray-700">
      {/* Part 1: Company Info, Role, Date, Location */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-start">
          <Image
            src={experience.logo}
            alt={`${experience.company} logo`}
            width={48}
            height={48}
            className="rounded-full mr-4"
          />
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold">{experience.company}</h3>
              {experience.companyUrl && (
                <>
                  <a
                    href={experience.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-500 transition-colors"
                    aria-label={`Link to ${experience.company} website`}
                    data-tooltip-id={websiteTooltipId}
                  >
                    <MdLanguage />
                  </a>
                  <Tooltip id={websiteTooltipId} content="Visit Website" place="top" />
                </>
              )}
              {experience.linkedinUrl && (
                <>
                  <a
                    href={experience.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-500 transition-colors"
                    aria-label={`Link to ${experience.company} LinkedIn`}
                    data-tooltip-id={linkedinTooltipId}
                  >
                    <AiOutlineLinkedin />
                  </a>
                  <Tooltip id={linkedinTooltipId} content="LinkedIn" place="top" />
                </>
              )}
            </div>
            <p className="text-lg">{experience.role}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-gray-500 dark:text-gray-400">{experience.period}</p>
          <p className="text-gray-500 dark:text-gray-400">{experience.location}</p>
        </div>
      </div>

      {/* Part 2: Technologies */}
      <div className="mb-4">
        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech, index) => (
            <Tag key={index} text={tech.name} icon={tech.icon} />
          ))}
        </div>
      </div>

      {/* Part 3: Achievements */}
      <ul className="list-disc list-inside space-y-2">
        {experience.achievements.map((achievement, index) => (
          <li key={index} className="text-gray-700 dark:text-gray-300">
            {achievement}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceItem;
