"use client";
import React from "react";
import { useState } from "react";
import SkillsBox from "@/app/components/SkillsBox";
import ProfileBox from "@/app/components/ProfileBox";
import ProjectList from "@/app/components/ProjectList";
import { JSX } from "react";

const ProfilePage = () => {
  const filters: string[] = ["none", "beard1.png", "master.png"];
  const [filterIndex, setFilterIndex] = useState(0);

  const stats = [
    { stat: "Strength", fillPercent: 40 },
    { stat: "Braincells", fillPercent: 10 },
    { stat: "Patience", fillPercent: 80 },
  ];

  const traits = [
    { trait: "Adaptability" },
    { trait: "Collaboration" },
    { trait: "Problem-solving" },
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

  return (
    <div
      className="flex flex-col items-center justify-center min-h-lvh bg-background "
      style={{ fontFamily: "pixelFont" }}
    >
      <div className="flex flex-col lg:flex-row text-text p-4 lg:ml-40">
        <div className="flex gap-10 lg:flex-row flex-col-reverse items-center">
          <ProjectList />
          <div className="flex flex-col">
            <div className="flex flex-col-2 justify-evenly w-230">
              <div className="flex flex-col gap-10 mt-10 h-75">
                <section className="flex flex-col mt-5 justify-baseline">
                  <h1 className="text-4xl">Stats</h1>
                  {stats.map(({ stat, fillPercent }) => (
                    <div
                      key={stat}
                      className="flex items-center justify-between gap-10 mt-4"
                    >
                      <span className="flex text-lg">{stat}</span>
                      <div className="flex w-50 h-5 bg-gray-900 rounded-full overflow-hidden">
                        <div
                          className="flex h-full bg-text transition-all duration-500"
                          style={{ width: `${fillPercent}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </section>
                <div className="flex flex-col-2 gap-15">
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
                    <h1>Personal traits</h1>
                    <span>
                      <li>Curious</li>
                      <li>Creative</li>
                      <li>Detail-oriented</li>
                      <li>Resilient</li>
                    </span>
                  </section>
                </div>
              </div>
              {/* Profile image container */}
              <div className="flex flex-col relative w-90 p-4 overflow-hidden">
                <div className="flex justify-center mb-2">
                  <button
                    className="text-3xl flex w-10 h-7 items-center justify-center border-1 p-1 hover:bg-gray-600"
                    onClick={() =>
                      setFilterIndex((prev) =>
                        prev > 0 ? prev - 1 : filters.length - 1
                      )
                    }
                  >
                    ←
                  </button>
                  <button
                    className="text-3xl flex w-10 h-7 items-center justify-center border-1 p-1 hover:bg-gray-600"
                    onClick={() =>
                      setFilterIndex((prev) =>
                        prev < filters.length - 1 ? prev + 1 : 0
                      )
                    }
                  >
                    →
                  </button>
                </div>
                <img
                  src="/profile_pic.png"
                  alt="Profile"
                  className="w-full object-cover border-1"
                />
                {filters[filterIndex] !== "none" && (
                  <img
                    src={`/${filters[filterIndex]}`}
                    alt="Overlay"
                    className="p-4 absolute w-90 object-cover transition-transform duration-700 ease-in-out translate-y-5 -translate-x-5"
                  />
                )}
              </div>
            </div>
            <div className="flex flex-row items-center gap-4">
              <button
                onClick={() =>
                  setContainerIndex((prev) =>
                    prev > 0 ? prev - 1 : containers.length - 1
                  )
                }
                className="text-3xl left-150 flex w-10 h-7 items-center justify-center border-1 p-1 hover:bg-gray-600"
              >
                ←
              </button>
              <div className="flex gap-50 ">
                {containers[containerIndex].content}
              </div>
              <button
                onClick={() =>
                  setContainerIndex((prev) =>
                    prev < containers.length - 1 ? prev + 1 : 0
                  )
                }
                className="text-3xl right-96 flex w-10 h-7 items-center justify-center border-1 p-1 hover:bg-gray-600"
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
