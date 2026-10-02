import '../index.css';
import '../App.css';
import { portfolioContent } from '../content';

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://hijaz.dev'),
  title: {
    default: 'Hijaz C — Flutter Developer & Mobile App Engineer',
    template: '%s | Hijaz C',
  },
  description:
    'Hijaz C is a Flutter Developer and Mobile App Engineer with 2+ years of production experience building high-performance Android & iOS applications using Flutter, Dart, Clean Architecture, and BLoC.',
  keywords: [
    'Flutter Developer',
    'Mobile App Developer',
    'Android Developer',
    'iOS Developer',
    'Flutter Mobile Engineer',
    'Dart Developer',
    'Cross-Platform Mobile Development',
    'Clean Architecture Flutter',
    'BLoC State Management',
    'Firebase Flutter Developer',
    'REST APIs WebSockets Mobile',
    'Google Play Store Release',
    'Apple App Store Deployment',
    'Hijaz C',
    'Freelance Flutter Developer',
    'Hire Flutter Developer',
    'Mobile Application Specialist',
    'Kerala Flutter Developer',
    'India Mobile App Developer',
  ],
  authors: [{ name: 'Hijaz C', url: 'https://github.com/hijaaaazz' }],
  creator: 'Hijaz C',
  publisher: 'Hijaz C',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'profile',
    locale: 'en_US',
    url: '/',
    siteName: 'Hijaz C — Flutter Developer Portfolio',
    title: 'Hijaz C — Flutter Developer & Mobile App Engineer',
    description:
      'Explore projects, architecture, and production mobile applications engineered with Flutter, Dart, Clean Architecture, and BLoC.',
    images: [
      {
        url: '/images/hijaz-portrait.png',
        width: 800,
        height: 800,
        alt: 'Hijaz C — Flutter Developer & Mobile App Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hijaz C — Flutter Developer & Mobile App Engineer',
    description:
      'Explore projects, architecture, and production mobile applications engineered with Flutter, Dart, Clean Architecture, and BLoC.',
    images: ['/images/hijaz-portrait.png'],
    creator: '@hijaaaazz',
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
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export const viewport = {
  themeColor: '#0a0a0c',
  width: 'device-width',
  initialScale: 1,
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': 'https://hijaz.dev/#person',
      name: 'Hijaz C',
      jobTitle: 'Flutter Developer & Mobile App Engineer',
      description:
        'Flutter Developer with 2+ years of application engineering experience. Architecting and deploying high-performance Android & iOS apps with Clean Architecture and BLoC.',
      url: 'https://hijaz.dev',
      image: 'https://hijaz.dev/images/hijaz-portrait.png',
      sameAs: [
        'https://www.linkedin.com/in/hijaaaazz/',
        'https://github.com/hijaaaazz',
        'https://medium.com/@hijaz',
      ],
      knowsAbout: [
        'Flutter',
        'Dart',
        'Mobile App Development',
        'Android Development',
        'iOS Development',
        'Clean Architecture',
        'BLoC State Management',
        'Firebase',
        'Cloud Messaging (FCM)',
        'RESTful APIs',
        'WebSockets',
        'SQLite & Hive',
        'Google Play Console',
        'Apple App Store Connect',
        'UI/UX Design',
        'Figma',
      ],
      worksFor: {
        '@type': 'Organization',
        name: 'Madariz Impex Pvt. Ltd.',
      },
      alumniOf: {
        '@type': 'EducationalOrganization',
        name: 'GMHSS Perinthalmanna',
      },
    },
    {
      '@type': 'ProfilePage',
      '@id': 'https://hijaz.dev/#webpage',
      url: 'https://hijaz.dev',
      name: 'Hijaz C — Flutter Developer & Mobile App Engineer Portfolio',
      isPartOf: {
        '@type': 'WebSite',
        '@id': 'https://hijaz.dev/#website',
        url: 'https://hijaz.dev',
        name: 'Hijaz C Portfolio',
      },
      mainEntity: {
        '@id': 'https://hijaz.dev/#person',
      },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link href="https://fonts.cdnfonts.com/css/handscript" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
