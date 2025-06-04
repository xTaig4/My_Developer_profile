"use client";
import React from "react";

const skills = [
  { name: "JavaScript", rating: 5 },
  { name: "TypeScript", rating: 4 },
  { name: "C#", rating: 5 },
  { name: "React", rating: 5 },
  { name: "Next.js", rating: 4 },
  { name: "HTML, CSS", rating: 5 },
  { name: "Tailwind CSS", rating: 5 }
];

const SkillsPage = () => {
  return (
    <div className="flex flex-col items-start justify-baseline h-screen bg-gray-800 text-white px-60">
      <h2 className="text-2xl font-bold mb-4">
        A Place where I can showcase my skills and projects.
      </h2>
      <ul className="list-disc ml-8 space-y-2">
        {skills.map((skill) => (
          <li key={skill.name} className="flex items-center">
            <span className="w-32">{skill.name}</span>
            <span className="ml-2 text-yellow-400">
              {"★".repeat(skill.rating)}
              {"☆".repeat(5 - skill.rating)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsPage;
