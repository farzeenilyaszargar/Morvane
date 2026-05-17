import Link from "next/link";
import Image from "next/image";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { articles, featuredArticles } from "@/lib/articles";

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
    <div className="relative min-h-40 overflow-hidden border border-white/10 bg-[#0b111d]">
      <Image src={src} alt={alt} fill sizes="150px" className="cover-image object-cover" />
      <span className={`${accent} absolute bottom-4 left-4 block size-7 `} />
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
    <div className="flex flex-wrap gap-3 font-mono text-xs font-black uppercase tracking-[0.12em] text-slate-400">
      <span className="text-slate-400">{category}</span>
      <span>{date}</span>
      {readTime ? <span>{readTime}</span> : null}
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
}) {
  return (
    <div className="mb-6">
      <p className="font-mono text-xs font-black uppercase tracking-[0.16em] text-slate-400">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-4xl font-black leading-none text-slate-50 sm:text-5xl">
        {title}
      </h2>
      {copy ? <p className="mt-3 max-w-2xl leading-7 text-slate-400">{copy}</p> : null}
    </div>
  );
}

function StoryRow({ article }: { article: (typeof articles)[number] }) {
  return (
    <Link
      key={article.slug}
      href={`/articles/${article.slug}`}
      className="group grid gap-5 border border-white/10 bg-white/[0.035] p-5 transition hover:border-slate-300/30 hover:bg-white/[0.05] sm:grid-cols-[150px_1fr]"
    >
      <ArticleVisual accent={article.accent} src={article.image.src} alt={article.image.alt} />
      <div>
        <ArticleMeta category={article.category} date={article.date} readTime={article.readTime} />
        <h3 className="mt-3 text-xl font-black leading-tight text-slate-50 group-hover:text-slate-200 xl:text-2xl">
          {article.title}
        </h3>
        <p className="mt-3 leading-7 text-slate-400">{article.excerpt}</p>
      </div>
    </Link>
  );
}

function CompactStory({ article }: { article: (typeof articles)[number] }) {
  return (
    <Link
      href={`/articles/${article.slug}`}
      className="group grid grid-cols-[88px_1fr] gap-4 border-t border-white/10 py-4 transition first:border-t-0 first:pt-0 hover:text-slate-200"
    >
      <div className="relative h-20 overflow-hidden border border-white/10 bg-[#0b111d]">
        <Image
          src={article.image.src}
          alt={article.image.alt}
          fill
          sizes="88px"
          className="cover-image object-cover"
        />
      </div>
      <div>
        <ArticleMeta category={article.category} date={article.date} />
        <h3 className="mt-2 text-lg font-black leading-tight text-slate-50 group-hover:text-slate-200">
          {article.title}
        </h3>
      </div>
    </Link>
  );
}

function FeatureTile({ article }: { article: (typeof articles)[number] }) {
  return (
    <Link
      href={`/articles/${article.slug}`}
      className="group border border-white/10 bg-white/[0.035] transition hover:border-slate-300/30 hover:bg-white/[0.05]"
    >
      <div className="relative h-44 overflow-hidden border-b border-white/10 bg-[#0b111d]">
        <Image
          src={article.image.src}
          alt={article.image.alt}
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="cover-image object-cover transition duration-500 group-hover:scale-[1.02]"
        />
      </div>
      <div className="p-5">
        <ArticleMeta category={article.category} date={article.date} readTime={article.readTime} />
        <h3 className="mt-3 text-2xl font-black leading-tight text-slate-50 group-hover:text-slate-200">
          {article.title}
        </h3>
        <p className="mt-3 leading-7 text-slate-400">{article.excerpt}</p>
      </div>
    </Link>
  );
}

