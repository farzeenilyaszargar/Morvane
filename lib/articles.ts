export type Article = {
  slug: string;
  category: string;
  title: string;
  dek: string;
  excerpt: string;
  tag: string;
  date: string;
  publishedAt: string;
  readTime: string;
  accent: string;
  theme: string;
  image: {
    src: string;
    alt: string;
  };
  keywords: string[];
  standfirst: string;
  sections: {
    heading: string;
    body: string[];
  }[];
  pullQuote: string;
};

export const navItems = ["AI", "Startups", "Security", "Chips", "Product"];

export const articles: Article[] = [
  {
    slug: "enterprise-ai-service-businesses",
    category: "AI Markets",
    title: "Enterprise AI is shifting from demos to durable service businesses",
    dek: "The loudest AI story is no longer the model launch. It is the quieter question of who can turn capability into recurring, trusted operations.",
    excerpt:
      "New AI ventures, giant valuations, and board-level automation budgets are turning the 2026 AI cycle into an execution race.",
    tag: "Lead",
    date: "May 17, 2026",
    publishedAt: "2026-05-17",
    readTime: "7 min",
    accent: "bg-slate-400",
    theme: "from-[#0b101a] via-[#101726] to-[#172033]",
    image: {
      src: "/articles/enterprise-ai-orbit.svg",
      alt: "Abstract orbital data rings around a bright enterprise AI core",
    },
    keywords: ["enterprise AI", "AI services", "automation strategy", "AI startups"],
    standfirst:
      "The early wave rewarded demos. The next wave rewards delivery: data access, governance, workflow depth, security posture, and a service layer that makes AI feel accountable.",
    pullQuote:
      "AI budgets are moving toward vendors that can own an outcome, not merely display a capability.",
    sections: [
      {
        heading: "From prototype theatre to operating muscle",
        body: [
          "The enterprise AI market is getting more practical. Buyers still care about model quality, but the harder questions now sit around permissions, audit trails, integrations, and whether a system can survive everyday operational mess.",
          "That favors companies building around a concrete job: support triage, contract review, incident response, financial close, customer research, or internal knowledge work. In those categories, the product is less a blank chat box and more a managed workflow with clear handoffs.",
        ],
      },
      {
        heading: "The service layer is becoming the moat",
        body: [
          "The most interesting AI companies are borrowing from services without becoming traditional consultancies. They package implementation, evaluation, and domain tuning into the product experience so customers get value faster and churn less easily.",
          "That changes how teams should judge vendors. A flashy benchmark matters, but so do onboarding time, data controls, failure recovery, and how clearly the tool explains what happened after it acts.",
        ],
      },
      {
        heading: "What to watch next",
        body: [
          "Expect more partnerships between frontier AI labs, private equity, systems integrators, and vertical software companies. The market is trying to solve distribution and trust at the same time.",
          "The durable winners will probably look less like magic demos and more like operational infrastructure: measured, governed, boring in the best possible way.",
        ],
      },
    ],
  },
  {
    slug: "ai-chip-challengers-2027-silicon",
    category: "Chips",
    title: "The AI chip challengers lining up for 2027 silicon",
    dek: "A new class of silicon startups is trying to turn inference cost and supply anxiety into a wedge against the incumbent GPU stack.",
    excerpt:
      "A wave of GPU alternatives is chasing inference cost, memory bandwidth, and sovereign cloud demand as buyers look beyond one supplier.",
    tag: "Infrastructure",
    date: "May 17, 2026",
    publishedAt: "2026-05-17",
    readTime: "6 min",
    accent: "bg-slate-400",
    theme: "from-[#0b101a] via-[#101726] to-[#172033]",
    image: {
      src: "/articles/ai-chip-map.svg",
      alt: "Glowing processor grid floating over a deep space field",
    },
    keywords: ["AI chips", "semiconductors", "inference", "data center hardware"],
    standfirst:
      "The chip race is widening from training clusters to inference economics, where small improvements in power, memory, and utilization can reshape cloud margins.",
    pullQuote:
      "Inference is where the bill arrives, and that makes chip diversity suddenly strategic.",
    sections: [
      {
        heading: "The center of gravity is moving",
        body: [
          "Training runs still attract attention, but production inference is where companies feel the recurring cost. That is why new silicon vendors are positioning around throughput per watt, memory bandwidth, and predictable deployment economics.",
          "For large AI buyers, a second source is not just about price. It is about negotiating leverage, availability, and the ability to place workloads in regions where data and procurement rules are tightening.",
        ],
      },
      {
        heading: "Software remains the tax",
        body: [
          "The hardest part of challenging GPUs is not only building fast hardware. It is making the developer experience feel ordinary enough that teams do not rewrite their stack for every deployment.",
          "The companies that matter in 2027 will likely be the ones that pair specialized chips with compilers, frameworks, hosted services, and migration tools that lower adoption friction.",
        ],
      },
      {
        heading: "Why this matters now",
        body: [
          "Every major AI product wants lower latency and lower serving cost. If alternative chips can satisfy a narrow but valuable set of workloads, they do not need to replace the incumbent stack everywhere.",
          "They only need to make the most expensive production paths cheaper and easier to procure.",
        ],
      },
    ],
  },
  {
    slug: "defense-startups-platform-valuations",
    category: "Defense Tech",
    title: "Why defense startups are suddenly priced like platform companies",
    dek: "Autonomy, simulation, and a more urgent procurement mood are changing the way investors model defense technology.",
    excerpt:
      "Autonomy, simulation, and procurement reform are making defense tech feel less like a niche and more like a venture-scale software category.",
    tag: "Startups",
    date: "May 16, 2026",
    publishedAt: "2026-05-16",
    readTime: "6 min",
    accent: "bg-slate-400",
    theme: "from-[#0b101a] via-[#101726] to-[#172033]",
    image: {
      src: "/articles/defense-autonomy-grid.svg",
      alt: "Satellite-like autonomy paths crossing a golden tactical grid",
    },
    keywords: ["defense tech", "autonomous systems", "dual use startups", "procurement"],
    standfirst:
      "Defense technology is becoming a platform story because software, sensors, simulation, and autonomy can compound across multiple programs.",
    pullQuote:
      "The category is being repriced around speed: speed of deployment, speed of learning, and speed of procurement.",
    sections: [
      {
        heading: "From project revenue to platform logic",
        body: [
          "Historically, defense companies were evaluated through program wins and long contract cycles. The newer startup pitch is different: build a common autonomy, sensing, or command layer that can be reused across hardware, missions, and customers.",
          "That platform logic is what venture investors understand. Reusable software can expand margins and make each new deployment smarter than the last.",
        ],
      },
      {
        heading: "Simulation is the hidden accelerator",
        body: [
          "Autonomous systems need endless testing, and real-world testing is expensive. Simulation companies are becoming strategically important because they let teams train, validate, and update systems faster.",
          "That creates a feedback loop: better simulated environments improve autonomy, and better autonomy makes the platform more valuable across more missions.",
        ],
      },
      {
        heading: "The risk is still real",
        body: [
          "Defense startups face procurement delays, policy scrutiny, and concentrated customer risk. The valuations assume that governments keep buying faster and that startups can maintain software-like iteration inside regulated environments.",
          "The opportunity is large, but it is not frictionless. Execution will separate the serious platforms from the funding-cycle stories.",
        ],
      },
    ],
  },
  {
    slug: "ai-security-shadow-tool-problem",
    category: "Security",
    title: "AI security startups are racing the shadow-tool problem",
    dek: "Employees are already using personal AI tools at work. Security teams now need visibility without turning useful workflows into contraband.",
    excerpt:
      "Personal AI accounts, leaked prompts, agent permissions, and model supply chains are becoming the new enterprise attack surface.",
    tag: "Risk",
    date: "May 15, 2026",
    publishedAt: "2026-05-15",
    readTime: "5 min",
    accent: "bg-slate-400",
    theme: "from-[#0b101a] via-[#101726] to-[#172033]",
    image: {
      src: "/articles/security-shield-nebula.svg",
      alt: "Luminous security shield over a green nebula network",
    },
    keywords: ["AI security", "shadow AI", "cybersecurity", "agent governance"],
    standfirst:
      "The new security challenge is not merely blocking tools. It is understanding which models, agents, prompts, files, and permissions are touching sensitive work.",
    pullQuote:
      "The shadow-tool problem grows when employees find useful AI faster than companies can govern it.",
    sections: [
      {
        heading: "The perimeter got fuzzy",
        body: [
          "AI tools blur the line between SaaS, search, automation, and code execution. A prompt can contain customer data. An agent can touch internal systems. A browser extension can quietly reshape how work moves.",
          "That means security teams need more than a deny list. They need context: who used what, with which data, under which permissions, and what the system produced afterward.",
        ],
      },
      {
        heading: "Policy has to meet the workflow",
        body: [
          "Employees route around policies that make useful work impossible. The better approach is to provide approved paths that are fast enough to use, visible enough to audit, and flexible enough for different teams.",
          "This is where AI security startups are crowding in: posture management, prompt inspection, agent permissions, model inventory, red teaming, and data-loss controls built for AI-native workflows.",
        ],
      },
      {
        heading: "The next buying question",
        body: [
          "Security buyers will ask whether a tool can observe both sanctioned and unsanctioned usage without drowning teams in alerts.",
          "The winners will make governance feel like guardrails, not paperwork.",
        ],
      },
    ],
  },
  {
    slug: "answer-engine-discovery-without-snake-oil",
    category: "Search",
    title: "Search visibility without the snake oil",
    dek: "As answer engines summarize the web, publishers need clearer structure, stronger evidence, and pages worth citing.",
    excerpt:
      "A practical field guide to structured pages, original data, author signals, summaries, and refresh loops that earn citations in AI search.",
    tag: "Discovery",
    date: "May 14, 2026",
    publishedAt: "2026-05-14",
    readTime: "8 min",
    accent: "bg-slate-400",
    theme: "from-[#0b101a] via-[#101726] to-[#172033]",
    image: {
      src: "/articles/search-signal-constellation.svg",
      alt: "Constellation of search signals connected across a violet star field",
    },
    keywords: ["search visibility", "AI search", "content strategy", "structured data"],
    standfirst:
      "Winning discovery in 2026 is less about gaming systems and more about making pages unmistakably useful, attributable, current, and easy to understand.",
    pullQuote:
      "The page that gets cited is often the page that explains the answer with the least ambiguity.",
    sections: [
      {
        heading: "Clarity is a ranking asset",
        body: [
          "Search systems and answer engines both reward pages that make entities, dates, authorship, and intent easy to parse. A strong page states what it covers, who it is for, when it changed, and why the reader should trust it.",
          "That does not mean writing for machines. It means removing ambiguity so both people and crawlers can understand the page quickly.",
        ],
      },
      {
        heading: "Original evidence travels farther",
        body: [
          "Summaries, comparisons, benchmark notes, screenshots, charts, and expert commentary give a page something others can reference. Commodity rewrites are easier to ignore because they add no new evidence to the web.",
          "The most durable content strategy is to publish material that would still be useful if all generic paragraphs disappeared.",
        ],
      },
      {
        heading: "Refresh loops matter",
        body: [
          "Fast-moving topics need visible maintenance. Dates, changelogs, revised sections, and updated examples tell readers and crawlers that the page is alive.",
          "The best teams treat important pages like products: measured, improved, and pruned when they stop helping.",
        ],
      },
    ],
  },
  {
    slug: "ai-apps-less-chatty-more-invisible",
    category: "Product",
    title: "Why the best AI apps feel less chatty and more invisible",
    dek: "The next interface wave is less about blank prompts and more about context, intent, permissions, and finished work.",
    excerpt:
      "The next interface wave is ambient: fewer blank boxes, more context, tighter permissions, and actions that finish the job in the background.",
    tag: "UX",
    date: "May 13, 2026",
    publishedAt: "2026-05-13",
    readTime: "6 min",
    accent: "bg-slate-400",
    theme: "from-[#0b101a] via-[#101726] to-[#172033]",
    image: {
      src: "/articles/product-interface-orbit.svg",
      alt: "Clean product interface panels orbiting a coral AI system",
    },
    keywords: ["AI product design", "AI UX", "agentic workflows", "software design"],
    standfirst:
      "Chat made AI approachable, but the strongest products are already moving past chat as the main interface.",
    pullQuote:
      "The best AI interface may be the one that asks fewer questions because it already understands the job.",
    sections: [
      {
        heading: "The blank box is a tax",
        body: [
          "A blank prompt asks users to become product designers. They have to know what to request, how to phrase it, what context to include, and how to judge the result.",
          "Better AI apps reduce that burden. They start from the user’s current task, pre-load context, constrain the action space, and make the next step obvious.",
        ],
      },
      {
        heading: "Trust lives in the edges",
        body: [
          "Invisible does not mean opaque. Users still need to know what the system can access, what it changed, and how to undo or review its work.",
          "The strongest interfaces combine quiet automation with crisp disclosure: permissions, previews, logs, and confidence signals where they matter.",
        ],
      },
      {
        heading: "Design for completion",
        body: [
          "A chat transcript is not the same as a completed workflow. The product opportunity is to turn intent into a finished artifact, filed ticket, resolved issue, approved draft, or updated record.",
          "That is why AI-native design increasingly looks like workflow design with intelligence woven through it.",
        ],
      },
    ],
  },
];

export const featuredArticles = articles.slice(0, 3);

export function getArticleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export function getRelatedArticles(slug: string) {
  return articles.filter((article) => article.slug !== slug).slice(0, 3);
}
