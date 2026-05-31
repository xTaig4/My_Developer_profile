"use client";

import { useEffect, useState } from "react";

type Theme = "moss" | "midnight" | "vellum";

const THEMES: { id: Theme; label: string }[] = [
  { id: "moss", label: "MOSS" },
  { id: "midnight", label: "MIDNT" },
  { id: "vellum", label: "VLLM" },
];

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("moss");

  // Sync from the attribute the no-flash script already set.
  useEffect(() => {
    const current = document.documentElement.dataset.theme as Theme | undefined;
    if (current === "moss" || current === "midnight" || current === "vellum") {
      setTheme(current);
    }
  }, []);

  function apply(next: Theme) {
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* ignore persistence errors */
    }
    setTheme(next);
  }

  return (
    <div
      className="fixed right-3 bottom-3 z-50 flex items-center gap-2 font-mono select-none"
      style={{ fontSize: "var(--type-2xs)", letterSpacing: "0.08em" }}
      aria-label="Theme"
    >
      {THEMES.map((t, i) => (
        <span key={t.id} className="flex items-center gap-2">
          {i > 0 && <span className="text-ink-faint">·</span>}
          <button
            type="button"
            onClick={() => apply(t.id)}
            aria-pressed={theme === t.id}
            className={
              theme === t.id
                ? "text-accent"
                : "text-ink-muted hover:text-ink transition-opacity duration-[80ms]"
            }
            style={{ letterSpacing: "0.08em" }}
          >
            {t.label}
          </button>
        </span>
      ))}
    </div>
  );
}
