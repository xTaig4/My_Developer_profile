"use client";

import React from "react";

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
      className="h-200 w-full overflow-y-auto border-1 border-text rounded-lg hide-scrollbar"
      style={{ direction: "rtl", fontFamily: "pixelFont" }}
    >
      <section
        className="grid grid-cols-1 place-items-center gap-8 p-4"
        style={{ direction: "ltr" }}
      >
        {projects.map((project) => (
          <div key={project.name}>
            <div className="p-4 flex flex-col border-1 border-text w-80 h-80 items-center ">
              <img
                src={project.image}
                alt={project.name}
                className="mb-2 h-30 object-cover"
              />
              <div className="text-center ">
                <strong>{project.name}</strong>
                <p className=" text-sm text-gray-300 mt-1 max-h-0  transition-all duration-300">
                  {project.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ProjectList;
