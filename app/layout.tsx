import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { absoluteUrl, organizationJsonLd, siteConfig, websiteJsonLd } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Morvane",
    template: "%s | Morvane",
  },
  applicationName: siteConfig.name,
  description: siteConfig.description,
  keywords: siteConfig.topics,
  authors: [{ name: "Morvane Editorial", url: absoluteUrl("/identity.json") }],
  creator: "Morvane Editorial",
  publisher: siteConfig.legalName,
  category: "technology",
  classification: "Technology news publication",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Morvane",
    description: siteConfig.shortDescription,
    type: "website",
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    images: [
      {
        url: siteConfig.coverImage,
        alt: "Morvane technology magazine cover photo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Morvane",
    description: siteConfig.shortDescription,
    images: [siteConfig.coverImage],
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  other: {
    "theme-color": siteConfig.themeColor,
    "msapplication-TileColor": siteConfig.themeColor,
    news_keywords:
      "Morvane, Morvane Space, technology news, tech blogs, startup news, startup blogs, AI news, venture capital, cybersecurity news",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [organizationJsonLd, websiteJsonLd],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
