"use client";
import React from "react";
import { useState } from "react";

const TestPage = () => {
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
  return (
    <div
      className="flex flex-col items-center justify-center h-screen bg-background "
      style={{ fontFamily: "pixelFont" }}
    >
      <div className="flex flex-col lg:flex-row text-text max-h-220 p-4 ml-54">
        <div className="flex flex-col ">
          <div className="flex flex-col-2 justify-evenly w-200">
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
            {/* Image container */}
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
          <div className="flex flex-col-2 gap-50 border-1 p-4 h-75 w-200">
            <section>
              <h1>The Developer’s Chronicle</h1>
              <p>
                In the realm of digital creation, there walks a craftsman of
                code, versed in the modern arts of web sorcery — React,
                TypeScript, Next.js, and the Tailwind of CSS. From the forges of
                the backend, they wield the mighty ASP.NET and the ancient
                tongue of C#, conjuring RESTful gateways, commanding the powers
                of Entity Framework, and bending the will of databases and
                Docker to their purpose. A master of uniting the divided realms
                of frontend and backend, they work with precision and order.
                Driven by an insatiable curiosity, they seek always to learn new
                magics, to shoulder great responsibility, and to deliver
                solutions as steadfast as a fortress wall.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestPage;
