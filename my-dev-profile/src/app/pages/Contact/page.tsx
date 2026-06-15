"use client";
import React from "react";
import ContactCard from "@/app/components/ContactCard";
import EscapeButton from "@/app/components/EscapeButton";
import { useState } from "react";

const ContactPage = () => {
  const [showCard, setShowCard] = useState(false);

  return (
    <main
      className="flex min-h-[calc(100lvh-3rem)] flex-col bg-app text-ink"
      style={{ padding: "var(--space-xl)", gap: "var(--space-lg)" }}
    >
      <div className="marker font-display">contact</div>

      <p
        className="text-ink-muted"
        style={{ fontSize: "var(--type-sm)", maxWidth: "62ch" }}
      >
        End of profile. Acknowledge to reveal contact record, or decline.
      </p>

      <div className="flex flex-row items-center" style={{ gap: "var(--space-md)" }}>
        <button
          type="button"
          className="btn btn--accent btn--sm"
          aria-pressed={showCard}
          onClick={() => setShowCard(!showCard)}
        >
          [ ACK ]
        </button>
        <EscapeButton text="[ DECLINE ]" />
      </div>

      {showCard && (
        <div
          className="flex flex-col"
          style={{ gap: "var(--space-md)", maxWidth: "62ch" }}
        >
          <span className="tag">record unlocked</span>
          <p className="text-ink-muted" style={{ fontSize: "var(--type-sm)" }}>
            Open to questions, feedback, or hiring inquiries.
          </p>
          <ContactCard
            name="Tai Nguyen"
            email="dummyMail@gmail.com"
            phone="(+45) 00 00 00 00"
          />
        </div>
      )}
    </main>
  );
};

export default ContactPage;
