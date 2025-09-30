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
      className="border-text h-75 w-200 border-1 p-4"
      style={{ fontFamily: "pixelFont" }}
    >
      <h1 className="text-text mb-5 text-2xl font-bold">Skills</h1>
      <div className="text-text grid max-w-5xl grid-cols-2 gap-x-30 gap-y-4">
        {skills.map((skill) => (
          <li className="flex items-center text-2xl" key={skill.name}>
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
