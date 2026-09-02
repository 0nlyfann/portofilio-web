import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function App() {
  return (
    <div className="min-h-screen bg-shadowDark text-gray-200 font-sans selection:bg-shadowRed selection:text-white bg-[#F1E2D1]">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />

      <footer className="py-8 text-center text-xs text-gray-500 border-t border-gray-900">
        Created By Zihni
      </footer>
    </div>
  );
}
