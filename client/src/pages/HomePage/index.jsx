import React from "react";
import Header from "../../components/Header";
import { btn, links } from "../../data/navbar.js";
import Marketing from "../../components/MarketingSection/index.jsx";
import WebStart from "../../components/WebStart/index.jsx";
import { webStart } from "../../data/webSiteStart.js";
import Tech from "../../components/Technologies/index.jsx";
import Card from "../../components/Card/index.jsx";

const HomePage = () => {
  return (
    <div>
      <Header btn={btn} links={links} />
      <Marketing />
      <WebStart webStart={webStart} />
      <Tech />
      <Card />
    </div>
  );
};

export default HomePage;
