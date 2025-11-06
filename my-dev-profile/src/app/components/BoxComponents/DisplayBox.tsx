import React, { useState } from "react";
import ProfileBox from "../ProfileBox";
import SkillsBox from "./SkillsBox";
import { JSX } from "react";

import ArrowButtons from "../ArrowButtons";

const DisplayBox = () => {
  const containers: { name: string; content: JSX.Element }[] = [
    {
      name: "Profile",
      content: <ProfileBox />,
    },
    {
      name: "Skills",
      content: <SkillsBox />,
    },
  ];

  const [containerIndex, setContainerIndex] = useState(0);
  return (
    <div className="border-text flex h-80 w-200 flex-col items-center justify-center border-1 p-4">
      <section>{containers[containerIndex].content}</section>
      <div>
        <ArrowButtons
          collection={containers.map((c) => c.name)}
          currentIndex={containerIndex}
          onIndexChange={setContainerIndex}
          classNameLeft=""
          classNameRight=""
        />
      </div>
    </div>
  );
};

export default DisplayBox;
