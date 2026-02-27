import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'
import { useTranslation } from 'react-i18next'
import Navigation from '../components/Navigation'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function About() {
  const { t } = useTranslation()

  return (
    <div className="bg-white text-brand-dark font-sans antialiased overflow-x-hidden selection:bg-brand-accentLight selection:text-brand-dark">
      <Navigation />
      <Header />

      <div className="max-w-5xl mx-auto px-6 lg:px-12 py-16 md:py-24">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-brand-muted mb-12">
          <Link to="/" className="hover:text-brand-accent transition-colors">{t('nav.home')}</Link>
          <span>/</span>
          <span className="text-brand-dark">{t('about.breadcrumb')}</span>
        </nav>

        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
          <div className="flex-shrink-0">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full border border-brand-accent rotate-6" />
              <div className="absolute inset-0 rounded-full border border-brand-accent/50 -rotate-3" />
              <div className="w-full h-full rounded-full overflow-hidden border-[8px] border-brand-accentLight">
                <img
                  src='/images/eyaflavorspic.PNG'
                  alt="Eya"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="text-center lg:text-left">
            <span className="text-[10px] font-semibold tracking-[0.4em] uppercase text-brand-muted block mb-3">
              {t('about.creator_tag')}
            </span>
            <h1 className="font-serif italic text-5xl md:text-6xl text-brand-dark font-light mb-6">
              {t('about.title')}
            </h1>
            <div className="h-[1px] w-16 bg-brand-accent mb-6 mx-auto lg:mx-0" />
            <p className="text-brand-muted leading-loose mb-4">
              {t('about.bio_p1')}
            </p>
            <p className="text-brand-muted leading-loose mb-4">
              {t('about.bio_p2')}
            </p>
            <p className="text-brand-muted leading-loose">
              {t('about.bio_p3')}
            </p>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="text-center py-16 border-y border-brand-border mb-24">
          <span className="text-[10px] font-semibold tracking-[0.4em] uppercase text-brand-muted block mb-6">
            {t('about.mission_title')}
          </span>
          <blockquote className="font-serif italic text-3xl md:text-4xl text-brand-dark font-light leading-relaxed max-w-3xl mx-auto">
            "{t('about.mission_text')}"
          </blockquote>
          <div className="h-[1px] w-16 bg-brand-accent mx-auto mt-8" />
        </div>

        {/* What I Do */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-[1px] bg-brand-border flex-1" />
            <h2 className="text-[10px] font-bold tracking-[0.25em] text-brand-muted uppercase whitespace-nowrap">
              {t('about.what_i_do')}
            </h2>
            <div className="h-[1px] bg-brand-border flex-1" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: 'lucide:book-open',
                title: t('about.feat_recipe_title'),
                desc: t('about.feat_recipe_desc'),
              },
              {
                icon: 'lucide:youtube',
                title: t('about.feat_youtube_title'),
                desc: t('about.feat_youtube_desc'),
              },
              {
                icon: 'lucide:camera',
                title: t('about.feat_photo_title'),
                desc: t('about.feat_photo_desc'),
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
          <p className="text-brand-muted mb-6">{t('about.find_me')}</p>
          <div className="flex items-center justify-center gap-6 mb-10">
            {[
              { icon: 'lucide:youtube', label: 'YouTube', link: 'https://www.youtube.com/@eyaflavors' },
              { icon: 'lucide:instagram', label: 'Instagram', link: 'https://www.instagram.com/eya_flavors/' },
              { icon: 'lucide:facebook', label: 'Facebook', link: 'https://www.facebook.com/Eyaflavors/' },
            ].map(({ icon, label, link }) => (
              <a
                key={label}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
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
            to="/category/recipes"
            className="inline-flex items-center gap-3 px-10 py-4 border border-brand-dark/10 bg-white hover:bg-brand-accentLight hover:border-brand-accent text-xs font-bold tracking-[0.25em] text-brand-dark uppercase transition-all duration-300"
          >
            {t('about.explore')} <Icon icon="lucide:arrow-right" width={12} />
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  )
}
