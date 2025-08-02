
import { FaNodeJs, FaReact } from 'react-icons/fa';
import {
  SiNextdotjs,
  SiTypescript,
  SiExpress,
} from 'react-icons/si';
import { DiJavascript1 } from "react-icons/di";

// Define a type for the icon mapping
import { IconType } from 'react-icons';

export const techIcons: { [key: string]: IconType } = {
  'React': FaReact,
  'Next.js': SiNextdotjs,
  'TypeScript': SiTypescript,
  'Node.js': FaNodeJs,
  'Express': SiExpress,
  'JavaScript': DiJavascript1,
  // Add other icons as needed
};
