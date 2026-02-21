import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Icon } from '@iconify/react'

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Love Eya', href: '/category/love-eya-app' },
    { label: 'Recipes', href: '/category/pastries', hasDropdown: true },
    { label: 'News & Media', href: '/category/news' },
    { label: 'About Me', href: '/about' },
    { label: 'Contact', href: '/search' },
  ]

  return (
    <div className="bg-brand-accentLight w-full border-b border-brand-accent/20">
      <nav className="max-w-7xl mx-auto py-4 px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between relative">
        {/* Mobile Header */}
        <div className="md:hidden flex items-center justify-between w-full mb-4">
          <span className="font-serif italic text-xl">Eya Flavors</span>
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-brand-dark">
            <Icon icon={menuOpen ? 'lucide:x' : 'lucide:menu'} width={24} />
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden w-full flex flex-col gap-4 pb-4 text-[11px] font-bold tracking-[0.15em] uppercase text-brand-dark">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMenuOpen(false)}
                className={`transition-colors ${isActive(link.href) ? 'text-brand-accent' : 'hover:text-brand-accent'}`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}

        {/* Desktop Nav Links */}
        <div className="hidden md:flex flex-wrap items-center justify-center gap-8 lg:gap-12 text-[11px] font-bold tracking-[0.15em] uppercase text-brand-dark w-full">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`transition-colors relative group flex items-center gap-1 ${
                isActive(link.href) ? 'text-brand-accent' : 'hover:text-brand-accent'
              }`}
            >
              {link.label}
              {link.hasDropdown && <Icon icon="lucide:chevron-down" width={12} />}
              {!link.hasDropdown && (
                <span
                  className={`absolute -bottom-1 left-0 h-[1px] bg-brand-accent transition-all ${
                    isActive(link.href) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              )}
            </Link>
          ))}
        </div>

        {/* Social Icons (Desktop) */}
        <div className="hidden lg:flex items-center gap-4 text-brand-muted absolute right-12 top-1/2 -translate-y-1/2">
          <a href="#" className="hover:text-brand-accent transition-colors">
            <Icon icon="lucide:instagram" width={14} />
          </a>
          <a href="#" className="hover:text-brand-accent transition-colors">
            <Icon icon="lucide:pin" width={14} />
          </a>
        </div>
      </nav>
    </div>
  )
}
