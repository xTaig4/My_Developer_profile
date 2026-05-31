"use client";

import ProjectList from "@/app/components/ProjectList";
import HobbiesBox from "@/app/components/BoxComponents/HobbiesBox";
import TraitsBox from "@/app/components/BoxComponents/TraitsBox";
import DisplayBox from "@/app/components/BoxComponents/DisplayBox";
import ProfileImageBox from "@/app/components/BoxComponents/ProfileImageBox";

const ProfilePage = () => {
  const stats = [
    { stat: "Coding Strength", fillPercent: 90 },
    { stat: "Coding Speed", fillPercent: 75 },
    { stat: "Debugging Skills", fillPercent: 83 },
    { stat: "Charisma", fillPercent: 66 },
    { stat: "Braincells", fillPercent: 10 },
  ];

  const traits = [
    { trait: "Chill" },
    { trait: "Resilient" },
    { trait: "Team player" },
    { trait: "Weirdo" },
    { trait: "Certified nerd" },
    { trait: "Naruto fanboi" },
  ];

  const hobbies = [
    { hobby: "Gaming" },
    { hobby: "Coding" },
    { hobby: "Reading" },
    { hobby: "Pour-over Coffee" },
    { hobby: "Doodle" },
  ];

  return (
    <div
      className="min-h-lvh bg-app font-mono text-ink"
      style={{ padding: "var(--space-xl)" }}
    >
      <div
        className="flex flex-col 2xl:ml-40"
        style={{ gap: "var(--space-2xl)", maxWidth: "72rem" }}
      >
        {/* TOP: Stats / Traits / Hobbies + Profile image */}
        <div
          className="flex flex-col lg:flex-row"
          style={{ gap: "var(--space-2xl)" }}
        >
          {/* LEFT COLUMN: Stats + Traits + Hobbies */}
          <div
            className="flex flex-1 flex-col"
            style={{ gap: "var(--space-2xl)" }}
          >
            <section className="flex flex-col" style={{ gap: "var(--space-md)" }}>
              <div className="marker">stats</div>
              <div className="flex flex-col" style={{ gap: "var(--space-md)" }}>
                {stats.map(({ stat, fillPercent }, i) => (
                  <div
                    key={stat}
                    className="flex flex-col"
                    style={{ gap: "var(--space-xs)" }}
                  >
                    <div
                      className="flex items-baseline justify-between"
                      style={{ gap: "var(--space-md)" }}
                    >
                      <span
                        className="text-ink"
                        style={{ fontSize: "var(--type-sm)" }}
                      >
                        <span className="text-ink-faint">
                          {String(i + 1).padStart(2, "0")}
                        </span>{" "}
                        {stat}
                      </span>
                      <span
                        className="text-ink-muted"
                        style={{ fontSize: "var(--type-2xs)" }}
                      >
                        {fillPercent} / 100
                      </span>
                    </div>
                    <div
                      className="progress"
                      style={{ "--value": fillPercent } as React.CSSProperties}
                    />
                  </div>
                ))}
              </div>
            </section>

            {/* Traits + Hobbies */}
            <div
              className="flex flex-col sm:flex-row"
              style={{ gap: "var(--space-2xl)" }}
            >
              <TraitsBox traits={traits} />
              <HobbiesBox hobbies={hobbies} />
            </div>
          </div>

          {/* RIGHT: Profile Image */}
          <div className="flex-shrink-0">
            <ProfileImageBox />
          </div>
        </div>

        {/* BOTTOM: Display + Projects */}
        <div className="flex flex-col" style={{ gap: "var(--space-2xl)" }}>
          <DisplayBox />
          <ProjectList />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
