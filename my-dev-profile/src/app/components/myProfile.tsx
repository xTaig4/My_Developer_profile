"use client";

import { useState } from "react";
import EscapeButton from "./EscapeButton";

interface MyProfileProps {
  text: string;
}

const MyProfile = ({text} : MyProfileProps) => {
    const [hovered, setHovered] = useState(false);
    const handleMouseEnter = () => {
        setHovered(true);
    }

  return (
    <div className="flex flex-col-2 items-center pl-110 bg-amber-200 text-black gap-40 w-full h-screen">
      <div className="flex flex-col text-center gap-4 w-80">
        <h1>My Profile</h1>
        <p>{text}</p>
        <EscapeButton />
      </div>
      <div>
        <img
          src="https://i.pinimg.com/736x/39/05/1a/39051af60b10123e4b497b2bc9b6746e.jpg"
          className="h-150 rounded-lg"
        ></img>
      </div>
    </div>
  );
};
export default MyProfile;
