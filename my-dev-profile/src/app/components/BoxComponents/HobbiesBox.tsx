interface Hobby {
  hobby: string;
}

interface HobbiesBoxProps {
  hobbies: Hobby[];
}

const HobbiesBox = ({ hobbies }: HobbiesBoxProps) => {
  return (
    <section>
      <h1>Hobbies</h1>
      <span>
        {hobbies.map(({ hobby }) => (
          <li key={hobby}>{hobby}</li>
        ))}
      </span>
    </section>
  );
};

export default HobbiesBox;
