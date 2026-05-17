"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { navItems } from "@/lib/articles";

function PixelLogo() {
  return (
    <span
      className="pixel-logo grid size-8 shrink-0 grid-cols-4 overflow-hidden bg-slate-200"
      aria-hidden="true"
    >
      {[
        "bg-slate-100",
        "bg-slate-500",
        "bg-slate-200",
        "bg-slate-700",
        "bg-slate-600",
        "bg-slate-100",
        "bg-slate-700",
        "bg-slate-300",
        "bg-slate-200",
        "bg-slate-700",
        "bg-slate-100",
        "bg-slate-500",
        "bg-slate-700",
        "bg-slate-300",
        "bg-slate-600",
        "bg-slate-100",
      ].map((color, index) => (
        <span key={`${color}-${index}`} className={color} />
      ))}
    </span>
  );
}

export function SiteHeader() {
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    function updateHeader() {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY.current;

      if (currentScrollY < 80) {
        setIsHidden(false);
      } else if (delta > 8) {
        setIsHidden(true);
      } else if (delta < -8) {
        setIsHidden(false);
      }

      lastScrollY.current = currentScrollY;
      ticking.current = false;
    }

    function onScroll() {
      if (!ticking.current) {
        window.requestAnimationFrame(updateHeader);
        ticking.current = true;
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-30 border-b border-white/10 bg-[#070910]/95 backdrop-blur-md transition-transform duration-300 ease-out will-change-transform ${
        isHidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-4 sm:px-8">
        <Link href="/" className="group flex shrink-0 items-center gap-3" aria-label="Morvane home">
          <PixelLogo />
          <span className="text-xl font-black tracking-[0.04em] text-slate-50 transition group-hover:text-white">
            Morvane
          </span>
        </Link>

        <div className="flex min-w-0 items-center gap-5 overflow-x-auto whitespace-nowrap text-sm font-semibold text-slate-400">
          <div className="flex items-center gap-5">
            {navItems.map((item) => (
              <Link
                key={item}
                href={`/#${item.toLowerCase().replaceAll(" ", "-")}`}
                className="transition hover:text-slate-100"
              >
                {item}
              </Link>
            ))}
          </div>
          <Link
            href="/#newsletter"
            className="hidden border border-white/10 px-3 py-1.5 text-slate-300 transition hover:border-white/20 hover:bg-white/[0.04] hover:text-slate-100 sm:inline-block"
          >
            Subscribe
          </Link>
        </div>
      </nav>
    </header>
  );
}
