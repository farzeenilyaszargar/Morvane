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
    "Morvane is a technology news publication covering startups, venture, AI, security, apps, chips, and infrastructure.",
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

function MetaLine({
  category,
  date,
  readTime,
}: {
  category: string;
  date: string;
  readTime?: string;
}) {
  return (
    <div className="flex flex-wrap gap-2 text-xs font-black uppercase tracking-[0.08em] text-[#697064]">
      <span className="text-[#0077C8]">{category}</span>
      <span>{date}</span>
      {readTime ? <span>{readTime}</span> : null}
    </div>
  );
}

function SectionTitle({ title, href }: { title: string; href?: string }) {
  return (
    <div className="mb-9 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end sm:gap-6">
      <h2 className="text-4xl font-black leading-[0.92] tracking-[-0.04em] text-[#0077C8] sm:text-5xl">
        {title}
      </h2>
      {href ? (
        <Link
          href={href}
          className="mb-1 shrink-0 text-sm font-black uppercase tracking-[0.08em] text-[#0077C8] transition hover:text-black"
        >
          See more
        </Link>
      ) : null}
    </div>
  );
}

function LeadCard({ article }: { article: (typeof articles)[number] }) {
  return (
    <Link
      href={`/articles/${article.slug}`}
      className="group block"
    >
      <div className="relative min-h-[320px] overflow-hidden bg-[#006bb4] sm:min-h-[420px] lg:min-h-[470px]">
        <Image
          src={article.image.src}
          alt={article.image.alt}
          fill
          priority
          sizes="(min-width: 1024px) 62vw, 100vw"
          className="cover-image object-cover transition duration-500 group-hover:scale-[1.02]"
        />
      </div>
      <div className="mt-6">
        <div className="flex flex-wrap gap-2 text-xs font-black uppercase tracking-[0.08em] text-white/75">
          <span className="text-white">{article.category}</span>
          <span>{article.date}</span>
          <span>{article.readTime}</span>
        </div>
        <h1 className="mt-4 max-w-5xl text-5xl font-black leading-[0.9] tracking-[-0.055em] text-white transition group-hover:text-[#c5eaff] sm:text-6xl lg:text-7xl">
          {article.title}
        </h1>
        <p className="mt-5 max-w-3xl text-xl leading-8 text-white/82">{article.dek}</p>
      </div>
    </Link>
  );
}

function HeroHeadlineLink({ article }: { article: (typeof articles)[number] }) {
  return (
    <Link
      href={`/articles/${article.slug}`}
      className="group block border-t border-white/25 py-4 first:border-t-0 first:pt-0"
    >
      <div className="flex flex-wrap gap-2 text-xs font-black uppercase tracking-[0.08em] text-white/65">
        <span className="text-white">{article.category}</span>
        <span>{article.date}</span>
      </div>
      <h3 className="mt-2 text-xl font-black leading-tight tracking-[-0.02em] text-white transition group-hover:text-[#c5eaff]">
        {article.title}
      </h3>
    </Link>
  );
}

