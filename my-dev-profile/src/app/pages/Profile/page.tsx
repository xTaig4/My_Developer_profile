"use client";

const ProfilePage = () => {
  const skills = [
    { name: "C#", rating: 5 },
    { name: "TypeScript", rating: 4 },
    { name: "JavaScript", rating: 5 },
    { name: "React", rating: 5 },
    { name: "Next.js", rating: 4 },
    { name: "HTML, CSS", rating: 5 },
    { name: "Tailwind CSS", rating: 5 },
  ];

  return (
    <div className="flex flex-row pl-30 pb-15 gap-20 items-center bg-background text-gray-200 w-full h-full">
      <div className="ml-20"></div>
      <div className="flex text-left flex-col gap-15 max-w-5xl text-text mt-20 ">
        <section>
          <h1 className="text-4xl">Profile</h1>
          <p className="text-2xl">
            Software developer with experience in modern web technologies such
            as React, TypeScript, Next.js and Tailwind CSS, and backend
            development in ASP.NET and C#, where I have, among other things,
            built REST APIs, used Entity Framework and worked with databases and
            Docker. Strong understanding of integration between frontend and
            backend. Works in a structured manner, is naturally curious, and
            motivated to learn, take responsibility, and contribute with solid
            solutions.
          </p>
        </section>
        <section>
          <h1 className="text-4xl">Hobbies</h1>
          <p className="text-2xl">
            In my free time, I enjoy gaming, watching anime, and reading manga.
            I also like going for walks and brewing pour-over coffee with my
            Hario V60 set. I spend time in Unity experimenting with game
            development as well. Additionally, I love learning languages and am
            currently studying Japanese and Vietnamese.
          </p>
        </section>
        <section>
          <h1 className="text-4xl mb-2 font-bold text-text ">Skills</h1>
          <div className="grid grid-cols-1 gap-y-3 text-text text-2xl ">
            {skills.map((skill) => (
              <li className="flex gap-10 items-center" key={skill.name}>
                <span className="w-40">{skill.name}</span>
                <span>
                  {"★".repeat(skill.rating)}
                  {"☆".repeat(5 - skill.rating)}
                </span>
              </li>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProfilePage;
