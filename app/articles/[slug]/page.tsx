import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import {
  articles,
  getArticleBySlug,
  getRelatedArticles,
  mentionedLinksBySlug,
} from "@/lib/articles";
import { absoluteUrl, siteConfig } from "@/lib/site";

type ArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Article not found",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const title = article.seo?.title ?? article.title;
  const description = article.seo?.description ?? article.dek;
  const keywords = Array.from(
    new Set([...article.keywords, article.category, article.tag, "Morvane"]),
  );

  return {
    title,
    description,
    keywords,
    authors: [{ name: "Morvane Editorial", url: absoluteUrl("/identity.json") }],
    creator: "Morvane Editorial",
    publisher: siteConfig.legalName,
    category: article.category,
    alternates: {
      canonical: `/articles/${article.slug}`,
    },
    openGraph: {
      title,
      description,
      type: "article",
      url: absoluteUrl(`/articles/${article.slug}`),
      images: [
        {
          url: absoluteUrl(article.image.src),
          alt: article.image.alt,
        },
      ],
      publishedTime: article.publishedAt,
      modifiedTime: article.publishedAt,
      authors: ["Morvane Editorial"],
      section: article.category,
      tags: keywords,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl(article.image.src)],
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
    other: {
      news_keywords: keywords.join(", "),
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = getRelatedArticles(article.slug);
  const mentionedLinks = mentionedLinksBySlug[article.slug] ?? [];
  const articleUrl = absoluteUrl(`/articles/${article.slug}`);
  const articleJsonLd = {
    "@type": ["NewsArticle", "BlogPosting"],
    "@id": `${articleUrl}#article`,
    headline: article.title,
    description: article.dek,
    datePublished: article.publishedAt,
    dateModified: article.publishedAt,
    articleSection: article.category,
    keywords: article.keywords.join(", "),
    inLanguage: siteConfig.language,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
    url: articleUrl,
    isPartOf: {
      "@id": `${siteConfig.url}/#website`,
    },
    image: {
      "@type": "ImageObject",
      url: absoluteUrl(article.image.src),
      caption: article.image.alt,
    },
    thumbnailUrl: absoluteUrl(article.image.src),
    mentions: mentionedLinks.map((link) => ({
      "@type": "Thing",
      name: link.label,
      url: link.url,
    })),
    author: {
      "@type": "Organization",
      name: "Morvane Editorial",
      url: absoluteUrl("/identity.json"),
    },
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
    },
  };
  const breadcrumbJsonLd = {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Morvane",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: article.category,
        item: `${siteConfig.url}/#${article.category.toLowerCase().replaceAll(" ", "-")}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: articleUrl,
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[#f7f7f2] text-[#10130f]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [articleJsonLd, breadcrumbJsonLd],
          }),
        }}
      />
      <div className="min-h-screen">
        <SiteHeader />

        <article>
          <header className="border-b border-[#10130f] bg-[#f7f7f2]">
            <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 sm:px-8 lg:grid-cols-[1fr_360px] lg:py-14">
              <div>
                <div className="mb-6 flex flex-wrap gap-3 text-xs font-black uppercase tracking-[0.1em] text-[#697064]">
                  <span className="text-[#0077C8]">{article.category}</span>
                  <span>{article.date}</span>
                  <span>{article.readTime}</span>
                </div>
                <h1 className="max-w-5xl text-4xl font-black leading-[0.94] tracking-[-0.045em] text-[#10130f] sm:text-6xl sm:leading-[0.9] lg:text-7xl">
                  {article.title}
                </h1>
                <p className="mt-7 max-w-3xl text-lg leading-8 text-[#4a5046] sm:text-xl">
                  {article.dek}
                </p>
              </div>
              <div className="self-center">
                <div className="relative mx-auto min-h-72 w-full max-w-[360px] overflow-hidden border border-[#10130f]/20 bg-[#e8ebe2]">
                  <Image
                    src={article.image.src}
                    alt={article.image.alt}
                    fill
                    priority
                    sizes="(min-width: 1024px) 340px, 100vw"
                    className="cover-image object-cover"
                  />
                </div>
              </div>
            </div>
          </header>

          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[minmax(0,760px)_320px]">
            <div>
              <p className="border-l-4 border-[#00A2FF] bg-white p-5 text-xl font-black leading-8 text-[#10130f] sm:p-6 sm:text-2xl sm:leading-9">
                {article.standfirst}
              </p>

              <div className="article-prose mt-10">
                {article.sections.map((section) => (
                  <section key={section.heading}>
                    <h2>{section.heading}</h2>
                    {section.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </section>
                ))}
              </div>
            </div>

            <aside className="space-y-5">
              <div className="border border-[#10130f] bg-white p-5">
                <p className="text-xs font-black uppercase tracking-[0.1em] text-[#0077C8]">
                  Pull Quote
                </p>
                <p className="mt-4 text-2xl font-black leading-tight text-[#10130f]">
                  {article.pullQuote}
                </p>
              </div>
              {mentionedLinks.length > 0 ? (
                <div className="border border-[#10130f]/20 bg-white p-5">
                  <p className="text-xs font-black uppercase tracking-[0.1em] text-[#0077C8]">
                    Outbound Links
                  </p>
                  <div className="mt-4 grid gap-2">
                    {mentionedLinks.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener"
                        className="border border-[#10130f]/20 px-3 py-2 text-sm font-bold text-[#33382f] transition hover:border-[#10130f] hover:bg-[#f7f7f2] hover:text-[#0077C8]"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              ) : null}
              <div className="border border-[#10130f]/20 bg-white p-5">
                <p className="text-xs font-black uppercase tracking-[0.1em] text-[#0077C8]">
                  Related
                </p>
                <div className="mt-4 space-y-4">
                  {relatedArticles.map((related) => (
                    <Link
                      key={related.slug}
                      href={`/articles/${related.slug}`}
                      className="block border-t border-[#10130f]/20 pt-4 transition hover:text-[#0077C8]"
                    >
                      <p className="text-xs font-black uppercase tracking-[0.1em] text-[#697064]">
                        {related.category}
                      </p>
                      <h3 className="mt-2 text-lg font-black leading-tight text-[#10130f]">
                        {related.title}
                      </h3>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </article>

        <SiteFooter />
      </div>
    </main>
  );
}
