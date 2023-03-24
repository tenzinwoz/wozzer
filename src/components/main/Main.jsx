import React from "react";
import Contact from "../contact/Contact";
import Education from "../education/Education";
import Experience from "../experience/Experience";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Intro from "../intro/Intro";
import Projects from "../projects/Projects";
import Toolkits from "../toolkits/Toolkits";

export default function Main() {
  return (
    <div className="main">
      <Header />
      <div className="content">
        <div className="container">
          <Intro />
          <Education />
          <Experience />
          <Projects />
          <Toolkits />
          <Contact />
        </div>
      </div>

      <Footer />
    </div>
  );
}
