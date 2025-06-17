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
  return (
    <div className="flex flex-col ml-54 items-center justify-center h-screen bg-background text-white">
      <div>
        <h2 className="text-center text-5xl font-bold mb-13 text-text ">
          Skills
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 max-w-5xl gap-x-40 gap-y-5 text-text text-3xl">
          {skills.map((skill) => (
            <li className="flex gap-10 items-center" key={skill.name}>
              <span className="w-50">{skill.name}</span>
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

export default SkillsPage;
