import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="w-full py-12 md:py-20 flex flex-col items-center justify-center border-b border-brand-border/60 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
        <div className="absolute top-10 left-10 text-9xl font-serif italic">E</div>
        <div className="absolute bottom-10 right-10 text-9xl font-serif italic">F</div>
      </div>
      <Link to="/" className="text-center flex flex-col items-center z-10 group">
        <span className="text-[10px] md:text-xs font-semibold tracking-[0.4em] uppercase text-brand-muted mb-3 group-hover:text-brand-accent transition-colors">
          The Art of Baking
        </span>
        <h1 className="font-serif italic text-6xl md:text-8xl lg:text-9xl text-brand-dark font-light tracking-tight leading-none relative">
          Flavors
          <span className="absolute -top-6 -right-8 text-6xl text-brand-accent/20 font-serif not-italic hidden lg:block">
            .
          </span>
        </h1>
        <div className="h-[1px] w-24 bg-brand-accent mt-6 mb-2" />
        <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-brand-muted">By Eya</span>
      </Link>
    </header>
  )
}
