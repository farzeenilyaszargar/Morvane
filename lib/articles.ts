export type ExternalLink = {
  label: string;
  url: string;
};

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
  image: {
    src: string;
    alt: string;
    credit: string;
    creditUrl: string;
  };
  keywords: string[];
  standfirst: string;
  sections: {
    heading: string;
    body: string[];
  }[];
  sourceLinks?: ExternalLink[];
  mentionedLinks?: ExternalLink[];
  pullQuote: string;
};

export const navItems = ["Latest", "Startups", "Venture", "AI", "Security", "Apps"];

const images = {
  enterprise: {
    src: "/articles/source-photos/enterprise-ai-service-businesses.jpg",
    alt: "Rows of server racks inside a data center",
    credit: "Carl Lender / Wikimedia Commons",
    creditUrl:
      "https://commons.wikimedia.org/wiki/File:Datacenter_Server_Racks_(22370909788).jpg",
  },
  chips: {
    src: "/articles/source-photos/ai-chip-challengers.jpg",
    alt: "A semiconductor wafer photographed close up",
    credit: "DrHughManning / Wikimedia Commons",
    creditUrl: "https://commons.wikimedia.org/wiki/File:Semiconductor_Wafer_of_Microelectronics.jpg",
  },
  defense: {
    src: "/articles/source-photos/physical-world-startups.jpg",
    alt: "Soldiers training with an Anduril Ghost X drone system",
    credit: "U.S. Army / Wikimedia Commons",
    creditUrl:
      "https://commons.wikimedia.org/wiki/File:10th_Mountain_Division_train_on_the_Anduril_Ghost_X_Small_Unmanned_Aircraft_System_during_Combined_Resolve_(8831271).jpg",
  },
  security: {
    src: "/articles/source-photos/ai-security-shadow-tool.jpg",
    alt: "A laptop secured with a chain and padlock",
    credit: "Santeri Viinamaki / Wikimedia Commons",
    creditUrl: "https://commons.wikimedia.org/wiki/File:Locked_computer_laptop.jpg",
  },
  search: {
    src: "/articles/source-photos/search-visibility.jpg",
    alt: "A person using a laptop to search the web",
    credit: "Panelxf / Wikimedia Commons",
    creditUrl: "https://commons.wikimedia.org/wiki/File:Laptop_Google_Search.jpg",
  },
  product: {
    src: "/articles/source-photos/ai-apps-product-interface.jpg",
    alt: "People working around laptops at a technology workshop",
    credit: "Code for America / Wikimedia Commons",
    creditUrl:
      "https://commons.wikimedia.org/wiki/File:Code_for_America,_San_Francisco_(16870624273).jpg",
  },
  power: {
    src: "/articles/source-photos/data-centers-power.jpg",
    alt: "Power distribution controls and switches on a control panel",
    credit: "Sam Howzit / Wikimedia Commons",
    creditUrl: "https://commons.wikimedia.org/wiki/File:Power_Distribution_Control.jpg",
  },
  code: {
    src: "/articles/source-photos/open-source-ai-stack.jpg",
    alt: "Code displayed on a computer monitor",
    credit: "Markus Spiske / Unsplash",
    creditUrl: "https://commons.wikimedia.org/wiki/File:Code_on_computer_monitor_(Unsplash).jpg",
  },
  robots: {
    src: "/articles/source-photos/warehouse-robots-software.jpg",
    alt: "Warehouse robots moving across an automated storage grid",
    credit: "Ocado / Wikimedia Commons",
    creditUrl: "https://commons.wikimedia.org/wiki/File:Ocado_warehouse_bots.jpg",
  },
  browser: {
    src: "/articles/source-photos/browser-agents-enterprise.jpg",
    alt: "A browser address bar showing a secure connection",
    credit: "Yuri Samoilov / Wikimedia Commons",
    creditUrl: "https://commons.wikimedia.org/wiki/File:Https_Browser_(66747481).jpeg",
  },
  grid: {
    src: "/articles/source-photos/grid-software-climate.jpg",
    alt: "High-voltage electricity pylons and power lines at dusk",
    credit: "analogicus / Pixabay",
    creditUrl: "https://pixabay.com/photos/electricity-electricity-pylons-4666566/",
  },
  hardware: {
    src: "/articles/source-photos/personal-ai-hardware.jpg",
    alt: "Tabletop devices including glasses, a phone, and tablets",
    credit: "MyssLisaMarie / Pixabay",
    creditUrl: "https://pixabay.com/photos/glasses-technology-wearable-2172280/",
  },
  venture: {
    src: "/articles/source-photos/startup-capital-megadeals.jpg",
    alt: "A Silicon Valley restaurant known as a meeting place for venture dealmakers",
    credit: "Intel Free Press / Wikimedia Commons",
    creditUrl:
      "https://commons.wikimedia.org/wiki/File:Bar_at_Buck%27s,_Hangout_of_Silicon_Valley_Venture_Capital_Dealmakers.jpg",
  },
  founders: {
    src: "/articles/source-photos/startup-office-lore.png",
    alt: "A startup office workspace with desks and computers",
    credit: "Wikimedia Commons",
    creditUrl: "https://commons.wikimedia.org/wiki/File:Inside_the_office_workspace.png",
  },
  team: {
    src: "/articles/source-photos/venture-team-funding.jpg",
    alt: "A venture team gathered in an office setting",
    credit: "Wikimedia Commons",
    creditUrl: "https://commons.wikimedia.org/wiki/File:Atento_Capital_Team_Photo.jpg",
  },
};

