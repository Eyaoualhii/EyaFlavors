import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'
import Navigation from '../components/Navigation'
import Header from '../components/Header'
import Footer from '../components/Footer'
import PostCard from '../components/PostCard'
import Sidebar from '../components/Sidebar'
import { posts } from '../data/posts'

const homePosts = posts.slice(0, 3)

export default function Home() {
  return (
    <div className="bg-white text-brand-dark font-sans antialiased overflow-x-hidden selection:bg-brand-accentLight selection:text-brand-dark">
      <Navigation />
      <Header />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 flex flex-col lg:flex-row gap-16 lg:gap-24">
        {/* Main Content */}
        <main className="w-full lg:w-[68%] space-y-24">
          {homePosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}

          {/* Pagination */}
          <div className="flex justify-center items-center gap-3 md:gap-6 py-12 text-sm font-medium border-t border-brand-border">
            <a href="#" className="text-brand-muted hover:text-brand-dark transition-colors mr-4">
              Previous
            </a>
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
            <span className="text-brand-muted px-2 tracking-widest">...</span>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center hover:bg-brand-grayBg border border-transparent hover:border-brand-border rounded-sm transition-all"
            >
              12
            </a>
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
