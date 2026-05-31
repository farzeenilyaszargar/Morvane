import Link from "next/link";
import Image from "next/image";

const topicLinks = [
  { label: "Latest", href: "/#latest" },
  { label: "Startups", href: "/#startups" },
  { label: "Venture", href: "/#venture" },
  { label: "AI", href: "/#ai" },
  { label: "Security", href: "/#security" },
  { label: "Newsletter", href: "/#newsletter" },
];

const legalLinks = [
  { label: "Terms of Service", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Contact", href: "mailto:hello@morvane.space" },
  { label: "Advertise", href: "mailto:ads@morvane.space" },
];

export function SiteFooter() {
  return (
    <footer className="bg-[#10130f] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-start lg:py-14">
        <div>
          <Link href="/" aria-label="Morvane home" className="inline-flex">
            <Image
              src="/logo.svg"
              alt="Morvane"
              width={220}
              height={56}
              className="h-auto w-44 object-contain"
            />
          </Link>
          <p className="mt-4 max-w-md text-sm leading-6 text-white/60">
            Morvane covers startups, AI, venture, security, and the money behind the next platform
            shift.
          </p>
          <p className="mt-5 text-xs font-bold text-white/75">© 2026 Morvane Media LLC.</p>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <nav aria-label="Footer topics">
            <h2 className="text-sm font-black uppercase tracking-[0.1em] text-white">Topics</h2>
            <div className="mt-4 grid gap-3 text-sm font-bold text-white/62">
              {topicLinks.map((link) => (
                <Link key={link.href} href={link.href} className="transition hover:text-[#00A2FF]">
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>

          <nav aria-label="Footer legal">
            <h2 className="text-sm font-black uppercase tracking-[0.1em] text-white">Company</h2>
            <div className="mt-4 grid gap-3 text-sm font-bold text-white/62">
              {legalLinks.map((link) => (
                <Link key={link.href} href={link.href} className="transition hover:text-[#00A2FF]">
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </footer>
  );
}
