import Link from "next/link";

import { siteContent } from "@/lib/site-content";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="relative py-24 md:py-40 scroll-mt-24 overflow-hidden">
      {/* Subtle top rule and wash to match interior sections */}
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary/20 to-transparent" />
      <div
        className="absolute inset-0 bg-linear-to-b from-secondary/20 via-transparent to-secondary/30 pointer-events-none"
        aria-hidden="true"
      />

      <Section
        as="div"
        className="relative z-10 flex flex-col items-center text-center"
      >
        <div className="relative mb-10 md:mb-14">
          {/* Large ghosted 404 numeral, echoing the Vision section style */}
          <span className="pointer-events-none select-none font-display text-[6rem] leading-none text-primary/5 md:text-[9rem]">
            404
          </span>

          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-primary/70">
              Page not found
            </p>
            <div className="editorial-divider mt-5" />
          </div>
        </div>

        <div className="max-w-2xl space-y-6 float-up">
          <h1 className="font-display text-2xl leading-snug text-foreground sm:text-3xl md:text-4xl">
            This page isn&apos;t part of the{" "}
            <span className="hero-highlight">AI Actuaries</span> hub yet.
          </h1>
          <p className="mx-auto max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
            The link you followed may be outdated, or the page has moved. Use
            the paths below to return to the main hub and continue exploring
            actuarial AI, education, and thought leadership.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 float-up delay-200">
          <Button asChild size="lg">
            <Link href="/">{`Back to ${siteContent.siteName} home`}</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/#brands">Explore the four pillars</Link>
          </Button>
        </div>
      </Section>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-secondary/40 to-transparent"
        aria-hidden="true"
      />
    </section>
  );
}
