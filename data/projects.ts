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
    image: '/images/vincenteof.jpg', // Replace with actual project image
    liveUrl: '/',
    githubUrl: 'https://github.com/vincenteof/vincenteof.xyz',
    status: 'Live & Maintained',
  },
  // {
  //   title: 'Mad Lads NFT Staking Platform',
  //   description: 'A decentralized application (dApp) for staking Mad Lads NFTs. Users can connect their wallet, stake their NFTs, and earn rewards over time, interacting directly with a smart contract.',
  //   tags: [
  //     { name: 'React', icon: techIcons['React'] },
  //     { name: 'Solidity', icon: techIcons['Solidity'] },
  //     { name: 'Node.js', icon: techIcons['Node.js'] },
  //   ],
  //   image: '/images/MAD_LADS_8853.PNG', // Replace with actual project image
  //   liveUrl: '#', // Add live URL if available
  //   githubUrl: '#', // Add GitHub URL
  //   status: 'Proof of Concept',
  // },
];
