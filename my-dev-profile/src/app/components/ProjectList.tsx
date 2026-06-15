"use client";

import React, { useState } from "react";
import Image from "next/image";

interface Project {
  name: string;
  description: string;
  stack: string[];
  tier: "lead" | "secondary";
  image?: string;
  link?: string;
}

const projects: Project[] = [
  {
    name: "HolidayTracker",
    description:
      "An LLM pipeline that turns unstructured Danish emails into validated calendar events with no manual entry. Built as a prototype for a small barbershop, who adopted it into their own system the next day. Schema-bound (JSON Schema) output is validated before it is trusted, and a European provider (Mistral) was chosen so personal data was processed within the EU, with raw emails kept for an audit trail and HMAC-verified webhooks.",
    stack: ["Mistral", "JSON Schema", "HMAC", "EU data"],
    tier: "lead",
  },
  {
    name: "Riftbound Tracker",
    description:
      "A cross-platform desktop app built solo end-to-end (~8k lines): native Rust commands, versioned SQLite migrations, and a self-designed design system. Offline-first with atomic writes and fault isolation; 10 documented architecture decisions (ADRs).",
    stack: ["Tauri 2", "Rust", "React 19", "SQLite"],
    tier: "lead",
  },
  {
    name: "Kanji Tales",
    description:
      "A web app where users add the kanji they have learned, then an LLM generates short stories and sentences from them to reinforce reading in context.",
    image:
      "https://raw.githubusercontent.com/xTaig4/KanjiTales/refs/heads/main/kanji_tales/public/KanjiTales.JPG",
    link: "https://github.com/xTaig4/KanjiTales",
    stack: ["React", "Next.js", "LLM API"],
    tier: "lead",
  },
  {
    name: "Weeb Words",
    description:
      "A minimalist anime-quote web app where users view, filter, and submit quotes from popular anime characters.",
    image:
      "https://raw.githubusercontent.com/xTaig4/WeebWords_v2/refs/heads/main/weeb-words/Screenshots/QuoteWeb.JPG",
    link: "https://github.com/xTaig4/WeebWords_v2",
    stack: ["React", "REST API"],
    tier: "secondary",
  },
  {
    name: "QuotesAPI",
    description:
      "A RESTful API for fetching random quotes. Powers the Weeb Words web app.",
    image:
      "https://raw.githubusercontent.com/xTaig4/QuotesAPI/refs/heads/main/image_2025-09-30_160812512.png",
    link: "https://github.com/xTaig4/QuotesAPI",
    stack: ["ASP.NET", "C#", "REST"],
    tier: "secondary",
  },
  {
    name: "Runaway",
    description:
      "A simple, addictive game inspired by Flappy Bird: guide your character through obstacles for the highest score.",
    image:
      "https://raw.githubusercontent.com/xTaig4/Runaway/refs/heads/main/Assets/Screenshots/RunawayGame.JPG",
    link: "https://github.com/xTaig4/Runaway",
    stack: ["Unity", "C#"],
    tier: "secondary",
  },
  {
    name: "My Developer Profile",
    description:
      "An earlier profile website showcasing my skills, projects, and contact information.",
    image:
      "https://raw.githubusercontent.com/xTaig4/BlueSky-Profile-project/refs/heads/main/public/screenshots/demo_shot.JPG",
    link: "https://blue-sky-profile-project.vercel.app",
    stack: ["Next.js", "React", "TypeScript", "Tailwind"],
    tier: "secondary",
  },
];

const isRepo = (link: string) => /github\.com/i.test(link);

const ProjectThumb = ({ src, alt }: { src: string; alt: string }) => {
  const [errored, setErrored] = useState(false);

  return (
    <div
      className="relative flex-shrink-0 overflow-hidden border border-border bg-inset"
      style={{ width: "100%", height: "7.5rem", borderRadius: "2px" }}
    >
      {errored ? (
        <div
          className="flex h-full w-full items-center justify-center text-ink-muted"
          style={{ fontSize: "var(--type-2xs)", letterSpacing: "0.08em" }}
        >
          [ no preview ]
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 640px) 200px, 100vw"
          className="object-cover"
          onError={() => setErrored(true)}
        />
      )}
    </div>
  );
};

