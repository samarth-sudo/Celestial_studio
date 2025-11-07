import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Celestial Studio - AI-Powered Robot Training',
    short_name: 'Celestial Studio',
    description: 'Train robots with natural language using AI',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#000000',
    icons: [
      {
        src: '/Logo.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  }
}
