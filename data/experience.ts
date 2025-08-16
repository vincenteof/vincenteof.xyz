import { techIcons } from './tech-icons'

export const experiences = [
  {
    company: 'Top3 Crypto Exchange',
    role: 'Senior Frontend Developer',
    period: 'Aug 2023 - Present',
    location: 'Remote',
    logo: '/images/bitcoin.png', // Placeholder logo
    technologies: [
      { name: 'React', icon: techIcons['React'] },
      { name: 'Next.js', icon: techIcons['Next.js'] },
      { name: 'TypeScript', icon: techIcons['TypeScript'] },
    ],
    achievements: [
      'Developed and maintained the internal security platform, including a web app and a mini program.',
      'Built the mini program from the ground up, enabling the security team to streamline daily operations and improve efficiency by 15%.',
      'Delivered security-related features for the official website, enhancing protection for 70M+ end users.',
    ],
  },
  {
    company: 'XTransfer',
    role: 'Senior Frontend Developer',
    period: 'April 2021 - Aug 2023',
    location: 'Shanghai, China',
    logo: '/images/xtransfer.png', // Placeholder logo
    companyUrl: 'https://www.xtransfer.com/',
    linkedinUrl: 'https://www.linkedin.com/company/xtransfer.cn/',
    technologies: [
      { name: 'Node.js', icon: techIcons['Node.js'] },
      { name: 'React', icon: techIcons['React'] },
      { name: 'Express', icon: techIcons['Express'] },
      { name: 'TypeScript', icon: techIcons['TypeScript'] },
      { name: 'Qiankun', icon: techIcons['Single SPA'] },
    ],
    achievements: [
      'Split a monolithic app into independent micro-frontends for better scalability, cutting production deployment time from 50min to 5min.',
      'Integrated multiple apps with the Sentry alerting system, reducing average issue resolution time by 20%.',
      'Led core payment domain development, delivering full internationalization from the ground up.',
    ],
  },
  {
    company: '58.com Inc',
    role: 'Frontend Developer',
    period: 'April 2019 - Mar 2021',
    location: 'Shanghai, China',
    logo: '/images/58.jpg', // Placeholder logo
    companyUrl: 'https://sh.58.com/',
    linkedinUrl: 'https://www.linkedin.com/company/58.com',
    technologies: [
      { name: 'React', icon: techIcons['React'] },
      { name: 'TypeScript', icon: techIcons['TypeScript'] },
      { name: 'Single SPA', icon: techIcons['Single SPA'] },
    ],
    achievements: [
      'Developed and maintained SaaS products for the real estate sector, serving 100K+ active users.',
      'Supported and improved the internal component library, reducing repetitive development work by 30%.',
    ],
  },
]
