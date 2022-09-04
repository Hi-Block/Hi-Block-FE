import MainTitle from "../components/MainTitle";
import MainAbout from "../components/MainAbout";
import MainContent from "../components/MainContent";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Main = () => {
  useEffect(() => {
    AOS.init();
  });

  return (
    <div className="main">
      <div data-aos="fade-left">
        <MainTitle />
      </div>
      <div data-aos="fade-up">
        <MainAbout />
      </div>

      <MainContent />
    </div>
  );
};

export default Main;
