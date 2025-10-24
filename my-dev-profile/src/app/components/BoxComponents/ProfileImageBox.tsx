import Image from "next/image";
import { useState } from "react";

interface ProfileImageBoxProps {
  filters: string[];
}

const ProfileImageBox = ({ filters }: ProfileImageBoxProps) => {
  const [filterIndex, setFilterIndex] = useState(0);

  return (
    <div className="border-text relative flex w-90 flex-col overflow-hidden border-1">
      <div>
        <button
          className="absolute left-2 z-1 flex h-7 w-10 translate-y-116 items-center justify-center border-1 p-1 text-3xl hover:bg-gray-600"
          onClick={() =>
            setFilterIndex((prev) => (prev > 0 ? prev - 1 : filters.length - 1))
          }
        >
          ←
        </button>
        <button
          className="absolute right-2 z-1 flex h-7 w-10 translate-y-116 items-center justify-center border-1 p-1 text-3xl hover:bg-gray-600"
          onClick={() =>
            setFilterIndex((prev) => (prev < filters.length - 1 ? prev + 1 : 0))
          }
        >
          →
        </button>
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
