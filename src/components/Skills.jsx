import React from "react";

export default function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "Tailwind CSS",
    "JavaScript",
    "Python",
    "React",
  ];

  return (
    <section
      id="skills"
      className="py-20 px-4 max-w-4xl mx-auto border-t border-[#541A1A]/20"
    >
      {/* Judul Section */}
      <h2 className="text-3xl font-black text-center mb-12 text-[#541A1A] tracking-wider uppercase">
        Skills
      </h2>

      {/* List Badge Skills */}
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white/60 backdrop-blur-sm border border-[#541A1A]/20 hover:border-[#810B38] px-5 py-2.5 rounded-lg font-bold text-sm text-[#541A1A] hover:text-[#810B38] hover:shadow-sm transition duration-300 cursor-default"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
