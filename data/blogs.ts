export interface Blog {
  id: string
  title: string
  description: string
  date: string
  slug: string
  tags: string[]
  coverImage?: string
  readingTime?: string
}

export const blogs: Blog[] = [
  {
    id: '1',
    title: 'Building a Modern Portfolio with Next.js',
    description:
      'A deep dive into creating a performant and beautiful portfolio website using Next.js 13, React and Tailwind CSS.',
    date: '2025-07-30',
    slug: 'building-modern-portfolio-nextjs',
    tags: ['Next.js', 'React', 'Tailwind CSS'],
    readingTime: '5 min read',
  },
  {
    id: '2',
    title: 'Understanding TypeScript Generic Types',
    description: `Exploring TypeScript's generic types and how they can make your code more reusable and type-safe.`,
    date: '2025-07-25',
    slug: 'understanding-typescript-generic-types',
    tags: ['TypeScript', 'Programming'],
    readingTime: '8 min read',
  },
]
