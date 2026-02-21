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
  // Fall back to all posts if no match (for demo)
  const displayPosts = categoryPosts.length > 0 ? categoryPosts : posts
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
            {category && (
              <p className="text-brand-muted text-sm mt-4">{category.count} recipes</p>
            )}
          </header>

          {/* Recipe Grid */}
          {displayPosts.length > 0 ? (
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
          )}

          {/* Pagination */}
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
          </div>
        </main>

        <Sidebar />
      </div>

      <Footer />
    </div>
  )
}
