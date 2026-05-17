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
  metadataBase: new URL("https://pixelpress.example"),
  title: {
    default: "PixelPress | Retro Tech News, AI, Startups, Security and Chips",
    template: "%s | PixelPress",
  },
  description:
    "PixelPress is a colorful retro technology publication covering AI, startups, cybersecurity, chips, product strategy, and search discovery.",
  keywords: [
    "technology blog",
    "AI news",
    "startup news",
    "cybersecurity trends",
    "search discovery",
    "AI search",
    "AI chips",
  ],
  authors: [{ name: "PixelPress Editorial" }],
  openGraph: {
    title: "PixelPress | Retro Tech News and Analysis",
    description:
      "Readable technology coverage with a pixelated retro aesthetic: AI, startups, cybersecurity, chips, and product strategy.",
    type: "website",
    url: "https://pixelpress.example",
    siteName: "PixelPress",
  },
  twitter: {
    card: "summary_large_image",
    title: "PixelPress | Retro Tech News and Analysis",
    description:
      "Colorful, readable tech coverage for AI, startups, cybersecurity, chips, and product strategy.",
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
