import React from 'react'
import { blogs } from '@/data/blogs'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Tag from '@/app/components/Tag'
import { HiArrowLeft } from 'react-icons/hi'

interface BlogPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }))
}

export default function BlogPage({ params }: BlogPageProps) {
  const blog = blogs.find((blog) => blog.slug === params.slug)

  if (!blog) {
    notFound()
  }

  return (
    <article className="min-h-screen pt-28 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back button */}
        <Link 
          href="/blog"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 mb-8 group transition-colors"
        >
          <HiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          Back to Blog
        </Link>
      
        <header className="mb-12">
          <div className="flex flex-wrap gap-2 mb-4">
            {blog.tags.map((tag) => (
              <Tag key={tag} text={tag} />
            ))}
        </div>
        <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
        <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400">
          <time>
            {new Date(blog.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
          {blog.readingTime && <span>·</span>}
          {blog.readingTime && <span>{blog.readingTime}</span>}
        </div>
      </header>

      {blog.coverImage && (
        <div className="aspect-video w-full mb-12 overflow-hidden rounded-xl">
          <img
            src={blog.coverImage}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <div className="prose dark:prose-invert max-w-none">
        {/* 这里后续可以添加 MDX 或 Markdown 渲染的内容 */}
        <p className="text-lg text-gray-700 dark:text-gray-300">
          {blog.description}
        </p>
      </div>
      </div>
    </article>
  )
}
