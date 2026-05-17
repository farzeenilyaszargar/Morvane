import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, getArticleBySlug, getRelatedArticles, navItems } from "@/lib/articles";

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
      publishedTime: article.publishedAt,
      modifiedTime: article.publishedAt,
      authors: ["PixelPress Editorial"],
      section: article.category,
      tags: article.keywords,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.dek,
    },
  };
}

function SiteHeader() {
  return (
    <header className="border-b-4 border-[#151515] bg-[#fff9ef]/95">
      <nav className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-5 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
        <Link href="/" className="flex items-center gap-3" aria-label="PixelPress home">
          <span className="grid size-10 grid-cols-2 overflow-hidden border-2 border-[#151515] shadow-[4px_4px_0_#151515]">
            <span className="bg-[#ff4f87]" />
            <span className="bg-[#ffc83d]" />
            <span className="bg-[#22b8ff]" />
            <span className="bg-[#2bd9a8]" />
          </span>
          <span className="font-mono text-2xl font-black uppercase">PixelPress</span>
        </Link>
        <div className="flex flex-wrap gap-2 font-mono text-sm font-bold uppercase">
          {navItems.map((item) => (
            <Link
              key={item}
              href={`/#${item.toLowerCase().replaceAll(" ", "-")}`}
              className="border-2 border-[#151515] bg-white px-3 py-2 shadow-[3px_3px_0_#151515] transition hover:-translate-y-0.5 hover:bg-[#ffc83d]"
            >
              {item}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = getRelatedArticles(article.slug);
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article.title,
    description: article.dek,
    datePublished: article.publishedAt,
    dateModified: article.publishedAt,
    articleSection: article.category,
    keywords: article.keywords.join(", "),
    mainEntityOfPage: `https://pixelpress.example/articles/${article.slug}`,
    author: {
      "@type": "Organization",
      name: "PixelPress Editorial",
    },
    publisher: {
      "@type": "Organization",
      name: "PixelPress",
    },
  };

  return (
    <main className="min-h-screen bg-[#fff9ef] text-[#151515]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <SiteHeader />

      <article>
        <header className={`border-b-4 border-[#151515] bg-gradient-to-br ${article.theme}`}>
          <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 sm:px-8 lg:grid-cols-[1fr_320px] lg:py-14">
            <div>
              <Link
                href="/"
                className="mb-6 inline-block border-2 border-[#151515] bg-white px-3 py-2 font-mono text-sm font-black uppercase shadow-[4px_4px_0_#151515] transition hover:-translate-y-0.5"
              >
                Back to feed
              </Link>
              <div className="mb-5 flex flex-wrap gap-2 font-mono text-xs font-black uppercase">
                <span className={`${article.accent} border-2 border-[#151515] px-2 py-1`}>
                  {article.category}
                </span>
                <span className="border-2 border-[#151515] bg-white px-2 py-1">{article.date}</span>
                <span className="border-2 border-[#151515] bg-white px-2 py-1">
                  {article.readTime}
                </span>
              </div>
              <h1 className="max-w-4xl text-4xl font-black leading-[0.98] sm:text-6xl lg:text-7xl">
                {article.title}
              </h1>
              <p className="mt-6 max-w-3xl text-xl leading-8">{article.dek}</p>
            </div>
            <div className="grid min-h-64 grid-cols-4 overflow-hidden border-4 border-[#151515] bg-white shadow-[10px_10px_0_#151515]">
              {Array.from({ length: 20 }).map((_, index) => (
                <span
                  key={index}
                  className={`border-b-2 border-r-2 border-[#151515] ${
                    index % 5 === 0
                      ? article.accent
                      : index % 3 === 0
                        ? "bg-[#ffc83d]"
                        : index % 2 === 0
                          ? "bg-[#22b8ff]"
                          : "bg-white"
                  }`}
                />
              ))}
            </div>
          </div>
        </header>

        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[minmax(0,760px)_320px]">
          <div>
            <p className="border-l-8 border-[#151515] bg-white p-5 text-2xl font-black leading-9 shadow-[7px_7px_0_#151515]">
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
            <div className="border-4 border-[#151515] bg-[#ffc83d] p-5 shadow-[8px_8px_0_#151515]">
              <p className="font-mono text-sm font-black uppercase">Pull Quote</p>
              <p className="mt-3 text-2xl font-black leading-tight">{article.pullQuote}</p>
            </div>
            <div className="border-4 border-[#151515] bg-white p-5 shadow-[8px_8px_0_#151515]">
              <p className="font-mono text-sm font-black uppercase text-[#5c4bff]">Related</p>
              <div className="mt-4 space-y-4">
                {relatedArticles.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/articles/${related.slug}`}
                    className="block border-t-2 border-[#151515] pt-4 transition hover:text-[#5c4bff]"
                  >
                    <p className="font-mono text-xs font-black uppercase">{related.category}</p>
                    <h3 className="mt-1 text-lg font-black leading-tight">{related.title}</h3>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </article>
    </main>
  );
}
