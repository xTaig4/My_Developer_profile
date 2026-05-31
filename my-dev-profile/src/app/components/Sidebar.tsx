"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { href: "/", label: "home" },
  { href: "/pages/Contact", label: "contact" },
];

const Sidebar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleResize = () => {
      // Show sidebar on 2xl and larger screens
      setIsVisible(window.innerWidth >= 1536);
    };

    // Set initial state based on current screen width
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={`bg-surface border-border fixed top-0 left-0 z-10 flex h-screen w-29 transform flex-col border-r font-mono transition-all duration-150 ${
        isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
      }`}
    >
      <nav
        className="flex flex-col"
        style={{ marginTop: "var(--space-2xl)" }}
      >
        <div
          className="marker"
          style={{
            paddingInline: "var(--space-sm)",
            marginBottom: "var(--space-sm)",
          }}
        >
          nav
        </div>
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive ? "page" : undefined}
              className={`flex h-7 items-center font-mono uppercase transition-opacity duration-75 hover:text-ink ${
                isActive ? "text-accent" : "text-ink-muted"
              }`}
              style={{
                paddingInline: "var(--space-sm)",
                fontSize: "var(--type-xs)",
                letterSpacing: "0.08em",
              }}
            >
              <span
                aria-hidden="true"
                className={isActive ? "text-accent" : "text-ink-faint"}
                style={{ marginRight: "var(--space-xs)" }}
              >
                {isActive ? "[•]" : "[ ]"}
              </span>
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div
        className="border-border mt-auto flex flex-row items-center border-t"
        style={{
          gap: "var(--space-md)",
          padding: "var(--space-sm) var(--space-sm)",
        }}
      >
        <Link
          href="https://www.linkedin.com/in/tai-nguyen-452753235/"
          target="_blank"
          rel="noopener noreferrer"
          className="opacity-70 transition-opacity duration-75 hover:opacity-100"
          aria-label="LinkedIn"
        >
          <Image src="/linkedin.svg" alt="LinkedIn" width={20} height={20} />
        </Link>
        <Link
          href="https://github.com/xTaig4"
          target="_blank"
          rel="noopener noreferrer"
          className="opacity-70 transition-opacity duration-75 hover:opacity-100"
          aria-label="GitHub"
        >
          <Image src="/github.svg" alt="GitHub" width={20} height={20} />
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
