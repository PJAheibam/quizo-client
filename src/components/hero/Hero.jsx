import React from "react";
import { Container, CTA, Heading, Logo } from "./Hero.styles";
import { HiChevronDoubleDown as ArrowDown } from "react-icons/hi";
const Hero = () => {
  return (
    <Container>
      <Logo />
      <Heading>A World of Quizzes</Heading>
      <CTA href="#topics" title="start now">
        Start Now
      </CTA>
    </Container>
  );
};

export default Hero;
