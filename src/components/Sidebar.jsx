import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Icon } from '@iconify/react'
import { categories } from '../data/posts'

export default function Sidebar() {
  const [query, setQuery] = useState('')
  const [email, setEmail] = useState('')
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`)
      setQuery('')
    }
  }

  const sidebarCategories = categories.slice(0, 4)

  return (
    <aside className="w-full lg:w-[32%] space-y-20">
      {/* Welcome Widget */}
      <div className="text-center">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-[1px] bg-brand-border flex-1" />
          <div className="w-1 h-1 rounded-full bg-brand-border" />
          <h3 className="text-[10px] font-bold tracking-[0.25em] text-brand-muted uppercase whitespace-nowrap">
            Welcome Friend
          </h3>
          <div className="w-1 h-1 rounded-full bg-brand-border" />
          <div className="h-[1px] bg-brand-border flex-1" />
        </div>

        <div className="relative w-48 h-48 mx-auto mb-8">
          <div className="absolute inset-0 rounded-full border border-brand-accent rotate-6" />
          <div className="absolute inset-0 rounded-full border border-brand-accent/50 -rotate-3" />
          <div className="w-full h-full rounded-full overflow-hidden border-[6px] border-brand-accentLight">
            <img
              src='/images/eyaflavorspic.PNG'
              alt="Eya Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <p className="text-brand-muted text-sm leading-7 mb-6 font-light px-4">
          Hi! I'm Eya, a content creator and passionate pastry chef. This blog is
          my little corner to share the joy of baking and showcase all my creative, delicious recipes in one place.
        </p>
        <div className="text-brand-accent font-serif italic text-3xl">Eya Flavors</div>
      </div>

      {/* Search Widget */}
      <div>
        <div className="flex items-center gap-4 mb-6">
          <div className="h-[1px] bg-brand-border flex-1" />
          <h3 className="text-[10px] font-bold tracking-[0.25em] text-brand-muted uppercase">Search</h3>
          <div className="h-[1px] bg-brand-border flex-1" />
        </div>
        <form onSubmit={handleSearch} className="relative group">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search recipes..."
            className="w-full border border-brand-border py-4 px-6 text-sm bg-transparent focus:outline-none focus:border-brand-accent focus:bg-brand-grayBg transition-all placeholder:text-brand-muted/50 font-serif italic"
          />
          <button
            type="submit"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-muted group-focus-within:text-brand-accent transition-colors"
          >
            <Icon icon="lucide:search" width={18} />
          </button>
        </form>
      </div>

      { /*  Newsletter Widget
      <div className="bg-brand-grayBg p-8 md:p-10 text-center border border-brand-border">
        <h3 className="text-xs font-bold tracking-[0.2em] text-brand-dark uppercase mb-2">Join The Club</h3>
        <p className="text-[10px] text-brand-muted uppercase tracking-widest mb-8">Get sweet emails</p>
        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="w-full border border-brand-border py-3 px-4 text-sm bg-white focus:outline-none focus:border-brand-accent transition-colors text-center"
          />
          <button
            type="submit"
            className="w-full bg-brand-accent text-white hover:bg-brand-accentHover transition-colors py-3 text-[10px] font-bold tracking-[0.25em] uppercase"
          >
            Subscribe
          </button>
        </form>
      </div>*/ }

      {/* Categories Widget */}
      <div>
        <div className="flex items-center gap-4 mb-8">
          <div className="h-[1px] bg-brand-border flex-1" />
          <h3 className="text-[10px] font-bold tracking-[0.25em] text-brand-muted uppercase">Browse</h3>
          <div className="h-[1px] bg-brand-border flex-1" />
        </div>
        <ul className="space-y-4">
          {sidebarCategories.map((cat) => (
            <li key={cat.slug}>
              <Link
                to={`/category/${cat.slug}`}
                className="flex items-center justify-between text-xs tracking-wider text-brand-dark hover:text-brand-accent transition-colors uppercase group"
              >
                <div className="flex items-center gap-4">
                  <Icon
                    icon="lucide:heart"
                    width={14}
                    className="text-brand-accentLight group-hover:text-brand-accent transition-colors fill-current"
                  />
                  <span>{cat.name}</span>
                </div>
                <span className="text-brand-muted group-hover:text-brand-accent">
                  ({String(cat.count).padStart(2, '0')})
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Social Widget */}
      <div>
        <div className="flex items-center gap-4 mb-8">
          <div className="h-[1px] bg-brand-border flex-1" />
          <h3 className="text-[10px] font-bold tracking-[0.25em] text-brand-muted uppercase">Socials</h3>
          <div className="h-[1px] bg-brand-border flex-1" />
        </div>
        <div className="flex flex-col gap-1">
          {[
            { icon: 'lucide:facebook', label: 'Facebook', link: 'https://www.facebook.com/Eyaflavors/' },
            { icon: 'lucide:instagram', label: 'Instagram', link: 'https://www.instagram.com/eya_flavors/' },
            { icon: 'lucide:youtube', label: 'YouTube', link: 'https://www.youtube.com/@eyaflavors' },
          ].map(({ icon, label, link }) => (
            <a
              key={label}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-3 hover:bg-brand-grayBg transition-colors text-xs font-bold tracking-widest uppercase text-brand-dark group"
            >
              <div className="w-8 h-8 rounded-full bg-brand-accentLight flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-colors">
                <Icon icon={icon} width={14} />
              </div>
              {label}
            </a>
          ))}
        </div>
      </div>

      {/* Ad Placeholder 
      <div className="w-full aspect-[3/4] bg-brand-grayBg flex flex-col items-center justify-center border border-brand-border text-brand-muted p-8 text-center">
        <span className="text-[10px] uppercase tracking-widest mb-2">Advertisement</span>
        <div className="w-12 h-[1px] bg-brand-muted/30 mb-4" />
        <p className="font-serif italic text-sm">Space for your sponsors</p>
      </div>*/}
    </aside>
  )
}
