import Link from "next/link";
import Image from "next/image";
import { articles, featuredArticles, navItems } from "@/lib/articles";

const siteUrl = "https://morvane.space";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Morvane",
  description:
    "A dark, space-inspired technology magazine covering startups, AI, security, chips, product, and search discovery.",
  url: siteUrl,
  publisher: {
    "@type": "Organization",
    name: "Morvane",
  },
  blogPost: articles.map((article) => ({
    "@type": "BlogPosting",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.publishedAt,
    dateModified: article.publishedAt,
    articleSection: article.category,
    image: `${siteUrl}${article.image.src}`,
    url: `${siteUrl}/articles/${article.slug}`,
    author: {
      "@type": "Organization",
      name: "Morvane Editorial",
    },
  })),
};

function PixelLogo() {
  return (
    <span className="pixel-logo grid size-10 grid-cols-5 overflow-hidden border border-white/20 bg-[#070b16] shadow-[0_0_28px_rgba(5,217,232,0.22)]">
      {[
        "bg-[#05d9e8]",
        "bg-[#05d9e8]",
        "bg-transparent",
        "bg-[#8b5cf6]",
        "bg-[#8b5cf6]",
        "bg-[#05d9e8]",
        "bg-transparent",
        "bg-white",
        "bg-transparent",
        "bg-[#8b5cf6]",
        "bg-transparent",
        "bg-white",
        "bg-[#f8c14a]",
        "bg-white",
        "bg-transparent",
        "bg-[#38e8a4]",
        "bg-transparent",
        "bg-white",
        "bg-transparent",
        "bg-[#fb7185]",
        "bg-[#38e8a4]",
        "bg-[#38e8a4]",
        "bg-transparent",
        "bg-[#fb7185]",
        "bg-[#fb7185]",
      ].map((color, index) => (
        <span key={`${color}-${index}`} className={color} />
      ))}
    </span>
  );
}

