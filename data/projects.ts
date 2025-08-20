import { techIcons } from './tech-icons';

export const projects = [
  {
    title: 'Personal Portfolio Website',
    description: 'My personal corner of the internet, showcasing my projects, skills, and journey as a developer. Built with the latest web technologies to be fast, responsive, and visually appealing.',
    tags: [
      { name: 'Next.js', icon: techIcons['Next.js'] },
      { name: 'React', icon: techIcons['React'] },
      { name: 'TypeScript', icon: techIcons['TypeScript'] },
    ],
    image: '/images/vincenteof-xyz.png', // Replace with actual project image
    liveUrl: '/',
    githubUrl: 'https://github.com/vincenteof/vincenteof.xyz',
    status: 'Live & Maintained',
  },
  {
    title: 'Solidity Calldata Visualizer',
    description: 'A tool for visualizing Solidity calldata, making it easier to understand and debug smart contract interactions.',
    tags: [
      { name: 'React', icon: techIcons['React'] },
      { name: 'Viem', icon: techIcons['Viem'] },
    ],
    image: '/images/solidity-calldata-visualization.png', // Replace with actual project image
    liveUrl: 'https://solidity-calldata-visualization.vercel.app/', // Add live URL if available
    githubUrl: 'https://github.com/vincenteof/solidity-calldata-visualization', // Add GitHub URL
    status: 'Proof of Concept',
  },
];
