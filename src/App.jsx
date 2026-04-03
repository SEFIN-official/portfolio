import React from "react";
import "./assets/css/index.css";
import Experience from "./pages/Experience/Experience";
import Contact from "./pages/Contact/Contact";
import Projects from "./pages/Projects/Projects";
import Header from "./pages/Header/Header";
import Hero from "./pages/Hero/Hero";
import Skills from "./pages/Skills/Skills";

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}
