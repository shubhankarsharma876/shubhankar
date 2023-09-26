import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Blog from "../components/Blog";
import Contact from "../components/Contact";
import Skill from "../components/Skill";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Skill/>
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
