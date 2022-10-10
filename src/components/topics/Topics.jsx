import React from "react";
import { useLoaderData } from "react-router-dom";
import { Wrapper } from "./Topics.styles";

const Topics = () => {
  const topics = useLoaderData();
  console.log(topics);
  return <Wrapper>Topics</Wrapper>;
};

export default Topics;
