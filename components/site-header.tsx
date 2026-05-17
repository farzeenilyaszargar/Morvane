import Link from "next/link";
import { navItems } from "@/lib/articles";

function PixelLogo() {
  return (
    <span
      className="pixel-logo grid size-11 shrink-0 grid-cols-5 overflow-hidden border border-slate-500/40 bg-[#0b0f18]"
      aria-hidden="true"
    >
      {[
        "bg-slate-200",
        "bg-slate-300",
        "bg-transparent",
        "bg-slate-500",
        "bg-slate-400",
        "bg-slate-300",
        "bg-transparent",
        "bg-white",
        "bg-transparent",
        "bg-slate-500",
        "bg-transparent",
        "bg-white",
        "bg-slate-300",
        "bg-white",
        "bg-transparent",
        "bg-slate-500",
        "bg-transparent",
        "bg-white",
        "bg-transparent",
        "bg-slate-400",
        "bg-slate-500",
        "bg-slate-400",
        "bg-transparent",
        "bg-slate-300",
        "bg-slate-500",
      ].map((color, index) => (
        <span key={`${color}-${index}`} className={color} />
      ))}
    </span>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-[#070910]/95 backdrop-blur-md">
      <div className="border-b border-white/10 bg-black/20">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-2 font-mono text-[0.68rem] font-bold uppercase tracking-[0.18em] text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <span>Morvane.space</span>
          <span>Technology magazine / Updated May 17, 2026</span>
        </div>
      </div>

      <nav className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-4 sm:px-8 lg:flex-row lg:items-end lg:justify-between">
        <Link href="/" className="group flex w-fit items-center gap-4" aria-label="Morvane home">
          <PixelLogo />
          <span>
            <span className="block font-mono text-2xl font-black uppercase leading-none tracking-[0.18em] text-slate-50 transition group-hover:text-white sm:text-3xl">
              Morvane
            </span>
            <span className="mt-1 block font-mono text-[0.66rem] font-bold uppercase tracking-[0.2em] text-slate-500">
              Deep tech, clearly read
            </span>
          </span>
        </Link>

        <div className="flex gap-2 overflow-x-auto border-y border-white/10 py-2 font-mono text-[0.7rem] font-bold uppercase tracking-[0.12em] text-slate-400 lg:border-y-0 lg:py-0">
          {navItems.map((item) => (
            <Link
              key={item}
              href={`/#${item.toLowerCase().replaceAll(" ", "-")}`}
              className="shrink-0 border border-white/10 bg-white/[0.025] px-3 py-2 transition hover:border-slate-300/40 hover:bg-white/[0.05] hover:text-slate-100"
            >
              {item}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