export default function Home() {
  const [lead, ...sideStories] = featuredArticles;
  const briefArticles = articles.slice(3, 6);
  const infrastructureArticles = [articles[6], articles[7], articles[10]];
  const productArticles = [articles[8], articles[9], articles[11]];
  const startupFundingArticles = articles.slice(12);

  return (
    <main className="space-field min-h-screen text-slate-200">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="star-noise min-h-screen">
        <SiteHeader />

        <section id="ai">
          <div className="mx-auto max-w-7xl px-5 py-3 sm:px-8 lg:py-5">
            <div className="grid gap-3 lg:grid-cols-[1.18fr_0.82fr]">
              <Link
                href={`/articles/${lead.slug}`}
                className="group grid overflow-hidden border border-white/10 bg-white/[0.035] backdrop-blur transition hover:border-slate-300/30 hover:bg-white/[0.05] lg:grid-cols-[1fr_0.86fr]"
              >
                <div className="order-2 flex flex-col justify-between p-4 lg:order-1">
                  <div>
                    <ArticleMeta category={lead.category} date={lead.date} />
                    <h1 className="mt-3 max-w-3xl text-2xl font-black leading-[0.98] text-slate-50 group-hover:text-slate-200 sm:text-3xl lg:text-4xl">
                      {lead.title}
                    </h1>
                    <p className="mt-3 hidden max-w-2xl text-sm leading-6 text-slate-400 sm:block sm:text-base sm:leading-7">
                      {lead.dek}
                    </p>
                  </div>
                  <p className="mt-3 font-mono text-xs font-black uppercase tracking-[0.14em] text-slate-400">
                    Read feature / {lead.readTime}
                  </p>
                </div>
                <div className="relative order-1 h-28 overflow-hidden border-b border-white/10 bg-[#0b111d] sm:h-40 lg:order-2 lg:h-auto lg:min-h-64 lg:border-b-0 lg:border-l">
                  <Image
                    src={lead.image.src}
                    alt={lead.image.alt}
                    fill
                    priority
                    sizes="(min-width: 1024px) 52vw, 100vw"
                    className="cover-image object-cover transition duration-500 group-hover:scale-[1.02]"
                  />
                </div>
              </Link>

              <div className="grid gap-2">
                {sideStories.map((article) => (
                  <Link
                    key={article.slug}
                    id={
                      article.category === "Chips"
                        ? "chips"
                        : article.tag === "Startups"
                          ? "startups"
                          : undefined
                    }
                    href={`/articles/${article.slug}`}
                    className="group grid grid-cols-[76px_1fr] gap-3 border border-white/10 bg-white/[0.035] p-2.5 backdrop-blur transition hover:border-slate-300/30 hover:bg-white/[0.05] sm:grid-cols-[108px_1fr] lg:grid-cols-[96px_1fr] xl:grid-cols-[116px_1fr]"
                  >
                    <div>
                      <div className="relative h-full min-h-20 overflow-hidden border border-white/10 bg-[#0b111d]">
                        <Image
                          src={article.image.src}
                          alt={article.image.alt}
                          fill
                          sizes="(min-width: 1024px) 32vw, 100vw"
                          className="cover-image object-cover transition duration-500 group-hover:scale-[1.02]"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col justify-between">
                      <div>
                        <ArticleMeta category={article.category} date={article.date} />
                        <h2 className="mt-1.5 text-sm font-black leading-tight text-slate-50 group-hover:text-slate-200 sm:text-base">
                          {article.title}
                        </h2>
                        <p className="mt-2 hidden text-sm leading-6 text-slate-400 xl:block">
                          {article.excerpt}
                        </p>
                      </div>
                      <p className="mt-2 font-mono text-[0.66rem] font-bold uppercase tracking-[0.14em] text-slate-400">
                        {article.readTime}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="funding" className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
          <SectionHeading
            eyebrow="Startup Ledger"
            title="Funding & Founder Lore"
            copy="Fresh venture rounds, stranger founder lessons, and the capital stories behind the companies trying to become infrastructure."
          />
          <div className="grid gap-5 lg:grid-cols-4">
            {startupFundingArticles.map((article) => (
              <FeatureTile key={article.slug} article={article} />
            ))}
          </div>
        </section>

        <section
          id="security"
          className="mx-auto grid max-w-7xl gap-8 px-5 py-12 sm:px-8 lg:grid-cols-[1fr_320px]"
        >
          <div>
            <SectionHeading
              eyebrow="The Brief"
              title="Signal Desk"
              copy="Fast reads on the stories shaping how teams buy, secure, and design technology."
            />
            <div className="grid gap-5">
              {briefArticles.map((article) => (
                <StoryRow key={article.slug} article={article} />
              ))}
            </div>
          </div>

          <aside className="space-y-5">
            <div className="border border-white/10 bg-[#0b111d] p-5">
              <p className="font-mono text-xs font-black uppercase tracking-[0.16em] text-slate-400">
                Reading Queue
              </p>
              <div className="mt-5">
                {sideStories.map((article) => (
                  <CompactStory key={article.slug} article={article} />
                ))}
              </div>
            </div>
            <div className="border border-white/10 bg-white/[0.04] p-5 backdrop-blur">
              <p className="font-mono text-xs font-black uppercase tracking-[0.16em] text-slate-400">
                Editor&apos;s Board
              </p>
              <h2 className="mt-3 text-3xl font-black leading-tight text-slate-50">
                How we choose stories
              </h2>
              <ul className="mt-5 space-y-4 text-slate-400">
                {[
                  "Original signal over recycled takes.",
                  "Concrete numbers, dates, and named markets.",
                  "Readable context before hot reactions.",
                  "Pages structured for fast scanning and deep reading.",
                ].map((brief) => (
                  <li key={brief} className="flex gap-3 leading-6">
                    <span className="mt-2 size-2 shrink-0 bg-slate-200" />
                    <span>{brief}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div id="newsletter" className="border border-white/10 bg-[#0b111d] p-5">
              <p className="font-mono text-xs font-black uppercase tracking-[0.16em] text-slate-400">
                Newsletter
              </p>
              <h2 className="mt-3 text-3xl font-black leading-tight text-slate-50">
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
                  className="border border-white/10 bg-black/30 px-4 py-3 font-mono text-slate-200 outline-none placeholder:text-slate-500 focus:border-slate-300"
                />
                <button
                  type="button"
                  className="border border-slate-300/40 bg-slate-200 px-4 py-3 font-mono font-black uppercase tracking-[0.14em] text-[#070910] transition hover:bg-white"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </aside>
        </section>

        <section className="mx-auto max-w-7xl px-5 pb-12 sm:px-8">
          <SectionHeading
            eyebrow="Infrastructure"
            title="Compute, Code, Grid"
            copy="The operating layer beneath the next cycle: power, software, and the systems that keep scaled products online."
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {infrastructureArticles.map((article) => (
              <FeatureTile key={article.slug} article={article} />
            ))}
          </div>
        </section>

        <section id="product" className="mx-auto max-w-7xl px-5 pb-14 sm:px-8">
          <SectionHeading
            eyebrow="Systems"
            title="Product & Automation"
            copy="Where interfaces, agents, devices, and robots meet the everyday workflows they have to improve."
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {productArticles.map((article) => (
              <FeatureTile key={article.slug} article={article} />
            ))}
          </div>
        </section>

        <SiteFooter />
      </div>
    </main>
  );
}
