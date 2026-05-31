"use client";

import Link from "next/link";
import Image from "next/image";
import {
  type FormEvent,
  type KeyboardEvent as ReactKeyboardEvent,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { usePathname, useRouter } from "next/navigation";
import { articles, navItems } from "@/lib/articles";

export function SiteHeader() {
  const router = useRouter();
  const pathname = usePathname();
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const isHomePage = pathname === "/";
  const showHeaderLogo = !isHomePage || hasScrolled;

  const searchResults = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return articles.slice(0, 5);
    }

    return articles
      .filter((article) => {
        const searchable = [
          article.title,
          article.dek,
          article.excerpt,
          article.category,
          article.tag,
          ...article.keywords,
        ]
          .join(" ")
          .toLowerCase();

        return searchable.includes(normalizedQuery);
      })
      .slice(0, 6);
  }, [query]);

  useEffect(() => {
    if (!isHomePage) {
      return;
    }

    function updateHeader() {
      setHasScrolled(window.scrollY > 180);
    }

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateHeader);
    };
  }, [isHomePage]);

  useEffect(() => {
    if (isSearchOpen) {
      inputRef.current?.focus();
    }
  }, [isSearchOpen]);

  useEffect(() => {
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsSearchOpen(false);
      }
    }

    window.addEventListener("keydown", closeOnEscape);

    return () => {
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  function openFirstResult() {
    const firstResult = searchResults[0];

    if (firstResult) {
      setIsSearchOpen(false);
      setQuery("");
      router.push(`/articles/${firstResult.slug}`);
    }
  }

  function submitSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    openFirstResult();
  }

  function handleSearchKeyDown(event: ReactKeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      event.preventDefault();
      openFirstResult();
    }
  }

  return (
    <header className="sticky top-0 z-40 border-b border-black/40 bg-[#212426] backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        {showHeaderLogo ? (
          <Link
            href="/"
            className="flex h-10 w-40 shrink-0 items-center overflow-hidden opacity-100 transition-all duration-500 ease-out"
            aria-label="Morvane home"
          >
            <Image
              src="/logo.svg"
              alt="Morvane"
              width={140}
              height={36}
              priority
              className="h-5 w-32 translate-x-0 object-contain transition duration-500"
            />
          </Link>
        ) : null}

        <div
          className={`flex min-w-0 flex-1 items-center overflow-x-auto whitespace-nowrap text-sm font-black text-white transition-all duration-500 ${
            showHeaderLogo ? "justify-center gap-5" : "justify-start gap-6"
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

        <button
          type="button"
          aria-label="Search"
          aria-expanded={isSearchOpen}
          onClick={() => setIsSearchOpen((current) => !current)}
          className="flex size-10 shrink-0 items-center justify-center bg-transparent p-0 text-white outline-none focus-visible:ring-2 focus-visible:ring-[#7ACCFF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#212426]"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="size-5"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.4"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.8-3.8" />
          </svg>
        </button>
      </nav>

      {isSearchOpen ? (
        <div className="border-t border-white/10 bg-[#212426]">
          <form
            onSubmit={submitSearch}
            className="mx-auto grid max-w-7xl gap-5 px-5 py-6 sm:px-8 lg:grid-cols-[minmax(0,420px)_1fr] lg:items-start"
          >
            <div>
              <label htmlFor="site-search" className="sr-only">
                Search Morvane
              </label>
              <input
                ref={inputRef}
                id="site-search"
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                onKeyDown={handleSearchKeyDown}
                placeholder="Search stories"
                className="w-full bg-white px-4 py-3 text-lg font-black text-[#10130f] outline-none placeholder:text-[#697064] focus:ring-2 focus:ring-[#7ACCFF]"
              />
              <p className="mt-3 text-xs font-black uppercase tracking-[0.08em] text-white/55">
                Press Enter to open the first result
              </p>
            </div>

            <div className="grid gap-3">
              {searchResults.length > 0 ? (
                searchResults.map((article) => (
                  <Link
                    key={article.slug}
                    href={`/articles/${article.slug}`}
                    onClick={() => {
                      setIsSearchOpen(false);
                      setQuery("");
                    }}
                    className="group grid gap-1 border-t border-white/10 pt-3 first:border-t-0 first:pt-0"
                  >
                    <span className="text-xs font-black uppercase tracking-[0.08em] text-[#7ACCFF]">
                      {article.category}
                    </span>
                    <span className="text-xl font-black leading-tight tracking-[-0.03em] text-white transition group-hover:text-[#7ACCFF]">
                      {article.title}
                    </span>
                  </Link>
                ))
              ) : (
                <p className="text-lg font-black text-white">No matching stories yet.</p>
              )}
            </div>
          </form>
        </div>
      ) : null}
    </header>
  );
}
