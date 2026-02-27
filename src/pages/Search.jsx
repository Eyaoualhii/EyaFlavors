import { useState, useMemo } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { Icon } from '@iconify/react'
import { useTranslation } from 'react-i18next'
import Navigation from '../components/Navigation'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { posts, categories } from '../data/posts'

export default function Search() {
  const { t, i18n } = useTranslation()
  const [searchParams, setSearchParams] = useSearchParams()
  // ... (keeping state logic)
  const sortOptions = [
    { label: t('search.sort_latest'), value: 'latest' },
    { label: t('search.sort_likes'), value: 'likes' },
    { label: t('search.sort_az'), value: 'az' },
  ]

  // ... (keeping handleSearch and results useMemo)

  const filterCategories = [{ name: t('categories.all'), slug: 'all' }, ...categories.map(c => ({ ...c, name: t(`categories.${c.slug}`) }))]

  return (
    <div className="bg-white text-brand-dark font-sans antialiased overflow-x-hidden selection:bg-brand-accentLight selection:text-brand-dark">
      <Navigation />
      <Header />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 md:py-16">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-brand-muted mb-10">
          <Link to="/" className="hover:text-brand-accent transition-colors">{t('nav.home')}</Link>
          <span>/</span>
          <span className="text-brand-dark">{t('search.breadcrumb')}</span>
        </nav>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-14">
          <form onSubmit={handleSearch} className="relative group">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder={t('search.placeholder')}
              className="w-full border-b-2 border-brand-border py-4 px-2 text-xl bg-transparent focus:outline-none focus:border-brand-accent transition-colors placeholder:text-brand-muted/40 font-serif italic"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 text-brand-muted hover:text-brand-accent transition-colors"
            >
              <Icon icon="lucide:search" width={22} />
            </button>
          </form>
          {query && (
            <p className="text-center text-xs text-brand-muted mt-4 tracking-wider">
              {t('search.results_count', { count: results.length, query, defaultValue: results.length === 1 ? `${results.length} result for "${query}"` : `${results.length} results for "${query}"` })}
            </p>
          )}
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-10 pb-6 border-b border-brand-border">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {filterCategories.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => setActiveCategory(cat.slug)}
                className={`px-4 py-2 text-[10px] font-bold tracking-[0.15em] uppercase border transition-colors ${activeCategory === cat.slug
                  ? 'bg-brand-accent text-white border-brand-accent'
                  : 'border-brand-border text-brand-muted hover:border-brand-accent hover:text-brand-accent'
                  }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Sort */}
          <div className="flex items-center gap-3 text-xs text-brand-muted">
            <span className="uppercase tracking-widest">{t('search.sort_label')}</span>
            {sortOptions.map((opt) => (
              <button
                key={opt.value}
                onClick={() => setSort(opt.value)}
                className={`font-bold transition-colors ${sort === opt.value ? 'text-brand-accent' : 'hover:text-brand-dark'
                  }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Results */}
        {results.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {results.map((post) => {
              const currentLang = i18n.language
              const displayTitle = currentLang === 'ar' && post.title_ar ? post.title_ar : (currentLang === 'fr' && post.title_fr ? post.title_fr : post.title)
              const displayExcerpt = currentLang === 'ar' && post.excerpt_ar ? post.excerpt_ar : (currentLang === 'fr' && post.excerpt_fr ? post.excerpt_fr : post.excerpt)

              return (
                <article key={post.slug} className="group flex flex-col">
                  <div className="w-full aspect-[4/3] overflow-hidden mb-5 relative">
                    <Link to={`/recipe/${post.slug}`} className="block w-full h-full">
                      <img
                        src={post.image}
                        alt={post.imageAlt}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                      />
                    </Link>
                    {post.badge && (
                      <div className="absolute top-3 right-3 bg-white/90 px-3 py-1 text-[10px] font-bold tracking-widest uppercase text-brand-dark">
                        {post.badge}
                      </div>
                    )}
                  </div>

                  <div className="flex items-center gap-3 text-[10px] font-bold tracking-[0.2em] uppercase mb-3">
                    <Link
                      to={`/category/${post.categorySlug}`}
                      className="text-brand-accent hover:text-brand-accentHover transition-colors"
                    >
                      {t(`categories.${post.categorySlug}`)}
                    </Link>
                    <span className="w-1 h-1 rounded-full bg-brand-border" />
                    <span className="text-brand-muted font-normal">{post.date}</span>
                  </div>

                  <h2 className="font-serif font-light text-xl md:text-2xl text-brand-dark leading-snug mb-3">
                    <Link
                      to={`/recipe/${post.slug}`}
                      className="hover:text-brand-accent transition-colors duration-300"
                    >
                      {displayTitle}
                    </Link>
                  </h2>

                  <p className="text-brand-muted text-sm leading-relaxed mb-4 flex-1">{displayExcerpt}</p>

                  <div className="flex items-center justify-between text-xs text-brand-muted">
                    <Link
                      to={`/recipe/${post.slug}`}
                      className="inline-flex items-center gap-2 font-bold tracking-[0.15em] uppercase text-brand-dark hover:text-brand-accent transition-colors"
                    >
                      {t('common.read_more')} <Icon icon="lucide:arrow-right" width={12} />
                    </Link>
                    <span className="flex items-center gap-1">
                      <Icon icon="lucide:heart" width={12} />
                      {post.likes}
                    </span>
                  </div>
                </article>
              )
            })}
          </div>
        ) : (
          <div className="text-center py-24">
            <Icon icon="lucide:search-x" width={56} className="mx-auto mb-6 text-brand-muted/30" />
            <p className="font-serif italic text-2xl text-brand-muted mb-4">{t('search.no_results')}</p>
            {query && (
              <p className="text-sm text-brand-muted mb-8">
                {t('search.no_results_sub')}
              </p>
            )}
            <Link
              to="/"
              className="inline-flex items-center gap-3 px-8 py-3 border border-brand-dark/10 bg-white hover:bg-brand-accentLight hover:border-brand-accent text-xs font-bold tracking-[0.25em] text-brand-dark uppercase transition-all duration-300"
            >
              {t('search.back_home')}
            </Link>
          </div>
        )}
      </div>

      <Footer />
    </div>
  )
}
