import React from 'react'
import Image from 'next/image'

const Header = () => {
  // todo: border-primary/5
  return (
    <header className="fixed top-5 left-0 right-0 z-50 transition-all duration-300">
      <div className="w-sm lg:container mx-auto transition-all duration-500 ease-in-out">
        <nav className="flex items-center justify-between rounded-xl px-4 py-3 bg-white/80 backdrop-blur-lg border border-primary/5 shadow-[0_5px_30px_rgba(0,0,0,0.03)]">
          <a
            href="#"
            className="text-lg relative group flex items-center gap-2"
          >
            <span className="w-12 h-12">
              <Image
                src="/images/MAD_LADS_8853.PNG"
                alt="Vincenteof's photo"
                width={96}
                height={96}
                className="size-full rounded-full object-cover"
              />
            </span>
            <span className="italic">VINCENTEOF</span>
          </a>
          <div className="flex space-x-5">
            <a
              href="#home"
              className="hover-underline text-m text-black relative"
            >
              Home
            </a>
            <a
              href="#projects"
              className="hover-underline text-m dark:!text-gray-100 text-black relative"
            >
              Projects
            </a>
            <a
              href="#blogs"
              className="hover-underline text-m dark:!text-gray-100 text-black relative"
            >
              Blogs
            </a>
            <a
              href="#contact"
              className="hover-underline text-m dark:!text-gray-100 text-black relative"
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
