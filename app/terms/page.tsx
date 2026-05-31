import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Terms of Service | Morvane",
  description: "Terms for reading and using Morvane.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#f7f7f2] text-[#10130f]">
      <SiteHeader />
      <section className="mx-auto max-w-4xl px-5 py-16 sm:px-8 lg:py-20">
        <p className="text-sm font-black uppercase tracking-[0.1em] text-[#0077C8]">
          Morvane Media LLC
        </p>
        <h1 className="mt-4 text-4xl font-black leading-[0.94] tracking-[-0.045em] sm:text-6xl sm:leading-[0.92]">
          Terms of Service
        </h1>
        <div className="mt-10 space-y-7 text-base leading-7 text-[#33382f] sm:text-lg sm:leading-8">
          <p>
            Morvane publishes technology news, analysis, and commentary for readers interested in
            startups, venture, AI, security, apps, hardware, and infrastructure.
          </p>
          <p>
            Content on Morvane is provided for general informational purposes. We work to keep
            coverage accurate, but publication timing, company details, and market context can
            change.
          </p>
          <p>
            You may link to Morvane articles. Do not republish full articles, remove attribution, or
            use the site in a way that disrupts availability or reader access.
          </p>
          <p>
            For terms questions, contact Morvane at{" "}
            <a href="mailto:hello@morvane.space" className="font-black text-[#0077C8]">
              hello@morvane.space
            </a>
            .
          </p>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
