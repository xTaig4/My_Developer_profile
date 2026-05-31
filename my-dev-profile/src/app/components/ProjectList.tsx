"use client";

import React from "react";
import Image from "next/image";

const ProjectList = () => {
  const projects = [
    {
      name: "My Developer Profile",
      description:
        "My second upcoming profile website showcasing my skills, projects, and contact information.",
      image:
        "https://raw.githubusercontent.com/xTaig4/BlueSky-Profile-project/refs/heads/main/public/screenshots/demo_shot.JPG",
      link: "https://blue-sky-profile-project.vercel.app",
    },
    {
      name: "Kanji Tales",
      description:
        "A webapp where users kan add kanji, they have learned and generate short stories or sentence of",
      image:
        "https://raw.githubusercontent.com/xTaig4/KanjiTales/refs/heads/main/kanji_tales/public/KanjiTales.JPG",
      link: "https://github.com/xTaig4/KanjiTales",
    },
    {
      name: "Weeb Words",
      description:
        "Weeb Words is a sleek and minimalist anime quote web app where users can view, filter, and submit inspirational, emotional, or funny quotes from popular anime characters.",
      image:
        "https://raw.githubusercontent.com/xTaig4/WeebWords_v2/refs/heads/main/weeb-words/Screenshots/QuoteWeb.JPG",
      link: "https://github.com/xTaig4/WeebWords_v2",
    },
    {
      name: "QuotesAPI",
      description:
        "A RESTful API for fetching random quotes. Used in Weeb Words web app.",
      image:
        "https://raw.githubusercontent.com/xTaig4/QuotesAPI/refs/heads/main/image_2025-09-30_160812512.png",
      link: "https://github.com/xTaig4/QuotesAPI",
    },
    {
      name: "Runaway",
      description:
        "Runaway is a simple, addictive game inspired by the classic Flappy Bird. The goal is to guide your character through obstacles, achieving the highest possible score.",
      image:
        "https://raw.githubusercontent.com/xTaig4/Runaway/refs/heads/main/Assets/Screenshots/RunawayGame.JPG",
      link: "https://github.com/xTaig4/Runaway",
    },
  ];

  return (
    <div
      className="panel hide-scrollbar font-mono text-ink lg:h-200 lg:w-95 lg:overflow-y-auto"
      style={{ direction: "ltr" }}
    >
      <div className="marker font-display">projects</div>

      <ul
        className="flex flex-col"
        style={{ marginTop: "var(--space-md)", gap: "var(--space-md)" }}
      >
        {projects.map((project, i) => (
          <li key={project.name}>
            <div
              className="panel--inset flex cursor-pointer flex-col bg-surface transition-colors hover:bg-surface-2"
              onClick={() => {
                if (project.link) {
                  window.open(project.link);
                }
              }}
              style={{ cursor: project.link ? "pointer" : "default" }}
            >
              <div
                className="flex items-baseline"
                style={{ gap: "var(--space-sm)" }}
              >
                <span
                  className="text-ink-faint"
                  style={{ fontSize: "var(--type-2xs)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className="font-display text-ink"
                  style={{ fontSize: "var(--type-base)" }}
                >
                  {project.name}
                </span>
              </div>

              <div
                className="overflow-hidden border border-border"
                style={{
                  marginTop: "var(--space-sm)",
                  borderRadius: "2px",
                }}
              >
                <Image
                  src={project.image}
                  alt={project.name}
                  width={300}
                  height={200}
                  className="h-30 w-full object-cover"
                />
              </div>

              <p
                className="text-ink-muted"
                style={{
                  marginTop: "var(--space-sm)",
                  fontSize: "var(--type-sm)",
                }}
              >
                {project.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;
