'use client'

import React from 'react'
import Image from 'next/image'

const Header = () => {
  // todo: border-primary/5
  return (
    <header className="fixed top-5 left-0 right-0 z-50 transition-all duration-300">
      <div className="w-sm lg:container mx-auto transition-all duration-500 ease-in-out px-4">
        <nav className="flex items-center justify-between rounded-xl px-4 py-3 bg-white/80 backdrop-blur-lg border border-primary/5 shadow-[0_5px_30px_rgba(0,0,0,0.03)]">
          <a
            href="#"
            className="text-lg relative group flex items-center gap-2"
          >
            <span className="w-12 h-12 overflow-hidden rounded-full">
              <Image
                src="/images/MAD_LADS_8853.PNG"
                alt="Vincenteof's photo"
                width={96}
                height={96}
                className="size-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </span>
            <span className="italic">
              VINCENTEOF
            </span>
          </a>
          <div className="flex space-x-8">
            <a
              href="#home"
              className="relative py-2 text-gray-800 dark:text-gray-200 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-cyan-500 after:to-blue-500 hover:after:w-full after:transition-all after:duration-300"
            >
              Home
            </a>
            <a
              href="#projects"
              className="relative py-2 text-gray-800 dark:text-gray-200 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-cyan-500 after:to-blue-500 hover:after:w-full after:transition-all after:duration-300"
            >
              Projects
            </a>
            <a
              href="#blogs"
              className="relative py-2 text-gray-800 dark:text-gray-200 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-cyan-500 after:to-blue-500 hover:after:w-full after:transition-all after:duration-300"
            >
              Blogs
            </a>
            <a
              href="#contact"
              className="relative py-2 text-gray-800 dark:text-gray-200 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-cyan-500 after:to-blue-500 hover:after:w-full after:transition-all after:duration-300"
            >
              Contact
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
