import React from "react";
import { links, btn } from "../../data/navbar.js";
import Header from "../../components/Header/index";
import AboutSection from "../../components/AboutSection/index.jsx";
import { photos } from "../../data/about.js";
const AboutPage = () => {
  return (
    <div>
      <Header btn={btn} links={links} />
      <AboutSection photos={photos}/>
    </div>
  );
};

export default AboutPage;
