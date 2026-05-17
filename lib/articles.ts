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
    image: {
      src: "/articles/source-photos/enterprise-ai-service-businesses.jpg",
      alt: "Rows of server racks inside a data center",
      credit: "Carl Lender / Wikimedia Commons",
      creditUrl:
        "https://commons.wikimedia.org/wiki/File:Datacenter_Server_Racks_(22370909788).jpg",
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
    image: {
      src: "/articles/source-photos/ai-chip-challengers.jpg",
      alt: "A semiconductor wafer photographed close up",
      credit: "DrHughManning / Wikimedia Commons",
      creditUrl:
        "https://commons.wikimedia.org/wiki/File:Semiconductor_Wafer_of_Microelectronics.jpg",
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
    image: {
      src: "/articles/source-photos/defense-startups-platform.jpg",
      alt: "An MQ-9 Reaper unmanned aircraft in flight",
      credit: "U.S. Air Force / Wikimedia Commons",
      creditUrl: "https://commons.wikimedia.org/wiki/File:MQ-9_Reaper_UAV.jpg",
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
    image: {
      src: "/articles/source-photos/ai-security-shadow-tool.jpg",
      alt: "A laptop secured with a chain and padlock",
      credit: "Santeri Viinamaki / Wikimedia Commons",
      creditUrl: "https://commons.wikimedia.org/wiki/File:Locked_computer_laptop.jpg",
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
    image: {
      src: "/articles/source-photos/search-visibility.jpg",
      alt: "A person using a laptop to search the web",
      credit: "Panelxf / Wikimedia Commons",
      creditUrl: "https://commons.wikimedia.org/wiki/File:Laptop_Google_Search.jpg",
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
    image: {
      src: "/articles/source-photos/ai-apps-product-interface.jpg",
      alt: "People working around laptops at a technology workshop",
      credit: "Code for America / Wikimedia Commons",
      creditUrl:
        "https://commons.wikimedia.org/wiki/File:Code_for_America,_San_Francisco_(16870624273).jpg",
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
  {
    slug: "data-centers-power-hungry-compute",
    category: "Infrastructure",
    title: "Data centers are becoming power markets with servers inside",
    dek: "The compute boom is making energy strategy, grid access, and cooling design central to technology planning.",
    excerpt:
      "As AI workloads grow, the winning data-center operators are thinking like energy companies as much as cloud platforms.",
    tag: "Compute",
    date: "May 12, 2026",
    publishedAt: "2026-05-12",
    readTime: "6 min",
    accent: "bg-slate-400",
    image: {
      src: "/articles/source-photos/data-centers-power.jpg",
      alt: "Power distribution controls and switches on a control panel",
      credit: "Sam Howzit / Wikimedia Commons",
      creditUrl: "https://commons.wikimedia.org/wiki/File:Power_Distribution_Control.jpg",
    },
    keywords: ["data centers", "AI infrastructure", "power grid", "cloud computing"],
    standfirst:
      "Compute capacity is no longer just a question of racks and chips. It is increasingly a question of substations, water, cooling, land, and long-term power contracts.",
    pullQuote:
      "The next scarce cloud resource may be reliable electricity in the right place.",
    sections: [
      {
        heading: "Power is part of the product",
        body: [
          "For years, cloud infrastructure was discussed mostly in terms of regions, chips, and storage. AI has made power availability just as strategic. A cluster that cannot be energized on schedule is not capacity at all.",
          "That changes the operator playbook. Site selection, utility relationships, cooling methods, and energy procurement now shape how quickly new compute can come online.",
        ],
      },
      {
        heading: "Cooling becomes a design constraint",
        body: [
          "Dense accelerated compute changes the heat profile inside a data center. Air cooling remains familiar, but liquid cooling and hybrid approaches are moving from niche engineering topics into board-level capacity planning.",
          "The best operators will make cooling invisible to customers while using it as an advantage in cost, reliability, and deployment speed.",
        ],
      },
      {
        heading: "Why buyers should care",
        body: [
          "Enterprise buyers may not negotiate directly with utilities, but they will feel the effects through availability, pricing, latency, and regional options.",
          "The cloud conversation is becoming a supply-chain conversation, and power is now one of its most important inputs.",
        ],
      },
    ],
  },
  {
    slug: "open-source-ai-infrastructure-stack",
    category: "Open Source",
    title: "Open-source AI infrastructure is moving from hobby stack to enterprise default",
    dek: "Companies want control over models, evaluation, routing, and deployment without waiting for one vendor to define the whole workflow.",
    excerpt:
      "The modern AI stack is becoming modular, with open tools filling the gaps between models, data, evaluation, and production systems.",
    tag: "Software",
    date: "May 11, 2026",
    publishedAt: "2026-05-11",
    readTime: "7 min",
    accent: "bg-slate-400",
    image: {
      src: "/articles/source-photos/open-source-ai-stack.jpg",
      alt: "Code displayed on a computer monitor",
      credit: "Markus Spiske / Unsplash",
      creditUrl:
        "https://commons.wikimedia.org/wiki/File:Code_on_computer_monitor_(Unsplash).jpg",
    },
    keywords: ["open source AI", "AI infrastructure", "developer tools", "model operations"],
    standfirst:
      "The AI infrastructure market is maturing into layers: orchestration, observability, evaluation, retrieval, deployment, and governance.",
    pullQuote:
      "Open source wins when teams need leverage without surrendering control.",
    sections: [
      {
        heading: "The stack is splitting into layers",
        body: [
          "A year ago, many AI applications were prototypes wrapped around a single model API. Production systems now need routing, caching, permissions, evaluation, logging, and retrieval that can survive real customer traffic.",
          "That complexity gives open-source infrastructure a larger role. Teams can adopt pieces gradually and avoid rebuilding the same plumbing across every product team.",
        ],
      },
      {
        heading: "Control matters more in production",
        body: [
          "Enterprises want to compare models, move workloads, inspect outputs, and define policies in their own environment. Open tooling helps them keep options open while vendors compete at each layer.",
          "The result is not a pure open-source world. It is a hybrid market where managed services and community tools often sit side by side.",
        ],
      },
      {
        heading: "The adoption signal",
        body: [
          "The strongest projects are not just popular repositories. They are becoming operational defaults inside companies that need repeatable AI delivery.",
          "Watch for tools that make production behavior easier to measure, not merely easier to demo.",
        ],
      },
    ],
  },
  {
    slug: "warehouse-robots-software-layer",
    category: "Robotics",
    title: "Warehouse robots are becoming a software integration problem",
    dek: "The hardware is improving, but the bigger challenge is coordinating robots, workers, inventory, and exception handling.",
    excerpt:
      "Robotics companies are learning that deployment quality depends as much on workflow software as on the machine itself.",
    tag: "Automation",
    date: "May 10, 2026",
    publishedAt: "2026-05-10",
    readTime: "6 min",
    accent: "bg-slate-400",
    image: {
      src: "/articles/source-photos/warehouse-robots-software.jpg",
      alt: "Warehouse robots moving across an automated storage grid",
      credit: "Ocado / Wikimedia Commons",
      creditUrl: "https://commons.wikimedia.org/wiki/File:Ocado_warehouse_bots.jpg",
    },
    keywords: ["warehouse robotics", "automation", "supply chain", "robot software"],
    standfirst:
      "The robot is only one part of the system. The real deployment lives in task assignment, inventory accuracy, safety routines, and the messy edge cases of daily operations.",
    pullQuote:
      "A robot that cannot fit the workflow is still unfinished product.",
    sections: [
      {
        heading: "Hardware gets attention, integration gets results",
        body: [
          "Warehouse robotics often sells through impressive demos: fast picking, smooth motion, precise navigation. But the deployment succeeds only when the robot fits the facility's software and operating habits.",
          "That means integrations with warehouse management systems, worker tools, inventory data, and maintenance processes matter as much as mobility or gripper design.",
        ],
      },
      {
        heading: "Exceptions define the system",
        body: [
          "Real warehouses are full of awkward cases: damaged packaging, missing bins, blocked aisles, late orders, and sudden labor changes. Robots need clean escalation paths when confidence drops.",
          "The best systems treat humans as part of the loop without turning every exception into a productivity sink.",
        ],
      },
      {
        heading: "A platform opportunity",
        body: [
          "As fleets grow, operators need scheduling, monitoring, analytics, and simulation across mixed hardware. That opens room for software layers that coordinate machines from multiple vendors.",
          "The robotics market may be won by companies that make automation manageable, not just impressive.",
        ],
      },
    ],
  },
  {
    slug: "browser-agents-enterprise-workflows",
    category: "Product",
    title: "Browser agents are the new test of enterprise trust",
    dek: "Agents that operate software through the browser are powerful because they meet work where it already happens.",
    excerpt:
      "The browser is becoming a proving ground for agentic workflows, but permissions, review, and audit trails will decide adoption.",
    tag: "Agents",
    date: "May 9, 2026",
    publishedAt: "2026-05-09",
    readTime: "6 min",
    accent: "bg-slate-400",
    image: {
      src: "/articles/source-photos/browser-agents-enterprise.jpg",
      alt: "A browser address bar showing a secure connection",
      credit: "Yuri Samoilov / Wikimedia Commons",
      creditUrl: "https://commons.wikimedia.org/wiki/File:Https_Browser_(66747481).jpeg",
    },
    keywords: ["browser agents", "enterprise automation", "AI agents", "workflow software"],
    standfirst:
      "The browser is the common layer across countless business tools. That makes it a natural environment for agents, and a difficult one to govern.",
    pullQuote:
      "The agent that can click anything needs a very clear reason to click anything.",
    sections: [
      {
        heading: "Why the browser matters",
        body: [
          "Enterprise work is fragmented across SaaS tools, internal dashboards, ticketing systems, spreadsheets, and email. Browser agents are attractive because they can operate across those surfaces without every app exposing a perfect API.",
          "That flexibility is also the risk. A broad action surface requires strong permissions, clear review states, and reliable logs.",
        ],
      },
      {
        heading: "Trust has to be designed in",
        body: [
          "Users need to know what the agent is about to do, what it already did, and how to stop or reverse it. Hidden automation will not survive inside serious companies.",
          "The most credible products will feel less like a black-box assistant and more like a careful operator with receipts.",
        ],
      },
      {
        heading: "The near-term shape",
        body: [
          "Expect browser agents to start with constrained tasks: collecting data, updating records, drafting responses, testing workflows, and checking repetitive dashboards.",
          "The winners will expand gradually by proving reliability in narrow, valuable routines.",
        ],
      },
    ],
  },
  {
    slug: "grid-software-climate-tech",
    category: "Energy",
    title: "Grid software is becoming climate tech's quiet center",
    dek: "The energy transition needs batteries and renewables, but it also needs better software for forecasting, dispatch, and grid coordination.",
    excerpt:
      "Climate tech is increasingly about the operating layer that helps energy assets behave like a reliable system.",
    tag: "Energy",
    date: "May 8, 2026",
    publishedAt: "2026-05-08",
    readTime: "7 min",
    accent: "bg-slate-400",
    image: {
      src: "/articles/source-photos/grid-software-climate.jpg",
      alt: "High-voltage electricity pylons and power lines at dusk",
      credit: "analogicus / Pixabay",
      creditUrl: "https://pixabay.com/photos/electricity-electricity-pylons-4666566/",
    },
    keywords: ["grid software", "climate tech", "energy storage", "renewable energy"],
    standfirst:
      "A cleaner grid is also a more complex grid. Software is becoming the coordination layer between generation, storage, demand, pricing, and reliability.",
    pullQuote:
      "The grid does not only need more assets. It needs better orchestration.",
    sections: [
      {
        heading: "Complexity is the market",
        body: [
          "Renewables, storage, electric vehicles, and flexible demand are changing how electricity moves. The grid must balance more variable inputs while remaining reliable every second.",
          "That creates a software opportunity around forecasting, dispatch, asset management, market participation, and grid visibility.",
        ],
      },
      {
        heading: "The buyer is not always obvious",
        body: [
          "Utilities, developers, large energy users, aggregators, and grid operators all need different slices of the software stack. The challenge is building products that fit slow procurement while proving operational value quickly.",
          "Companies that understand both software delivery and grid regulation will have an advantage.",
        ],
      },
      {
        heading: "Why this belongs in tech",
        body: [
          "Energy systems are becoming data systems. The tools that manage them will look increasingly like infrastructure software, with uptime, integrations, observability, and controls at the center.",
          "That makes grid software one of the most important quiet categories in climate tech.",
        ],
      },
    ],
  },
  {
    slug: "personal-ai-hardware-second-screen",
    category: "Consumer Tech",
    title: "Personal AI hardware needs to earn its place beyond the phone",
    dek: "Wearables and dedicated AI devices promise ambient help, but users already carry a powerful computer everywhere.",
    excerpt:
      "The next consumer hardware wave has to justify itself through context, privacy, battery life, and moments where the phone is the wrong interface.",
    tag: "Devices",
    date: "May 7, 2026",
    publishedAt: "2026-05-07",
    readTime: "5 min",
    accent: "bg-slate-400",
    image: {
      src: "/articles/source-photos/personal-ai-hardware.jpg",
      alt: "Tabletop devices including glasses, a phone, and tablets",
      credit: "MyssLisaMarie / Pixabay",
      creditUrl: "https://pixabay.com/photos/glasses-technology-wearable-2172280/",
    },
    keywords: ["AI hardware", "consumer devices", "wearables", "personal AI"],
    standfirst:
      "A dedicated AI device cannot survive on novelty. It needs to solve a repeated moment better than the phone, watch, laptop, or earbuds already do.",
    pullQuote:
      "The question is not whether AI can fit in a gadget. It is whether the gadget deserves to exist.",
    sections: [
      {
        heading: "The phone is the default rival",
        body: [
          "Every new consumer AI device competes with a smartphone that already has a screen, camera, microphone, apps, payments, identity, and constant connectivity.",
          "That means new hardware must be meaningfully better in a narrow context: hands-free capture, privacy, battery endurance, low-friction translation, or presence without screen time.",
        ],
      },
      {
        heading: "Ambient does not mean invisible",
        body: [
          "Consumers need clear signals when a device is listening, recording, summarizing, or sending data. Trust is a product feature, especially when hardware sits close to the body.",
          "The strongest designs will make privacy legible without turning every interaction into a settings panel.",
        ],
      },
      {
        heading: "The path to adoption",
        body: [
          "The likely winners will start as accessories, not replacements. They will extend the phone or laptop in moments where a screen is awkward.",
          "If they earn daily use there, they can become more ambitious over time.",
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
