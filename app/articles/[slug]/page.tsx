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

const siteUrl = "https://morvane.space";

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
    };
  }

  return {
    title: article.title,
    description: article.dek,
    keywords: article.keywords,
    alternates: {
      canonical: `/articles/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.dek,
      type: "article",
      url: `/articles/${article.slug}`,
      images: [
        {
          url: article.image.src,
          alt: article.image.alt,
        },
      ],
      publishedTime: article.publishedAt,
      modifiedTime: article.publishedAt,
      authors: ["Morvane Editorial"],
      section: article.category,
      tags: article.keywords,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.dek,
      images: [article.image.src],
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
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article.title,
    description: article.dek,
    datePublished: article.publishedAt,
    dateModified: article.publishedAt,
    articleSection: article.category,
    keywords: article.keywords.join(", "),
    mainEntityOfPage: `${siteUrl}/articles/${article.slug}`,
    image: `${siteUrl}${article.image.src}`,
    mentions: mentionedLinks.map((link) => ({
      "@type": "Thing",
      name: link.label,
      url: link.url,
    })),
    author: {
      "@type": "Organization",
      name: "Morvane Editorial",
    },
    publisher: {
      "@type": "Organization",
      name: "Morvane",
    },
  };

  return (
    <main className="min-h-screen bg-[#f7f7f2] text-[#10130f]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <div className="min-h-screen">
        <SiteHeader />

        <article>
          <header className="border-b border-[#10130f] bg-[#f7f7f2]">
            <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 sm:px-8 lg:grid-cols-[1fr_360px] lg:py-14">
              <div>
                <Link
                  href="/"
                  className="mb-7 inline-block border border-[#10130f] px-3 py-2 text-xs font-black uppercase tracking-[0.1em] text-[#10130f] transition hover:bg-[#10130f] hover:text-white"
                >
                  Back to feed
                </Link>
                <div className="mb-6 flex flex-wrap gap-3 text-xs font-black uppercase tracking-[0.1em] text-[#697064]">
                  <span className="text-[#0077C8]">{article.category}</span>
                  <span>{article.date}</span>
                  <span>{article.readTime}</span>
                </div>
                <h1 className="max-w-5xl text-5xl font-black leading-[0.9] tracking-[-0.055em] text-[#10130f] sm:text-6xl lg:text-7xl">
                  {article.title}
                </h1>
                <p className="mt-7 max-w-3xl text-xl leading-8 text-[#4a5046]">{article.dek}</p>
              </div>
              <div>
                <div className="relative min-h-72 overflow-hidden border border-[#10130f]/20 bg-[#e8ebe2]">
                  <Image
                    src={article.image.src}
                    alt={article.image.alt}
                    fill
                    priority
                    sizes="(min-width: 1024px) 340px, 100vw"
                    className="cover-image object-cover"
                  />
                </div>
                <a
                  href={article.image.creditUrl}
                  className="mt-3 block text-[0.65rem] font-bold uppercase tracking-[0.1em] text-[#697064] transition hover:text-[#0077C8]"
                  target="_blank"
                  rel="noopener"
                >
                  Image: {article.image.credit}
                </a>
              </div>
            </div>
          </header>

          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[minmax(0,760px)_320px]">
            <div>
              <p className="border-l-4 border-[#00A2FF] bg-white p-6 text-2xl font-black leading-9 text-[#10130f]">
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
              {article.sourceLinks ? (
                <div className="border border-[#10130f]/20 bg-white p-5">
                  <p className="text-xs font-black uppercase tracking-[0.1em] text-[#0077C8]">
                    Source Trail
                  </p>
                  <div className="mt-4 space-y-3">
                    {article.sourceLinks.map((source) => (
                      <a
                        key={source.url}
                        href={source.url}
                        target="_blank"
                        rel="noopener"
                        className="block border-t border-[#10130f]/20 pt-3 text-sm font-bold leading-6 text-[#33382f] transition first:border-t-0 first:pt-0 hover:text-[#0077C8]"
                      >
                        {source.label}
                      </a>
                    ))}
                  </div>
                </div>
              ) : null}
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
