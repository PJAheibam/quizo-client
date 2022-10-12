import React from "react";
import styled from "styled-components";
import Topics from "../components/topics/Topics";
import { useLoaderData } from "react-router-dom";
import Hero from "../components/hero/Hero";
import { WrapperStyles } from "../styles/Wrapper";

const Container = styled.main`
  margin-top: 92px;
  width: 100%;
`;

const Home = () => {
  const topics = useLoaderData();
  return (
    <Container>
      <Hero />
      <Topics topics={topics} />
    </Container>
  );
};

export default Home;
