"use client";

import React from "react";

const SkillsBox = () => {
  const skills = [
    { name: "C#", rating: 5 },
    { name: "ASP.NET", rating: 4 },
    { name: "Docker", rating: 3 },
    { name: "TypeScript", rating: 4 },
    { name: "HTML, CSS", rating: 5 },
    { name: "React", rating: 5 },
    { name: "Next.js", rating: 4 },
    { name: "Tailwind CSS", rating: 5 },
  ];
  return (
    <div className="font-mono" style={{ padding: "var(--space-md)" }}>
      <div className="marker font-display" style={{ marginBottom: "var(--space-lg)" }}>
        skills
      </div>
      <div
        className="grid max-w-3xl grid-cols-1 md:grid-cols-2"
        style={{ columnGap: "var(--space-xl)", rowGap: "var(--space-sm)" }}
      >
        {skills.map((skill) => (
          <div
            className="flex items-center"
            key={skill.name}
            style={{ gap: "var(--space-md)" }}
          >
            <span
              className="text-ink"
              style={{
                fontSize: "var(--type-sm)",
                width: "8rem",
                flexShrink: 0,
              }}
            >
              {skill.name}
            </span>
            <div
              className="progress"
              style={{ ["--value" as string]: (skill.rating / 5) * 100 }}
              aria-label={`${skill.name} ${skill.rating} of 5`}
            />
            <span
              className="text-ink-muted"
              style={{ fontSize: "var(--type-2xs)", flexShrink: 0 }}
            >
              {skill.rating}/5
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsBox;
