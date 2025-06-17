"use client";
import MyProfile from "@/app/components/myProfile";

const ProfilePage = () => {
  return (
    <div className="flex flex-row pl-30 pb-40 gap-20 items-center bg-background text-gray-200 w-full h-screen">
      <div className="ml-20"></div>
      <div className="flex text-left flex-col gap-3 max-w-5xl text-text">
        <h1 className="text-6xl">Profile</h1>
        <p className="text-3xl">
          Frontend developer with experience in modern web technologies such as
          React, TypeScript, and ASP.NET. Strong understanding of integration
          between frontend and backend. Works in a structured manner, is
          naturally curious, and motivated to learn, take responsibility, and
          contribute solid solutions.
        </p>
      </div>
    </div>
  );
};

export default ProfilePage;
