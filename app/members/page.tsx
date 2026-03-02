import type { Metadata } from "next";
import { Section } from "@/components/section";
import {
  governanceLeadership,
  advisoryCouncil,
  academicLeadership,
  professionalExamDivision,
  industryPlacementLeadership,
  type MemberPerson,
} from "@/lib/members-data";

export const metadata: Metadata = {
  title:
    "Members | Sri Sathya Sai Centre of Excellence in Actuarial Data Science & AI",
  description:
    "Governance, Advisory Council, Academic & Research Leadership, and Professional Examination & Certification division of the Centre.",
};

function PersonLine({ person }: { person: MemberPerson }) {
  return (
    <div className="space-y-0.5">
      <div className="flex flex-wrap items-baseline gap-x-2">
        <span className="font-medium text-foreground">{person.name}</span>
        {person.credentials && (
          <span className="text-sm text-muted-foreground">
            {person.credentials}
          </span>
        )}
      </div>
      {person.title && (
        <div className="text-sm text-muted-foreground space-y-0.5">
          {person.title.split("\n").map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
      )}
    </div>
  );
}

export default function MembersPage() {
  return (
    <>
      {/* Page hero */}
      <section className="section-block pt-12 pb-16 md:pt-16 md:pb-24">
        <Section as="div">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand mb-3 float-up">
              Members
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6 float-up">
              Our <span className="hero-highlight">Members</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground float-up delay-100 leading-relaxed">
              The members of Sri Sathya Sai Centre of Excellence in Actuarial
              Data Science &amp; AI bring together actuarial, AI, academic, and
              industry leadership to guide the Centre&apos;s work.
            </p>
          </div>
        </Section>
      </section>

      {/* 1. Governance & Leadership */}
      <section className="py-12 md:py-16 scroll-mt-24">
        <Section as="div">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand mb-4">
            {governanceLeadership.sectionTitle}
          </p>
          <h2 className="font-display text-2xl sm:text-3xl text-foreground mb-8">
            Chairman
          </h2>

          <div className="audience-card max-w-2xl pl-5 accent-bar-sage mb-12">
            <PersonLine
              person={{
                name: governanceLeadership.chairman.name,
                credentials: governanceLeadership.chairman.credentials,
                title: governanceLeadership.chairman.title,
              }}
            />
          </div>

          <div className="max-w-2xl pl-6 accent-bar-terracotta">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary/80 mb-3">
              Role &amp; Responsibilities
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {governanceLeadership.chairman.roleResponsibilities.map(
                (item, i) => (
                  <li key={i} className="flex gap-2">
                    <span
                      className="text-primary/60 mt-1.5 shrink-0"
                      aria-hidden
                    >
                      —
                    </span>
                    <span>{item}</span>
                  </li>
                ),
              )}
            </ul>
          </div>
        </Section>
      </section>

      {/* 2. Advisory Council */}
      <section className="py-12 md:py-16 scroll-mt-24">
        <Section as="div">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand mb-4">
            {advisoryCouncil.sectionTitle}
          </p>
          <h2 className="font-display text-2xl sm:text-3xl text-foreground mb-8">
            {advisoryCouncil.keyAdvisorsLabel}
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 mb-12 max-w-3xl">
            {advisoryCouncil.advisors.map((advisor) => (
              <div
                key={advisor.name}
                className="audience-card pl-5 accent-bar-sage"
              >
                <PersonLine person={advisor} />
              </div>
            ))}
          </div>

          <div className="max-w-2xl pl-6 accent-bar-gold">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary/80 mb-3">
              {advisoryCouncil.roleTitle}
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {advisoryCouncil.roleItems.map((item, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-primary/60 mt-1.5 shrink-0" aria-hidden>
                    —
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Section>
      </section>

      {/* 3. Academic & Research Leadership */}
      <section className="py-12 md:py-16 scroll-mt-24">
        <Section as="div">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand mb-4">
            {academicLeadership.sectionTitle}
          </p>
          <h2 className="font-display text-2xl sm:text-3xl text-foreground mb-8">
            {academicLeadership.coreMembersLabel}
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-12">
            {academicLeadership.members.map((member) => (
              <div
                key={member.name}
                className="audience-card pl-5 accent-bar-sage"
              >
                <PersonLine person={member} />
              </div>
            ))}
          </div>

          <div className="max-w-2xl pl-6 accent-bar-terracotta">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary/80 mb-3">
              {academicLeadership.responsibilitiesTitle}
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {academicLeadership.responsibilities.map((item, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-primary/60 mt-1.5 shrink-0" aria-hidden>
                    —
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Section>
      </section>

      {/* 4. Professional Examination & Certification Division */}
      <section className="py-12 md:py-16 pb-24 md:pb-32 scroll-mt-24">
        <Section as="div">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand mb-4">
            {professionalExamDivision.sectionTitle}
          </p>
          <p className="text-muted-foreground max-w-2xl mb-8">
            {professionalExamDivision.intro}
          </p>
          <h2 className="font-display text-2xl sm:text-3xl text-foreground mb-8">
            {professionalExamDivision.focusGroupsLabel}
          </h2>

          <div className="flex flex-col gap-12">
            {professionalExamDivision.focusGroups.map((group) => (
              <div key={group.focusLabel} className="space-y-6">
                <h3 className="font-display text-xl text-foreground border-b border-border pb-2">
                  {group.focusLabel}
                </h3>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {group.people.map((person) => (
                    <div
                      key={person.name}
                      className="audience-card pl-5 accent-bar-sage"
                    >
                      <PersonLine person={person} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>
      </section>

      {/* 5. Industry & Global Placement Leadership */}
      <section className="py-12 md:py-16 pb-24 md:pb-32 scroll-mt-24">
        <Section as="div">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand mb-4">
            {industryPlacementLeadership.sectionTitle}
          </p>
          {industryPlacementLeadership.intro && (
            <p className="text-muted-foreground max-w-2xl mb-8">
              {industryPlacementLeadership.intro}
            </p>
          )}
          <h2 className="font-display text-2xl sm:text-3xl text-foreground mb-8">
            {industryPlacementLeadership.focusGroupsLabel}
          </h2>

          <div className="flex flex-col gap-12">
            {industryPlacementLeadership.focusGroups.map((group) => (
              <div key={group.focusLabel} className="space-y-6">
                <h3 className="font-display text-xl text-foreground border-b border-border pb-2">
                  {group.focusLabel}
                </h3>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {group.people.map((person) => (
                    <div
                      key={person.name}
                      className="audience-card pl-5 accent-bar-sage"
                    >
                      <PersonLine person={person} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>
      </section>
    </>
  );
}
