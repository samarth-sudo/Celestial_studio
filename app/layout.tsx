import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import BackgroundEffects from '@/components/BackgroundEffects'
import ParticleBackground from '@/components/ParticleBackground'
import StructuredData from '@/components/StructuredData'
import { Analytics } from '@vercel/analytics/next'

const inter = Inter({ subsets: ['latin'] })

const siteUrl = 'https://celestialstudio.vercel.app' // Update with your actual domain

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Celestial Studio - AI-Powered Robot Training Platform',
    template: '%s | Celestial Studio'
  },
  description: 'Train robots with natural language. Celestial Studio uses AI to generate code, run cloud simulations, train policies, and create hardware-ready robotics systems. Support for Isaac Lab, MuJoCo, PyBullet, and Gazebo.',
  keywords: [
    'robotics',
    'AI',
    'machine learning',
    'robot training',
    'automation',
    'reinforcement learning',
    'Isaac Lab',
    'MuJoCo',
    'ROS2',
    'PyBullet',
    'Gazebo',
    'embodied AI',
    'robot simulation',
    'natural language robotics',
    'AI code generation',
    'cloud robotics',
    'GPU training',
    'robot deployment',
    'robotics platform',
  ],
  authors: [{ name: 'Aratus', url: siteUrl }],
  creator: 'Aratus',
  publisher: 'Aratus',
  applicationName: 'Celestial Studio',
  category: 'Technology',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Celestial Studio',
    title: 'Celestial Studio - AI-Powered Robot Training Platform',
    description: 'Train robots with natural language. Generate code, run simulations, and deploy to hardware with AI.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Celestial Studio - AI-Powered Robot Training',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Celestial Studio - AI-Powered Robot Training',
    description: 'Train robots with natural language. Generate code, run simulations, and deploy to hardware.',
    images: ['/og-image.png'],
    // creator: '@your-twitter-handle', // Add when available
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
  alternates: {
    canonical: siteUrl,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <StructuredData />
      </head>
      <body className={inter.className}>
        <BackgroundEffects />
        <ParticleBackground />
        <Navigation />
        <main className="relative z-10">
          {children}
        </main>
        <Footer />
        <Analytics />
        <Script
          id="keak-script"
          src="https://zzontar2hsjaawcn.public.blob.vercel-storage.com/scripts/domain-284-httpscelestial-studio-phi.vercel.app.js"
          data-domain="284"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
