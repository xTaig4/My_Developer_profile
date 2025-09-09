"use client";

import React from "react";

const SkillsBox = () => {
  const skills = [
    { name: "C#", rating: 5 },
    { name: "JavaScript", rating: 5 },
    { name: "TypeScript", rating: 4 },
    { name: "HTML, CSS", rating: 5 },
    { name: "React", rating: 5 },
    { name: "Next.js", rating: 4 },
    { name: "Tailwind CSS", rating: 5 },
  ];
  return (
    <div
      className="border-1 border-text p-4 h-75 w-200"
      style={{ fontFamily: "pixelFont" }}
    >
      <h1 className="font-bold mb-5 text-text text-2xl">Skills</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 max-w-5xl gap-x-30 gap-y-4 text-text">
        {skills.map((skill) => (
          <li className="flex  items-center text-2xl" key={skill.name}>
            <span className="w-50">{skill.name}</span>
            <span>
              {"★".repeat(skill.rating)}
              {"☆".repeat(5 - skill.rating)}
            </span>
          </li>
        ))}
      </div>
    </div>
  );
};

export default SkillsBox;
