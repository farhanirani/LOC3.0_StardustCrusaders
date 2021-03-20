import React, { useState } from "react";
import Header from "components/Header/Header";
import HeaderLinks from "components/Header/HeaderLinks.js";
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
  HeroBtn,
} from "./HeroElements";

const dashboardRoutes = [];

const Hero = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { ...rest } = props;

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeroContainer>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Material Kit React"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />{" "}
      <HeroContent>
        <HeroItems>
          <HeroH1>Race to the top</HeroH1>
          <HeroP>Be an emerging champ</HeroP>
          <HeroBtn>Check Leaderboard</HeroBtn>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
