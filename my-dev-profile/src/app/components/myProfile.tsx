"use client";

interface MyProfileProps {
  text: string;
}

const MyProfile = ({ text }: MyProfileProps) => {
  return (
    <div
      className="flex items-center flex-col pl-36 pr-5 pt-10 bg-background text-gray-200 w-full h-screen
                 md:flex-row md:pl-40 md:pb-19 md:gap-20"
    >
      <div>
        <img
          src="https://media.discordapp.net/attachments/668167761792466963/1316025712204972032/20241210_135217.jpg?ex=684cc8b4&is=684b7734&hm=6fd8d720258724f41155d11ae19869e9fede0a1744577fecc0160e297dfc9538&=&format=webp&width=692&height=968"
          alt="My Profile Picture"
          className="max-h-100 md:max-h-130 rounded-lg -scale-x-100 border-2 border-text"
        ></img>
      </div>
      <div className="flex text-left flex-col gap-3 max-w-130 mt-10 md:mt-30 text-text">
        <h1>My Profile</h1>
        <p>{text}</p>
      </div>
    </div>
  );
};
export default MyProfile;
