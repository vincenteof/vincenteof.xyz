'use client'

import React from 'react';

interface TagProps {
  text: string;
  icon?: React.ElementType;
  className?: string;
}

const Tag: React.FC<TagProps> = ({ text, icon: Icon, className }) => {
  return (
    <div
      className={`
        inline-flex items-center gap-1.5 
        px-2.5 py-1 
        text-sm font-medium 
        bg-gray-100 text-gray-800 
        dark:bg-gray-700 dark:text-gray-200 
        rounded-md 
        transition-colors hover:bg-gray-200 dark:hover:bg-gray-600
        ${className}
      `}
    >
      {Icon && <Icon className="text-base" />}
      <span>{text}</span>
    </div>
  );
};

export default Tag;
