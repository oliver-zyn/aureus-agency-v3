'use client'

import { List, X } from 'phosphor-react'
import { useEffect, useState } from 'react'

import Link from 'next/link'
import MaxWidthWrapper from './MaxWidthWrapper'
import NavLinks from './NavLinks'
import WhatsAppButton from './WhatsAppButton'
import { buttonVariants } from './ui/button'

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  function closeMobileMenu() {
    setIsMobileMenuOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 10

      setIsScrolled(scrolled)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav
      className={`sticky h-16 inset-x-0 top-0 z-30 w-full transition-all text-white-aureus ${
        isScrolled ? 'bg-white/75 backdrop-blur-lg' : 'bg-transparent'
      }`}
    >
      <MaxWidthWrapper>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex z-40 font-semibold">
            <span
              className={`font-bold ${
                isScrolled ? 'text-purple-aureus' : 'text-white-aureus'
              }`}
            >
              AureusAgency.
            </span>
          </Link>

          <div className="sm:hidden">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={buttonVariants({
                variant: 'ghost',
                className: 'focus:outline-none',
              })}
            >
              {isMobileMenuOpen ? (
                <X
                  size={24}
                  className={`${
                    isScrolled ? 'text-primary' : 'text-white-aureus'
                  }`}
                />
              ) : (
                <List
                  size={24}
                  className={`${
                    isScrolled ? 'text-primary' : 'text-white-aureus'
                  }`}
                />
              )}
            </button>
          </div>

          <div className="hidden sm:flex items-center space-x-4">
            <NavLinks
              size="sm"
              className={`${isScrolled ? 'text-primary' : 'text-white-aureus'}`}
              closeMobileMenu={closeMobileMenu}
            />
            <WhatsAppButton
              size="default"
              className={`${
                isScrolled
                  ? 'bg-purple-aureus hover:bg-purple-aureus/85'
                  : 'bg-white-aureus hover:bg-white-aureus/95 text-zinc-950'
              }`}
            />
          </div>

          {isMobileMenuOpen ? (
            <div className="flex animate-fadeIn sm:hidden flex-col justify-center gap-10 p-6 absolute inset-x-0 top-16 text-primary border-b border-gray-200 bg-white/95 backdrop-blur-lg transition-all">
              <NavLinks size="lg" closeMobileMenu={closeMobileMenu} />
              <WhatsAppButton
                size="lg"
                className="bg-purple-aureus hover:bg-purple-aureus/85 text-white-aureus"
              />
            </div>
          ) : (
            ''
          )}
        </div>
      </MaxWidthWrapper>
    </nav>
  )
}
