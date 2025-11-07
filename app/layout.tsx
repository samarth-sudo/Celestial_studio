import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import BackgroundEffects from '@/components/BackgroundEffects'
import ParticleBackground from '@/components/ParticleBackground'
import { Analytics } from '@vercel/analytics/next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Celestial Studio - AI-Powered Robot Training | Aratus',
    template: '%s | Celestial Studio'
  },
  description: 'Train robots with natural language. Celestial Studio by Aratus uses AI to generate code, run simulations, train policies, and create deployable robotics systems.',
  keywords: ['robotics', 'AI', 'machine learning', 'robot training', 'automation', 'reinforcement learning', 'Isaac Lab', 'MuJoCo', 'ROS2'],
  authors: [{ name: 'Aratus' }],
  creator: 'Aratus',
  publisher: 'Aratus',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://phenomena.studio',
    siteName: 'Celestial Studio',
    title: 'Celestial Studio - AI-Powered Robot Training',
    description: 'Train robots with natural language. Generate code, run simulations, and deploy to hardware.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Celestial Studio by Aratus',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Celestial Studio - AI-Powered Robot Training',
    description: 'Train robots with natural language. Generate code, run simulations, and deploy to hardware.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes when you set them up
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <BackgroundEffects />
        <ParticleBackground />
        <Navigation />
        <main className="relative z-10">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
