import React, { useState } from "react";
import ProfileBox from "../ProfileBox";
import SkillsBox from "./SkillsBox";
import { JSX } from "react";

import ArrowButtons from "../ArrowButtons";

const DisplayBox = () => {
  const containers: { name: string; content: JSX.Element }[] = [
    {
      name: "Profile",
      content: <ProfileBox />,
    },
    {
      name: "Skills",
      content: <SkillsBox />,
    },
  ];

  const [containerIndex, setContainerIndex] = useState(0);

  const current = containers[containerIndex];
  const pad = (n: number) => String(n + 1).padStart(2, "0");

  return (
    <div className="panel w-full max-w-200" style={{ padding: "var(--space-lg)" }}>
      <div
        className="flex items-center justify-between border-b border-border"
        style={{ paddingBottom: "var(--space-sm)", gap: "var(--space-md)" }}
      >
        <div
          className="flex flex-wrap items-center"
          style={{ gap: "var(--space-sm)" }}
        >
          {containers.map((c, i) => (
            <span
              key={c.name}
              className={`tag ${i === containerIndex ? "text-accent" : "text-ink-faint"}`}
            >
              {c.name}
            </span>
          ))}
        </div>
        <span
          className="font-mono text-ink-muted"
          style={{ fontSize: "var(--type-2xs)", letterSpacing: "0.08em" }}
        >
          {pad(containerIndex)} / {pad(containers.length - 1)}
        </span>
      </div>

      <section
        className="text-ink"
        style={{ paddingTop: "var(--space-lg)", paddingBottom: "var(--space-lg)" }}
      >
        {current.content}
      </section>

      <div
        className="flex items-center justify-between border-t border-border"
        style={{ paddingTop: "var(--space-sm)" }}
      >
        <ArrowButtons
          collection={containers.map((c) => c.name)}
          currentIndex={containerIndex}
          onIndexChange={setContainerIndex}
          classNameLeft="btn btn--ghost btn--icon"
          classNameRight="btn btn--ghost btn--icon"
        />
      </div>
    </div>
  );
};

export default DisplayBox;
