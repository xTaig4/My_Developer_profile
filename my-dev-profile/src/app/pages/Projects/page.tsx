"use client";

const ProjectsPage = () => {
  const projects = [
    {
      name: "Project A",
      description: "Description of Project A",
      image:
        "https://raw.githubusercontent.com/xTaig4/My_Developer_profile/main/my-dev-profile/Screenshots/Home.JPG",
      link: "",
    },
    {
      name: "Project B",
      description: "Description of Project B",
      image:
        "https://raw.githubusercontent.com/xTaig4/My_Developer_profile/main/my-dev-profile/Screenshots/Home.JPG",
      link: "",
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
    <div className="grid pt-25 pl-40 items-center justify-center bg-background text-gray-200 w-full md:h-screen">
      <section className="grid grid-cols-1 md:grid-cols-2 w-200 place-items-center">
        {projects.map((project) => (
          <div
            key={project.name}
            className=" card-expand relative w-80 h-65 overflow-hidden "
          >
            <div className="bg-gray-700 p-4 flex flex-col border-1 border-text items-center justify-center ">
              <img
                src={project.image}
                alt={project.name}
                className="mb-2 h-28 object-cover"
              />
              <div className="text-center">
                <strong>{project.name}</strong>
                <p className="card-expand-inner text-sm text-gray-300 mt-1 max-h-0 overflow-hidden transition-all duration-300">
                  {/* Replace this with your detailed text */}
                  This is a more detailed description of {project.name}. Here
                  you can add more information, features, technologies used,
                  links, etc.
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
