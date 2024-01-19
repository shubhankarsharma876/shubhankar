import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Skill from "../components/Skill";
import Contest from "../components/Contest";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Skill/>
      <Projects />
      <Contest/>
      <Contact />
    </>
  );
};

export default Home;
