import React, { useEffect, useRef, useState } from "react";
import {
  Container,
  QuestionHeader,
  HeaderText,
  CheckAnsBtn,
  Question,
  QuestionBody,
  Options,
  Option,
  Text,
  BulletPoint,
} from "./BlockStyles.styles";
import parse from "html-react-parser";
import { ImEye } from "react-icons/im";

const QuizBlock = ({ data, index }) => {
  const {
    props: { children: question },
  } = parse(data.question);

  const [selected, setSelected] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleClick = (index) => {
    setSelected(index);
  };

  const checkResult = () => {
    setShowAnswer((prev) => !prev);

    if (selected != null && data.correctAnswer === data.options[selected]) {
      console.info("Yeah!");
    } else {
      console.info("wrong guessed!");
    }
  };

  return (
    <Container>
      <QuestionHeader>
        <HeaderText>Question {++index}</HeaderText>
        <CheckAnsBtn title="check answer" onClick={checkResult}>
          {" "}
          <ImEye />{" "}
        </CheckAnsBtn>
      </QuestionHeader>
      <QuestionBody>
        <Question>{question}</Question>
        <Options showresult={showAnswer}>
          {data.options.map((option, index) => (
            <Option
              key={index}
              onClick={() => handleClick(index)}
              checked={index === selected ? true : undefined}
              showresult={showAnswer}
              iscorrect={data.correctAnswer === data.options[index]}
            >
              <BulletPoint checked={index === selected ? true : undefined} />
              <Text>{option}</Text>
            </Option>
          ))}
        </Options>
      </QuestionBody>
    </Container>
  );
};

export default QuizBlock;
