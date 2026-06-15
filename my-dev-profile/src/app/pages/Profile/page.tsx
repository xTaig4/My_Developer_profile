"use client";

import React from "react";
import ProfileHeader from "@/app/components/ProfileHeader";
import ExperienceList from "@/app/components/ExperienceList";
import ProjectList from "@/app/components/ProjectList";
import SkillsBox from "@/app/components/BoxComponents/SkillsBox";
import HobbiesBox from "@/app/components/BoxComponents/HobbiesBox";
import TraitsBox from "@/app/components/BoxComponents/TraitsBox";

const StatBar = ({ stat, fillPercent }: { stat: string; fillPercent: number }) => (
  <div className="flex flex-col" style={{ gap: "var(--space-xs)" }}>
    <div
      className="flex items-baseline justify-between"
      style={{ gap: "var(--space-md)" }}
    >
      <span className="text-ink" style={{ fontSize: "var(--type-sm)" }}>
        {stat}
      </span>
      <span
        className="text-ink-muted tabular-nums"
        style={{ fontSize: "var(--type-2xs)" }}
      >
        {fillPercent} / 100
      </span>
    </div>
    <div
      className="progress"
      style={{ "--value": fillPercent } as React.CSSProperties}
      aria-label={`${stat}: ${fillPercent} of 100`}
    />
  </div>
);

const stats = [
  { stat: "AI Engineering", fillPercent: 88 },
  { stat: "Software Architecture", fillPercent: 90 },
  { stat: "Frontend", fillPercent: 75 },
  { stat: "Backend", fillPercent: 83 },
  { stat: "Security (AppSec)", fillPercent: 50 },
];

const traits = [
  { trait: "Certified nerd" },
  { trait: "Chill" },
  { trait: "Patient" },
  { trait: "Resilient" },
  { trait: "Team player" },
];

const hobbies = [
  { hobby: "AI" },
  { hobby: "Doodle" },
  { hobby: "Gaming" },
  { hobby: "Pour-over Coffee" },
  { hobby: "Reading" },
  { hobby: "Volleyball" },
];

const education = [
  {
    degree: "Software Developer (PBA)",
    school: "Erhvervsakademi Dania, Grenaa",
    dates: "Jan 2023 – Jun 2024",
  },
  {
    degree: "Datamatiker (AP, Computer Science)",
    school: "Erhvervsakademi Dania, Grenaa",
    dates: "Sep 2020 – Jan 2023",
  },
];

const languages = [
  { lang: "Danish", level: "native" },
  { lang: "English", level: "fluent" },
  { lang: "Vietnamese", level: "intermediate" },
  { lang: "Japanese", level: "intermediate" },
];

const ProfilePage = () => {
  return (
    <main className="min-h-[calc(100lvh-3rem)] bg-app p-[var(--space-md)] font-mono text-ink sm:p-[var(--space-lg)] lg:p-[var(--space-xl)]">
      <div
        className="mx-auto flex w-full flex-col"
        style={{ gap: "var(--space-2xl)", maxWidth: "72rem" }}
      >
        <ProfileHeader
          name="Tai Nguyen"
          classLine="full-stack developer, AI-focused"
          location="Aalborg, Denmark · open to Copenhagen"
          status="open to offers"
          oneLiner="Full-stack developer building AI products that create real value for non-technical users."
          drive="I see AI as more than a tool. It's a partner that helps me learn, build, and get closer to my vision."
          record="Full-stack software developer with hands-on experience building AI solutions for non-technical users. I co-developed Kvik, a Danish AI bookkeeping assistant, where I now act as CTO and AI developer, and I build LLM pipelines with a focus on reliability, data protection, and usability, pairing technical depth with product sense. I also work alongside AI daily as a thinking and learning partner, using it to pick up new skills and explore ideas well beyond code."
        />

        {/* BODY: main column (substance) + side rail (stats + credentials) */}
        <div className="grid grid-cols-1 gap-[var(--space-2xl)] lg:grid-cols-[minmax(0,1fr)_19rem]">
          {/* MAIN — abilities, experience, projects */}
          <div className="flex min-w-0 flex-col" style={{ gap: "var(--space-2xl)" }}>
            <SkillsBox />
            <ExperienceList />
            <ProjectList />
          </div>

          {/* RAIL — stats, education, traits, hobbies, languages */}
          <aside className="flex flex-col" style={{ gap: "var(--space-xl)" }}>
            <section className="flex flex-col" style={{ gap: "var(--space-md)" }}>
              <div className="marker font-display">stats</div>
              <div className="flex flex-col" style={{ gap: "var(--space-md)" }}>
                {stats.map((s) => (
                  <StatBar key={s.stat} {...s} />
                ))}
              </div>
            </section>

            <section className="flex flex-col" style={{ gap: "var(--space-md)" }}>
              <div className="marker font-display">education</div>
              <ul className="flex list-none flex-col" style={{ gap: "var(--space-md)" }}>
                {education.map((e) => (
                  <li key={e.degree} className="flex flex-col" style={{ gap: "var(--space-3xs)" }}>
                    <span className="text-ink" style={{ fontSize: "var(--type-sm)" }}>
                      {e.degree}
                    </span>
                    <span className="text-ink-muted" style={{ fontSize: "var(--type-2xs)" }}>
                      {e.school}
                    </span>
                    <span
                      className="text-ink-muted tabular-nums"
                      style={{ fontSize: "var(--type-2xs)" }}
                    >
                      {e.dates}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            <TraitsBox traits={traits} />
            <HobbiesBox hobbies={hobbies} />

            <section className="flex flex-col" style={{ gap: "var(--space-md)" }}>
              <div className="marker font-display">languages</div>
              <ul className="flex list-none flex-wrap" style={{ gap: "var(--space-xs)" }}>
                {languages.map((l) => (
                  <li key={l.lang} className="chip">
                    {l.lang}
                    <span className="text-ink-muted" style={{ marginLeft: "var(--space-xs)" }}>
                      {l.level}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default ProfilePage;
