import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Icon } from '@iconify/react'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher'

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { t } = useTranslation()
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  const navLinks = [
    { label: t('nav.home'), href: '/' },
    { label: t('nav.recipes'), href: '/category/recipes' },
    { label: t('nav.news'), href: '/category/news' },
    { label: t('nav.about'), href: '/about' },
    { label: t('nav.contact'), href: '/contact' }
  ]

  return (
    <div className="bg-brand-accentLight w-full border-b border-brand-accent/20 sticky top-0 z-[100] backdrop-blur-md bg-white/80">
      <nav className="max-w-7xl mx-auto py-3 px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between relative">
        {/* Mobile Header */}
        <div className="md:hidden flex items-center justify-between w-full">
          <Link to="/" className="font-serif italic text-xl">Eya Flavors</Link>
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-brand-dark p-2">
              <Icon icon={menuOpen ? 'lucide:x' : 'lucide:menu'} width={24} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden w-full flex flex-col gap-4 py-4 text-[11px] font-bold tracking-[0.15em] uppercase text-brand-dark animate-in slide-in-from-top duration-300">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMenuOpen(false)}
                className={`transition-colors py-2 border-b border-brand-accent/5 ${isActive(link.href) ? 'text-brand-accent' : 'hover:text-brand-accent'}`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center justify-between w-full gap-8">
          {/* Logo */}
          <Link to="/" className="font-serif italic text-2xl text-brand-dark whitespace-nowrap">
            Eya Flavors
          </Link>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-10 text-[10px] lg:text-[11px] font-bold tracking-[0.15em] uppercase text-brand-dark">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`transition-colors relative group flex items-center gap-1 ${isActive(link.href) ? 'text-brand-accent' : 'hover:text-brand-accent'
                  }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-[1px] bg-brand-accent transition-all ${isActive(link.href) ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                />
              </Link>
            ))}
          </div>

          {/* Language Switcher */}
          <div className="flex items-center gap-4">
            <div className="h-6 w-[1px] bg-brand-accent/20 hidden lg:block" />
            <LanguageSwitcher />
          </div>
        </div>
      </nav>
    </div>
  )
}