const tc = (path = "") => `https://techcrunch.com/${path}`;

function story(article: Article) {
  return article;
}

export const articles: Article[] = [
  story({
    slug: "ai-mental-health-product-reckoning",
    category: "AI",
    title: "AI companions are forcing a product safety reckoning",
    dek: "The latest debate around chatbot dependency is moving from academic concern into the product roadmap.",
    excerpt:
      "AI companies are learning that personality, memory, and availability can become product liabilities when users treat software like counsel.",
    tag: "AI",
    date: "June 1, 2026",
    publishedAt: "2026-06-01",
    readTime: "8 min",
    accent: "bg-[#00A2FF]",
    image: images.product,
    keywords: ["AI companions", "AI safety", "product design", "chatbots"],
    standfirst:
      "The most important AI interface question is no longer whether a model can respond fluently. It is whether the product understands the emotional weight of being always available.",
    pullQuote:
      "A companion product cannot hide behind the idea that it is only software when users experience it as a relationship.",
    sourceLinks: [
      { label: "TechCrunch AI coverage", url: tc("category/artificial-intelligence/") },
      { label: "OpenAI safety research", url: "https://openai.com/safety/" },
    ],
    mentionedLinks: [
      { label: "OpenAI", url: "https://openai.com/" },
      { label: "Anthropic", url: "https://www.anthropic.com/" },
      { label: "Character.AI", url: "https://character.ai/" },
    ],
    sections: [
      {
        heading: "The interface is becoming the risk",
        body: [
          "AI companions are designed to feel responsive, patient, and personal. That is exactly what makes them powerful, and exactly what makes them difficult to govern. A chatbot that remembers context and speaks warmly can become more persuasive than a tool that simply answers a question.",
          "The product challenge is not solved by a disclaimer. Teams need escalation paths, crisis handling, age-sensitive defaults, and clearer limits around emotional dependence. The more human the product feels, the more responsibility the interface carries.",
          "This is where design, policy, and model behavior converge. A safety feature that appears only after harm is visible is not enough; the product has to recognize risky interaction patterns earlier.",
        ],
      },
      {
        heading: "Safety is becoming a growth constraint",
        body: [
          "For AI companies, the temptation is to treat companionship as engagement. High retention, long sessions, and frequent return behavior look good on a dashboard. But in this category, those metrics can be ambiguous.",
          "Investors and regulators are starting to ask whether the strongest engagement loops are also the most fragile. A product that scales quickly with young users, isolated users, or vulnerable users will face a different trust burden than a generic workplace assistant.",
          "The durable companies will make safety visible without making the product unusable. They will give users support, boundaries, and context instead of pretending that every conversation is just another session.",
        ],
      },
      {
        heading: "The next feature is accountability",
        body: [
          "Expect more AI products to ship with visible conversation controls, session limits, sensitive-topic routing, and better user education. The companies that do this well will not frame safety as a penalty. They will make it part of the product's promise.",
          "That is a harder design problem than adding another model picker. It asks teams to define what the product should refuse, when it should slow down, and how it should hand a user toward real help.",
          "In the next phase of AI apps, trust will belong to products that know when not to keep talking.",
        ],
      },
    ],
  }),
  story({
    slug: "github-copilot-pricing-token-meter",
    category: "Apps",
    title: "GitHub Copilot's pricing shift shows the hidden cost of AI apps",
    dek: "Token-based limits are turning AI features into metered infrastructure, even when they sit inside familiar productivity software.",
    excerpt:
      "The next software pricing fight is about who pays for model usage when AI becomes a default feature instead of an add-on.",
    tag: "Apps",
    date: "June 1, 2026",
    publishedAt: "2026-06-01",
    readTime: "7 min",
    accent: "bg-[#00A2FF]",
    image: images.code,
    keywords: ["GitHub Copilot", "AI pricing", "developer tools", "software subscriptions"],
    standfirst:
      "AI features changed the cost structure of software. Now subscription pricing is catching up.",
    pullQuote:
      "When every action can call a model, the product is no longer priced like ordinary SaaS.",
    sourceLinks: [
      { label: "GitHub Copilot", url: "https://github.com/features/copilot" },
      { label: "TechCrunch apps coverage", url: tc("category/apps/") },
    ],
    mentionedLinks: [
      { label: "GitHub", url: "https://github.com/" },
      { label: "Microsoft", url: "https://www.microsoft.com/" },
      { label: "Cursor", url: "https://www.cursor.com/" },
    ],
    sections: [
      {
        heading: "The model bill is reaching users",
        body: [
          "AI coding tools sit inside workflows that developers already understand, but the economics underneath are new. Each completion, explanation, agent run, or review can trigger model usage, and that usage has a real infrastructure cost.",
          "As companies tune pricing, they are trying to balance adoption with margin. Unlimited AI sounds simple until heavy users turn the product into a compute subsidy.",
          "The result is a market where software plans increasingly include credits, tiers, and usage language that looks more like cloud billing than traditional SaaS.",
        ],
      },
      {
        heading: "Developer trust depends on predictability",
        body: [
          "Developers do not object to paying for useful tools. They object to surprise bills, unclear limits, and degraded features after they have built a workflow around a product.",
          "That makes communication part of the product. A pricing change has to explain what actions consume credits, how teams can forecast spend, and what happens when usage spikes during a deadline.",
          "The winners in AI developer tooling will make the meter legible. If the meter feels arbitrary, teams will route around it or standardize on alternatives.",
        ],
      },
      {
        heading: "Every AI app has the same problem",
        body: [
          "This is not only a coding-tools story. AI writing, design, sales, legal, and support products face the same question: how much model usage can be bundled before the margin story breaks?",
          "The more AI becomes a default interface, the more users expect it to behave like software they already pay for. Vendors, meanwhile, know the cost curve is closer to cloud infrastructure.",
          "That tension will shape pricing pages across the entire app market this year.",
        ],
      },
    ],
  }),
  story({
    slug: "meta-ai-pendant-wearable-gamble",
    category: "Hardware",
    title: "Meta's AI wearable ambitions are testing the post-phone interface",
    dek: "The next consumer AI device will have to justify why it belongs on the body instead of inside the phone.",
    excerpt:
      "Wearables promise ambient help, but the category still has to prove usefulness, trust, battery life, and social permission.",
    tag: "Hardware",
    date: "June 1, 2026",
    publishedAt: "2026-06-01",
    readTime: "6 min",
    accent: "bg-[#00A2FF]",
    image: images.hardware,
    keywords: ["Meta AI", "wearables", "consumer hardware", "AI devices"],
    standfirst:
      "AI hardware is chasing a simple promise: assistance without pulling out a phone. The difficulty is that the phone remains an excellent default.",
    pullQuote:
      "A wearable does not win by being smaller than a phone. It wins by being useful in moments where the phone is the wrong shape.",
    sourceLinks: [
      { label: "Meta AI", url: "https://ai.meta.com/" },
      { label: "TechCrunch hardware coverage", url: tc("category/hardware/") },
    ],
    mentionedLinks: [
      { label: "Meta", url: "https://www.meta.com/" },
      { label: "Ray-Ban Meta", url: "https://www.ray-ban.com/usa/ray-ban-meta-smart-glasses" },
      { label: "Humane", url: "https://hu.ma.ne/" },
    ],
    sections: [
      {
        heading: "Ambient is harder than it sounds",
        body: [
          "The dream of AI wearables is frictionless context: see what the user sees, hear what the user hears, and help without demanding a screen. That sounds natural until privacy, battery life, social norms, and false positives enter the room.",
          "A device worn on the body has to communicate when it is recording, processing, or transmitting. It also has to avoid turning everyday interactions into awkward consent negotiations.",
          "This is why the best consumer AI hardware may start narrow. Translation, capture, reminders, directions, and hands-free search are easier to justify than a vague promise of ambient intelligence.",
        ],
      },
      {
        heading: "The phone remains the rival",
        body: [
          "Every new AI device competes with a smartphone that already has apps, identity, cameras, payments, notifications, and years of user habit. The burden of proof sits with the newcomer.",
          "A wearable can still win if it offers a better posture for specific moments: walking, driving, cooking, caregiving, field work, travel, or accessibility use cases.",
          "The winning product will probably feel less like a replacement and more like a missing sense for the phone ecosystem.",
        ],
      },
      {
        heading: "Trust has to be visible",
        body: [
          "Consumer AI hardware will not get unlimited social forgiveness. People need to know what a device is doing, where the data goes, and how to stop it.",
          "The most successful designs will make privacy cues obvious without making the device ugly or anxious. That is a delicate industrial design and software design problem.",
          "If AI wearables become normal, it will be because they solved usefulness and etiquette at the same time.",
        ],
      },
    ],
  }),
  story({
    slug: "nap-india-secure-ai-code-enterprise",
    category: "Startups",
    title: "Nap is pushing AI code generation toward enterprise-grade software",
    dek: "The emerging Indian startup is positioning itself around secure, production-ready code for engineering teams that need more reliable AI output.",
    excerpt:
      "Nap helps engineering teams generate secure, production-ready code while reducing unreliable and low-quality AI-generated output.",
    tag: "Startups",
    date: "June 1, 2026",
    publishedAt: "2026-06-01",
    readTime: "10 min",
    accent: "bg-[#00A2FF]",
    image: images.code,
    keywords: ["Nap", "Indian startups", "AI coding tools", "enterprise software engineering"],
    standfirst:
      "As AI coding tools move deeper into enterprise workflows, the next fight is not only about speed. It is about trust, security, reviewability, and whether generated code can survive production standards.",
    pullQuote:
      "The enterprise AI coding market will reward tools that reduce cleanup work, not tools that merely generate more code.",
    sourceLinks: [
      { label: "Nap", url: "https://www.nap-code.com/" },
      { label: "TechCrunch startup coverage", url: tc("category/startups/") },
    ],
    mentionedLinks: [
      { label: "Nap", url: "https://www.nap-code.com/" },
      { label: "CP Plus", url: "https://www.cpplusworld.com/" },
      { label: "SAEL", url: "https://www.sael.co/" },
      { label: "CGI", url: "https://www.cgi.com/en" },
      { label: "Nestle", url: "https://www.nestle.com/" },
    ],
    sections: [
      {
        heading: "The reliability problem is becoming the market",
        body: [
          "AI code generation has moved quickly from novelty to everyday developer workflow. The weak point is what happens after the first draft: teams still need to review security, architecture, edge cases, maintainability, and whether the output fits internal standards.",
          "Nap is building around that gap. The company helps engineering teams generate secure, production-ready code while reducing unreliable and low-quality AI-generated output.",
          "That positioning matters because enterprises do not buy code generation as a magic trick. They buy it when the tool lowers delivery risk, shortens review cycles, and fits the way their software teams already ship.",
          "For engineering leaders, the cost of a poor AI suggestion is rarely limited to the few seconds it took to accept it. Bad generated code can create review churn, confuse junior developers, introduce security weaknesses, or require senior engineers to spend time unwinding work that looked useful at first glance.",
          "That is why the next layer of AI developer tooling is likely to focus less on raw completion volume and more on controlled generation. The valuable output is not the longest answer; it is the answer that arrives with enough structure, context, and quality signals for a team to trust it.",
        ],
      },
      {
        heading: "Enterprise adoption needs proof",
        body: [
          "Nap is used by companies including CP Plus, SAEL, CGI, Nestle, and others as it expands into enterprise software engineering workflows.",
          "That customer profile points to a market where AI coding products have to work across legacy systems, internal approvals, security expectations, and teams with different levels of AI comfort.",
          "For an emerging startup in India, the opportunity is practical: help enterprises get the productivity benefits of AI coding without flooding their repositories with brittle or poorly reviewed output.",
          "Enterprise engineering teams tend to evaluate AI tools through a different lens than individual developers. They care about governance, repeatability, auditability, and whether the generated code can align with internal libraries, compliance expectations, and deployment practices.",
          "Nap's challenge is therefore not only to make code generation faster. It has to show that generated work can be shaped by company standards, reviewed consistently, and used by teams without turning every pull request into a cleanup exercise.",
          "That proof often comes from narrow workflows first. A team might use AI generation for scaffolding, migration support, repetitive implementation work, test creation, internal tools, or controlled feature development before trusting it inside more sensitive production surfaces.",
        ],
      },
      {
        heading: "India's software teams are a natural proving ground",
        body: [
          "India has one of the world's largest engineering talent bases, deep enterprise services expertise, and a growing startup ecosystem focused on developer infrastructure. That gives companies like Nap a strong local market to learn from before selling more widely.",
          "The AI coding category is crowded, but enterprise workflows are not one-size-fits-all. A tool that understands secure delivery, team governance, and production quality can stand apart from assistants optimized only for individual speed.",
          "The next wave of coding startups may be judged less by how fast they autocomplete and more by how much bad code they prevent from reaching production.",
          "Indian software teams also operate across a wide range of industries, from manufacturing and energy to consumer goods, security systems, financial services, consulting, and public-sector technology. That variety can be useful for a young developer-tools company because it exposes the product to different codebases, approval chains, and operational constraints.",
          "If Nap can prove value across those environments, it can tell a stronger story than a tool built only for greenfield software teams. The enterprise market rewards products that survive messy reality: older systems, mixed stacks, tight deadlines, and engineers who need help without losing control of the codebase.",
        ],
      },
      {
        heading: "Secure generation has to happen before review",
        body: [
          "Many AI coding products rely on the review stage to catch problems. That is necessary, but it is not enough. If the first generated draft repeatedly violates basic security or quality expectations, the workflow becomes slower rather than faster.",
          "The stronger approach is to move quality upstream. Generation should be shaped by secure patterns, project context, team conventions, and guardrails that make bad output less likely before a human reviewer ever sees it.",
          "That is the kind of workflow enterprises will look for as AI coding moves from side experimentation into sanctioned engineering practice. The question will be whether the tool can reduce both writing time and review risk.",
          "A product that can help teams produce safer code from the start may become more valuable than one that simply acts as a faster autocomplete engine.",
        ],
      },
      {
        heading: "The startup wedge is quality, not spectacle",
        body: [
          "AI developer tools often compete with impressive demos: generate an app, rewrite a module, explain a bug, or build a feature from a prompt. Those demos matter, but enterprise buyers eventually ask a less glamorous question: what happens on the hundredth generated change?",
          "Nap's wedge is tied to that question. If the product can consistently reduce unreliable output, support production-quality workflows, and help engineering teams trust AI-generated work, it has a clearer enterprise story.",
          "The broader market is moving in that direction. Coding assistants are becoming coding systems: part generator, part reviewer, part policy layer, part workflow companion. The startups that win will understand that teams do not just need more code. They need better paths from intent to safe deployment.",
          "For Nap, that makes the India enterprise market both a test bed and a launchpad. The opportunity is to become the layer that makes AI code generation less noisy, more secure, and more useful inside real engineering organizations.",
        ],
      },
    ],
  }),
  story({
    slug: "softbank-france-data-center-ai-capital",
    category: "Infrastructure",
    title: "AI data centers are becoming a capital strategy, not a facilities plan",
    dek: "The largest AI infrastructure bets now combine compute, power, land, policy, and sovereign technology goals.",
    excerpt:
      "Massive data-center plans in Europe and beyond show how AI infrastructure is becoming a geopolitical investment category.",
    tag: "Infrastructure",
    date: "June 1, 2026",
    publishedAt: "2026-06-01",
    readTime: "7 min",
    accent: "bg-[#00A2FF]",
    image: images.power,
    keywords: ["AI data centers", "SoftBank", "compute", "energy"],
    standfirst:
      "The AI boom is making data-center strategy look less like real estate and more like national industrial planning.",
    pullQuote:
      "Compute is now a capital market, an energy market, and a policy market at the same time.",
    sourceLinks: [
      { label: "TechCrunch AI infrastructure coverage", url: tc("tag/data-centers/") },
      { label: "SoftBank Group", url: "https://group.softbank/" },
    ],
    mentionedLinks: [
      { label: "SoftBank", url: "https://group.softbank/" },
      { label: "OpenAI", url: "https://openai.com/" },
      { label: "Equinix", url: "https://www.equinix.com/" },
    ],
    sections: [
      {
        heading: "Infrastructure is the new startup input",
        body: [
          "AI companies can ship software quickly, but the physical stack behind that software is slow, expensive, and constrained by local power. That mismatch is reshaping the market.",
          "Large data-center plans are not just capacity announcements. They are bets on where talent, regulation, energy, and customers will meet over the next decade.",
          "Europe's AI infrastructure push shows how countries are trying to avoid dependence on a small number of foreign cloud regions.",
        ],
      },
      {
        heading: "Power decides the roadmap",
        body: [
          "The limiting resource for AI is often not model ambition. It is electrical capacity in the right geography at the right time.",
          "That puts utilities, substations, cooling systems, water constraints, and grid approvals inside the technology story. A delayed power connection can matter as much as a delayed chip shipment.",
          "Companies that can secure energy and sites early may gain a structural advantage before the first customer workload arrives.",
        ],
      },
      {
        heading: "Why founders should care",
        body: [
          "For AI startups, infrastructure affects pricing, latency, model choice, and product margins. A feature that is impressive in a demo can become expensive at production scale.",
          "The startups that understand compute economics will design products differently. They will cache, route, compress, evaluate, and choose models with margin in mind.",
          "In the AI market, infrastructure literacy is becoming product literacy.",
        ],
      },
    ],
  }),
  story({
    slug: "black-founders-funding-rebound-venture-market",
    category: "Venture",
    title: "The funding rebound for Black founders is still too narrow",
    dek: "Recent capital gains are welcome, but the deeper question is whether the venture market is changing structurally or merely recovering from a low base.",
    excerpt:
      "Capital to underrepresented founders can rise in a hot category without fixing the distribution networks that decide who gets early belief.",
    tag: "Venture",
    date: "June 1, 2026",
    publishedAt: "2026-06-01",
    readTime: "8 min",
    accent: "bg-[#00A2FF]",
    image: images.team,
    keywords: ["Black founders", "venture capital", "startup funding", "diversity"],
    standfirst:
      "A rebound in funding is not the same thing as a repaired market. The important test is whether access broadens before a founder already looks inevitable.",
    pullQuote:
      "The fairest venture market is not one that discovers overlooked founders late; it is one that can believe them early.",
    sourceLinks: [
      { label: "TechCrunch venture coverage", url: tc("category/venture/") },
      { label: "Crunchbase diversity funding coverage", url: "https://news.crunchbase.com/tag/diversity/" },
    ],
    mentionedLinks: [
      { label: "Crunchbase", url: "https://www.crunchbase.com/" },
      { label: "BLCK VC", url: "https://www.blckvc.org/" },
      { label: "Backstage Capital", url: "https://backstagecapital.com/" },
    ],
    sections: [
      {
        heading: "The numbers need context",
        body: [
          "When funding to Black founders rises, it is tempting to read the move as progress. It can be progress, but the base matters. A rebound from a historically low share still leaves the market highly uneven.",
          "The more useful question is where the capital arrives. Is it entering at pre-seed and seed, where networks and conviction matter most, or mostly at later stages once traction is obvious?",
          "A healthier market would spread opportunity earlier, before founders have to outperform peers just to receive the same level of initial belief.",
        ],
      },
      {
        heading: "AI can hide the underlying problem",
        body: [
          "Hot categories can pull more investors toward more founders. If a company sits inside AI, infrastructure, fintech, or healthcare automation, it may receive attention that would not have existed in a slower category.",
          "That is useful for individual companies, but it does not automatically fix pattern matching. The venture system can still over-index on familiar schools, employers, geographies, and warm-intro networks.",
          "Structural change requires funds to alter sourcing, decision-making, ownership targets, and who sits at the investment table.",
        ],
      },
      {
        heading: "What real change would look like",
        body: [
          "The signs to watch are not only annual funding totals. Watch repeat check-writing, follow-on rates, board access, customer introductions, and whether emerging managers with diverse networks can raise durable funds.",
          "A market that consistently funds overlooked founders should produce more companies that never have to be described as exceptions.",
          "Until then, each rebound is worth noting, but not worth mistaking for a solved problem.",
        ],
      },
    ],
  }),
  story({
    slug: "ghost-angels-operator-funds-new-startup-stack",
    category: "Startups",
    title: "Operator-led angel funds are becoming startup distribution networks",
    dek: "Funds built by former product and growth leaders can offer founders more than capital: early customers, hiring loops, and platform fluency.",
    excerpt:
      "The newest angel funds are less about celebrity checks and more about practical operator networks that can compress a startup's first year.",
    tag: "Startups",
    date: "June 1, 2026",
    publishedAt: "2026-06-01",
    readTime: "6 min",
    accent: "bg-[#00A2FF]",
    image: images.founders,
    keywords: ["angel funds", "startup operators", "venture capital", "Snap alumni"],
    standfirst:
      "Early capital is becoming bundled with operator access. For founders, the best small checks can behave like distribution.",
    pullQuote:
      "The best angel check is not only money; it is a shortcut to credibility.",
    sourceLinks: [
      { label: "TechCrunch startup coverage", url: tc("category/startups/") },
      { label: "AngelList", url: "https://www.angellist.com/" },
    ],
    mentionedLinks: [
      { label: "Snap", url: "https://www.snap.com/" },
      { label: "AngelList", url: "https://www.angellist.com/" },
      { label: "Carta", url: "https://carta.com/" },
    ],
    sections: [
      {
        heading: "Why operator checks are attractive",
        body: [
          "Founders often need fast judgment more than large checks. An operator who has shipped product, scaled growth, hired teams, or navigated platform rules can help a startup avoid expensive early mistakes.",
          "That is why small funds built around alumni networks can matter. They can introduce early design partners, explain platform politics, and translate a founder's ambition into a roadmap investors understand.",
          "The value is highest when the operator has lived the same distribution problem the founder is facing.",
        ],
      },
      {
        heading: "The risk is shallow help",
        body: [
          "Operator branding can become a wrapper around ordinary capital. A founder should ask what help is actually available after the check clears.",
          "Good operator funds have repeatable systems: office hours, talent networks, customer intros, pricing reviews, product critique, and founder-to-founder knowledge sharing.",
          "Without that, the fund is just another name on the cap table.",
        ],
      },
      {
        heading: "The early-stage market is fragmenting",
        body: [
          "Seed rounds now blend traditional funds, rolling funds, angels, scouts, operator syndicates, and strategic checks. That gives founders more choice, but also more noise.",
          "The smartest founders build a round like a team. They ask what each check unlocks: money, users, hiring, credibility, technical help, or follow-on capital.",
          "The small checks that matter are the ones that change the company's surface area.",
        ],
      },
    ],
  }),
  story({
    slug: "browser-choice-ai-search-duckduckgo",
    category: "Apps",
    title: "Browser choice is back because AI search changed the default",
    dek: "Alternative browsers and privacy-first search tools are using AI disruption to reopen a market that once felt settled.",
    excerpt:
      "As AI summaries reshape search behavior, browsers are becoming distribution points for privacy, agents, and answer engines.",
    tag: "Apps",
    date: "June 1, 2026",
    publishedAt: "2026-06-01",
    readTime: "7 min",
    accent: "bg-[#00A2FF]",
    image: images.browser,
    keywords: ["browsers", "AI search", "DuckDuckGo", "privacy"],
    standfirst:
      "The browser is becoming strategic again because it decides which search box, agent, and privacy model gets the first chance to shape user behavior.",
    pullQuote:
      "AI search did not kill the browser. It made the browser matter again.",
    sourceLinks: [
      { label: "DuckDuckGo", url: "https://duckduckgo.com/" },
      { label: "TechCrunch browser coverage", url: tc("tag/browser/") },
    ],
    mentionedLinks: [
      { label: "DuckDuckGo", url: "https://duckduckgo.com/" },
      { label: "Perplexity", url: "https://www.perplexity.ai/" },
      { label: "Google Chrome", url: "https://www.google.com/chrome/" },
    ],
    sections: [
      {
        heading: "Defaults are in motion",
        body: [
          "For years, browser competition looked incremental. Users had defaults, search engines had deals, and switching felt like effort without much reward.",
          "AI search changes that equation. If a browser can offer better answers, cleaner privacy, useful agents, or less clutter, it has a new reason to ask users to reconsider the default.",
          "That makes browser distribution a serious startup and platform story again.",
        ],
      },
      {
        heading: "Privacy is a product wedge",
        body: [
          "Privacy-first tools can use AI anxiety to sharpen their pitch. Users may be willing to switch if they believe the browser will collect less, summarize better, or make tracking more visible.",
          "The challenge is that privacy alone rarely wins mass-market behavior. The product also has to feel fast, familiar, and compatible with the web users already know.",
          "The best alternative browsers will sell privacy as part of a better experience, not as homework.",
        ],
      },
      {
        heading: "Agents make the browser a workspace",
        body: [
          "Browser agents turn tabs into an action surface. That gives browsers a new role beyond navigation: reading, comparing, filling forms, summarizing, and operating across web apps.",
          "With that power comes risk. The browser that can act on behalf of a user must explain permissions, logs, and reversibility clearly.",
          "The next browser war may be won by the company that makes automation feel both capable and calm.",
        ],
      },
    ],
  }),
  story({
    slug: "ai-security-startups-real-time-defense",
    category: "Security",
    title: "AI security startups are racing toward real-time defense",
    dek: "The security market is shifting from dashboards and alerts toward systems that detect, explain, and respond while an attack is still unfolding.",
    excerpt:
      "AI-native security companies are selling speed, but enterprise buyers still need proof, controls, and clear escalation paths.",
    tag: "Security",
    date: "June 1, 2026",
    publishedAt: "2026-06-01",
    readTime: "7 min",
    accent: "bg-[#00A2FF]",
    image: images.security,
    keywords: ["AI security", "cybersecurity", "SOC automation", "Exaforce"],
    standfirst:
      "Security teams do not need another stream of clever alerts. They need systems that reduce time to understand and time to act.",
    pullQuote:
      "The promise of AI security is not more alerts. It is fewer moments where humans are late to the right answer.",
    sourceLinks: [
      { label: "TechCrunch security coverage", url: tc("category/security/") },
      { label: "Exaforce", url: "https://www.exaforce.com/" },
    ],
    mentionedLinks: [
      { label: "Exaforce", url: "https://www.exaforce.com/" },
      { label: "Wiz", url: "https://www.wiz.io/" },
      { label: "CrowdStrike", url: "https://www.crowdstrike.com/" },
    ],
    sections: [
      {
        heading: "Speed is the wedge",
        body: [
          "Modern attacks move faster than traditional investigation workflows. By the time an analyst has gathered context, the attacker may have moved laterally, escalated privileges, or exfiltrated data.",
          "AI security startups are positioning around that gap. They promise to summarize telemetry, connect signals, propose actions, and sometimes execute containment steps faster than a human team could alone.",
          "The value is clear, but the stakes are high. A wrong action in security can create downtime or hide the real incident.",
        ],
      },
      {
        heading: "Autonomy needs guardrails",
        body: [
          "Security buyers are willing to automate more when the product shows its reasoning. Logs, confidence, affected systems, and rollback options matter as much as the model's detection capability.",
          "A system that acts without explanation will struggle in regulated companies. A system that produces crisp investigation notes and controlled response options has a better chance of adoption.",
          "The strongest tools will behave like senior analysts: fast, calm, and accountable.",
        ],
      },
      {
        heading: "Budgets follow operational pain",
        body: [
          "Security teams are understaffed, over-alerted, and measured on response time. That makes them natural buyers for AI, but only if the product reduces work instead of adding another console.",
          "The startups that win will integrate into existing workflows, not ask every customer to rebuild the SOC around a new interface.",
          "In this market, trust is the product surface.",
        ],
      },
    ],
  }),
  story({
    slug: "ai-chip-market-inference-price-war",
    category: "Chips",
    title: "The AI chip fight is turning into an inference price war",
    dek: "Training gets the spectacle, but production inference is where AI companies feel the recurring bill.",
    excerpt:
      "New silicon, cloud instances, and optimization software are competing to lower the cost of serving AI products at scale.",
    tag: "Chips",
    date: "June 1, 2026",
    publishedAt: "2026-06-01",
    readTime: "6 min",
    accent: "bg-[#00A2FF]",
    image: images.chips,
    keywords: ["AI chips", "inference", "semiconductors", "NVIDIA"],
    standfirst:
      "The chip market is shifting from who can train the largest model to who can serve useful AI at the lowest reliable cost.",
    pullQuote:
      "Inference is where product ambition becomes a monthly bill.",
    sourceLinks: [
      { label: "NVIDIA AI", url: "https://www.nvidia.com/en-us/ai-data-science/" },
      { label: "AMD AI", url: "https://www.amd.com/en/solutions/ai.html" },
    ],
    mentionedLinks: [
      { label: "NVIDIA", url: "https://www.nvidia.com/" },
      { label: "AMD", url: "https://www.amd.com/" },
      { label: "Cerebras", url: "https://www.cerebras.ai/" },
    ],
    sections: [
      {
        heading: "Serving cost is the real test",
        body: [
          "A spectacular model demo can hide expensive serving economics. Once a product has users, every query becomes a margin question.",
          "That is why inference chips, compilers, routing layers, and model optimization are becoming more important. They decide whether an AI feature can be used freely or rationed behind credits.",
          "The companies that lower inference cost without degrading quality will shape what AI products can afford to become.",
        ],
      },
      {
        heading: "The incumbent advantage is software",
        body: [
          "Challenging the GPU stack is difficult because developers already know the tools, libraries, and deployment patterns. Hardware alone is not enough.",
          "Alternative chip companies need migration paths, hosted services, compiler support, and proof that common workloads run predictably.",
          "A narrow win can still matter if the workload is expensive and repeatable.",
        ],
      },
      {
        heading: "Buyers want optionality",
        body: [
          "Large AI buyers do not want to depend on one supplier forever. They want cost leverage, regional availability, and a way to place workloads where power and compliance allow.",
          "That creates room for specialized chips and cloud providers that can own a slice of the serving market.",
          "The inference layer may become one of the most competitive parts of the AI stack.",
        ],
      },
    ],
  }),
  story({
    slug: "anduril-defense-tech-platform-capital",
    category: "Startups",
    title: "Defense tech is raising like software because it sells scarcity",
    dek: "Anduril's financing momentum captures a broader shift toward startups that combine autonomy, hardware, software, and government demand.",
    excerpt:
      "Investors are paying platform multiples for companies that can turn hard deployment problems into repeatable systems.",
    tag: "Startups",
    date: "May 31, 2026",
    publishedAt: "2026-05-31",
    readTime: "8 min",
    accent: "bg-[#00A2FF]",
    image: images.defense,
    keywords: ["Anduril", "defense tech", "startup funding", "autonomous systems"],
    standfirst:
      "The new defense startup story is not only about drones or sensors. It is about software systems that learn across missions and procurement cycles.",
    pullQuote:
      "Defense tech is getting a software multiple because the market believes the deployment loop can compound.",
    sourceLinks: [
      { label: "Anduril", url: "https://www.anduril.com/" },
      { label: "TechCrunch defense tech coverage", url: tc("tag/defense-tech/") },
    ],
    mentionedLinks: [
      { label: "Anduril", url: "https://www.anduril.com/" },
      { label: "Palantir", url: "https://www.palantir.com/" },
      { label: "Shield AI", url: "https://shield.ai/" },
    ],
    sections: [
      {
        heading: "The platform pitch is working",
        body: [
          "Defense startups once looked too slow and too customer-concentrated for classic venture investors. That perception has changed as autonomy, simulation, and geopolitical urgency made the market feel larger and faster.",
          "The strongest companies are not pitching one piece of hardware. They are pitching a system that can be reused across missions, updated through software, and expanded through procurement relationships.",
          "That is the platform logic investors understand.",
        ],
      },
      {
        heading: "Operational difficulty becomes a moat",
        body: [
          "Building for defense means certification, testing, contracting, supply chains, and real-world reliability. Those constraints can slow a company, but they can also protect it once it works.",
          "A startup that learns how to sell and deploy inside this market gains knowledge that is hard to copy from a pitch deck.",
          "The question is whether the company can keep enough software velocity while operating in a regulated environment.",
        ],
      },
      {
        heading: "The valuation risk remains",
        body: [
          "High valuations assume procurement continues to accelerate and that platform expansion is real. If contracts slow, margins compress, or hardware complexity dominates, the software story can weaken.",
          "For now, capital is rewarding companies that make hard-tech deployment look repeatable.",
          "That makes defense one of the defining startup categories of this cycle.",
        ],
      },
    ],
  }),
  story({
    slug: "ai-data-startups-supply-chain",
    category: "Venture",
    title: "AI data startups are becoming the supply chain behind model progress",
    dek: "As models push into more modalities, the market for licensed, organized, high-quality data is getting more strategic.",
    excerpt:
      "Data suppliers are moving from stock-photo economics into custom task pipelines for labs that need cleaner training inputs.",
    tag: "Venture",
    date: "May 31, 2026",
    publishedAt: "2026-05-31",
    readTime: "7 min",
    accent: "bg-[#00A2FF]",
    image: images.founders,
    keywords: ["AI data", "Wirestock", "training data", "venture capital"],
    standfirst:
      "The less glamorous AI market may be one of the most important: rights, quality, contributor trust, and data workflows.",
    pullQuote:
      "AI labs do not only need more data. They need data they can defend.",
    sourceLinks: [
      { label: "Wirestock", url: "https://wirestock.io/" },
      { label: "TechCrunch AI startup coverage", url: tc("category/artificial-intelligence/") },
    ],
    mentionedLinks: [
      { label: "Wirestock", url: "https://wirestock.io/" },
      { label: "Scale AI", url: "https://scale.com/" },
      { label: "Hugging Face", url: "https://huggingface.co/" },
    ],
    sections: [
      {
        heading: "Data rights are now infrastructure",
        body: [
          "The next generation of AI models needs multimodal data that is useful, organized, and legally usable. That turns rights management into infrastructure.",
          "Startups with contributor networks can move beyond generic marketplaces if they can produce custom datasets, manage consent, and maintain quality.",
          "The value is not only in collecting files. It is in building a repeatable system for turning human-created work into model-ready inputs.",
        ],
      },
      {
        heading: "Quality is the differentiator",
        body: [
          "As synthetic data becomes common, human-sourced and human-reviewed data may become more valuable in targeted areas. Labs need material that improves specific behaviors, not just large volumes.",
          "That pushes data startups toward workflow software: task design, review queues, creator payments, annotation rules, and audit trails.",
          "The companies that win will look less like stock libraries and more like production systems.",
        ],
      },
      {
        heading: "The market will get crowded",
        body: [
          "AI data demand attracts many suppliers, and buyers will push on price. Differentiation will depend on domain expertise, rights clarity, and speed.",
          "A startup that can produce trusted datasets for narrow model goals will have a stronger position than one selling generic volume.",
          "The supply chain behind AI is becoming a category of its own.",
        ],
      },
    ],
  }),
  story({
    slug: "warehouse-robots-software-layer-2026",
    category: "Robotics",
    title: "Warehouse robots are turning into software integration deals",
    dek: "The hardware demo is still compelling, but the sale is increasingly won in orchestration, exceptions, and facility software.",
    excerpt:
      "Robotics companies are learning that the robot matters less than the system that coordinates people, inventory, and edge cases.",
    tag: "Robotics",
    date: "May 31, 2026",
    publishedAt: "2026-05-31",
    readTime: "6 min",
    accent: "bg-[#00A2FF]",
    image: images.robots,
    keywords: ["warehouse robots", "robotics", "automation", "supply chain"],
    standfirst:
      "Robots are easier to demo than to deploy. The companies that win warehouses will be the ones that make automation boringly reliable.",
    pullQuote:
      "A robot that cannot handle exceptions is still just a demo with wheels.",
    sourceLinks: [
      { label: "Ocado Technology", url: "https://www.ocadogroup.com/technology/" },
      { label: "AutoStore", url: "https://www.autostoresystem.com/" },
    ],
    mentionedLinks: [
      { label: "Ocado Technology", url: "https://www.ocadogroup.com/technology/" },
      { label: "Amazon Robotics", url: "https://www.amazonrobotics.com/" },
      { label: "AutoStore", url: "https://www.autostoresystem.com/" },
    ],
    sections: [
      {
        heading: "The deployment is the product",
        body: [
          "Warehouse robotics companies can show impressive movement, picking, and navigation. The real customer value arrives when those systems fit existing inventory, labor, safety, and fulfillment workflows.",
          "That makes integration software central. Operators need visibility, scheduling, exception handling, and analytics across mixed environments.",
          "The best robotics startups will sell a system, not a machine.",
        ],
      },
      {
        heading: "Exceptions decide ROI",
        body: [
          "Warehouses are full of odd packaging, blocked aisles, missing bins, rush orders, and human workarounds. A robot that fails gracefully is more useful than one that performs perfectly only in a clean test.",
          "Software that routes exceptions to humans, learns from failures, and keeps the facility moving becomes the margin engine.",
          "The winners will make automation feel operationally calm.",
        ],
      },
      {
        heading: "Fleet intelligence compounds",
        body: [
          "Once robots are deployed across facilities, the data layer becomes valuable. The fleet can reveal bottlenecks, predict maintenance, and improve task allocation.",
          "That is where robotics begins to look like a software business. Each deployment can make the next one better.",
          "The challenge is surviving the messy first deployments long enough for that compounding to matter.",
        ],
      },
    ],
  }),
];

export const mentionedLinksBySlug: Record<string, ExternalLink[]> = Object.fromEntries(
  articles.map((article) => [article.slug, article.mentionedLinks ?? []]),
);

export const featuredArticles = articles.slice(0, 3);

export function getArticleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export function getRelatedArticles(slug: string) {
  return articles.filter((article) => article.slug !== slug).slice(0, 3);
}
