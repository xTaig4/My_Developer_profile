"use client";

import ProjectList from "@/app/components/ProjectList";

const ProjectsPage = () => {
  return (
    <div className="fixed grid ml-40 pr-45 pt-25 items-center justify-center bg-background text-gray-200 w-full md:h-screen">
      <ProjectList />
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