const StackLine = ({ stack }: { stack: string[] }) => (
  <div
    className="flex flex-wrap items-center"
    style={{ gap: "var(--space-xs) var(--space-sm)" }}
  >
    <span
      className="text-ink-muted"
      style={{
        fontSize: "var(--type-2xs)",
        letterSpacing: "0.08em",
        textTransform: "uppercase",
      }}
    >
      reward
    </span>
    {stack.map((s) => (
      <span
        key={s}
        className="text-ink-muted"
        style={{ fontSize: "var(--type-2xs)" }}
      >
        {s}
      </span>
    ))}
  </div>
);

const CardInner = ({ project, index }: { project: Project; index: number }) => {
  const repo = project.link ? isRepo(project.link) : false;
  return (
    <>
      {/* heading row */}
      <div
        className="flex items-baseline justify-between"
        style={{ gap: "var(--space-md)" }}
      >
        <div
          className="flex min-w-0 items-baseline"
          style={{ gap: "var(--space-sm)" }}
        >
          <span
            className="flex-shrink-0 text-ink-muted tabular-nums"
            style={{ fontSize: "var(--type-2xs)" }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <span
            className={`truncate font-display text-ink ${project.link ? "transition-colors group-hover:text-accent" : ""}`}
            style={{ fontSize: "var(--type-base)" }}
          >
            {project.name}
          </span>
        </div>
        {project.link && (
          <span className="pill flex-shrink-0">{repo ? "repo" : "live"}</span>
        )}
      </div>

      {/* body */}
      <div
        className="flex flex-col sm:flex-row"
        style={{ marginTop: "var(--space-sm)", gap: "var(--space-md)" }}
      >
        {project.image && (
          <div className="sm:w-50 sm:flex-shrink-0">
            <ProjectThumb src={project.image} alt={`${project.name} screenshot`} />
          </div>
        )}
        <div
          className="flex min-w-0 flex-1 flex-col justify-center"
          style={{ gap: "var(--space-sm)" }}
        >
          <p
            className="text-ink-muted"
            style={{
              fontSize: "var(--type-sm)",
              lineHeight: 1.55,
              maxWidth: "64ch",
              textWrap: "pretty",
            }}
          >
            {project.description}
          </p>
          <StackLine stack={project.stack} />
        </div>
      </div>
    </>
  );
};

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  if (project.link) {
    const repo = isRepo(project.link);
    return (
      <li>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="panel--inset link-panel group block transition-colors"
          aria-label={`${project.name} (opens ${repo ? "repository" : "live site"} in a new tab)`}
        >
          <CardInner project={project} index={index} />
        </a>
      </li>
    );
  }
  return (
    <li>
      <div className="panel--inset block">
        <CardInner project={project} index={index} />
      </div>
    </li>
  );
};

const ProjectList = () => {
  const lead = projects.filter((p) => p.tier === "lead");
  const secondary = projects.filter((p) => p.tier === "secondary");

  return (
    <section className="font-mono text-ink">
      <div className="marker font-display">quest log</div>

      <div
        className="flex flex-col"
        style={{ marginTop: "var(--space-md)", gap: "var(--space-lg)" }}
      >
        <div className="flex flex-col" style={{ gap: "var(--space-md)" }}>
          <span className="tag">featured</span>
          <ul
            className="flex list-none flex-col"
            style={{ gap: "var(--space-md)" }}
          >
            {lead.map((project, i) => (
              <ProjectCard key={project.name} project={project} index={i} />
            ))}
          </ul>
        </div>

        <div className="flex flex-col" style={{ gap: "var(--space-md)" }}>
          <span className="tag">also built</span>
          <ul
            className="flex list-none flex-col"
            style={{ gap: "var(--space-md)" }}
          >
            {secondary.map((project, i) => (
              <ProjectCard
                key={project.name}
                project={project}
                index={lead.length + i}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProjectList;
