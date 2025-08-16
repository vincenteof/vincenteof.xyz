'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { HiMenuAlt3, HiX, HiMoon, HiSun } from 'react-icons/hi'
import { Meow_Script } from 'next/font/google'

const meow = Meow_Script({ subsets: ['latin'], weight: '400', display: 'swap' })
// const rouge = Rouge_Script({ subsets: ['latin'], weight: '400', display: 'swap' })

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const toggleDarkMode = () => {
    const html = document.documentElement
    const shouldEnableDark = !html.classList.contains('dark')
    setIsDarkMode(shouldEnableDark)
    if (shouldEnableDark) {
      html.classList.add('dark')
    } else {
      html.classList.remove('dark')
    }
  }

  useEffect(() => {
    // 检查系统主题偏好
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true)
      document.documentElement.classList.add('dark')
    }
  }, [])

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
    { href: '/projects', label: 'Projects' },
    { href: '/blogs', label: 'Blogs' },
    { href: '#contact', label: 'Contact' },
  ]

  const linkClasses =
    'relative py-2 text-[var(--text-primary)] hover:text-[var(--accent)] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[var(--accent)] hover:after:w-full after:transition-all after:duration-300'

  return (
    <header className="fixed top-5 left-0 right-0 z-50">
      <div
        className={`
          mx-auto px-4 sm:px-2 lg:px-8 
          header-transitions
          ${isScrolled ? 'max-w-7xl' : 'max-w-[100rem]'}
        `}
      >
        <div className="px-4">
          <nav className="flex items-center justify-between rounded-xl px-4 py-3 bg-[var(--card-bg)]/80 dark:bg-[var(--card-bg)]/80 backdrop-blur-lg border border-gray-700/5 dark:border-[var(--border-default)] shadow-[0_5px_30px_rgba(0,0,0,0.03)] dark:shadow-[0_5px_30px_rgba(0,0,0,0.2)] header-transitions">
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
              <span className={`${meow.className} text-3xl text-[var(--text-primary)]`}>Vincenteof</span>
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              {menuItems.map((item) => (
                <a key={item.href} href={item.href} className={linkClasses}>
                  {item.label}
                </a>
              ))}
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? <HiSun size={20} /> : <HiMoon size={20} />}
              </button>
            </div>
            <div className="md:hidden flex items-center gap-2">
              <button
                onClick={toggleMenu}
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
              >
                {isMenuOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
              </button>
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? <HiSun size={20} /> : <HiMoon size={20} />}
              </button>
            </div>
          </nav>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 mt-2">
            <div className="px-4">
              <div className="flex flex-col space-y-4 px-4 py-6 rounded-xl bg-[var(--card-bg)]/80 dark:bg-[var(--card-bg)]/80 backdrop-blur-lg border border-gray-700/5 dark:border-[var(--border-default)] shadow-[0_5px_30px_rgba(0,0,0,0.03)] dark:shadow-[0_5px_30px_rgba(0,0,0,0.2)] header-transitions">
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
