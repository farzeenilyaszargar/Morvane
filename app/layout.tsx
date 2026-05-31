import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  metadataBase: new URL("https://morvane.space"),
  title: {
    default: "Morvane | Startup and Technology News",
    template: "%s | Morvane",
  },
  description:
    "Morvane is a technology news publication covering startups, venture, AI, cybersecurity, apps, chips, and infrastructure.",
  keywords: [
    "technology blog",
    "AI news",
    "startup news",
    "cybersecurity trends",
    "venture capital",
    "apps",
    "AI chips",
  ],
  authors: [{ name: "Morvane Editorial" }],
  openGraph: {
    title: "Morvane | Startup and Technology News",
    description:
      "Startup and technology news for builders, investors, and operators.",
    type: "website",
    url: "https://morvane.space",
    siteName: "Morvane",
    images: [
      {
        url: "/articles/source-photos/enterprise-ai-service-businesses.jpg",
        alt: "Morvane technology magazine cover photo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Morvane | Startup and Technology News",
    description:
      "Startup and technology news for builders, investors, and operators.",
    images: ["/articles/source-photos/enterprise-ai-service-businesses.jpg"],
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
