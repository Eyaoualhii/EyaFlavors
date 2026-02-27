import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'
import Navigation from '../components/Navigation'
import Header from '../components/Header'
import Footer from '../components/Footer'
import PostCard from '../components/PostCard'
import Sidebar from '../components/Sidebar'
import { useTranslation } from 'react-i18next'
import { posts } from '../data/posts'

const POSTS_PER_PAGE = 6

export default function Home() {
  const { t } = useTranslation()
  const [currentPage, setCurrentPage] = useState(1)

  // Filter out website posts for the homepage feed
  const feedPosts = posts.filter(post => post.categorySlug !== 'website')

  const totalPages = Math.ceil(feedPosts.length / POSTS_PER_PAGE)
  const indexOfLastPost = currentPage * POSTS_PER_PAGE
  const indexOfFirstPost = indexOfLastPost - POSTS_PER_PAGE
  const currentPosts = feedPosts.slice(indexOfFirstPost, indexOfLastPost)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [currentPage])

  return (
    <div className="bg-white text-brand-dark font-sans antialiased overflow-x-hidden selection:bg-brand-accentLight selection:text-brand-dark">
      <Navigation />
      <Header />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 flex flex-col lg:flex-row gap-16 lg:gap-24">
        {/* Main Content */}
        <main className="w-full lg:w-[68%] space-y-24">
          <div className="space-y-24">
            {currentPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-3 md:gap-6 py-12 text-sm font-medium border-t border-brand-border">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className={`text-brand-muted hover:text-brand-dark transition-colors mr-4 ${currentPage === 1 ? 'opacity-30 cursor-not-allowed' : ''}`}
              >
                {t('common.previous', 'Previous')}
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <button
                  key={p}
                  onClick={() => setCurrentPage(p)}
                  className={`w-10 h-10 flex items-center justify-center rounded-sm transition-all ${currentPage === p
                    ? 'bg-brand-accentLight text-brand-dark border border-brand-accent font-bold'
                    : 'hover:bg-brand-grayBg border border-transparent hover:border-brand-border'
                    }`}
                >
                  {p}
                </button>
              ))}

              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className={`text-brand-dark hover:text-brand-accent transition-colors ml-4 flex items-center gap-2 ${currentPage === totalPages ? 'opacity-30 cursor-not-allowed' : ''}`}
              >
                {t('common.next', 'Next')} <Icon icon="lucide:arrow-right" width={14} />
              </button>
            </div>
          )}
        </main>

        <Sidebar />
      </div>

      <Footer />
    </div>
  )
}
