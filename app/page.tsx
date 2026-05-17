import Link from "next/link";
import { articles, featuredArticles, navItems } from "@/lib/articles";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "PixelPress",
  description:
    "A colorful retro technology publication covering startups, AI, security, chips, product, and search discovery.",
  url: "https://pixelpress.example",
  publisher: {
    "@type": "Organization",
    name: "PixelPress",
  },
  blogPost: articles.map((article) => ({
    "@type": "BlogPosting",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.publishedAt,
    dateModified: article.publishedAt,
    articleSection: article.category,
    url: `https://pixelpress.example/articles/${article.slug}`,
    author: {
      "@type": "Organization",
      name: "PixelPress Editorial",
    },
  })),
};

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

function PixelBlock({ accent }: { accent: string }) {
  return (
    <div
      aria-hidden="true"
      className="pixel-thumb flex min-h-40 items-end border-3 border-[#151515] p-3"
    >
      <span className={`${accent} block size-8 border-2 border-[#151515]`} />
    </div>
  );
}

export default function Home() {
  const [lead, ...sideStories] = featuredArticles;
  const latestArticles = articles.slice(3);

  return (
    <main className="min-h-screen bg-[#fff9ef] text-[#151515]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />

      <section className="pixel-grid border-b-4 border-[#151515]">
        <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:py-10">
          <div className="mb-5 flex flex-col gap-2 font-mono text-sm font-black uppercase sm:flex-row sm:items-center sm:justify-between">
            <p>Updated May 17, 2026</p>
            <p>AI / Startups / Security / Chips / Product</p>
          </div>

          <div className="grid gap-5 lg:grid-cols-[1.35fr_0.65fr]">
            <Link
              href={`/articles/${lead.slug}`}
              className="group grid min-h-[520px] border-4 border-[#151515] bg-white shadow-[10px_10px_0_#151515] transition hover:-translate-y-1 lg:grid-cols-[0.95fr_1.05fr]"
            >
              <div className="order-2 flex flex-col justify-between p-5 sm:p-7 lg:order-1">
                <div>
                  <div className="mb-5 flex flex-wrap gap-2 font-mono text-xs font-black uppercase">
                    <span className={`${lead.accent} border-2 border-[#151515] px-2 py-1`}>
                      {lead.category}
                    </span>
                    <span className="border-2 border-[#151515] px-2 py-1">{lead.date}</span>
                  </div>
                  <h1 className="max-w-3xl text-4xl font-black leading-[0.95] group-hover:underline sm:text-6xl">
                    {lead.title}
                  </h1>
                  <p className="mt-5 max-w-2xl text-lg leading-8 text-[#3f3f3f]">{lead.dek}</p>
                </div>
                <p className="mt-8 font-mono text-sm font-black uppercase">
                  Read feature / {lead.readTime}
                </p>
              </div>
              <div className={`order-1 min-h-72 border-b-4 border-[#151515] bg-gradient-to-br ${lead.theme} lg:order-2 lg:border-b-0 lg:border-l-4`}>
                <div className="grid h-full grid-cols-4 grid-rows-4">
                  {Array.from({ length: 16 }).map((_, index) => (
                    <span
                      key={index}
                      className="border-b-2 border-r-2 border-[#151515]/50 odd:bg-white/18 even:bg-black/8"
                    />
                  ))}
                </div>
              </div>
            </Link>

            <div className="grid gap-5">
              {sideStories.map((article) => (
                <Link
                  key={article.slug}
                  href={`/articles/${article.slug}`}
                  className="group flex min-h-60 flex-col justify-between border-4 border-[#151515] bg-white p-5 shadow-[8px_8px_0_#151515] transition hover:-translate-y-1"
                >
                  <div>
                    <div className={`mb-4 h-3 w-24 border-2 border-[#151515] ${article.accent}`} />
                    <p className="font-mono text-xs font-black uppercase text-[#5c4bff]">
                      {article.category}
                    </p>
                    <h2 className="mt-3 text-2xl font-black leading-tight group-hover:underline">
                      {article.title}
                    </h2>
                    <p className="mt-4 leading-7 text-[#494949]">{article.excerpt}</p>
                  </div>
                  <p className="mt-5 font-mono text-xs font-bold uppercase">
                    {article.date} / {article.readTime}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b-4 border-[#151515] bg-[#151515] text-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-7 sm:px-8 lg:grid-cols-4">
          {["Agent governance", "Inference cost", "Defense autonomy", "AI product design"].map(
            (topic, index) => (
              <div key={topic} className="flex items-center gap-3">
                <span className="grid size-10 place-items-center border-2 border-white bg-[#ffc83d] font-mono font-black text-[#151515]">
                  {index + 1}
                </span>
                <span className="font-mono text-sm font-black uppercase">{topic}</span>
              </div>
            ),
          )}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-12 sm:px-8 lg:grid-cols-[1fr_320px]">
        <div>
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="font-mono text-sm font-black uppercase text-[#5c4bff]">Latest</p>
              <h2 className="text-4xl font-black">More Stories</h2>
            </div>
          </div>
          <div className="grid gap-5">
            {latestArticles.map((article) => (
              <Link
                key={article.slug}
                id={article.category.toLowerCase().replaceAll(" ", "-")}
                href={`/articles/${article.slug}`}
                className="group grid gap-5 border-4 border-[#151515] bg-white p-5 shadow-[7px_7px_0_#151515] transition hover:-translate-y-1 sm:grid-cols-[150px_1fr]"
              >
                <PixelBlock accent={article.accent} />
                <div>
                  <div className="flex flex-wrap gap-2 font-mono text-xs font-black uppercase">
                    <span className="text-[#5c4bff]">{article.category}</span>
                    <span>{article.date}</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="mt-2 text-2xl font-black leading-tight group-hover:underline">
                    {article.title}
                  </h3>
                  <p className="mt-3 leading-7 text-[#494949]">{article.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <aside className="space-y-5">
          <div className="border-4 border-[#151515] bg-[#ffc83d] p-5 shadow-[8px_8px_0_#151515]">
            <p className="font-mono text-sm font-black uppercase">Editor&apos;s Board</p>
            <h2 className="mt-2 text-3xl font-black">How we choose stories</h2>
            <ul className="mt-5 space-y-3">
              {[
                "Original signal over recycled takes.",
                "Concrete numbers, dates, and named markets.",
                "Readable context before hot reactions.",
                "Pages structured for fast scanning and deep reading.",
              ].map((brief) => (
                <li key={brief} className="flex gap-3 leading-6">
                  <span className="mt-1 size-4 shrink-0 border-2 border-[#151515] bg-[#ff4f87]" />
                  <span>{brief}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="border-4 border-[#151515] bg-white p-5 shadow-[8px_8px_0_#151515]">
            <p className="font-mono text-sm font-black uppercase text-[#5c4bff]">Newsletter</p>
            <h2 className="mt-2 text-3xl font-black">One tight brief every Friday</h2>
            <form className="mt-5 flex flex-col gap-3">
              <label className="sr-only" htmlFor="email">
                Email address
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="border-3 border-[#151515] bg-[#fff9ef] px-4 py-3 font-mono outline-none focus:bg-white"
              />
              <button
                type="button"
                className="border-3 border-[#151515] bg-[#22b8ff] px-4 py-3 font-mono font-black uppercase shadow-[4px_4px_0_#151515] transition hover:-translate-y-0.5"
              >
                Subscribe
              </button>
            </form>
          </div>
        </aside>
      </section>

      <footer className="border-t-4 border-[#151515] bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-8 font-mono text-sm font-bold uppercase sm:px-8 md:flex-row md:items-center md:justify-between">
          <p>PixelPress covers technology with color, clarity, and useful skepticism.</p>
          <p>AI / Security / Chips / Product</p>
        </div>
      </footer>
    </main>
  );
}
