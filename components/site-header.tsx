"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { navItems } from "@/lib/articles";

export function SiteHeader() {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    function updateHeader() {
      setHasScrolled(window.scrollY > 180);
    }

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateHeader);
    };
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-black/40 bg-[#212426] backdrop-blur-md">
      <nav className="mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-4 px-5 py-3 sm:px-8">
        <Link
          href="/"
          className={`group flex h-10 shrink-0 items-center overflow-hidden transition-all duration-500 ease-out ${
            hasScrolled ? "w-40 opacity-100" : "w-0 opacity-0"
          }`}
          aria-label="Morvane home"
        >
          <Image
            src="/logo.svg"
            alt="Morvane"
            width={140}
            height={36}
            priority
            className={`h-5 w-32 object-contain transition duration-500 ${
              hasScrolled ? "translate-x-0" : "-translate-x-8"
            }`}
          />
        </Link>

        <div
          className={`flex min-w-0 items-center justify-center overflow-x-auto whitespace-nowrap text-sm font-black text-white transition-all duration-500 ${
            hasScrolled ? "gap-5" : "gap-6"
          }`}
        >
          {navItems.map((item) => (
            <Link
              key={item}
              href={item === "Latest" ? "/#latest" : `/#${item.toLowerCase().replaceAll(" ", "-")}`}
              className="transition hover:text-[#7ACCFF]"
            >
              {item}
            </Link>
          ))}
        </div>

        <Link
          href="/#latest"
          aria-label="Search"
          className="group flex size-10 shrink-0 items-center justify-center border border-white/55 transition hover:border-[#7ACCFF] hover:bg-[#0077c8]"
        >
          <span
            aria-hidden="true"
            className="relative block size-4 rounded-full border-2 border-white transition after:absolute after:-bottom-1 after:-right-1 after:block after:h-2 after:w-0.5 after:rotate-[-45deg] after:bg-white group-hover:border-white group-hover:after:bg-white"
          />
        </Link>
      </nav>
    </header>
  );
}
