import "./globals.css";
import { Inter, Montserrat } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { getDefaultSEO, siteConfig } from "@/lib/seo/config";
import GlobalSchema from "@/components/seo/GlobalSchema";
import CookieConsent from "@/components/CookieConsent";
import PageViewTracker from "@/components/analytics/PageViewTracker";
import GoogleTagManagerDirect from "@/components/analytics/GoogleTagManagerDirect";
import ImageLoadScript from "@/components/utils/ImageLoadScript";
import CustomHeadTags from "@/components/seo/CustomHeadTags";
import HreflangTags from "@/components/seo/HreflangTags";
import { I18nProvider } from "@/lib/i18n/I18nProvider";
import DynamicLangSetter from "@/components/utils/DynamicLangSetter";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: getDefaultSEO().title,
    template: `%s | ${siteConfig.name}`,
  },
  description: getDefaultSEO().description,
  keywords: siteConfig.content.de.mainKeywords,
  authors: [{ name: siteConfig.orgName }],
  creator: siteConfig.orgName,
  publisher: siteConfig.orgName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
    languages: {
      "de-DE": "https://klare-methode.app",
      "en-US": "https://klare-methode.app/en",
      "x-default": "https://klare-methode.app",
    },
  },
  openGraph: {
    ...getDefaultSEO().openGraph,
  },
  twitter: {
    ...getDefaultSEO().twitter,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    other: [
      {
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
  verification: {
    google: "google-site-verification-code", // Replace with actual verification code
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
    <html
      lang="de" // Standard-Sprache, wird durch I18nProvider überschrieben
      className={`${inter.variable} ${montserrat.variable} dark`}
    >
      <head>
        {/* Next.js will automatically insert metadata, etc. here */}
        <CustomHeadTags />
        <HreflangTags />
        {/* Preload für kritische Bilder - Deutsche Version */}
        <link
          rel="preload"
          href="/images/app-screenshots-organized/welcome-screen.webp"
          as="image"
          type="image/webp"
        />
        <link
          rel="preload"
          href="/images/app-screenshots-organized/home-dashboard.webp"
          as="image"
          type="image/webp"
        />
        {/* Preload für kritische Bilder - Englische Version */}
        <link
          rel="preload"
          href="/images/app-screenshots-organized/welcome-screen-en.png"
          as="image"
          type="image/png"
        />
        <link
          rel="preload"
          href="/images/app-screenshots-organized/home-dashboard-en.png"
          as="image"
          type="image/png"
        />
        <link
          rel="preload"
          href="/images/app-screenshots-organized/journal-calendar-en.png"
          as="image"
          type="image/png"
        />
        <link
          rel="preload"
          href="/images/app-screenshots-organized/login-screen-en.png"
          as="image"
          type="image/png"
        />
        {/* Fallback für Browser, die WebP nicht unterstützen */}
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
        {/* SEO & Performance Optimizations */}
        <meta name="theme-color" content="#6366F1" />
        <meta name="color-scheme" content="dark light" />
      </head>
      <body className="bg-white dark:bg-dark-klare-bg text-klare-text dark:text-dark-klare-text">
        <I18nProvider>
          <DynamicLangSetter />
          <GlobalSchema />
          <CookieConsent />
          <GoogleTagManagerDirect />
          <ImageLoadScript />
          <PageViewTracker>
            <Header />
            {children}
            <Footer />
          </PageViewTracker>
        </I18nProvider>
      </body>
    </html>
  );
}

