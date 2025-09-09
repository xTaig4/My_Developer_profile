import React, { useRef, useState } from "react";
import Image from "next/image";

const DISTANCE = 150; // px
const RESET_DELAY = 2000; // ms

interface EscapeButtonProps {
  text?: string;
}

export default function EscapeButton({ text }: EscapeButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [transform, setTransform] = useState<string>("");

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
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
    <div className="" onMouseMove={handleMouseMove}>
      <button
        ref={buttonRef}
        className="relative bg-button text-button-text font-bold px-4 py-2 rounded transition-transform duration-200"
        style={{ transform }}
      >
        {text === "" ? (
          <Image
            width={40}
            height={32}
            src="/thumbs-down.svg"
            alt="Escape Button"
            className="w-10 h-8 -scale-x-100"
          />
        ) : (
          text
        )}
      </button>
    </div>
  );
}
