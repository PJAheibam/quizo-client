import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  Wrapper,
  ThumbnailContainer,
  Thumbnail,
  Content,
  Name,
  Text,
  LinkButton,
  Container,
} from "./Topics.styles";

const Topics = () => {
  const topics = useLoaderData();
  console.log(topics);
  return (
    <Wrapper>
      {topics.map((topic) => (
        <Container key={topic.id}>
          <ThumbnailContainer>
            <Thumbnail src={topic.logo} alt="topic thumbnail" />
          </ThumbnailContainer>
          <Content>
            <Name> {topic.name} </Name>
            <Text>Total Quiz: {topic.total} </Text>
            <LinkButton to={`quiz/${topic.id}`}>Take Quiz</LinkButton>
          </Content>
        </Container>
      ))}
    </Wrapper>
  );
};

export default Topics;
