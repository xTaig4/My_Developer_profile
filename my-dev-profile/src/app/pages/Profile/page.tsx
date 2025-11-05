"use client";

import ProjectList from "@/app/components/ProjectList";
import HobbiesBox from "@/app/components/BoxComponents/HobbiesBox";
import TraitsBox from "@/app/components/BoxComponents/TraitsBox";
import DisplayBox from "@/app/components/BoxComponents/DisplayBox";
import ProfileImageBox from "@/app/components/BoxComponents/ProfileImageBox";

const ProfilePage = () => {
  const stats = [
    { stat: "Strength", fillPercent: 40 },
    { stat: "Coding", fillPercent: 100 },
    { stat: "Debuggin", fillPercent: 80 },
    { stat: "Braincells", fillPercent: 10 },
  ];

  const traits = [
    { trait: "Detail-oriented" },
    { trait: "Resillient" },
    { trait: "Team player" },
    { trait: "Silly" },
    { trait: "Naruto fanboi" },
  ];

  const hobbies = [
    { hobby: "Gaming" },
    { hobby: "Coding" },
    { hobby: "Reading" },
    { hobby: "Pour-over Coffee" },
    { hobby: "Doodling" },
  ];

  return (
    <div
      className="flex min-h-lvh flex-col items-center justify-center"
      style={{ fontFamily: "pixelFont" }}
    >
      <div className="text-text flex flex-col p-4 lg:flex-row 2xl:ml-40">
        {/*RIGHT COLUMN: Projects*/}
        <div className="flex flex-col-reverse items-center gap-10 lg:flex-row">
          <div className="mt-15 hidden lg:block">
            <ProjectList />
          </div>
          <div className="mt-10 flex flex-col gap-4">
            {/* TOP CONTAINER */}
            <div className="flex-col-2 flex w-230 justify-evenly">
              {/* LEFT COLUMN: Stats + Traits + Hobbies */}
              <div className="flex h-75 flex-col gap-10">
                <section className="flex flex-col justify-baseline">
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
                {/* Traits + Hobbies */}
                <div className="flex-col-2 flex gap-15">
                  <TraitsBox traits={traits} />
                  <HobbiesBox hobbies={hobbies} />
                </div>
                {/* RIGHT COLUMN: Profile Image */}
              </div>
              <ProfileImageBox />
            </div>
            {/* BOTTOM CONTAINER */}

            <div className="mr-5 flex flex-col justify-evenly gap-10 lg:items-center lg:gap-5">
              <div className="flex justify-center">
                <DisplayBox />
              </div>
              <div className="flex justify-center lg:hidden">
                <ProjectList />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
