'use client'

import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'
import { FaReact, FaEthereum } from 'react-icons/fa'
import {
  AiOutlineGithub,
  AiOutlineMail,
  AiOutlineLinkedin,
  AiOutlineFileText,
} from 'react-icons/ai'
import { RiTwitterXLine } from 'react-icons/ri'
import { SiTypescript, SiNextdotjs, SiBun } from 'react-icons/si'
import { LuSend } from 'react-icons/lu'
import { Tooltip } from 'react-tooltip'
import Tag from './Tag';

const Hero = () => {
  return (
    <section className="px-4 pt-24 pb-12 md:pt-60 md:pb-20">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-8 place-self-center text-center sm:text-left justify-self-start">
          <h1 className="mb-4 text-3xl sm:text-5xl xl:text-6xl 2xl:text-8xl lg:leading-normal font-extrabold flex flex-col">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 leading-none">
              Hello, I'm
            </span>
            <TypeAnimation
              sequence={['Vincenteof', 1000, 'Fullstack Dev.', 1000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="leading-none"
            />
          </h1>
          <p className="text-base sm:text-lg mb-6 lg:text-lg mt-4">
            I'm a full-stack developer passionate about building interactive web
            applications. I work primarily with{' '}
            <Tag text="TypeScript" icon={SiTypescript} />,
            <Tag text="React" icon={FaReact} />,
            <Tag text="Next.js" icon={SiNextdotjs} />,
            and <Tag text="Bun" icon={SiBun} />
            . I'm also deeply interested in{' '}
            <span className="font-bold">smart contracts</span> and{' '}
            <Tag text="Ethereum" icon={FaEthereum} /> related technologies. In my personal time, I explore anything that
            sparks my curiosity, enriching my life with a broader range of
            experiences.
          </p>
          <div className="flex items-center gap-4 mt-6">
            <button className="outline-none px-3 py-2 text-sm w-full sm:w-fit rounded-lg bg-white border border-gray-200 text-gray-800 shadow-xs hover:bg-gray-100 hover:cursor-pointer transition-all duration-300 ease-in-out flex items-center">
              <AiOutlineFileText className="mr-2" />
              Resume/CV
            </button>
            <a 
              href="#contact"
              className="outline-none px-3 py-2 text-sm w-full sm:w-fit rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 hover:bg-gradient-to-bl hover:cursor-pointer text-white flex items-center justify-center transition-all duration-300 ease-in-out"
            >
              <LuSend className="mr-2" />
              Send Message
            </a>
          </div>
          <div className="flex items-center gap-4 mt-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500"
              data-tooltip-id="github-tooltip"
            >
              <AiOutlineGithub size={22} />
            </a>
            <Tooltip id="github-tooltip" content="GitHub" place="top" />
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500"
              data-tooltip-id="twitter-tooltip"
            >
              <RiTwitterXLine size={22} />
            </a>
            <Tooltip id="twitter-tooltip" content="Twitter" place="top" />
            <a
              href="https://linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500"
              data-tooltip-id="linkedin-tooltip"
            >
              <AiOutlineLinkedin size={22} />
            </a>
            <Tooltip id="linkedin-tooltip" content="LinkedIn" place="top" />
            <a
              href="mailto:your-email@example.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500"
              data-tooltip-id="email-tooltip"
            >
              <AiOutlineMail size={22} />
            </a>
            <Tooltip id="email-tooltip" content="Email" place="top" />
          </div>
        </div>
        <div className="col-span-4 place-self-center">
          <div className="rounded-full bg-gray-200 p-1.5">
            <Image
              src="/images/vincenteof.jpg"
              alt="Vincenteof's photo"
              width={300}
              height={300}
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