function LatestRow({ article }: { article: (typeof articles)[number] }) {
  return (
    <Link
      href={`/articles/${article.slug}`}
      className="group grid gap-6 py-9 sm:grid-cols-[190px_1fr]"
    >
      <div className="relative h-36 overflow-hidden bg-[#e8ebe2] sm:h-full">
        <Image
          src={article.image.src}
          alt={article.image.alt}
          fill
          sizes="190px"
          className="cover-image object-cover"
        />
      </div>
      <div>
        <MetaLine category={article.category} date={article.date} readTime={article.readTime} />
        <h3 className="mt-3 text-3xl font-black leading-[0.98] tracking-[-0.04em] text-[#10130f] transition group-hover:text-[#0077C8] sm:text-4xl">
          {article.title}
        </h3>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-[#4a5046]">{article.excerpt}</p>
      </div>
    </Link>
  );
}

function SmallCard({ article }: { article: (typeof articles)[number] }) {
  return (
    <Link href={`/articles/${article.slug}`} className="group block">
      <div className="relative mb-5 h-40 overflow-hidden bg-[#e8ebe2]">
        <Image
          src={article.image.src}
          alt={article.image.alt}
          fill
          sizes="(min-width: 1024px) 24vw, 100vw"
          className="cover-image object-cover"
        />
      </div>
      <MetaLine category={article.category} date={article.date} />
      <h3 className="mt-3 text-3xl font-black leading-[0.98] tracking-[-0.04em] text-[#10130f] transition group-hover:text-[#0077C8]">
        {article.title}
      </h3>
    </Link>
  );
}

function PopularList({ articles: list }: { articles: (typeof articles)[number][] }) {
  return (
    <ol className="divide-y divide-[#10130f]/20 border-y border-[#10130f]">
      {list.map((article, index) => (
        <li key={article.slug}>
          <Link
            href={`/articles/${article.slug}`}
            className="group grid grid-cols-[40px_1fr] gap-3 py-4"
          >
            <span className="font-mono text-3xl font-black leading-none text-[#00A2FF]">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="text-xl font-black leading-tight tracking-[-0.025em] text-[#10130f] transition group-hover:text-[#0077C8]">
              {article.title}
            </span>
          </Link>
        </li>
      ))}
    </ol>
  );
}

export default function Home() {
  const [lead, ...topStories] = featuredArticles;
  const latestArticles = articles.slice(3, 11);
  const ventureArticles = articles.filter((article) =>
    ["Venture", "Startups", "Defense Tech"].includes(article.category),
  );
  const aiArticles = articles.filter((article) =>
    ["AI", "Apps", "Infrastructure"].includes(article.category),
  );
  const popularArticles = [articles[4], articles[9], articles[1], articles[7], articles[6]];

  return (
    <main className="min-h-screen bg-[#f7f7f2] text-[#10130f]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />

      <section id="latest" className="bg-[#0077C8] text-white">
        <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:py-10">
          <div className="mb-8 flex justify-center">
            <Image
              src="/logo.svg"
              alt="Morvane"
              width={520}
              height={134}
              priority
              className="h-auto w-full max-w-[430px]"
            />
          </div>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.35fr)_360px]">
            <LeadCard article={lead} />
            <aside className="lg:border-l lg:border-white/35 lg:pl-6">
              <h2 className="mb-2 text-sm font-black uppercase tracking-[0.1em] text-white">
                Top Headlines
              </h2>
              <div>
                {topStories.concat(articles.slice(3, 6)).map((article) => (
                  <HeroHeadlineLink key={article.slug} article={article} />
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-14 px-5 py-16 sm:px-8 lg:grid-cols-[minmax(0,1fr)_340px] lg:py-20">
        <div>
          <SectionTitle title="Latest News" href="/#latest" />
          {latestArticles.map((article) => (
            <LatestRow key={article.slug} article={article} />
          ))}
        </div>

        <aside className="space-y-14">
          <div>
            <SectionTitle title="Most Popular" />
            <PopularList articles={popularArticles} />
          </div>

          <div id="newsletter" className="border border-[#10130f] bg-[#10130f] p-5 text-white">
            <p className="text-sm font-black uppercase tracking-[0.1em] text-[#00A2FF]">
              Newsletters
            </p>
            <h2 className="mt-3 text-4xl font-black leading-[0.95] tracking-[-0.04em]">
              Daily signal, no filler
            </h2>
            <p className="mt-3 leading-7 text-white/70">
              A tight Morvane briefing on startups, AI, venture, security, and product shifts.
            </p>
            <form className="mt-5 grid gap-3">
              <label className="sr-only" htmlFor="email">
                Email address
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="border border-white/30 bg-white px-4 py-3 text-[#10130f] outline-none placeholder:text-[#697064] focus:border-[#00A2FF]"
              />
              <button
                type="button"
                className="bg-[#00A2FF] px-4 py-3 font-black text-[#031827] transition hover:bg-white"
              >
                Subscribe
              </button>
            </form>
          </div>
        </aside>
      </section>

      <section id="venture" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
        <SectionTitle title="Venture & Startups" href="/#venture" />
        <div id="startups" className="grid gap-x-7 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
          {ventureArticles.slice(0, 4).map((article) => (
            <SmallCard key={article.slug} article={article} />
          ))}
        </div>
      </section>

      <section id="ai" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
        <SectionTitle title="AI, Apps & Infrastructure" href="/#ai" />
        <div id="apps" className="grid gap-x-8 gap-y-10 lg:grid-cols-3">
          {aiArticles.slice(0, 3).map((article) => (
            <SmallCard key={article.slug} article={article} />
          ))}
        </div>
      </section>

      <section id="security" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
        <SectionTitle title="Security, Hardware & Systems" href="/#security" />
        <div className="grid gap-x-8 gap-y-10 lg:grid-cols-3">
          {[articles[7], articles[8], articles[11]].map((article) => (
            <SmallCard key={article.slug} article={article} />
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
