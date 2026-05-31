import Link from "next/link";

const footerLinks = [
  { label: "Latest", href: "/#latest" },
  { label: "Startups", href: "/#startups" },
  { label: "Venture", href: "/#venture" },
  { label: "AI", href: "/#ai" },
  { label: "Security", href: "/#security" },
  { label: "Newsletter", href: "/#newsletter" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-[#10130f] bg-[#10130f] text-white">
      <div className="mx-auto grid max-w-7xl gap-5 px-5 py-8 text-center text-sm text-white/65 sm:px-8 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
        <p className="lg:text-left">Morvane covers startups, AI, venture, security, and the money behind the next platform shift.</p>
        <Link
          href="/"
          className="text-xl font-black tracking-[-0.01em] text-[#00A2FF] transition hover:text-white"
        >
          Morvane
        </Link>
        <nav
          aria-label="Footer"
          className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs font-black uppercase tracking-[0.08em] lg:justify-end"
        >
          {footerLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-[#00A2FF]">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
