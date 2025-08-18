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
    <div className="flex flex-col ml-40 items-center justify-center h-screen bg-background text-white">
      <div className="border-1 border-text p-4 h-75 w-200">
        <h1 className="font-bold mb-5 text-text ">Skills</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 max-w-5xl gap-x-40 gap-y-4 text-text">
          {skills.map((skill) => (
            <li className="flex  items-center" key={skill.name}>
              <span className="w-30">{skill.name}</span>
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
