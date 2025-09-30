"use client";

import React from "react";
import Image from "next/image";

const ProjectList = () => {
  const projects = [
    {
      name: "Weeb Words",
      description:
        "Weeb Words is a sleek and minimalist anime quote web app where users can view, filter, and submit inspirational, emotional, or funny quotes from popular anime characters.",
      image:
        "https://raw.githubusercontent.com/xTaig4/WeebWords_v2/refs/heads/main/weeb-words/Screenshots/QuoteWeb.JPG",
      link: "https://github.com/xTaig4/WeebWords_v2",
    },
    {
      name: "Runaway",
      description:
        "Runaway is a simple, addictive game inspired by the classic Flappy Bird. The goal is to guide your character through obstacles, achieving the highest possible score.",
      image:
        "https://raw.githubusercontent.com/xTaig4/Runaway/refs/heads/main/Assets/Screenshots/RunawayGame.JPG",
      link: "https://github.com/xTaig4/Runaway",
    },
    {
      name: "Project C",
      description: "Description of Project C",
      image:
        "https://raw.githubusercontent.com/xTaig4/My_Developer_profile/main/my-dev-profile/Screenshots/Home.JPG",
      link: "",
    },
    {
      name: "Project D",
      description: "Description of Project C",
      image:
        "https://raw.githubusercontent.com/xTaig4/My_Developer_profile/main/my-dev-profile/Screenshots/Home.JPG",
      link: "",
    },
  ];
  return (
    <div
      className="border-text hide-scrollbar h-200 w-100 overflow-y-auto rounded-lg border-1"
      style={{ direction: "rtl", fontFamily: "pixelFont" }}
    >
      <section
        className="flex-col place-items-center"
        style={{ direction: "ltr" }}
      >
        {projects.map((project) => (
          <div
            className="border-text m-5 flex h-76 w-80 flex-col items-center border-1 bg-teal-900 p-4 hover:bg-zinc-600"
            key={project.name}
            onClick={() => {
              if (project.link) {
                window.open(project.link);
              }
            }}
            style={{ cursor: project.link ? "pointer" : "default" }}
          >
            <Image
              src={project.image}
              alt={project.name}
              width={300}
              height={200}
              className="mb-2 h-30 object-cover"
            />
            <div className="text-center">
              <strong>{project.name}</strong>
              <p className="mt-1 max-h-0 text-sm text-gray-300 transition-all duration-300">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ProjectList;
