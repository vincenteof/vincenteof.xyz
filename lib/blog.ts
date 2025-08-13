import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const blogsDirectory = path.join(process.cwd(), 'content/blog')

export interface BlogFrontmatter {
  title: string
  date: string
  description: string
  tags: string[]
  coverImage?: string
  readingTime?: string
}

export interface Blog extends BlogFrontmatter {
  slug: string
  content: string
}

export async function getPostBySlug(slug: string): Promise<Blog> {
  const fullPath = path.join(blogsDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  
  const processedContent = await remark()
    .use(html)
    .process(content)
  const htmlContent = processedContent.toString()

  return {
    slug,
    content: htmlContent,
    ...(data as BlogFrontmatter)
  }
}

export async function getAllPosts(): Promise<Blog[]> {
  const slugs = fs.readdirSync(blogsDirectory)
    .filter(file => file.endsWith('.md'))
    .map(file => file.replace(/\.md$/, ''))

  const posts = await Promise.all(slugs.map(slug => getPostBySlug(slug)))

  // Sort posts by date in descending order
  return posts.sort((a, b) => (a.date > b.date ? -1 : 1))
}

export async function getAllPostSummaries(): Promise<Omit<Blog, 'content'>[]> {
  const posts = await getAllPosts()
  return posts.map(({ content, ...rest }) => rest)
}
