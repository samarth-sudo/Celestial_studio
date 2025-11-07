'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Navigation() {
  return (
    <nav className="fixed w-full top-0 z-[1000] glass backdrop-blur-[30px] backdrop-saturate-[180%] border-b border-white/[0.08] animate-slide-down shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
      <div className="max-w-[1400px] mx-auto px-12 py-5 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-4 hover:scale-105 transition-transform duration-300 cursor-pointer">
          <div className="relative w-[50px] h-[50px] flex items-center justify-center">
            <Image
              src="/Logo.png"
              alt="Celestial Studio Logo"
              width={50}
              height={50}
              className="drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
            />
          </div>

          <div className="text-[1.4rem] font-extrabold tracking-wide text-white">
            Celestial Studio
          </div>
        </Link>

      </div>
    </nav>
  )
}
