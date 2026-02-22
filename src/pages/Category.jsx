import { useParams, Link } from 'react-router-dom'
import { Icon } from '@iconify/react'
import Navigation from '../components/Navigation'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
import { posts, categories } from '../data/posts'

export default function Category() {
  const { slug } = useParams()

  const category = categories.find((c) => c.slug === slug)
  const categoryPosts = posts.filter((p) => p.categorySlug === slug)
  // Show all posts on the 'recipes' page (excluding site posts); otherwise filter by category
  const displayPosts = slug === 'recipes'
    ? posts.filter((p) => p.categorySlug !== 'website')
    : (categoryPosts.length > 0 ? categoryPosts : posts)
  const categoryName = category?.name || slug?.replace(/-/g, ' ')

  return (
    <div className="bg-white text-brand-dark font-sans antialiased overflow-x-hidden selection:bg-brand-accentLight selection:text-brand-dark">
      <Navigation />
      <Header />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 md:py-16 flex flex-col lg:flex-row gap-16 lg:gap-24">
        <main className="w-full lg:w-[68%]">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-brand-muted mb-8">
            <Link to="/" className="hover:text-brand-accent transition-colors">Home</Link>
            <span>/</span>
            <span className="text-brand-dark capitalize">{categoryName}</span>
          </nav>

          {/* Category Header */}
          <header className="text-center mb-14">
            <span className="text-[10px] font-semibold tracking-[0.4em] uppercase text-brand-muted">
              Browse Category
            </span>
            <h1 className="font-serif italic text-5xl md:text-6xl text-brand-dark font-light mt-3 mb-4 capitalize">
              {categoryName}
            </h1>
            <div className="h-[1px] w-16 bg-brand-accent mx-auto" />
            {slug !== 'news' && (
              <p className="text-brand-muted text-sm mt-4">{displayPosts.length} recipes</p>
            )}
          </header>
          {/* YouTube Shorts — only on News & Media */}
          {slug === 'news' && (
            <section className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-[1px] bg-brand-border flex-1" />
                <h2 className="text-[10px] font-bold tracking-[0.25em] text-brand-muted uppercase whitespace-nowrap flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" /><path d="m10 15 5-3-5-3z" /></svg>
                  YouTube Shorts
                </h2>
                <div className="h-[1px] bg-brand-border flex-1" />
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  'https://www.youtube.com/embed/_Wz65hsZwFs',
                  'https://www.youtube.com/embed/N9XI8c4AvrU',
                  'https://www.youtube.com/embed/zCEaAOalQXw',
                  'https://www.youtube.com/embed/Ex88rAwGnGM',
                  'https://www.youtube.com/embed/YIH3UBL4TOI',
                  'https://www.youtube.com/embed/jdYBYNyaZug',

                ].map((src, i) => (
                  <div
                    key={i}
                    className="relative overflow-hidden bg-brand-grayBg border border-brand-border"
                    style={{ aspectRatio: '9/16' }}
                  >
                    <iframe
                      src={src}
                      title={`YouTube Short ${i + 1}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>

              <div className="text-center mt-8">
                <a
                  href="https://www.youtube.com/@eyaflavors/shorts"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.25em] uppercase text-brand-dark hover:text-brand-accent transition-colors border border-brand-border px-6 py-3 hover:border-brand-accent"
                >
                  View All Shorts on YouTube
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                </a>
              </div>
            </section>
          )}

          {/* Recipe Grid */}
          {slug !== 'news' && (
            displayPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {displayPosts.map((post) => (
                  <article key={post.slug} className="group flex flex-col">
                    {/* Image */}
                    <div className="w-full aspect-[4/3] overflow-hidden mb-5 relative">
                      <Link to={`/recipe/${post.slug}`} className="block w-full h-full">
                        <img
                          src={post.image}
                          alt={post.imageAlt}
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                        />
                      </Link>
                      {post.badge && (
                        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 text-[10px] font-bold tracking-widest uppercase text-brand-dark">
                          {post.badge}
                        </div>
                      )}
                    </div>

                    {/* Meta */}
                    <div className="flex items-center gap-3 text-[10px] font-bold tracking-[0.2em] uppercase mb-3">
                      <Link
                        to={`/category/${post.categorySlug}`}
                        className="text-brand-accent hover:text-brand-accentHover transition-colors"
                      >
                        {post.category}
                      </Link>
                      <span className="w-1 h-1 rounded-full bg-brand-border" />
                      <span className="text-brand-muted font-normal">{post.date}</span>
                    </div>

                    {/* Title */}
                    <h2 className="font-serif font-light text-2xl md:text-3xl text-brand-dark leading-snug mb-3">
                      <Link
                        to={`/recipe/${post.slug}`}
                        className="hover:text-brand-accent transition-colors duration-300"
                      >
                        {post.title}
                      </Link>
                    </h2>

                    {/* Excerpt */}
                    <p className="text-brand-muted text-sm leading-relaxed mb-4 flex-1">{post.excerpt}</p>

                    {/* Read More */}
                    <Link
                      to={`/recipe/${post.slug}`}
                      className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase text-brand-dark hover:text-brand-accent transition-colors"
                    >
                      Keep Reading <Icon icon="lucide:arrow-right" width={12} />
                    </Link>
                  </article>
                ))}
              </div>
            ) : (
              <div className="text-center py-24 text-brand-muted">
                <Icon icon="lucide:search-x" width={48} className="mx-auto mb-4 opacity-30" />
                <p className="font-serif italic text-xl">No recipes in this category yet.</p>
              </div>
            )
          )}

          {/* Pagination 
          <div className="flex justify-center items-center gap-3 md:gap-6 py-12 mt-12 text-sm font-medium border-t border-brand-border">
            <span className="w-10 h-10 flex items-center justify-center bg-brand-accentLight text-brand-dark border border-brand-accent rounded-sm font-bold">
              1
            </span>
            {[2, 3].map((p) => (
              <a
                key={p}
                href="#"
                className="w-10 h-10 flex items-center justify-center hover:bg-brand-grayBg border border-transparent hover:border-brand-border rounded-sm transition-all"
              >
                {p}
              </a>
            ))}
            <a href="#" className="text-brand-dark hover:text-brand-accent transition-colors ml-4 flex items-center gap-2">
              Next <Icon icon="lucide:arrow-right" width={14} />
            </a>
          </div>*/}
        </main>

        <Sidebar />
      </div>

      <Footer />
    </div>
  )
}
