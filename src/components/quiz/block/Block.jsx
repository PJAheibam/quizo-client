import React, { useEffect, useRef } from "react";
import {
  Container,
  QuestionHeader,
  Question,
  QuestionBody,
  Options,
  Option,
  Text,
  Radio,
  BulletPoint,
} from "./BlockStyles.styles";
import parse from "html-react-parser";

const QuizBlock = ({ data, index }) => {
  const {
    props: { children: question },
  } = parse(data.question);

  return (
    <Container>
      <QuestionHeader>Question {++index} </QuestionHeader>
      <QuestionBody>
        <Question>{question}</Question>
        <Options>
          {data.options.map((option, index) => (
            <Option key={index}>
              <Radio name={data.id} />
              <BulletPoint />
              <Text>{option}</Text>
            </Option>
          ))}
        </Options>
      </QuestionBody>
    </Container>
  );
};

export default QuizBlock;
