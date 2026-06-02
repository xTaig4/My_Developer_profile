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

const ProfilePage = () => {
  const stats = [
    { stat: "AI Engineering", fillPercent: 88 },
    { stat: "Software Architecture", fillPercent: 90 },
    { stat: "Frontend", fillPercent: 75 },
    { stat: "Backend", fillPercent: 83 },
    { stat: "Cybersecurity", fillPercent: 25 },
  ];

  const traits = [
    { trait: "Chill" },
    { trait: "Resilient" },
    { trait: "Team player" },
    { trait: "Weirdo" },
    { trait: "Certified nerd" },
    { trait: "Patient" },
  ];

  const hobbies = [
    { hobby: "Gaming" },
    { hobby: "Volleyball" },
    { hobby: "Reading" },
    { hobby: "Pour-over Coffee" },
    { hobby: "Doodle" },
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

  return (
    <main className="min-h-[calc(100lvh-3rem)] bg-app p-[var(--space-md)] font-mono text-ink sm:p-[var(--space-lg)] lg:p-[var(--space-xl)]">
      <div
        className="mx-auto flex w-full flex-col"
        style={{ gap: "var(--space-2xl)", maxWidth: "72rem" }}
      >
        <ProfileHeader
          name="Tai Nguyen"
          classLine="full-stack developer, AI-focused"
          location="Aalborg, Denmark"
          status="open to offers"
          oneLiner="Full-stack developer building AI products that create real value for non-technical users."
          record="Trained full-stack software developer with hands-on experience shipping AI solutions for non-technical users. Co-developed Kvik, a Danish AI bookkeeping assistant, and builds LLM pipelines with a focus on reliability, GDPR, and usability, pairing technical depth with product sense."
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
