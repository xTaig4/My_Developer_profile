import ProfileImageBox from "./BoxComponents/ProfileImageBox";

interface ProfileHeaderProps {
  name: string;
  classLine: string;
  location: string;
  status: string;
  oneLiner: string;
  record: string;
  stack: string[];
}

const ProfileHeader = ({
  name,
  classLine,
  location,
  status,
  oneLiner,
  record,
  stack,
}: ProfileHeaderProps) => {
  return (
    <header className="flex flex-col" style={{ gap: "var(--space-lg)" }}>
      <div className="marker font-display">character sheet</div>

      <div
        className="flex flex-col lg:flex-row lg:items-start"
        style={{ gap: "var(--space-xl)" }}
      >
        {/* IDENTITY */}
        <div
          className="flex min-w-0 flex-1 flex-col"
          style={{ gap: "var(--space-md)" }}
        >
          <h1
            className="font-display text-ink"
            style={{
              fontSize: "var(--type-2xl)",
              lineHeight: 1.1,
              letterSpacing: "-0.01em",
              textWrap: "balance",
            }}
          >
            {name}
          </h1>

          {/* class · location · status — the readout line */}
          <div
            className="flex flex-wrap items-center"
            style={{ gap: "var(--space-sm) var(--space-md)" }}
          >
            <span className="text-ink" style={{ fontSize: "var(--type-sm)" }}>
              <span className="text-ink-muted">class</span>
              {"  "}
              {classLine}
            </span>
            <span className="text-ink" style={{ fontSize: "var(--type-sm)" }}>
              <span className="text-ink-muted">loc</span>
              {"  "}
              {location}
            </span>
            <span className="pill pill--ok" aria-label={`status: ${status}`}>
              {status}
            </span>
          </div>

          {/* reach — direct contact, available on every viewport */}
          <div
            className="flex flex-wrap items-center"
            style={{ gap: "var(--space-xs) var(--space-sm)" }}
          >
            <span className="tag">reach</span>
            <a
              href="mailto:hidden@example.com"
              className="text-ink-muted transition-opacity duration-[80ms] hover:text-ink"
              style={{ fontSize: "var(--type-sm)" }}
            >
              email
            </a>
            <span className="text-ink-faint" aria-hidden="true">
              ·
            </span>
            <a
              href="https://www.linkedin.com/in/tai-nguyen-452753235/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-muted transition-opacity duration-[80ms] hover:text-ink"
              style={{ fontSize: "var(--type-sm)" }}
            >
              LinkedIn
            </a>
            <span className="text-ink-faint" aria-hidden="true">
              ·
            </span>
            <a
              href="https://github.com/xTaig4"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-muted transition-opacity duration-[80ms] hover:text-ink"
              style={{ fontSize: "var(--type-sm)" }}
            >
              GitHub
            </a>
          </div>

          {/* one-liner — the hook */}
          <p
            className="text-ink"
            style={{
              fontSize: "var(--type-md)",
              lineHeight: 1.45,
              maxWidth: "60ch",
              textWrap: "pretty",
            }}
          >
            {oneLiner}
          </p>

          {/* stack chip row */}
          <div
            className="flex flex-wrap items-center"
            style={{ gap: "var(--space-xs) var(--space-sm)" }}
          >
            <span className="tag">stack</span>
            {stack.map((s) => (
              <span
                key={s}
                className="text-ink-muted"
                style={{ fontSize: "var(--type-xs)" }}
              >
                {s}
              </span>
            ))}
          </div>

          {/* record — expanded context */}
          <p
            className="text-ink-muted"
            style={{
              fontSize: "var(--type-sm)",
              lineHeight: 1.6,
              maxWidth: "64ch",
              textWrap: "pretty",
            }}
          >
            {record}
          </p>
        </div>

        {/* AVATAR */}
        <div className="flex-shrink-0">
          <ProfileImageBox />
        </div>
      </div>
    </header>
  );
};

export default ProfileHeader;
