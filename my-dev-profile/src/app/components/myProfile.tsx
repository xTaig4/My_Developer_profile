"use client";

interface MyProfileProps {
  text: string;
}

const MyProfile = ({ text }: MyProfileProps) => {
  return (
    <div
      className="flex items-center flex-col pl-25 pr-5 pt-10 bg-background text-gray-200 w-full h-screen
                 md:flex-row md:pl-40 md:gap-20"
    >
      <div className="md:ml-20">
        {/* <img
          src="https://media.discordapp.net/attachments/668167761792466963/1316025712204972032/20241210_135217.jpg?ex=68520eb4&is=6850bd34&hm=1f94fe8ba6143d2a97ccedb1be3ad12650b89735a98408ebc53d1c02aea90655&=&format=webp&width=692&height=968"
          alt="My Profile Picture"
          className="max-h-100 md:max-h-160 rounded-lg -scale-x-100 border-2 border-text"
        ></img> */}
      </div>
      <div className="flex text-left flex-col gap-3 max-w-5xl text-text">
        <h1 className="text-6xl">My Profile</h1>
        <p className="text-4xl">{text}</p>
      </div>
    </div>
  );
};
export default MyProfile;
