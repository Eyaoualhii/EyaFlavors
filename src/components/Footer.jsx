import { Icon } from '@iconify/react'

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-gray-500 py-16 border-t border-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-bold tracking-[0.2em] uppercase">
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
          <p className="hover:text-white transition-colors cursor-default">&copy; 2026 Eya Flavors</p>

        </div>
        <div className="flex items-center gap-8">
          {[
            { icon: 'lucide:youtube', href: 'https://www.youtube.com/@eyaflavors' },
            { icon: 'lucide:facebook', href: 'https://www.facebook.com/Eyaflavors/' },
            { icon: 'lucide:instagram', href: 'https://www.instagram.com/eya_flavors/' },

          ].map(({ icon, href }) => (
            <a key={icon} href={href}
              target="_blank"
              rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors group"
            >
              <Icon icon={icon} width={16} className="group-hover:scale-110 transition-transform" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
