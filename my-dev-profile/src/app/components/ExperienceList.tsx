import React from "react";

interface Role {
  company: string;
  role: string;
  dates: string;
  bullets: string[];
}

const ROLES: Role[] = [
  {
    company: "Kvik.pro",
    role: "Intern, now acting CTO & AI developer",
    dates: "Mar 2026 – present",
    bullets: [
      "Co-developed Kvik, a Danish AI bookkeeping assistant that lets tradespeople, including people with dyslexia, manage their accounting just by speaking or texting, from the ElevenLabs voice agent through to the Dinero accounting API integration.",
      "Took shared responsibility for the full infrastructure and now lead the technical direction as the team's acting CTO.",
      "Built a human-in-the-loop SMS confirmation so the AI never takes an irreversible action without explicit user consent, and worked on multi-tenant security (token encryption, OAuth / PKCE).",
      "Built durable customer workflows in Inngest with Stripe payment automation, using the Claude API, prompt engineering, and Claude Code daily.",
    ],
  },
  {
    company: "Cego",
    role: "Intern",
    dates: "Jan – Jun 2024",
    bullets: [
      "Built a prototype game in Unity and a distributed microservice system as the main project.",
    ],
  },
  {
    company: "AATE VR",
    role: "Intern / volunteer",
    dates: "Aug – Dec 2022",
    bullets: ["Unity programmer developing VR simulation scenarios."],
  },
];

const ExperienceList = () => {
  return (
    <section className="font-mono text-ink">
      <div className="marker font-display">campaign log</div>

      <ol
        className="flex list-none flex-col"
        style={{ marginTop: "var(--space-md)", gap: "var(--space-xl)" }}
      >
        {ROLES.map((r) => (
          <li key={r.company} className="flex flex-col" style={{ gap: "var(--space-sm)" }}>
            <div
              className="flex flex-wrap items-baseline justify-between"
              style={{ gap: "var(--space-xs) var(--space-md)" }}
            >
              <div
                className="flex flex-wrap items-baseline"
                style={{ gap: "var(--space-xs) var(--space-sm)" }}
              >
                <span
                  className="font-display text-ink"
                  style={{ fontSize: "var(--type-base)" }}
                >
                  {r.company}
                </span>
                <span
                  className="text-ink-muted"
                  style={{ fontSize: "var(--type-sm)" }}
                >
                  {r.role}
                </span>
              </div>
              <span
                className="flex-shrink-0 text-ink-muted tabular-nums"
                style={{ fontSize: "var(--type-2xs)", letterSpacing: "0.04em" }}
              >
                {r.dates}
              </span>
            </div>

            <ul className="flex list-none flex-col" style={{ gap: "var(--space-xs)" }}>
              {r.bullets.map((b, i) => (
                <li
                  key={i}
                  className="flex text-ink-muted"
                  style={{ gap: "var(--space-sm)", fontSize: "var(--type-sm)", lineHeight: 1.55 }}
                >
                  <span className="flex-shrink-0 text-ink-faint select-none" aria-hidden="true">
                    &gt;
                  </span>
                  <span style={{ maxWidth: "66ch", textWrap: "pretty" }}>{b}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default ExperienceList;
