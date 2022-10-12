import React from "react";
import { Container, CTA, Heading, Logo, Arrow } from "./Hero.styles";
import { HiChevronDoubleDown as ArrowDown } from "react-icons/hi";
import { useWindowSize } from "react-use-size";

const Hero = () => {
  const { height } = useWindowSize();
  const ctaStyle = {
    display: height < 1000 ? "block" : "none",
  };

  return (
    <Container>
      <Logo />
      <Heading>A World of Quizzes</Heading>
      <CTA href="#topics" title="start now" style={ctaStyle}>
        Start Now
        <Arrow>
          <ArrowDown />
        </Arrow>
      </CTA>
    </Container>
  );
};

export default Hero;
