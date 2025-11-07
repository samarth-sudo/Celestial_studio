export default function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Celestial Studio',
    applicationCategory: 'DeveloperApplication',
    description: 'Train robots with natural language. AI-powered robot training platform that generates code, runs simulations, and creates deployable robotics systems.',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    provider: {
      '@type': 'Organization',
      name: 'Aratus',
      url: 'https://celestialstudio.vercel.app',
    },
    featureList: [
      'AI Code Generation',
      'Cloud Simulations',
      'One-Click Deployment',
      'Natural Language Interface',
      'ROS2 Integration',
      'GPU-Accelerated Training',
    ],
  }

  const organizationData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Aratus',
    description: 'Building the future of robotics development with AI',
    url: 'https://celestialstudio.vercel.app',
    logo: 'https://celestialstudio.vercel.app/Logo.png',
    sameAs: [
      // Add your social media links here
      // 'https://twitter.com/your-handle',
      // 'https://linkedin.com/company/your-company',
      // 'https://github.com/your-org',
    ],
  }

  const websiteData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Celestial Studio',
    url: 'https://celestialstudio.vercel.app',
    description: 'AI-powered robot training platform',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://celestialstudio.vercel.app/?s={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
      />
    </>
  )
}
