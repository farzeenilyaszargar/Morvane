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
    default: "Morvane | Space-Age Technology Magazine",
    template: "%s | Morvane",
  },
  description:
    "Morvane is a dark, space-inspired technology magazine covering AI, startups, cybersecurity, chips, product strategy, and search discovery.",
  keywords: [
    "technology blog",
    "AI news",
    "startup news",
    "cybersecurity trends",
    "search discovery",
    "AI search",
    "AI chips",
  ],
  authors: [{ name: "Morvane Editorial" }],
  openGraph: {
    title: "Morvane | Space-Age Technology Magazine",
    description:
      "A clean, dark technology magazine for AI, startups, cybersecurity, chips, and product strategy.",
    type: "website",
    url: "https://morvane.space",
    siteName: "Morvane",
    images: [
      {
        url: "/articles/enterprise-ai-orbit.svg",
        alt: "Morvane technology magazine cover image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Morvane | Space-Age Technology Magazine",
    description:
      "A clean, dark technology magazine for AI, startups, cybersecurity, chips, and product strategy.",
    images: ["/articles/enterprise-ai-orbit.svg"],
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
