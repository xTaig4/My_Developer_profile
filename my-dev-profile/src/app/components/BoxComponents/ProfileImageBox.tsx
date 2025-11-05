import Image, { getImageProps } from "next/image";
import { useState } from "react";
import ArrowButton from "../ArrowButtons";

const ProfileImageBox = () => {
  const [filterIndex, setFilterIndex] = useState(0);
  const filters: string[] = ["", "beard1.png", "master.png"];

  return (
    <div className="border-text relative flex w-90 flex-col overflow-hidden border-1">
      <div>
        <ArrowButton
          classNameLeft="absolute left-2 translate-y-116"
          classNameRight="absolute right-2 translate-y-116"
          collection={filters}
          currentIndex={filterIndex}
          onIndexChange={setFilterIndex}
        />
      </div>

      <Image
        width={360}
        height={480}
        src="/profile_pic.png"
        alt="Profile"
        className="w-full object-cover"
      />
      {filters[filterIndex] !== "" && (
        <Image
          width={360}
          height={480}
          src={`/${filters[filterIndex]}`}
          alt="current overlay"
          className={`absolute z-0 w-90 object-cover`}
        />
      )}
    </div>
  );
};

export default ProfileImageBox;
