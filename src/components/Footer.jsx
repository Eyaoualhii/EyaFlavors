import { Icon } from '@iconify/react'

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-gray-500 py-16 border-t border-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-bold tracking-[0.2em] uppercase">
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
          <p className="hover:text-white transition-colors cursor-default">&copy; 2024 Eya Flavors</p>
          <span className="hidden md:inline w-1 h-1 bg-gray-700 rounded-full" />
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <span className="hidden md:inline w-1 h-1 bg-gray-700 rounded-full" />
          <a href="#" className="hover:text-white transition-colors">Terms</a>
        </div>
        <div className="flex items-center gap-8">
          {[
            { icon: 'lucide:facebook', href: '#' },
            { icon: 'lucide:instagram', href: '#' },
            { icon: 'lucide:pin', href: '#' },
            { icon: 'lucide:youtube', href: '#' },
          ].map(({ icon, href }) => (
            <a key={icon} href={href} className="flex items-center gap-2 hover:text-white transition-colors group">
              <Icon icon={icon} width={16} className="group-hover:scale-110 transition-transform" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
