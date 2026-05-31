interface Trait {
  trait: string;
}

interface TraitsBoxProps {
  traits: Trait[];
}

const TraitsBox = ({ traits }: TraitsBoxProps) => {
  return (
    <section className="font-mono text-ink">
      <div className="marker font-display">traits</div>
      {traits.length === 0 ? (
        <p
          className="text-ink-muted"
          style={{ fontSize: "var(--type-sm)", marginTop: "var(--space-md)" }}
        >
          0 traits.
        </p>
      ) : (
        <ul
          className="list-none"
          style={{ marginTop: "var(--space-md)" }}
        >
          {traits.map(({ trait }) => (
            <li
              key={trait}
              className="flex gap-[var(--space-sm)] text-ink"
              style={{
                fontSize: "var(--type-sm)",
                paddingTop: "var(--space-3xs)",
                paddingBottom: "var(--space-3xs)",
              }}
            >
              <span className="text-accent select-none" aria-hidden="true">
                &gt;
              </span>
              <span>{trait}</span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default TraitsBox;
