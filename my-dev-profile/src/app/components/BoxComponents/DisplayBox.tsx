import React, { useState } from "react";
import ProfileBox from "../ProfileBox";
import SkillsBox from "./SkillsBox";
import { JSX } from "react";

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
      <div className="flex flex-row">
        <button
          onClick={() =>
            setContainerIndex((prev) =>
              prev > 0 ? prev - 1 : containers.length - 1,
            )
          }
          className="left-150 flex h-7 w-10 items-center justify-center border-1 p-1 text-3xl hover:bg-gray-600"
        >
          ←
        </button>
        <button
          onClick={() =>
            setContainerIndex((prev) =>
              prev < containers.length - 1 ? prev + 1 : 0,
            )
          }
          className="right-96 flex h-7 w-10 items-center justify-center border-1 p-1 text-3xl hover:bg-gray-600"
        >
          →
        </button>
      </div>
    </div>
  );
};

export default DisplayBox;
