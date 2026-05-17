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
  sourceLinks?: {
    label: string;
    url: string;
  }[];
  pullQuote: string;
};

export type ExternalLink = {
  label: string;
  url: string;
};

export const navItems = ["AI", "Startups", "Funding", "Security", "Chips", "Product"];

export const mentionedLinksBySlug: Record<string, ExternalLink[]> = {
  "enterprise-ai-service-businesses": [
    { label: "OpenAI", url: "https://openai.com/" },
    { label: "Anthropic", url: "https://www.anthropic.com/" },
    { label: "Microsoft AI", url: "https://www.microsoft.com/ai" },
  ],
  "ai-chip-challengers-2027-silicon": [
    { label: "NVIDIA", url: "https://www.nvidia.com/" },
    { label: "AMD AI", url: "https://www.amd.com/en/solutions/ai.html" },
    { label: "Cerebras", url: "https://www.cerebras.ai/" },
  ],
  "defense-startups-platform-valuations": [
    { label: "Anduril", url: "https://www.anduril.com/" },
    { label: "Helsing", url: "https://helsing.ai/" },
    { label: "Quantum Systems", url: "https://quantum-systems.com/" },
  ],
  "ai-security-shadow-tool-problem": [
    { label: "Exaforce", url: "https://www.exaforce.com/" },
    { label: "Wiz", url: "https://www.wiz.io/" },
    { label: "Palo Alto Networks", url: "https://www.paloaltonetworks.com/" },
  ],
  "answer-engine-discovery-without-snake-oil": [
    { label: "Schema.org", url: "https://schema.org/" },
    { label: "Google Search Central", url: "https://developers.google.com/search" },
    { label: "Bing Webmaster Tools", url: "https://www.bing.com/webmasters" },
  ],
  "ai-apps-less-chatty-more-invisible": [
    { label: "Linear", url: "https://linear.app/" },
    { label: "Notion", url: "https://www.notion.com/" },
    { label: "Figma", url: "https://www.figma.com/" },
  ],
  "data-centers-power-hungry-compute": [
    { label: "CoreWeave", url: "https://www.coreweave.com/" },
    { label: "Equinix", url: "https://www.equinix.com/" },
    { label: "Uptime Institute", url: "https://uptimeinstitute.com/" },
  ],
  "open-source-ai-infrastructure-stack": [
    { label: "Hugging Face", url: "https://huggingface.co/" },
    { label: "LangChain", url: "https://www.langchain.com/" },
    { label: "Kubernetes", url: "https://kubernetes.io/" },
  ],
  "warehouse-robots-software-layer": [
    { label: "Ocado Technology", url: "https://www.ocadogroup.com/technology/" },
    { label: "Amazon Robotics", url: "https://www.amazonrobotics.com/" },
    { label: "AutoStore", url: "https://www.autostoresystem.com/" },
  ],
  "browser-agents-enterprise-workflows": [
    { label: "Browserbase", url: "https://www.browserbase.com/" },
    { label: "Playwright", url: "https://playwright.dev/" },
    { label: "Chrome for Developers", url: "https://developer.chrome.com/" },
  ],
  "grid-software-climate-tech": [
    { label: "Grid Status", url: "https://www.gridstatus.io/" },
    { label: "Electric Power Research Institute", url: "https://www.epri.com/" },
    { label: "U.S. Department of Energy Grid Deployment Office", url: "https://www.energy.gov/gdo/grid-deployment-office" },
  ],
  "personal-ai-hardware-second-screen": [
    { label: "Meta Ray-Ban", url: "https://www.ray-ban.com/usa/ray-ban-meta-smart-glasses" },
    { label: "Humane", url: "https://hu.ma.ne/" },
    { label: "Rabbit", url: "https://www.rabbit.tech/" },
  ],
  "venture-megarounds-reshape-startup-market": [
    { label: "PitchBook", url: "https://pitchbook.com/" },
    { label: "NVCA", url: "https://nvca.org/" },
    { label: "Crunchbase", url: "https://www.crunchbase.com/" },
    { label: "OpenAI", url: "https://openai.com/" },
    { label: "SpaceX", url: "https://www.spacex.com/" },
    { label: "Anthropic", url: "https://www.anthropic.com/" },
  ],
  "physical-world-startups-funding-premium": [
    { label: "Anduril", url: "https://www.anduril.com/" },
    { label: "TechCrunch", url: "https://techcrunch.com/" },
    { label: "Crunchbase", url: "https://www.crunchbase.com/" },
  ],
  "rapido-wirestock-founder-lore": [
    { label: "Rapido", url: "https://www.rapido.bike/" },
    { label: "Wirestock", url: "https://wirestock.io/" },
    { label: "TechCrunch", url: "https://techcrunch.com/" },
  ],
  "ai-data-and-agent-startups-funding": [
    { label: "Sierra", url: "https://sierra.ai/" },
    { label: "Wirestock", url: "https://wirestock.io/" },
    { label: "Exaforce", url: "https://www.exaforce.com/" },
    { label: "Fractile", url: "https://www.fractile.ai/" },
    { label: "Axios Pro Rata", url: "https://www.axios.com/newsletters/pro-rata" },
  ],
};

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
  {
    slug: "venture-megarounds-reshape-startup-market",
    category: "Funding",
    title: "The new venture headline is the mega-round, not the median startup",
    dek: "Recent funding data makes the startup market look explosive at the top and stubborn underneath, with capital clustering around the few companies investors believe can become infrastructure.",
    excerpt:
      "Q1 records and May mega-rounds are masking a more selective market where capital is available, but only for companies with unusually clear scale stories.",
    tag: "Funding",
    date: "May 17, 2026",
    publishedAt: "2026-05-17",
    readTime: "9 min",
    accent: "bg-slate-400",
    image: {
      src: "/articles/source-photos/startup-capital-megadeals.jpg",
      alt: "A Silicon Valley restaurant known as a meeting place for venture dealmakers",
      credit: "Intel Free Press / Wikimedia Commons",
      creditUrl:
        "https://commons.wikimedia.org/wiki/File:Bar_at_Buck%27s,_Hangout_of_Silicon_Valley_Venture_Capital_Dealmakers.jpg",
    },
    keywords: ["startup funding", "venture capital", "mega-rounds", "private markets"],
    standfirst:
      "The venture market is no longer best understood as hot or cold. It is barbell-shaped: huge checks for a small set of perceived category winners, and a slower grind for everyone else.",
    pullQuote:
      "The capital is back, but it is not evenly back. It is concentrating around companies that can argue they are becoming markets, not merely serving them.",
    sourceLinks: [
      {
        label: "PitchBook-NVCA Venture Monitor, Q1 2026",
        url: "https://nvca.org/wp-content/uploads/2026/04/Q1-2026-PitchBook-NVCA-Venture-Monitor.pdf",
      },
      {
        label: "Crunchbase Megadeals Board",
        url: "https://news.crunchbase.com/biggest-us-vc-startup-funding-deals-2023/",
      },
    ],
    sections: [
      {
        heading: "The headline number is telling the truth badly",
        body: [
          "PitchBook and NVCA describe a record-setting first quarter for venture deal value and exits, but the same report shows how dependent those records are on a small number of enormous transactions. Remove the largest deals and the market looks much closer to the slower, tighter environment founders have been living through since the reset.",
          "That split matters because founders often read the top-line numbers as a signal that money is broadly loose again. It is not. Late-stage investors are writing large checks when they can underwrite strategic scarcity: frontier models, defense platforms, compute, energy, security, and software that sits directly in a budget line.",
          "For everyone else, the fundraising work is still more deliberate. A credible narrative now needs unit economics, customer urgency, and a reason the company should be financed ahead of dozens of similar startups making the same AI-adjacent promise.",
        ],
      },
      {
        heading: "Megadeals are becoming private-market IPOs",
        body: [
          "A $100 million-plus round used to suggest an aggressive growth company. In 2026, the largest rounds can look more like private-market listings: enormous capitalizations, intense secondary demand, and a shareholder base preparing for a long pre-public life.",
          "Crunchbase's May megadeals board shows the pattern plainly. Capital is chasing companies that feel hard to replicate: defense systems, data power, robotics, space infrastructure, biotech platforms, and other categories where the product has a physical or regulatory moat.",
          "The result is a startup market where private companies can become systemically important before public investors ever see a prospectus. That can be powerful for builders, but it also raises the penalty for weak governance, opaque marks, and growth stories that depend on permanent private-market patience.",
        ],
      },
      {
        heading: "The lore has shifted from blitzscaling to leverage",
        body: [
          "The heroic founder story used to be about hiring faster than the market could understand. The new story is about doing more with less: tiny teams, sharper distribution, proprietary data, and products that feel unusually close to revenue.",
          "That is especially true in AI, where a small team can appear much larger than it is. The advantage is real, but investors are learning to separate model wrappers from companies with workflow ownership, data advantage, procurement access, or a reason customers cannot easily switch.",
          "The best startup lore in this cycle is less theatrical. It is the founder who knows exactly which budget owner feels pain, what proof will unlock the next contract, and which part of the company should stay small even after funding arrives.",
        ],
      },
      {
        heading: "What founders should take from the market",
        body: [
          "A large round in the news is not a green light to raise casually. It is a reminder that investors are willing to pay up when a company can compress risk into a clear category thesis.",
          "Founders should be precise about which market they are actually entering. A startup building automation for hospitals, utilities, or government buyers should not pitch like a consumer app with an enterprise price tag. The diligence bar is different, the sales motion is different, and the credibility signals are different.",
          "The more useful takeaway is not that fundraising is easy again. It is that capital is rewarding companies that can make themselves legible: what they replace, why now, why this team, why the customer moves this year, and why the business gets stronger after each deployment.",
        ],
      },
    ],
  },
  {
    slug: "physical-world-startups-funding-premium",
    category: "Startups",
    title: "Physical-world startups are getting the new scarcity premium",
    dek: "Anduril's reported $5 billion raise is the loudest example of a broader investor move toward companies that combine software with hardware, procurement, and hard-to-copy deployment loops.",
    excerpt:
      "Defense, robotics, energy, and mobility companies are raising like software platforms because the market is paying for scarcity, not just code velocity.",
    tag: "Funding",
    date: "May 17, 2026",
    publishedAt: "2026-05-17",
    readTime: "8 min",
    accent: "bg-slate-400",
    image: {
      src: "/articles/source-photos/physical-world-startups.jpg",
      alt: "Soldiers training with an Anduril Ghost X drone system",
      credit: "U.S. Army / Wikimedia Commons",
      creditUrl:
        "https://commons.wikimedia.org/wiki/File:10th_Mountain_Division_train_on_the_Anduril_Ghost_X_Small_Unmanned_Aircraft_System_during_Combined_Resolve_(8831271).jpg",
    },
    keywords: ["startup funding", "defense tech", "robotics", "hardware startups"],
    standfirst:
      "The market is learning to value startups that can move atoms, not only pixels. The catch is that physical-world companies must prove both software-like learning curves and operational discipline.",
    pullQuote:
      "The new premium belongs to startups that can make hard deployment look repeatable.",
    sourceLinks: [
      {
        label: "TechCrunch on Anduril's $5B raise",
        url: "https://techcrunch.com/2026/05/13/anduril-raises-5b-doubles-valuation-to-61b/",
      },
      {
        label: "Crunchbase Megadeals Board",
        url: "https://news.crunchbase.com/biggest-us-vc-startup-funding-deals-2023/",
      },
    ],
    sections: [
      {
        heading: "Software alone is no longer the only fast story",
        body: [
          "The cleanest venture story of the last decade was pure software: write code, distribute globally, and improve margins as customers scale. That story still matters, but the newest funding cycle is giving more attention to companies that blend software with hardware, operations, and physical infrastructure.",
          "Anduril's latest financing, reported by TechCrunch as a $5 billion raise that doubled its valuation to $61 billion, sits at the extreme end of that shift. It suggests investors are willing to treat defense technology as a platform category when the company can show procurement access, product breadth, and a software layer that improves across deployments.",
          "The same logic appears in robotics, energy, data centers, and logistics. These businesses are harder to start and slower to prove, but once they work, they can become difficult to clone from a browser tab.",
        ],
      },
      {
        heading: "The moat is not the machine",
        body: [
          "Hardware gets the photograph, but the real valuation argument is usually the system around it. Investors want to see simulation, fleet learning, software updates, supply-chain control, service networks, and customer relationships that turn each deployment into better future deployments.",
          "That is why physical-world startups increasingly pitch themselves as platforms. A drone, robot, charger, sensor, or energy asset is the entry point. The compounding layer is data, command software, maintenance workflows, procurement history, and the ability to adapt the same core system to adjacent missions.",
          "The strongest companies make the operational burden feel like an advantage. The weakest ones discover that hardware complexity can consume every dollar of a large round before the platform has time to appear.",
        ],
      },
      {
        heading: "Why investors are suddenly more patient",
        body: [
          "Geopolitics, energy demand, industrial policy, and AI infrastructure needs have made the physical world feel newly strategic. A company that can supply credible defense systems, grid capacity, cooling technology, logistics automation, or data-center power is no longer just a hard-tech curiosity.",
          "That creates a different kind of urgency. Customers in these markets may move slowly, but once they decide a capability matters, they can buy at scales that consumer software companies rarely see early in life.",
          "The funding premium is partly a scarcity premium. There are not many teams that can recruit elite software talent, survive hardware iteration, understand regulated buyers, and keep operations from overwhelming the product roadmap.",
        ],
      },
      {
        heading: "The risk behind the romance",
        body: [
          "Physical-world startup lore can become too heroic. A giant round does not remove manufacturing delays, certification, safety reviews, customer concentration, working capital needs, or the risk of building ahead of confirmed demand.",
          "For founders, the lesson is to be honest about what kind of company they are building. If the sales cycle depends on government budgets or industrial deployment, the startup needs financing, governance, and milestones that match that reality.",
          "For readers, the interesting question is not whether hardware is back. It is whether the best hardware companies can keep enough software leverage to deserve venture-scale outcomes.",
        ],
      },
    ],
  },
  {
    slug: "rapido-wirestock-founder-lore",
    category: "Startups",
    title: "The best startup lore right now is operational, not mythical",
    dek: "Rapido and Wirestock tell very different stories, but both show how the strongest funding narratives are moving toward execution depth, not founder theater.",
    excerpt:
      "Recent rounds for Rapido and Wirestock point to a founder market that rewards messy operational knowledge, supply networks, and hard-earned distribution.",
    tag: "Founders",
    date: "May 16, 2026",
    publishedAt: "2026-05-16",
    readTime: "9 min",
    accent: "bg-slate-400",
    image: {
      src: "/articles/source-photos/startup-office-lore.png",
      alt: "A startup office workspace with desks and computers",
      credit: "Wikimedia Commons",
      creditUrl: "https://commons.wikimedia.org/wiki/File:Inside_the_office_workspace.png",
    },
    keywords: ["startup founders", "startup funding", "Rapido", "Wirestock"],
    standfirst:
      "The founder stories that travel in 2026 are not only about charisma. They are about knowing the underside of a market well enough to make it legible to capital.",
    pullQuote:
      "Operational knowledge has become a kind of founder mythology: less cinematic, more useful.",
    sourceLinks: [
      {
        label: "TechCrunch on Rapido's $240M raise",
        url: "https://techcrunch.com/2026/05/15/indian-uber-rival-rapido-raises-240m-at-3b-valuation/",
      },
      {
        label: "TechCrunch on Wirestock's $23M Series A",
        url: "https://techcrunch.com/2026/05/14/wirestock-raises-23m-to-supply-multi-modal-data-to-ai-labs/",
      },
    ],
    sections: [
      {
        heading: "The romance has moved closer to the ground",
        body: [
          "Startup mythology used to favor the clean break: the founder sees the future, builds the product, and bends the market around it. The more interesting 2026 version is less clean. It is about founders who learn from fragmented supply, low-margin behavior, creator incentives, driver networks, procurement bottlenecks, or messy data operations.",
          "Rapido's new $240 million raise at a reported $3 billion valuation is not a story about inventing ride-hailing. It is a story about understanding Indian mobility at street level: motorbikes, auto-rickshaws, smaller cities, driver supply, pricing pressure, and the way local transport demand behaves outside the easiest urban routes.",
          "Wirestock's $23 million Series A has a different texture. The company moved from helping photographers distribute stock work to supplying multimodal data to AI labs. That pivot only works if the company can manage creator trust, task quality, annotation detail, and enterprise demand at the same time.",
        ],
      },
      {
        heading: "Fundraising now rewards earned mess",
        body: [
          "Investors like clean markets, but they increasingly pay for teams that can operate in messy ones. The mess is where differentiation hides. Anyone can describe AI data demand or urban mobility growth. Fewer teams can recruit contributors, keep supply quality high, manage local incentives, and build software that handles exceptions at scale.",
          "That is the founder lore worth watching: not the viral memo, but the accumulated judgment about where a market breaks. Which customers churn for non-obvious reasons? Which suppliers need faster payments? Which users behave differently when the product enters a second-tier city? Which workflows need human review before automation can work?",
          "When a startup can answer those questions precisely, the funding story becomes more credible. The pitch stops sounding like a category and starts sounding like a company.",
        ],
      },
      {
        heading: "Distribution is becoming biography",
        body: [
          "A founder's biography now matters most when it explains distribution. Prior experience, geography, community ties, and market scars are useful if they show why this team can reach supply or demand that others cannot.",
          "Rapido's advantage is not only capital. It is the operating history of building a mobility network in cities where price, regulation, driver incentives, and congestion make imported playbooks fragile.",
          "Wirestock's advantage is not only that AI labs need data. It is that the company already had a relationship with creative contributors and could reshape that network around custom data tasks, quality review, and enterprise sales.",
        ],
      },
      {
        heading: "A better founder story for readers",
        body: [
          "The healthier way to read startup lore is to ask what the story proves. Does it prove customer access? Does it prove a strange insight about supply? Does it prove the team can survive low-margin operations long enough to build software leverage?",
          "Great founder stories are not decorations on top of the business. They are evidence about why the business has a chance to compound.",
          "That makes the current cycle quieter but more interesting. The founders worth following are often the ones telling less polished stories about the problems they know too well.",
        ],
      },
    ],
  },
  {
    slug: "ai-data-and-agent-startups-funding",
    category: "Funding",
    title: "AI data and agent startups are turning demand into funding gravity",
    dek: "Recent rounds for companies like Sierra, Wirestock, Exaforce, and specialist infrastructure startups show where investors think AI budgets are becoming repeatable.",
    excerpt:
      "The funding market is paying for the unglamorous layers behind AI adoption: data supply, security operations, customer agents, and inference efficiency.",
    tag: "AI Funding",
    date: "May 16, 2026",
    publishedAt: "2026-05-16",
    readTime: "8 min",
    accent: "bg-slate-400",
    image: {
      src: "/articles/source-photos/venture-team-funding.jpg",
      alt: "A venture team gathered in an office setting",
      credit: "Wikimedia Commons",
      creditUrl: "https://commons.wikimedia.org/wiki/File:Atento_Capital_Team_Photo.jpg",
    },
    keywords: ["AI funding", "AI agents", "AI data", "venture capital"],
    standfirst:
      "AI funding is shifting from vague capability to budget ownership. The companies raising fresh capital are often the ones closest to data, security, customer operations, or compute cost.",
    pullQuote:
      "The next AI funding story is not only better models. It is the operational supply chain around them.",
    sourceLinks: [
      {
        label: "Axios Pro Rata, May 5 funding notes",
        url: "https://www.axios.com/newsletters/axios-pro-rata-dcefb62b-d63c-4b4a-9c2f-9b9ad9556a7a",
      },
      {
        label: "Axios Pro Rata, May 14 funding notes",
        url: "https://www.axios.com/newsletters/axios-pro-rata-894ef9e3-9e1f-4cf1-9f7c-7c1e2f57c968",
      },
      {
        label: "TechCrunch on Exaforce's $125M Series B",
        url: "https://techcrunch.com/2026/05/12/exaforce-raises-125m-series-b-to-build-ai-for-catching-and-stopping-cyberattacks-as-they-happen/",
      },
    ],
    sections: [
      {
        heading: "AI budgets are becoming line items",
        body: [
          "The strongest AI startups in the current funding cycle are not merely promising intelligence. They are attaching themselves to budgets that already exist: customer support, security operations, data procurement, inference infrastructure, design production, and enterprise workflow automation.",
          "That is why rounds for companies such as Sierra, Wirestock, Exaforce, Fractile, RadixArk, and other AI infrastructure or application startups matter as a group. They show investors looking for places where AI demand converts into recurring spend, not experimental curiosity.",
          "The funding gravity is strongest where a startup can say exactly which cost it lowers or which bottleneck it removes. Abstract productivity stories still travel, but procurement teams increasingly want measured outcomes.",
        ],
      },
      {
        heading: "Data supply is becoming infrastructure",
        body: [
          "Wirestock's funding is a useful signal because data supply is not glamorous, but it is fundamental. As models push into image, video, audio, 3D, and real-world task understanding, labs need licensed, organized, high-quality inputs that can be shaped for specific model behavior.",
          "That turns creator networks, annotation workflows, rights management, and quality control into venture-scale questions. A data supplier with contributor trust and enterprise sales discipline can become more than a marketplace; it can become part of the model development supply chain.",
          "The risk is that the category becomes crowded and price sensitive. The durable companies will need more than access to contributors. They will need tooling, QA systems, domain specialization, and a reason customers keep returning for custom datasets.",
        ],
      },
      {
        heading: "Agents need accountability before autonomy",
        body: [
          "Customer-service agents, security agents, browser agents, and internal workflow agents all share the same adoption problem: companies want automation, but they also want permissioning, review, logs, fallback paths, and measurable reliability.",
          "That is why investors are drawn to AI companies that look operationally specific. A generic assistant may be impressive, but a system that reduces support backlog, flags cyber incidents, drafts claims responses, or handles structured internal tasks maps more cleanly to a buyer and a budget.",
          "The winners will make autonomy feel governed. They will not ask customers to trust magic; they will show what the system touched, why it acted, and how a human can intervene.",
        ],
      },
      {
        heading: "Infrastructure remains the tax collector",
        body: [
          "Even when the application layer gets the attention, infrastructure collects rent. Inference hardware, data-center cooling, model evaluation, routing, and security tooling all benefit as more AI products move from demos to production.",
          "That is why AI funding keeps spilling into less visible layers. Every successful AI application creates pressure on cost, latency, data quality, and safety. Startups that solve those pressures can grow alongside the entire market.",
          "The practical investor question is whether a startup owns a durable bottleneck or only a temporary gap. The practical founder question is similar: if the model improves tomorrow, does the company become more valuable, or does it disappear into the platform?",
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
