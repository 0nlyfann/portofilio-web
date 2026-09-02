import React, { useState } from "react";

export default function Navbar() {
  // State untuk kontrol menu mobile responsive
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    /* Latar belakang navbar menggunakan warna kustom #810B38 dengan transparansi 90% */
    <nav className="fixed top-0 left-0 w-full bg-[#810B38]/90 backdrop-blur-md border-b border-rose-900/50 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo / Inisial Nama */}
        <a
          href="#"
          className="text-2xl font-black text-white tracking-wider hover:text-rose-200 transition duration-300"
        >
          ZH.
        </a>

        {/* Navigasi Desktop */}
        <div className="hidden md:flex space-x-8 font-semibold text-sm tracking-wide">
          <a
            href="#projects"
            className="text-gray-200 hover:text-white transition duration-300"
          >
            PROJECTS
          </a>
          <a
            href="#skills"
            className="text-gray-200 hover:text-white transition duration-300"
          >
            SKILLS
          </a>
        </div>

        {/* Tombol Hamburger Menu Mobile */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white hover:text-rose-200 focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.364 18.364A1 1 0 0018.364 16.95L13.414 12l4.95-4.95a1 1 0 00-1.414-1.414L12 10.586l-4.95-4.95A1 1 0 005.636 7.05l4.95 4.95-4.95 4.95a1 1 0 101.414 1.414L12 13.414l4.95 4.95a1 1 0 001.414 0z"
              />
            ) : (
              <path
                fillRule="evenodd"
                d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Dropdown Menu Mobile */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#810B38] border-b border-rose-900/50 px-4 pt-2 pb-4 space-y-3 font-semibold text-center">
          <a
            href="#projects"
            onClick={() => setIsMenuOpen(false)}
            className="block text-gray-200 hover:text-white transition duration-300"
          >
            PROJECTS
          </a>
          <a
            href="#skills"
            onClick={() => setIsMenuOpen(false)}
            className="block text-gray-200 hover:text-white transition duration-300"
          >
            SKILLS
          </a>
          <a
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
            className="block text-gray-200 hover:text-white transition duration-300"
          >
            CONTACT
          </a>
        </div>
      )}
    </nav>
  );
}
