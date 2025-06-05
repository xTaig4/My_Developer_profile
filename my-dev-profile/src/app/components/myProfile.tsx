"use client";

import EscapeButton from "./EscapeButton";

interface MyProfileProps {
  text: string;
}

const MyProfile = ({ text }: MyProfileProps) => {
  
  return (
    <div className="flex flex-col-2 items-center pl-50  bg-gray-800 text-gray-200 gap-40 w-full h-screen">
      <div className="flex flex-col text-left gap-4 w-130 mb-50">
        <h1>My Profile</h1>
        <p>{text}</p>
        <EscapeButton />
      </div>
      <div>
        <img
          src="https://media.discordapp.net/attachments/668167761792466963/1316025712204972032/20241210_135217.jpg?ex=684193f4&is=68404274&hm=0f60b2aeaec6b64129479fb8e927d3897f55c7fbdf66d89886495a07503e2afe&=&format=webp&width=692&height=968"
          alt="My Profile Picture"
          className="h-150 rounded-lg"
        ></img>
      </div>
    </div>
  );
};
export default MyProfile;
