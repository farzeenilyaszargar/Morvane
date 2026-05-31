import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Privacy Policy | Morvane",
  description: "How Morvane Media LLC handles reader privacy and site data.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#f7f7f2] text-[#10130f]">
      <SiteHeader />
      <section className="mx-auto max-w-4xl px-5 py-16 sm:px-8 lg:py-20">
        <p className="text-sm font-black uppercase tracking-[0.1em] text-[#0077C8]">
          Morvane Media LLC
        </p>
        <h1 className="mt-4 text-5xl font-black leading-[0.92] tracking-[-0.05em] sm:text-6xl">
          Privacy Policy
        </h1>
        <div className="mt-10 space-y-7 text-lg leading-8 text-[#33382f]">
          <p>
            Morvane is a technology publication. We use basic site data to understand readership,
            improve performance, protect the site, and respond to messages readers send us.
          </p>
          <p>
            If you contact us or subscribe to updates, we may receive your email address and the
            message details you provide. We do not sell reader contact information.
          </p>
          <p>
            Our pages may link to outside websites. Those sites have their own privacy practices,
            and Morvane is not responsible for how third-party sites collect or use information.
          </p>
          <p>
            For privacy questions, contact Morvane at{" "}
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
