"use client";
import React from "react";

const skills = [
  { name: "JavaScript", rating: 5 },
  { name: "TypeScript", rating: 4 },
  { name: "C#", rating: 5 },
  { name: "React", rating: 5 },
  { name: "Next.js", rating: 4 },
  { name: "HTML, CSS", rating: 5 },
  { name: "Tailwind CSS", rating: 5 },
];

const SkillsPage = () => {
  // Split skills into two columns after 4 skills
  const firstColumn = skills.slice(0, 4);
  const secondColumn = skills.slice(4);

  return (
    <div className="flex flex-col ml-54 items-center justify-center h-screen bg-background text-white">
      <div>
        <h2 className="text-center text-5xl font-bold mb-13 text-text ">
          Skills
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 max-w-5xl gap-x-40 gap-y-5 text-text text-3xl">
          {skills.map((skill) => (
            <li className="flex gap-10">
              <span className="w-50" key={skill.name}>
                {skill.name}
              </span>
              <span>
                {"★".repeat(skill.rating)}
                {"☆".repeat(5 - skill.rating)}
              </span>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};

function SkillsRating(
  skill: { name: string; rating: number },
  firstColumn: any[],
  secondColumn: any[]
) {
  return (
    <div>
      <ul className="list-disc space-y-2">
        {firstColumn.map((skill) => (
          <li
            key={skill.name}
            className="flex items-center text-text text-lg gap-10"
          >
            <span className="w-32">{skill.name}</span>
            <span className="text-4xl text-text">
              {"★".repeat(skill.rating)}
              {"☆".repeat(5 - skill.rating)}
            </span>
          </li>
        ))}
      </ul>
      <ul className="list-disc ml-8 space-y-2">
        {secondColumn.map((skill) => (
          <li
            key={skill.name}
            className="flex items-center text-text text-lg gap-10"
          >
            <span className="w-32">{skill.name}</span>
            <span className="ml-2 text-4xl text-text">
              {"★".repeat(skill.rating)}
              {"☆".repeat(5 - skill.rating)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SkillsPage;
