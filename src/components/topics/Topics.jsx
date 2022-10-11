import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  Wrapper,
  ThumbnailContainer,
  Thumbnail,
  Content,
  Name,
  Text,
  Button,
  Container,
} from "./Topics.styles";

const Topics = () => {
  const topics = useLoaderData();
  console.log(topics);
  return (
    <Wrapper>
      {topics.map((topic) => (
        <Container>
          <ThumbnailContainer>
            <Thumbnail src={topic.logo} alt="topic thumbnail" />
          </ThumbnailContainer>
          <Content>
            <Name> {topic.name} </Name>
            <Text>Total Quiz: {topic.total} </Text>
            <Button>Take Quiz</Button>
          </Content>
        </Container>
      ))}
    </Wrapper>
  );
};

export default Topics;
