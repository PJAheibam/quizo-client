import React from "react";
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
import { MdArrowForwardIos as Arrow } from "react-icons/md";

const Topics = ({ topics }) => {
  return (
    <Wrapper id="topics">
      {topics.map((topic) => (
        <Container key={topic.id}>
          <ThumbnailContainer>
            <Thumbnail src={topic.logo} alt="topic thumbnail" />
          </ThumbnailContainer>
          <Content>
            <Name> {topic.name} </Name>
            <Text>Total Quiz: {topic.total} </Text>
            <LinkButton to={`quiz/${topic.id}`}>
              Take Quiz
              <Arrow />
            </LinkButton>
          </Content>
        </Container>
      ))}
    </Wrapper>
  );
};

export default Topics;
