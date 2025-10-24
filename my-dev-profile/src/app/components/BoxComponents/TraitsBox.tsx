interface Trait {
  trait: string;
}

interface TraitsBoxProps {
  traits: Trait[];
}

const TraitsBox = ({ traits }: TraitsBoxProps) => {
  return (
    <section>
      <h1>Traits</h1>
      <span>
        {traits.map(({ trait }) => (
          <li key={trait}>{trait}</li>
        ))}
      </span>
    </section>
  );
};

export default TraitsBox;
