import React from "react";
import Header from "../components/Header";
import Home from "../components/Home";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import SocialMedia from "../components/SocialMedia";

const Mainpage = () => {
  return (
    <section className="bg-[#0F152E] ">
      <div className="z-0  sticky top-0 bg-[#0F152E] pt-5 ">
        <Header />
        <hr />
        <Home />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <SocialMedia />
      </div>
    </section>
  );
};

export default Mainpage;
