import React from 'react'
import Link from 'next/link'
import { blogs } from '@/data/blogs'
import Tag from './Tag'
import { HiArrowRight } from 'react-icons/hi'

const Blogs = () => {
  return (
    <section id="blogs" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Latest Blog Posts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <article
              key={blog.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-200 dark:border-gray-700 overflow-hidden"
            >
              {blog.coverImage && (
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={blog.coverImage}
                    alt={blog.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {blog.tags.map((tag) => (
                    <Tag key={tag} text={tag} />
                  ))}
                </div>
                <h3 className="text-xl font-bold mb-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {blog.description}
                </p>
                <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <time>
                    {new Date(blog.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                  {blog.readingTime && <span>{blog.readingTime}</span>}
                </div>
                <Link 
                  href={`/blog/${blog.slug}`}
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors group"
                >
                  Read More 
                  <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-3 py-2 text-sm rounded-lg bg-white border border-gray-200 text-gray-800 shadow-xs hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-700 transition-all duration-300 ease-in-out"
          >
            View All Posts
            <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Blogs
