import React from "react";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Movie App",
      description: "Mission from harisenin.com Bootcamp",
      tags: ["React", "Tailwind", "JavaScript"],
      githubLink: "https://github.com/0nlyfann/MISSION-FE-2A.git",
      demoLink: "mission-fe-2-a.vercel.app",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 max-w-6xl mx-auto border-t border-[#541A1A]/20"
    >
      {/* Judul Section */}
      <h2 className="text-3xl font-black text-center mb-12 text-[#541A1A] tracking-wider uppercase">
        Projects
      </h2>

      {/* Container Horizontal Scroll */}
      <div className="flex flex-nowrap overflow-x-auto gap-6 px-6 py-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden scroll-smooth">
        {projects.map((project) => (
          <div
            key={project.id}
            className="w-[300px] md:w-[340px] flex-shrink-0 m-auto bg-white/60 backdrop-blur-sm border border-[#541A1A]/20 hover:border-[#810B38] rounded-xl p-6 flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1"
          >
            <div>
              <h3 className="text-xl font-bold text-[#541A1A] mb-3 text-center">
                {project.title}
              </h3>
              <p className="text-[#541A1A]/70 text-sm leading-relaxed mb-6 text-center font-medium">
                {project.description}
              </p>
            </div>

            <div>
              {/* Badge Tech Stack */}
              <div className="flex flex-wrap gap-2 justify-center mb-6">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs px-2.5 py-1 bg-[#810B38]/10 text-[#810B38] border border-[#810B38]/30 font-semibold rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Link GitHub & Demo */}
              <div className="flex justify-center space-x-6 text-[#541A1A]">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#810B38] font-bold text-sm transition duration-300"
                >
                  GitHub
                </a>
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#810B38] font-bold text-sm transition duration-300"
                >
                  Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
