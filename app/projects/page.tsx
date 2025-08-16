"use client"

import React from 'react'
import Link from 'next/link'
import { projects } from '@/data/projects'
import { HiArrowLeft } from 'react-icons/hi'
import ProjectCard from '@/app/components/ProjectCard'

const ProjectsPage = () => {
  return (
    <div className="min-h-screen pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with back button */}
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 mb-6 group transition-colors"
          >
            <HiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-4">All Projects</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              A collection of my work and experiments.
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectsPage
