"use client";

import React from "react";

interface ContactCardProps {
  name: string;
  email: string;
  phone: string;
}

const ContactCard: React.FC<ContactCardProps> = ({ name, email, phone }) => {
  return (
    <div className="panel" style={{ width: "20rem" }}>
      <div
        className="marker font-display"
        style={{ marginBottom: "var(--space-md)" }}
      >
        contact
      </div>

      <h1
        className="font-display text-ink"
        style={{
          fontSize: "var(--type-lg)",
          letterSpacing: "-0.01em",
          marginBottom: "var(--space-md)",
        }}
      >
        {name}
      </h1>

      <dl style={{ display: "grid", gap: "var(--space-sm)", margin: 0 }}>
        <div style={{ display: "grid", gap: "var(--space-3xs)" }}>
          <dt>
            <span className="tag">email</span>
          </dt>
          <dd
            className="text-ink"
            style={{ margin: 0, fontSize: "var(--type-sm)" }}
          >
            {email}
          </dd>
        </div>

        <div style={{ display: "grid", gap: "var(--space-3xs)" }}>
          <dt>
            <span className="tag">phone</span>
          </dt>
          <dd
            className="text-ink"
            style={{ margin: 0, fontSize: "var(--type-sm)" }}
          >
            {phone}
          </dd>
        </div>
      </dl>
    </div>
  );
};

export default ContactCard;
