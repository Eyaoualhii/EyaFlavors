import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Icon } from '@iconify/react'
import { useTranslation } from 'react-i18next'
import { posts, categories } from '../data/posts'

export default function Sidebar() {
  const [query, setQuery] = useState('')
  const { t, i18n } = useTranslation()
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`)
      setQuery('')
    }
  }

  // Get 4 latest posts for the sidebar, excluding website posts
  const latestPosts = posts
    .filter(post => post.categorySlug !== 'website')
    .slice(0, 4)

  return (
    <aside className="w-full lg:w-[32%] space-y-16">
      {/* About / Welcome Widget */}
      <section className="bg-brand-grayBg border border-brand-border p-8 text-center pt-12">
        <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-6 border-2 border-brand-accentLight">
          <img
            src="/images/eyaflavorspic.PNG"
            alt="Eya"
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="font-serif italic text-2xl text-brand-dark mb-4">{t('sidebar.welcome_title')}</h3>
        <p className="text-brand-muted text-sm leading-loose mb-8">
          {t('sidebar.welcome_text')}
        </p>
        <Link
          to="/about"
          className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand-dark hover:text-brand-accent transition-colors"
        >
          {t('sidebar.about_me')}
        </Link>
      </section>

      {/* Search Widget */}
      <section>
        <h3 className="text-[10px] font-bold tracking-[0.25em] uppercase text-brand-dark mb-6 flex items-center gap-3">
          <span className="w-8 h-[1px] bg-brand-accent/30" />
          {t('sidebar.search_title')}
        </h3>
        <form onSubmit={handleSearch} className="relative">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t('sidebar.search_placeholder')}
            className="w-full bg-brand-grayBg border border-brand-border px-4 py-3 text-xs focus:outline-none focus:border-brand-accent transition-colors"
          />
          <button type="submit" className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-muted hover:text-brand-accent transition-colors">
            <Icon icon="lucide:search" width={16} />
          </button>
        </form>
      </section>

      {/* Categories Widget */}
      <section>
        <h3 className="text-[10px] font-bold tracking-[0.25em] uppercase text-brand-dark mb-6 flex items-center gap-3">
          <span className="w-8 h-[1px] bg-brand-accent/30" />
          {t('sidebar.categories_title')}
        </h3>
        <ul className="space-y-3">
          {categories.filter(c => c.slug !== 'website').map((category) => (
            <li key={category.slug}>
              <Link
                to={`/category/${category.slug}`}
                className="flex items-center justify-between group py-1"
              >
                <span className="text-xs text-brand-muted group-hover:text-brand-accent transition-colors">
                  {t(`categories.${category.slug}`)}
                </span>
                <span className="text-[10px] text-brand-muted/40 font-mono">
                  ({posts.filter(p => p.categorySlug === category.slug).length})
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Latest Posts Widget */}
      <section>
        <h3 className="text-[10px] font-bold tracking-[0.25em] uppercase text-brand-dark mb-8 flex items-center gap-3">
          <span className="w-8 h-[1px] bg-brand-accent/30" />
          {t('sidebar.latest_posts')}
        </h3>
        <div className="space-y-6">
          {latestPosts.map((post) => {
            const currentLang = i18n.language
            const displayTitle = currentLang === 'ar' && post.title_ar ? post.title_ar : (currentLang === 'fr' && post.title_fr ? post.title_fr : post.title)

            return (
              <Link key={post.slug} to={`/recipe/${post.slug}`} className="flex gap-4 group">
                <div className="w-20 h-20 shrink-0 overflow-hidden bg-brand-grayBg">
                  <img
                    src={post.image}
                    alt={post.imageAlt}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-[9px] font-bold tracking-widest uppercase text-brand-accent mb-1">
                    {t(`categories.${post.categorySlug}`)}
                  </span>
                  <h4 className="font-serif text-sm leading-snug text-brand-dark group-hover:text-brand-accent transition-colors line-clamp-2">
                    {displayTitle}
                  </h4>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      {/* Social Links Widget */}
      <section>
        <h3 className="text-[10px] font-bold tracking-[0.25em] uppercase text-brand-dark mb-6 flex items-center gap-3">
          <span className="w-8 h-[1px] bg-brand-accent/30" />
          {t('sidebar.social_title')}
        </h3>
        <div className="grid grid-cols-2 gap-3">
          {[
            { icon: 'lucide:instagram', label: t('contact.insta_label'), link: 'https://www.instagram.com/eya_flavors/' },
            { icon: 'lucide:youtube', label: t('contact.yt_label'), link: 'https://www.youtube.com/@eyaflavors' },
            { icon: 'lucide:facebook', label: 'Facebook', link: 'https://www.facebook.com/Eyaflavors/' },
            { icon: 'lucide:mail', label: t('contact.email_label'), link: '/contact' }
          ].map((social) => (
            <a
              key={social.label}
              href={social.link}
              target={social.link.startsWith('http') ? "_blank" : "_self"}
              rel={social.link.startsWith('http') ? "noopener noreferrer" : ""}
              className="flex items-center gap-3 p-3 bg-brand-grayBg border border-brand-border hover:border-brand-accent transition-colors group"
            >
              <Icon icon={social.icon} width={16} className="text-brand-muted group-hover:text-brand-accent" />
              <span className="text-[10px] font-bold tracking-wider uppercase text-brand-dark">
                {social.label}
              </span>
            </a>
          ))}
        </div>
      </section>
    </aside>
  )
}
