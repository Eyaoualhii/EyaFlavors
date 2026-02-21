import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'
import Navigation from '../components/Navigation'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function About() {
  return (
    <div className="bg-white text-brand-dark font-sans antialiased overflow-x-hidden selection:bg-brand-accentLight selection:text-brand-dark">
      <Navigation />
      <Header />

      <div className="max-w-5xl mx-auto px-6 lg:px-12 py-16 md:py-24">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-brand-muted mb-12">
          <Link to="/" className="hover:text-brand-accent transition-colors">Home</Link>
          <span>/</span>
          <span className="text-brand-dark">About Eya</span>
        </nav>

        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full border border-brand-accent rotate-6" />
              <div className="absolute inset-0 rounded-full border border-brand-accent/50 -rotate-3" />
              <div className="w-full h-full rounded-full overflow-hidden border-[8px] border-brand-accentLight">
                <img
                  src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Eya"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="text-center lg:text-left">
            <span className="text-[10px] font-semibold tracking-[0.4em] uppercase text-brand-muted block mb-3">
              About the creator
            </span>
            <h1 className="font-serif italic text-5xl md:text-6xl text-brand-dark font-light mb-6">
              Hi, I'm Eya
            </h1>
            <div className="h-[1px] w-16 bg-brand-accent mb-6 mx-auto lg:mx-0" />
            <p className="text-brand-muted leading-loose mb-4">
              I'm a recipe developer, food stylist, and photographer based in Paris. My love for baking started
              at my grandmother's kitchen table, where every Sunday was filled with the warm scent of buttery
              croissants and homemade jams.
            </p>
            <p className="text-brand-muted leading-loose mb-4">
              Eya Flavors is my little corner of the internet — a place where I share recipes that feel both
              special and approachable. Whether you're a beginner or a seasoned baker, I want you to feel
              confident and inspired in your kitchen.
            </p>
            <p className="text-brand-muted leading-loose">
              When I'm not testing recipes, you'll find me exploring Parisian markets, obsessing over pastry
              shop windows, or hunting for the perfect cup of coffee.
            </p>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="text-center py-16 border-y border-brand-border mb-24">
          <span className="text-[10px] font-semibold tracking-[0.4em] uppercase text-brand-muted block mb-6">
            My Mission
          </span>
          <blockquote className="font-serif italic text-3xl md:text-4xl text-brand-dark font-light leading-relaxed max-w-3xl mx-auto">
            "To make the art of baking accessible, joyful, and beautiful for everyone."
          </blockquote>
          <div className="h-[1px] w-16 bg-brand-accent mx-auto mt-8" />
        </div>

        {/* What I Do */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-[1px] bg-brand-border flex-1" />
            <h2 className="text-[10px] font-bold tracking-[0.25em] text-brand-muted uppercase whitespace-nowrap">
              What I Do
            </h2>
            <div className="h-[1px] bg-brand-border flex-1" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: 'lucide:book-open',
                title: 'Recipe Development',
                desc: 'I create and test every recipe multiple times to ensure it works perfectly in your home kitchen.',
              },
              {
                icon: 'lucide:camera',
                title: 'Food Photography',
                desc: 'Beautiful food photography that makes you want to bake right away. All photos are taken by me.',
              },
              {
                icon: 'lucide:smartphone',
                title: 'The Love Eya App',
                desc: 'Over 500 exclusive recipes, video guides, and a smart shopping list — all in one place.',
              },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="text-center p-8 bg-brand-grayBg border border-brand-border">
                <div className="w-12 h-12 rounded-full bg-brand-accentLight flex items-center justify-center text-brand-accent mx-auto mb-5">
                  <Icon icon={icon} width={22} />
                </div>
                <h3 className="font-serif text-xl text-brand-dark mb-3">{title}</h3>
                <p className="text-brand-muted text-sm leading-loose">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Social + CTA */}
        <div className="text-center">
          <p className="text-brand-muted mb-6">Find me on social media</p>
          <div className="flex items-center justify-center gap-6 mb-10">
            {[
              { icon: 'lucide:instagram', label: 'Instagram' },
              { icon: 'lucide:pin', label: 'Pinterest' },
              { icon: 'lucide:facebook', label: 'Facebook' },
              { icon: 'lucide:youtube', label: 'YouTube' },
            ].map(({ icon, label }) => (
              <a
                key={label}
                href="#"
                className="flex flex-col items-center gap-2 group text-brand-muted hover:text-brand-accent transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-brand-grayBg border border-brand-border flex items-center justify-center group-hover:bg-brand-accentLight group-hover:border-brand-accent transition-colors">
                  <Icon icon={icon} width={18} />
                </div>
                <span className="text-[10px] uppercase tracking-widest">{label}</span>
              </a>
            ))}
          </div>
          <Link
            to="/"
            className="inline-flex items-center gap-3 px-10 py-4 border border-brand-dark/10 bg-white hover:bg-brand-accentLight hover:border-brand-accent text-xs font-bold tracking-[0.25em] text-brand-dark uppercase transition-all duration-300"
          >
            Explore Recipes <Icon icon="lucide:arrow-right" width={12} />
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  )
}
