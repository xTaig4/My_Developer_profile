import React, { useEffect, useRef, useState } from "react";

const DISTANCE = 150; // px
const RESET_DELAY = 2000; // ms

interface EscapeButtonProps {
  text?: string;
}

export default function EscapeButton({ text }: EscapeButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [transform, setTransform] = useState<string>("");
  const reducedMotionRef = useRef<boolean>(false);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    reducedMotionRef.current = mq.matches;
    const onChange = (e: MediaQueryListEvent) => {
      reducedMotionRef.current = e.matches;
      if (e.matches) setTransform("");
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reducedMotionRef.current) return;

    const btn = buttonRef.current;
    if (!btn) return;

    const rect = btn.getBoundingClientRect();
    const btnX = rect.left + rect.width / 2;
    const btnY = rect.top + rect.height / 2;

    const dx = e.clientX - btnX;
    const dy = e.clientY - btnY;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < DISTANCE) {
      // Move away in the opposite direction of the mouse
      const angle = Math.atan2(dy, dx);
      const moveX = -Math.cos(angle) * DISTANCE;
      const moveY = -Math.sin(angle) * DISTANCE;
      setTransform(`translate(${moveX * 2}px, ${moveY * 2}px)`);

      // Reset after delay
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setTransform(""), RESET_DELAY);
    }
  };

  return (
    <div onMouseMove={handleMouseMove}>
      <button
        type="button"
        ref={buttonRef}
        className="btn btn--ghost btn--sm"
        style={{
          transform,
          transition: "transform 120ms ease-out, opacity 80ms ease-out",
        }}
      >
        {text === "" ? "no" : text}
      </button>
    </div>
  );
}
