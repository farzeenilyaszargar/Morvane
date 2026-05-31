export const siteConfig = {
  name: "Morvane",
  legalName: "Morvane Media LLC",
  url: "https://morvane.space",
  domain: "morvane.space",
  locale: "en_US",
  language: "en",
  themeColor: "#0077C8",
  email: "hello@morvane.space",
  description:
    "Morvane is a technology magazine covering startups, venture, AI, cybersecurity, apps, chips, infrastructure, and the companies shaping modern software.",
  shortDescription: "Technology news for builders, investors, and operators.",
  logo: "/logo.svg",
  logoMark: "/logo-mark.svg",
  coverImage: "/articles/source-photos/enterprise-ai-service-businesses.jpg",
  topics: [
    "technology",
    "startups",
    "venture capital",
    "artificial intelligence",
    "cybersecurity",
    "apps",
    "developer tools",
    "AI infrastructure",
    "enterprise software",
  ],
};

export function absoluteUrl(path = "/") {
  if (path.startsWith("http")) {
    return path;
  }

  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
}

export const organizationJsonLd = {
  "@type": "NewsMediaOrganization",
  "@id": `${siteConfig.url}/#organization`,
  name: siteConfig.name,
  legalName: siteConfig.legalName,
  url: siteConfig.url,
  logo: {
    "@type": "ImageObject",
    url: absoluteUrl(siteConfig.logo),
  },
  image: absoluteUrl(siteConfig.coverImage),
  email: siteConfig.email,
  foundingDate: "2026",
  publishingPrinciples: absoluteUrl("/terms"),
  contactPoint: {
    "@type": "ContactPoint",
    email: siteConfig.email,
    contactType: "editorial",
    availableLanguage: ["English"],
  },
  knowsAbout: siteConfig.topics,
};

export const websiteJsonLd = {
  "@type": "WebSite",
  "@id": `${siteConfig.url}/#website`,
  name: siteConfig.name,
  url: siteConfig.url,
  inLanguage: siteConfig.language,
  publisher: {
    "@id": `${siteConfig.url}/#organization`,
  },
  potentialAction: {
    "@type": "ReadAction",
    target: siteConfig.url,
  },
};
