"use client";

const ProjectsPage = () => {
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
    <div className="fixed grid ml-40 pr-45 pt-25 items-center justify-center bg-background text-gray-200 w-full md:h-screen">
      <section className="grid grid-cols-1 md:grid-cols-2 w-200 place-items-center">
        {projects.map((project) => (
          <div
            key={project.name}
            className="card-expand relative w-80 h-70 overflow-hidden "
          >
            <div className="bg-gray-700 p-4 flex flex-col border-1 border-text items-center justify-center ">
              <img
                src={project.image}
                alt={project.name}
                className="mb-2 h-30 object-cover"
              />
              <div className="text-center">
                <strong>{project.name}</strong>
                <p className="expand-inner-card text-sm text-gray-300 mt-1 max-h-0 overflow-hidden transition-all duration-300">
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

export default ProjectsPage;

// function BackCard({ project }: { project: { name: string } }): JSX.Element {
//   return (
//     <div>
//       {/* Back Side */}
//       <div className="flip-card-back bg-emerald-700 p-6 rounded-lg flex flex-col items-center justify-center w-full h-full text-left text-lg">
//         <h2 className="font-bold text-2xl mb-2">{project.name}</h2>
//         <p>
//           {/* Replace this with your detailed text */}
//           This is a more detailed description of {project.name}. Here you can
//           add more information, features, technologies used, links, etc.
//         </p>
//       </div>
//     </div>
//   );
// }
