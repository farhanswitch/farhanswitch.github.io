import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div className="app w-full font-sansf">
      <Nav />
      <div className="container max-w-5xl mx-auto font-viga">
        <Hero />
        <About />
        <Skill />
        <Project />
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default App;
