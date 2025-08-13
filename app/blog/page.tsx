import { getAllPostSummaries } from '@/lib/blog'
import BlogList from '@/app/components/BlogList'

export default async function BlogPage() {
  const posts = await getAllPostSummaries()
  return <BlogList posts={posts} />
}
