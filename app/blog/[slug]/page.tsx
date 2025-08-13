import React from 'react'
import { getAllPosts, getPostBySlug } from '@/lib/blog'
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
  const posts = await getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPage({ params }: BlogPageProps) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
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
            {post.tags.map((tag: string) => (
              <Tag key={tag} text={tag} />
            ))}
          </div>
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400">
            <time>
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            {post.readingTime && <span>·</span>}
            {post.readingTime && <span>{post.readingTime}</span>}
          </div>
        </header>

        {post.coverImage && (
          <div className="aspect-video w-full mb-12 overflow-hidden rounded-xl">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div
          className="prose dark:prose-invert prose-base max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </article>
  )
}
