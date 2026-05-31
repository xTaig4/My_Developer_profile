"use client";

import React from "react";

const ProfileBox = () => {
  return (
    <section
      className="flex flex-col text-ink"
      style={{ gap: "var(--space-md)", padding: "var(--space-md)" }}
    >
      <div className="marker font-display">developer record</div>

      <div className="flex flex-wrap items-center" style={{ gap: "var(--space-xs)" }}>
        <span className="tag">stack</span>
        <span className="text-ink-muted" style={{ fontSize: "var(--type-2xs)" }}>
          frontend · backend · infra
        </span>
      </div>

      <p
        className="text-ink"
        style={{ fontSize: "var(--type-base)", lineHeight: 1.6, maxWidth: "62ch" }}
      >
        Full-stack developer working across the frontend and backend boundary.
        Frontend: React, TypeScript, Next.js, and Tailwind CSS. Backend:
        ASP.NET and C#, building RESTful services, Entity Framework data
        access, and SQL databases. Containerizes and ships with Docker. Favors
        precision, maintainability, and clear system boundaries over cleverness.
        Continuously learning, takes ownership, and delivers solutions built to
        hold under load.
      </p>
    </section>
  );
};

export default ProfileBox;
