"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const TopBar = () => {
  const pathname = usePathname();
  const onHome = pathname === "/";
  const onContact = pathname === "/pages/Contact";

  return (
    <header className="sticky top-0 z-30 border-b border-border bg-surface">
      <nav
        aria-label="Primary"
        className="mx-auto flex items-center justify-between"
        style={{
          maxWidth: "72rem",
          minHeight: "3rem",
          paddingInline: "var(--space-md)",
          gap: "var(--space-md)",
        }}
      >
        {/* wordmark = home */}
        <Link
          href="/"
          aria-current={onHome ? "page" : undefined}
          aria-label="Home"
          className={`flex items-center font-display transition-opacity duration-[80ms] hover:opacity-80 ${onHome ? "text-accent" : "text-ink"}`}
          style={{
            fontSize: "var(--type-sm)",
            letterSpacing: "0.04em",
            minHeight: "44px",
          }}
        >
          <span className="text-ink-faint">[&nbsp;</span>
          tai-nguyen
          <span className="text-ink-faint">&nbsp;]</span>
        </Link>

        {/* nav + reach */}
        <div className="flex items-center" style={{ gap: "var(--space-sm)" }}>
          <Link
            href="/pages/Contact"
            aria-current={onContact ? "page" : undefined}
            className={`flex items-center font-mono uppercase transition-opacity duration-[80ms] hover:text-ink ${onContact ? "text-accent" : "text-ink-muted"}`}
            style={{
              fontSize: "var(--type-xs)",
              letterSpacing: "0.08em",
              minHeight: "44px",
              padding: "0 var(--space-xs)",
            }}
          >
            contact
          </Link>

          <a
            href="mailto:hidden@example.com"
            className="hidden items-center font-mono uppercase text-ink-muted transition-opacity duration-[80ms] hover:text-ink sm:flex"
            style={{
              fontSize: "var(--type-xs)",
              letterSpacing: "0.08em",
              minHeight: "44px",
              padding: "0 var(--space-xs)",
            }}
          >
            email
          </a>

          <span
            aria-hidden="true"
            className="text-ink-faint"
            style={{ fontSize: "var(--type-xs)" }}
          >
            ·
          </span>

          <a
            href="https://www.linkedin.com/in/tai-nguyen-452753235/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex items-center justify-center opacity-70 transition-opacity duration-[80ms] hover:opacity-100"
            style={{ minHeight: "44px", minWidth: "44px" }}
          >
            <Image src="/linkedin.svg" alt="" width={18} height={18} />
          </a>
          <a
            href="https://github.com/xTaig4"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex items-center justify-center opacity-70 transition-opacity duration-[80ms] hover:opacity-100"
            style={{ minHeight: "44px", minWidth: "44px" }}
          >
            <Image src="/github.svg" alt="" width={18} height={18} />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default TopBar;
