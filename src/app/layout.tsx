import './globals.css';
import { Inter, Montserrat } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { defaultSEO, siteConfig } from '@/lib/seo/config';
import GlobalSchema from '@/components/seo/GlobalSchema';
import CookieConsent from '@/components/CookieConsent';
import PageViewTracker from '@/components/analytics/PageViewTracker';
import GoogleTagManagerDirect from '@/components/analytics/GoogleTagManagerDirect';
import { Suspense } from 'react';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' });

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: defaultSEO.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: defaultSEO.description,
  keywords: siteConfig.mainKeywords,
  authors: [{ name: siteConfig.orgName }],
  creator: siteConfig.orgName,
  publisher: siteConfig.orgName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
    languages: {
      'de-DE': '/de',
      'en-US': '/en',
    },
  },
  openGraph: {
    ...defaultSEO.openGraph,
  },
  twitter: {
    ...defaultSEO.twitter,
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
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' }
    ],
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  verification: {
    // Fill these in when you have the verification codes
    google: 'google-site-verification-code',
    // yandex: 'yandex verification code',
    // bing: 'bing verification code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={`${inter.variable} ${montserrat.variable} dark`}>
      <head>
        {/* Next.js will automatically insert metadata, etc. here */}
        <link 
          rel="preload" 
          href="/images/app-screenshots-organized/welcome-screen.png" 
          as="image" 
          type="image/png"
        />
        <link 
          rel="preload" 
          href="/images/app-screenshots-organized/home-dashboard.png" 
          as="image" 
          type="image/png"
        />
        {/* Verhindern, dass der Browser gecachte Assets verwendet, die Probleme verursachen könnten */}
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
      </head>
      <body className="bg-white dark:bg-dark-klare-bg text-klare-text dark:text-dark-klare-text">
        <GlobalSchema />
        <CookieConsent />
        <GoogleTagManagerDirect />
        <PageViewTracker>
          <Header />
          {children}
          <Footer />
        </PageViewTracker>
      </body>
    </html>
  );
}