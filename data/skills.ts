import { FaNodeJs, FaReact, FaGitAlt, FaDocker } from 'react-icons/fa'
import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiGraphql,
  SiPrisma,
  SiPostgresql,
  SiVercel,
  SiBun,
  SiExpress,
  SiSolidity,
} from 'react-icons/si'

export const skillCategories = [
  {
    title: 'Languages',
    skills: [
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'Solidity', icon: SiSolidity },
    ],
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'React', icon: FaReact },
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'HTML5', icon: SiHtml5 },
      { name: 'CSS3', icon: SiCss3 },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: FaNodeJs },
      { name: 'Bun', icon: SiBun },
      { name: 'Express', icon: SiExpress },
      { name: 'Prisma', icon: SiPrisma },
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'GraphQL', icon: SiGraphql },
    ],
  },
  {
    title: 'Tools & Platforms',
    skills: [
      { name: 'Git', icon: FaGitAlt },
      { name: 'Docker', icon: FaDocker },
      { name: 'Vercel', icon: SiVercel },
    ],
  },
]
