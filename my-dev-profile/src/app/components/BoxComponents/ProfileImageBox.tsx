import Image from "next/image";
import { useState } from "react";
import ArrowButton from "../ArrowButtons";

const ProfileImageBox = () => {
  const [filterIndex, setFilterIndex] = useState(0);
  const filters: string[] = [
    "",
    "beard1.png",
    "master.png",
    "sunglass_cigar.png",
  ];
  const overlayNames: string[] = ["none", "beard", "master", "sunglass"];

  const index = String(filterIndex + 1).padStart(2, "0");
  const total = String(filters.length).padStart(2, "0");

  return (
    <div
      className="panel flex w-full max-w-90 flex-col lg:w-90"
      style={{ padding: "var(--space-sm)", gap: "var(--space-sm)" }}
    >
      <div className="marker font-display">avatar</div>

      <div className="relative overflow-hidden border border-border bg-inset">
        <Image
          width={360}
          height={480}
          src="/profile_pic.png"
          alt="Profile"
          className="w-full object-cover"
        />
        {filters[filterIndex] !== "" && (
          <Image
            width={360}
            height={480}
            src={`/${filters[filterIndex]}`}
            alt="current overlay"
            className="absolute inset-0 z-0 w-90 object-cover"
          />
        )}
      </div>

      <div
        className="flex items-center justify-between"
        style={{ gap: "var(--space-sm)" }}
      >
        <div
          className="flex items-baseline"
          style={{ gap: "var(--space-xs)" }}
        >
          <span className="tag">overlay</span>
          <span
            className="text-accent"
            style={{ fontSize: "var(--type-sm)" }}
          >
            {overlayNames[filterIndex]}
          </span>
          <span
            className="text-ink-faint"
            style={{ fontSize: "var(--type-2xs)" }}
          >
            {index} / {total}
          </span>
        </div>

        <ArrowButton
          classNameLeft="btn btn--ghost btn--icon btn--sm"
          classNameRight="btn btn--ghost btn--icon btn--sm"
          collection={filters}
          currentIndex={filterIndex}
          onIndexChange={setFilterIndex}
        />
      </div>
    </div>
  );
};

export default ProfileImageBox;
