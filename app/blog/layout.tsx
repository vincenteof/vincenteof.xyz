import { getAllPostSummaries } from '@/lib/blog'

export async function generateStaticParams() {
  const posts = await getAllPostSummaries()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