function SiteHeader() {
  return (
    <header className="border-b border-white/10 bg-[#050711]/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-5 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
        <Link href="/" className="flex items-center gap-3" aria-label="Morvane home">
          <PixelLogo />
          <span className="font-mono text-2xl font-black uppercase tracking-[0.16em]">Morvane</span>
        </Link>
        <div className="flex flex-wrap gap-2 font-mono text-xs font-bold uppercase tracking-[0.12em] text-slate-300">
          {navItems.map((item) => (
            <Link
              key={item}
              href={`/#${item.toLowerCase().replaceAll(" ", "-")}`}
              className="border border-white/10 bg-white/[0.03] px-3 py-2 transition hover:border-cyan-300/60 hover:bg-cyan-300/10 hover:text-white"
            >
              {item}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}

function ArticleVisual({
  accent,
  src,
  alt,
}: {
  accent: string;
  src: string;
  alt: string;
}) {
  return (
    <div
      className="relative min-h-40 overflow-hidden border border-white/10 bg-[#071322]"
    >
      <Image src={src} alt={alt} fill sizes="150px" className="object-cover" />
      <span className={`${accent} absolute bottom-4 left-4 block size-7 shadow-[0_0_28px_rgba(255,255,255,0.22)]`} />
    </div>
  );
}

function ArticleMeta({
  category,
  date,
  readTime,
}: {
  category: string;
  date: string;
  readTime?: string;
}) {
  return (
    <div className="flex flex-wrap gap-3 font-mono text-xs font-black uppercase tracking-[0.12em] text-slate-300">
      <span className="text-cyan-200">{category}</span>
      <span>{date}</span>
      {readTime ? <span>{readTime}</span> : null}
    </div>
  );
}

export default function Home() {
  const [lead, ...sideStories] = featuredArticles;
  const latestArticles = articles.slice(3);

  return (
    <main className="space-field min-h-screen text-slate-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="star-noise min-h-screen">
        <SiteHeader />

        <section className="border-b border-white/10">
          <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:py-10">
            <div className="mb-6 flex flex-col gap-2 font-mono text-xs font-black uppercase tracking-[0.16em] text-slate-400 sm:flex-row sm:items-center sm:justify-between">
              <p>Updated May 17, 2026</p>
              <p>Magazine for the near orbit of technology</p>
            </div>

            <div className="grid gap-5 lg:grid-cols-[1.35fr_0.65fr]">
              <Link
                href={`/articles/${lead.slug}`}
                className="group grid min-h-[520px] overflow-hidden border border-white/10 bg-white/[0.045] backdrop-blur transition hover:border-cyan-200/50 hover:bg-white/[0.065] lg:grid-cols-[0.92fr_1.08fr]"
              >
                <div className="order-2 flex flex-col justify-between p-6 sm:p-8 lg:order-1">
                  <div>
                    <ArticleMeta category={lead.category} date={lead.date} />
                    <h1 className="mt-5 max-w-3xl text-4xl font-black leading-[0.94] text-white group-hover:text-cyan-100 sm:text-6xl lg:text-7xl">
                      {lead.title}
                    </h1>
                    <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">{lead.dek}</p>
                  </div>
                  <p className="mt-10 font-mono text-sm font-black uppercase tracking-[0.14em] text-cyan-200">
                    Read feature / {lead.readTime}
                  </p>
                </div>
                <div className="relative order-1 min-h-72 overflow-hidden border-b border-white/10 bg-[#071322] lg:order-2 lg:border-b-0 lg:border-l">
                  <Image
                    src={lead.image.src}
                    alt={lead.image.alt}
                    fill
                    priority
                    sizes="(min-width: 1024px) 52vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                </div>
              </Link>

              <div className="grid gap-5">
                {sideStories.map((article) => (
                  <Link
                    key={article.slug}
                    href={`/articles/${article.slug}`}
                    className="group flex min-h-60 flex-col justify-between border border-white/10 bg-white/[0.045] p-5 backdrop-blur transition hover:border-cyan-200/50 hover:bg-white/[0.065]"
                  >
                    <div>
                      <div className="relative mb-5 aspect-[16/9] overflow-hidden border border-white/10 bg-[#071322]">
                        <Image
                          src={article.image.src}
                          alt={article.image.alt}
                          fill
                          sizes="(min-width: 1024px) 32vw, 100vw"
                          className="object-cover transition duration-500 group-hover:scale-[1.03]"
                        />
                      </div>
                      <span className={`${article.accent} mb-5 block h-1 w-20`} />
                      <ArticleMeta category={article.category} date={article.date} />
                      <h2 className="mt-4 text-2xl font-black leading-tight text-white group-hover:text-cyan-100">
                        {article.title}
                      </h2>
                      <p className="mt-4 leading-7 text-slate-300">{article.excerpt}</p>
                    </div>
                    <p className="mt-5 font-mono text-xs font-bold uppercase tracking-[0.14em] text-slate-400">
                      {article.readTime}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-8 px-5 py-12 sm:px-8 lg:grid-cols-[1fr_320px]">
          <div>
            <div className="mb-6 flex items-end justify-between gap-4">
              <div>
                <p className="font-mono text-xs font-black uppercase tracking-[0.16em] text-cyan-200">
                  Latest
                </p>
                <h2 className="mt-2 text-4xl font-black leading-none text-white sm:text-5xl">
                  More Stories
                </h2>
              </div>
            </div>
            <div className="grid gap-5">
              {latestArticles.map((article) => (
                <Link
                  key={article.slug}
                  id={article.category.toLowerCase().replaceAll(" ", "-")}
                  href={`/articles/${article.slug}`}
                  className="group grid gap-5 border border-white/10 bg-white/[0.045] p-5 backdrop-blur transition hover:border-cyan-200/50 hover:bg-white/[0.065] sm:grid-cols-[150px_1fr]"
                >
                  <ArticleVisual
                    accent={article.accent}
                    src={article.image.src}
                    alt={article.image.alt}
                  />
                  <div>
                    <ArticleMeta
                      category={article.category}
                      date={article.date}
                      readTime={article.readTime}
                    />
                    <h3 className="mt-3 text-2xl font-black leading-tight text-white group-hover:text-cyan-100">
                      {article.title}
                    </h3>
                    <p className="mt-3 leading-7 text-slate-300">{article.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <aside className="space-y-5">
            <div className="border border-white/10 bg-white/[0.06] p-5 backdrop-blur">
              <p className="font-mono text-xs font-black uppercase tracking-[0.16em] text-cyan-200">
                Editor&apos;s Board
              </p>
              <h2 className="mt-3 text-3xl font-black leading-tight text-white">
                How we choose stories
              </h2>
              <ul className="mt-5 space-y-4 text-slate-300">
                {[
                  "Original signal over recycled takes.",
                  "Concrete numbers, dates, and named markets.",
                  "Readable context before hot reactions.",
                  "Pages structured for fast scanning and deep reading.",
                ].map((brief) => (
                  <li key={brief} className="flex gap-3 leading-6">
                    <span className="mt-2 size-2 shrink-0 bg-cyan-200" />
                    <span>{brief}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="border border-white/10 bg-[#071322] p-5">
              <p className="font-mono text-xs font-black uppercase tracking-[0.16em] text-cyan-200">
                Newsletter
              </p>
              <h2 className="mt-3 text-3xl font-black leading-tight text-white">
                One tight brief every Friday
              </h2>
              <form className="mt-5 flex flex-col gap-3">
                <label className="sr-only" htmlFor="email">
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="border border-white/10 bg-black/30 px-4 py-3 font-mono text-slate-100 outline-none placeholder:text-slate-500 focus:border-cyan-200"
                />
                <button
                  type="button"
                  className="border border-cyan-200/50 bg-cyan-200 px-4 py-3 font-mono font-black uppercase tracking-[0.14em] text-[#050711] transition hover:bg-white"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </aside>
        </section>

        <footer className="border-t border-white/10 bg-black/30">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-8 font-mono text-xs font-bold uppercase tracking-[0.14em] text-slate-400 sm:px-8 md:flex-row md:items-center md:justify-between">
            <p>Morvane covers technology from the edge of the map.</p>
            <p>morvane.space</p>
          </div>
        </footer>
      </div>
    </main>
  );
}
