"use client";

import React from "react";

interface SkillGroup {
  label: string;
  skills: string[];
}

const GROUPS: SkillGroup[] = [
  {
    label: "ai & automation",
    skills: [
      "Claude API",
      "Prompt Engineering",
      "AI Agents",
      "LLM Integration",
      "ElevenLabs",
      "Mistral",
      "Claude Code",
    ],
  },
  {
    label: "frontend",
    skills: ["TypeScript", "React", "Next.js", "React Native", "Tailwind", "HTML / CSS"],
  },
  {
    label: "backend & infra",
    skills: [
      "C#",
      "ASP.NET",
      "Node.js",
      "Rust",
      "Inngest",
      "Supabase",
      "SQL / SQLite",
      "Docker",
      "Vercel",
    ],
  },
  {
    label: "integrations & quality",
    skills: [
      "Twilio",
      "Stripe",
      "Clerk",
      "OAuth 2.0 / PKCE",
      "HMAC",
      "Zod",
      "Vitest",
      "Playwright",
    ],
  },
];

const SkillsBox = () => {
  return (
    <section className="font-mono text-ink">
      <div className="marker font-display">abilities</div>

      <div
        className="flex flex-col"
        style={{ marginTop: "var(--space-md)", gap: "var(--space-lg)" }}
      >
        {GROUPS.map((group) => (
          <div
            key={group.label}
            className="flex flex-col"
            style={{ gap: "var(--space-sm)" }}
          >
            <span className="tag">{group.label}</span>
            <ul
              className="flex list-none flex-wrap"
              style={{ gap: "var(--space-xs)" }}
            >
              {group.skills.map((skill) => (
                <li key={skill} className="chip">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsBox;
