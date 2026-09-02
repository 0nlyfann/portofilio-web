import React from "react";

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 max-w-4xl mx-auto text-center flex flex-col items-center">
      {/* Foto Profil dengan border warna merah pekat */}
      <img
        src="/ikram (Edited).png"
        alt="Foto Profil Zihni"
        className="w-32 h-32 rounded-full object-cover border-4 border-[#541A1A] mb-6 shadow-md"
      />

      {/* Judul Utama h1 menggunakan warna #541A1A */}
      <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight text-[#541A1A]">
        Hi, I am <span className="text-[#810B38]">Zihni.</span>
      </h1>

      {/* Sub-judul h2 dengan warna merah pekat transparan */}
      <h2 className="text-xl md:text-2xl font-bold text-[#541A1A]/80 mb-6 tracking-wide">
        A Software Engineer.
      </h2>

      {/* Teks Deskripsi */}
      <p className="max-w-2xl text-[#541A1A]/70 leading-relaxed mb-8 text-sm md:text-base font-medium">
        hai,, im just tryin to make a project, just a little project
      </p>

      {/* Tombol Resume */}
      <div className="flex space-x-4 items-center">
        <a
          href="#contact"
          className="px-6 py-2.5 rounded border-2 border-[#541A1A] text-[#541A1A] font-bold hover:bg-[#541A1A] hover:text-white transition duration-300"
        >
          resume
        </a>
      </div>
    </section>
  );
}
