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
    <header className="sticky top-0 z-40 border-b border-[#10130f] bg-[#f7f7f2]/95 backdrop-blur-md">
      <nav className="mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-4 px-5 py-3 sm:px-8">
        <Link
          href="/"
          className={`group flex h-10 shrink-0 items-center overflow-hidden bg-[#0077c8] transition-all duration-500 ease-out ${
            hasScrolled ? "w-40 px-3 opacity-100" : "w-0 px-0 opacity-0"
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
          className={`flex min-w-0 items-center justify-center overflow-x-auto whitespace-nowrap text-sm font-black text-[#182431] transition-all duration-500 ${
            hasScrolled ? "gap-5" : "gap-6"
          }`}
        >
          {navItems.map((item) => (
            <Link
              key={item}
              href={item === "Latest" ? "/#latest" : `/#${item.toLowerCase().replaceAll(" ", "-")}`}
              className="transition hover:text-[#0077c8]"
            >
              {item}
            </Link>
          ))}
        </div>

        <Link
          href="/#latest"
          aria-label="Search"
          className="group flex size-10 shrink-0 items-center justify-center border border-[#10130f] transition hover:bg-[#0077c8]"
        >
          <span
            aria-hidden="true"
            className="relative block size-4 rounded-full border-2 border-[#10130f] transition after:absolute after:-bottom-1 after:-right-1 after:block after:h-2 after:w-0.5 after:rotate-[-45deg] after:bg-[#10130f] group-hover:border-white group-hover:after:bg-white"
          />
        </Link>
      </nav>
    </header>
  );
}
