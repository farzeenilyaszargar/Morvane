"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { navItems } from "@/lib/articles";

function PixelLogo() {
  return (
    <span
      className="pixel-logo flex size-9 shrink-0 items-center justify-center bg-[#16c60c] font-black leading-none text-[#071006] transition group-hover:bg-[#20e312]"
      aria-hidden="true"
    >
      M
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
      className={`sticky top-0 z-30 border-b border-[#10130f] bg-[#f7f7f2]/95 transition-transform duration-300 ease-out will-change-transform ${
        isHidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <nav className="mx-auto grid max-w-7xl gap-3 px-5 py-4 sm:px-8 lg:grid-cols-[220px_1fr_auto] lg:items-center">
        <Link href="/" className="group flex shrink-0 items-center gap-3" aria-label="Morvane home">
          <PixelLogo />
          <span className="text-2xl font-black tracking-[-0.01em] text-[#10130f] transition group-hover:text-[#0b7d11]">
            Morvane
          </span>
        </Link>

        <div className="flex min-w-0 items-center gap-5 overflow-x-auto whitespace-nowrap text-sm font-black text-[#33382f] lg:justify-center">
          <div className="flex items-center gap-5 lg:gap-7">
            {navItems.map((item) => (
              <Link
                key={item}
                href={item === "Latest" ? "/#latest" : `/#${item.toLowerCase().replaceAll(" ", "-")}`}
                className="transition hover:text-[#0b7d11]"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>

        <Link
          href="/#newsletter"
          className="hidden border border-[#10130f] px-3 py-1.5 text-sm font-black text-[#10130f] transition hover:bg-[#10130f] hover:text-white sm:inline-block"
        >
          Subscribe
        </Link>
      </nav>
    </header>
  );
}
