"use client";

interface MyProfileProps {
  text: string;
}

const MyProfile = ({ text }: MyProfileProps) => {
  return (
    <div
      className="flex items-center flex-col pl-36 pr-5 pt-10 gap-5 bg-background text-gray-200 w-full h-screen
                 md:flex-row md:pl-40 md:pb-19 md:gap-20"
    >
      <div>
        <img
          src="https://media.discordapp.net/attachments/668167761792466963/1316025712204972032/20241210_135217.jpg?ex=6848d434&is=684782b4&hm=ec9edaaf93d38c14ed769a06b5ec13356971017f98a2d3f70538cb559e8590bf&=&format=webp&width=618&height=864"
          alt="My Profile Picture"
          className="max-h-100 md:max-h-130 rounded-lg -scale-x-100 border-2 border-text"
        ></img>
      </div>
      <div className="flex text-left flex-col gap-3 max-w-130 mt-30 text-text">
        <h1>My Profile</h1>
        <p>{text}</p>
      </div>
    </div>
  );
};
export default MyProfile;
