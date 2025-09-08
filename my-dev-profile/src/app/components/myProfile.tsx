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
      </div>
      <div className="flex text-left flex-col gap-3 max-w-5xl text-text">
        <h1 className="text-6xl">My Profile</h1>
        <p className="text-4xl">{text}</p>
      </div>
    </div>
  );
};
export default MyProfile;
