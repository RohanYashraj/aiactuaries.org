import { Section } from "@/components/section";

export default function MembersPage() {
  return (
    <Section className="py-20 md:py-32">
      <div className="max-w-3xl">
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6 float-up">
          Our <span className="hero-highlight">Members</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground float-up delay-100 leading-relaxed">
          The SSSC CoE in Actuarial Data Science & AI is composed of a diverse
          group of professionals, educators, and innovators. This page will soon
          feature our community members and their contributions.
        </p>
        <div className="mt-12 float-up delay-200">
          <div className="h-px bg-linear-to-r from-primary/20 via-primary/20 to-transparent w-full mb-8" />
          <p className="text-sm font-medium uppercase tracking-widest text-primary/60">
            Coming Soon
          </p>
        </div>
      </div>
    </Section>
  );
}
