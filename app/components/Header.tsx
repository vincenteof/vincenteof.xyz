'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { HiMenuAlt3, HiX } from 'react-icons/hi'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  useEffect(() => {
    const handleScroll = () => {
      // 根据滚动位置设置状态
      const scrolled = window.scrollY > 20 // 当滚动超过20px时触发
      setIsScrolled(scrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { href: '#home', label: 'Home' },
    { href: '#projects', label: 'Projects' },
    { href: '/blog', label: 'Blogs' },
    { href: '#contact', label: 'Contact' },
  ]

  const linkClasses =
    'relative py-2 text-gray-800 dark:text-gray-200 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-cyan-500 after:to-blue-500 hover:after:w-full after:transition-all after:duration-300'

  return (
    <header className="fixed top-5 left-0 right-0 z-50 transition-all duration-300">
      <div
        className={`
          mx-auto px-4 sm:px-2 lg:px-8 
          transition-all duration-500 ease-in-out
          ${isScrolled ? 'max-w-7xl' : 'max-w-[100rem]'}
        `}
      >
        <div className="px-4">
          <nav className="flex items-center justify-between rounded-xl px-4 py-3 bg-white/80 backdrop-blur-lg border border-primary/5 shadow-[0_5px_30px_rgba(0,0,0,0.03)]">
            <a
              href="#"
              className="text-lg relative group flex items-center gap-2"
            >
              <span className="w-10 h-10 sm:w-12 sm:h-12 overflow-hidden rounded-full">
                <Image
                  src="/images/MAD_LADS_8853.PNG"
                  alt="Vincenteof's photo"
                  width={96}
                  height={96}
                  className="size-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </span>
              <span className="italic text-sm sm:text-base bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500">
                VINCENTEOF
              </span>
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {menuItems.map((item) => (
                <a key={item.href} href={item.href} className={linkClasses}>
                  {item.label}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
            >
              {isMenuOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
            </button>
          </nav>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 mt-2">
            <div className="px-4">
              <div className="flex flex-col space-y-4 px-4 py-6 rounded-xl bg-white/80 backdrop-blur-lg border border-primary/5 shadow-[0_5px_30px_rgba(0,0,0,0.03)]">
                {menuItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={toggleMenu}
                    className={linkClasses}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
