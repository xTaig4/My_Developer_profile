"use client";

import Image from "next/image";
import { useState } from "react";
import SkillsBox from "@/app/components/SkillsBox";
import ProfileBox from "@/app/components/ProfileBox";
import ProjectList from "@/app/components/ProjectList";
import { JSX } from "react";

const ProfilePage = () => {
  const stats = [
    { stat: "Strength", fillPercent: 40 },
    { stat: "Coding", fillPercent: 100 },
    { stat: "Debuggin", fillPercent: 80 },
    { stat: "Braincells", fillPercent: 10 },
  ];

  const traits = [
    { trait: "Detail-oriented" },
    { trait: "Silly" },
    { trait: "Team player" },
    { trait: "Curious" },
    { trait: "Naruto fanboi" },
  ];

  const hobbies = [
    { hobby: "Gaming" },
    { hobby: "Coding" },
    { hobby: "Reading" },
    { hobby: "Pour-over Coffee" },
    { hobby: "Doodling" },
  ];

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

  const filters: string[] = ["", "beard1.png", "master.png"];
  const [filterIndex, setFilterIndex] = useState(0);

  return (
    <div
      className="flex min-h-lvh flex-col items-center justify-center"
      style={{ fontFamily: "pixelFont" }}
    >
      <div className="text-text flex flex-col p-4 lg:flex-row 2xl:ml-40">
        {/*RIGHT COLUMN: Projects*/}
        <div className="flex flex-col-reverse items-center gap-10 lg:flex-row">
          <ProjectList />
          <div className="flex flex-col">
            {/* TOP CONTAINER */}
            <div className="flex-col-2 flex w-230 justify-evenly">
              {/* RIGHT COLUMN: Stats + Traits + Hobbies */}
              <div className="mt-10 flex h-75 flex-col gap-10">
                <section className="mt-5 flex flex-col justify-baseline">
                  <h1 className="text-4xl">Stats</h1>
                  {stats.map(({ stat, fillPercent }) => (
                    <div
                      key={stat}
                      className="mt-4 flex items-center justify-between gap-10"
                    >
                      <span className="flex text-lg">{stat}</span>
                      <div className="flex h-5 w-50 overflow-hidden rounded-full bg-gray-900">
                        <div
                          className="bg-text flex h-full"
                          style={{ width: `${fillPercent}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </section>
                <div className="flex-col-2 flex gap-15">
                  <section>
                    {/* Traits */}
                    <h1>Traits</h1>
                    <span>
                      {traits.map(({ trait }) => (
                        <li key={trait}>{trait}</li>
                      ))}
                    </span>
                  </section>
                  <section>
                    <h1>Hobbies</h1>
                    <span>
                      {hobbies.map(({ hobby }) => (
                        <li key={hobby}>{hobby}</li>
                      ))}
                    </span>
                  </section>
                </div>
              </div>
              {/* LEFT COLUM: Profile image container */}
              <div className="relative flex w-90 flex-col overflow-hidden p-4">
                <div className="mb-2 flex justify-center">
                  <button
                    className="flex h-7 w-10 items-center justify-center border-1 p-1 text-3xl hover:bg-gray-600"
                    onClick={() =>
                      setFilterIndex((prev) =>
                        prev > 0 ? prev - 1 : filters.length - 1,
                      )
                    }
                  >
                    ←
                  </button>
                  <button
                    className="flex h-7 w-10 items-center justify-center border-1 p-1 text-3xl hover:bg-gray-600"
                    onClick={() =>
                      setFilterIndex((prev) =>
                        prev < filters.length - 1 ? prev + 1 : 0,
                      )
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
                  className="border-text w-full border-1 object-cover"
                />
                {filters[filterIndex] !== "" && (
                  <Image
                    width={360}
                    height={480}
                    src={`/${filters[filterIndex]}`}
                    alt="current overlay"
                    className={`absolute w-90 -translate-x-5 translate-y-6 object-cover p-4`}
                  />
                )}
              </div>
            </div>
            {/* BOTTOM CONTAINER */}
            <div className="flex flex-row items-center gap-4">
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
              <div className="flex gap-50">
                {containers[containerIndex].content}
              </div>
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
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
