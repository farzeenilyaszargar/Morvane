import Link from "next/link";

const footerLinks = [
  { label: "Startups", href: "/#startups" },
  { label: "Funding", href: "/#funding" },
  { label: "Security", href: "/#security" },
  { label: "Newsletter", href: "/#newsletter" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black/30">
      <div className="mx-auto grid max-w-7xl gap-5 px-5 py-8 text-center text-sm text-slate-500 sm:px-8 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
        <p className="lg:text-left">Morvane covers technology from the edge of the map.</p>
        <Link
          href="/"
          className="font-black tracking-[0.08em] text-slate-300 transition hover:text-white"
        >
          Morvane
        </Link>
        <nav
          aria-label="Footer"
          className="flex flex-wrap justify-center gap-x-4 gap-y-2 font-mono text-xs font-black uppercase tracking-[0.12em] lg:justify-end"
        >
          {footerLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-slate-200">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
