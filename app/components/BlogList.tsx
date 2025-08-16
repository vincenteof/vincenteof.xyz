'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { BlogFrontmatter } from '@/lib/blog'
import Tag from '@/app/components/Tag'
import { HiArrowLeft, HiViewGrid, HiViewList } from 'react-icons/hi'

interface BlogListProps {
  posts: Array<BlogFrontmatter & { slug: string }>
}

const BlogList = ({ posts }: BlogListProps) => {
  const [isGridView, setIsGridView] = useState(true)

  const renderBlogCard = (blog: BlogFrontmatter & { slug: string }) => (
    <Link href={`/blogs/${blog.slug}`} className="block group h-full">
      <article
        key={blog.slug}
        className="h-full flex flex-col bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden transition-shadow duration-300 cursor-pointer hover:shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
      >
        {blog.coverImage && (
          <div className="aspect-video w-full overflow-hidden shrink-0">
            <img
              src={blog.coverImage}
              alt={blog.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        )}
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex flex-wrap gap-2 mb-4">
            {blog.tags.map((tag) => (
              <Tag key={tag} text={tag} />
            ))}
          </div>
          <h2 className="text-xl font-bold mb-2 text-gray-700 dark:text-gray-300 transition-colors group-hover:text-gray-900 dark:group-hover:text-gray-100 min-h-[56px]">
            {blog.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 flex-grow min-h-[72px]">
            {blog.description}
          </p>
          <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400 mt-auto">
            <time>
              {new Date(blog.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            {blog.readingTime && <span>{blog.readingTime}</span>}
          </div>
        </div>
      </article>
    </Link>
  )

  const renderBlogListItem = (blog: BlogFrontmatter & { slug: string }) => (
    <Link href={`/blogs/${blog.slug}`} className="block group">
      <article
        key={blog.slug}
        className="flex items-start py-6 first:pt-0 border-b border-gray-200 dark:border-gray-700 last:border-0 cursor-pointer"
      >
        {blog.coverImage && (
          <div className="w-24 h-24 sm:w-32 sm:h-32 shrink-0 hidden sm:block mr-6 overflow-hidden rounded-lg">
            <img
              src={blog.coverImage}
              alt={blog.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <div className="flex-grow min-w-0">
          <div className="flex flex-wrap gap-2 mb-2">
            {blog.tags.map((tag) => (
              <Tag key={tag} text={tag} />
            ))}
          </div>
          <h2 className="text-xl font-bold mb-2 text-gray-700 dark:text-gray-300 transition-colors group-hover:text-gray-900 dark:group-hover:text-gray-100 truncate">
            {blog.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-2 line-clamp-2">
            {blog.description}
          </p>
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
            <time>
              {new Date(blog.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            {blog.readingTime && (
              <>
                <span className="mx-2">·</span>
                <span>{blog.readingTime}</span>
              </>
            )}
          </div>
        </div>
      </article>
    </Link>
  )

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
          
          <div className="flex justify-between items-end mb-12">
            <div>
              <h1 className="text-4xl font-bold mb-4">Blog Posts</h1>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Thoughts, ideas, and experiences I'd like to share.
              </p>
            </div>
            <div className="flex items-center gap-2 bg-white dark:bg-gray-800 rounded-lg p-1 border border-gray-200 dark:border-gray-700">
              <button
                onClick={() => setIsGridView(true)}
                className={`p-2 rounded-md transition-colors ${
                  isGridView
                    ? 'bg-gray-100 dark:bg-gray-700 text-blue-500'
                    : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
                }`}
                aria-label="Grid view"
              >
                <HiViewGrid size={20} />
              </button>
              <button
                onClick={() => setIsGridView(false)}
                className={`p-2 rounded-md transition-colors ${
                  !isGridView
                    ? 'bg-gray-100 dark:bg-gray-700 text-blue-500'
                    : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
                }`}
                aria-label="List view"
              >
                <HiViewList size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Blog posts */}
        <div className={
          isGridView 
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            : "space-y-6"
        }>
          {posts.map((blog) => (
            React.createElement(React.Fragment, { key: blog.slug },
              isGridView ? renderBlogCard(blog) : renderBlogListItem(blog)
            )
          ))}
        </div>
      </div>
    </div>
  )
}

export default BlogList
