interface Hobby {
  hobby: string;
}

interface HobbiesBoxProps {
  hobbies: Hobby[];
}

const HobbiesBox = ({ hobbies }: HobbiesBoxProps) => {
  return (
    <section className="text-ink">
      <div className="marker font-display">hobbies</div>
      {hobbies.length === 0 ? (
        <p
          className="text-ink-muted"
          style={{ marginTop: "var(--space-sm)", fontSize: "var(--type-sm)" }}
        >
          0 items.
        </p>
      ) : (
        <ul
          className="list-none"
          style={{
            margin: 0,
            padding: 0,
            marginTop: "var(--space-sm)",
            display: "flex",
            flexDirection: "column",
            gap: "var(--space-xs)",
          }}
        >
          {hobbies.map(({ hobby }) => (
            <li
              key={hobby}
              className="text-ink"
              style={{
                display: "flex",
                gap: "var(--space-xs)",
                fontSize: "var(--type-sm)",
              }}
            >
              <span className="text-ink-faint" aria-hidden="true">
                &gt;
              </span>
              <span>{hobby}</span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default HobbiesBox;
