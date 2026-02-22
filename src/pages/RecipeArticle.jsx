import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import { Icon } from '@iconify/react'
import Navigation from '../components/Navigation'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
import { posts } from '../data/posts'

export default function RecipeArticle() {
  const { slug } = useParams()
  const post = posts.find((p) => p.slug === slug) || posts[1]
  const [liked, setLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(post.likes)

  const handleLike = () => {
    if (liked) setLikeCount((c) => c - 1)
    else setLikeCount((c) => c + 1)
    setLiked(!liked)
  }

  return (
    <div className="bg-white text-brand-dark font-sans antialiased overflow-x-hidden selection:bg-brand-accentLight selection:text-brand-dark">
      <Navigation />
      <Header />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 md:py-16 flex flex-col lg:flex-row gap-16 lg:gap-24">
        {/* Article */}
        <main className="w-full lg:w-[68%]">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-brand-muted mb-8">
            <Link to="/" className="hover:text-brand-accent transition-colors">Home</Link>
            <span>/</span>
            <Link to={`/category/${post.categorySlug}`} className="hover:text-brand-accent transition-colors">
              {post.category}
            </Link>
            <span>/</span>
            <span className="text-brand-dark">{post.title}</span>
          </nav>

          {/* Article Header */}
          <header className="text-center mb-12">
            <div className="flex items-center justify-center gap-6 mb-8 w-full">
              <div className="h-[1px] bg-brand-border flex-1" />
              <div className="flex items-center gap-3 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">
                <Link
                  to={`/category/${post.categorySlug}`}
                  className="text-brand-dark hover:text-brand-accent transition-colors"
                >
                  {post.category}
                </Link>
                <span className="w-1 h-1 rounded-full bg-brand-accent" />
                <span className="text-brand-muted font-normal">{post.date}</span>
              </div>
              <div className="h-[1px] bg-brand-border flex-1" />
            </div>

            <h1 className="font-serif font-light text-4xl md:text-5xl lg:text-6xl text-brand-dark mb-8 leading-[1.15] text-balance">
              {post.title}
            </h1>

            <div className="flex items-center justify-center gap-6 text-brand-muted text-xs mb-10">
              <div className="flex items-center gap-2">
                <span className="italic font-serif text-lg">By</span>
                <Link to="/about" className="font-bold tracking-widest uppercase text-brand-dark hover:text-brand-accent transition-colors">
                  Eya Flavors
                </Link>
              </div>
              <span className="w-1 h-1 rounded-full bg-brand-border" />
              <span>{post.date}</span>
            </div>
          </header>

          {/* Hero Image */}
          <div className="w-full aspect-[3/2] mb-12 overflow-hidden">
            <img
              src={post.image}
              alt={post.imageAlt}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Recipe Info Bar */}
          {post.prepTime && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 bg-brand-grayBg border border-brand-border p-6">
              {[
                { icon: 'lucide:clock', label: 'Prep Time', value: post.prepTime },
                { icon: 'lucide:flame', label: 'Cook Time', value: post.cookTime },
                { icon: 'lucide:users', label: 'Servings', value: post.servings },
                { icon: 'lucide:bar-chart', label: 'Difficulty', value: post.difficulty },
              ].map(({ icon, label, value }) => (
                <div key={label} className="text-center">
                  <Icon icon={icon} width={20} className="mx-auto mb-2 text-brand-accent" />
                  <p className="text-[10px] uppercase tracking-widest text-brand-muted mb-1">{label}</p>
                  <p className="font-bold text-sm text-brand-dark">{value}</p>
                </div>
              ))}
            </div>
          )}

          {/* Article Body */}
          <div className="prose-custom max-w-none font-serif text-brand-dark space-y-6 mb-12">
            {/* Excerpt */}
            <p className="text-lg md:text-xl text-brand-muted leading-relaxed border-l-2 border-brand-accent pl-6 italic">
              {post.excerpt}
            </p>

            {/* Content (rendered as HTML) */}
            <div
              className="text-base leading-relaxed space-y-4 [&>p]:text-brand-muted [&>p]:leading-loose [&>h2]:font-serif [&>h2]:text-2xl [&>h2]:text-brand-dark [&>h2]:mt-10 [&>h2]:mb-4 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:space-y-2 [&>ul>li]:text-brand-muted"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>

          {/* Ingredients */}
          {post.ingredients && (
            <section className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[1px] bg-brand-border flex-1" />
                <h2 className="text-[10px] font-bold tracking-[0.25em] text-brand-muted uppercase">Ingredients</h2>
                <div className="h-[1px] bg-brand-border flex-1" />
              </div>
              <ul className="space-y-3">
                {post.ingredients.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-brand-dark">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Instructions */}
          {post.instructions && (
            <section className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[1px] bg-brand-border flex-1" />
                <h2 className="text-[10px] font-bold tracking-[0.25em] text-brand-muted uppercase">Instructions</h2>
                <div className="h-[1px] bg-brand-border flex-1" />
              </div>
              <ol className="space-y-6">
                {post.instructions.map((step, i) => (
                  <li key={i} className="flex gap-6">
                    <span className="font-serif italic text-3xl text-brand-accent/40 leading-none flex-shrink-0 w-8">
                      {i + 1}
                    </span>
                    <p className="text-sm text-brand-muted leading-loose pt-1">{step}</p>
                  </li>
                ))}
              </ol>
            </section>
          )}

          {/* Article Footer */}
          <div className="flex flex-col sm:flex-row items-center justify-between w-full pt-8 border-t border-brand-border/60 text-xs text-brand-muted">
            <button
              onClick={handleLike}
              className={`flex items-center gap-2 transition-colors mb-4 sm:mb-0 ${liked ? 'text-brand-accent' : 'hover:text-brand-accent'}`}
            >
              <Icon icon="lucide:heart" width={16} className={liked ? 'fill-current' : ''} />
              <span className="font-medium">{likeCount} Likes</span>
            </button>
            <div className="flex items-center gap-4 border-l border-brand-border pl-6">
              <span className="italic font-serif mr-2">Share:</span>
              {[
                { icon: 'lucide:facebook', link: 'https://www.facebook.com/Eyaflavors/' },
                { icon: 'lucide:youtube', link: 'https://www.youtube.com/@eyaflavors' },
                { icon: 'lucide:instagram', link: 'https://www.instagram.com/eya_flavors/' },
              ].map(({ icon, link }) => (
                <a
                  key={icon}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-accent transition-colors"
                >  <Icon icon={icon} width={14} />
                </a>
              ))}
            </div>
          </div>
        </main>

        <Sidebar />
      </div>

      <Footer />
    </div>
  )
}
