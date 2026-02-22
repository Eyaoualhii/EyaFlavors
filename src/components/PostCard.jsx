import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'

export default function PostCard({ post }) {
  const [liked, setLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(post.likes)

  const handleLike = () => {
    if (liked) {
      setLikeCount((c) => c - 1)
    } else {
      setLikeCount((c) => c + 1)
    }
    setLiked(!liked)
  }

  return (
    <article className="flex flex-col items-center text-center group">
      {/* Meta Header */}
      <div className="flex items-center justify-center gap-6 mb-8 w-full">
        <div className="h-[1px] bg-brand-border flex-1 group-hover:bg-brand-accent/30 transition-colors" />
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
        <div className="h-[1px] bg-brand-border flex-1 group-hover:bg-brand-accent/30 transition-colors" />
      </div>

      {/* Title */}
      <h2 className="font-serif font-light text-4xl md:text-5xl lg:text-6xl text-brand-dark mb-10 text-balance leading-[1.15]">
        <Link
          to={`/recipe/${post.slug}`}
          className="hover:text-brand-accent transition-colors duration-300"
        >
          {post.title}
        </Link>
      </h2>

      {/* Image */}
      <div className="w-full aspect-[4/3] md:aspect-[3/2] mb-10 overflow-hidden relative">
        <Link to={`/recipe/${post.slug}`} className="block w-full h-full">
          <img
            src={post.image}
            alt={post.imageAlt}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
          />
        </Link>
        {post.badge && (
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 text-xs font-bold tracking-widest uppercase text-brand-dark">
            {post.badge}
          </div>
        )}
      </div>

      {/* Excerpt */}
      <p className="text-brand-muted font-serif text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
        {post.excerpt}
      </p>

      {/* Read More */}
      <div className="flex items-center justify-center w-full mb-12">
        <div className="h-[1px] bg-brand-border w-12 md:w-24" />
        <Link
          to={`/recipe/${post.slug}`}
          className="mx-6 px-8 py-3 border border-brand-dark/10 bg-white hover:bg-brand-accentLight hover:border-brand-accent text-xs font-bold tracking-[0.25em] text-brand-dark uppercase transition-all duration-300"
        >
          Keep Reading
        </Link>
        <div className="h-[1px] bg-brand-border w-12 md:w-24" />
      </div>

      {/* Post Footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between w-full pt-6 border-t border-brand-border/60 text-xs text-brand-muted">
        <div className="flex items-center gap-2 mb-4 sm:mb-0">
          <span className="italic font-serif text-lg">By</span>
          <span className="font-bold tracking-widest uppercase text-brand-dark">Eya Flavors</span>
        </div>
        <div className="flex items-center gap-8">
          <button
            onClick={handleLike}
            className={`flex items-center gap-2 group/heart transition-colors ${liked ? 'text-brand-accent' : 'hover:text-brand-accent'}`}
          >
            <Icon
              icon={liked ? 'lucide:heart' : 'lucide:heart'}
              width={16}
              className={liked ? 'fill-current' : ''}
            />
            <span className="font-medium">{likeCount} Likes</span>
          </button>
          <div className="flex items-center gap-4 border-l border-brand-border pl-6">
            <span className="italic font-serif mr-2">Share:</span>
            <a href="https://www.facebook.com/Eyaflavors/" className="hover:text-brand-accent transition-colors">
              <Icon icon="lucide:facebook" width={14} />
            </a>
            <a href="https://www.youtube.com/@eyaflavors" className="hover:text-brand-accent transition-colors">
              <Icon icon="lucide:youtube" width={14} />
            </a>
            <a href="https://www.instagram.com/eya_flavors/" className="hover:text-brand-accent transition-colors">
              <Icon icon="lucide:instagram" width={14} />
            </a>
          </div>
        </div>
      </div>
    </article>
  )
}
