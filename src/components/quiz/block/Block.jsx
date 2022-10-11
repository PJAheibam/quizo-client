import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
import { MdClose as Cross } from "react-icons/md";
import { BsCheck as Tick } from "react-icons/bs";
import { useUpdateResult, resultType } from "../../../context/ResultContext";
import { updateResultToLocalStorage } from "../../../utils/updateDataToLocalStorage";

const QuizBlock = ({ data, index }) => {
  // console.info(data.guessedIndex);
  const { id: quizID } = useParams();
  const { props } = parse(data.question);
  const ques = props?.children;
  const [selected, setSelected] = useState(data.guessedIndex);
  const [showAnswer, setShowAnswer] = useState(
    selected !== null ? true : false
  );
  const [allowInput, setAllowInput] = useState(true);
  const updateResult = useUpdateResult();

  const handleClick = (index) => {
    if (allowInput) {
      setSelected(index);
    } else {
      console.log("You just give the answer!");
    }
  };

  const checkResult = () => {
    setShowAnswer((prev) => !prev);
    setAllowInput(false);
    updateResultToLocalStorage(quizID, data.id, selected);
    if (data.correctAnswer === data.options[selected]) {
      updateResult(resultType.CORRECT_GUESSED);
    } else {
      updateResult(resultType.WRONG_GUESSED);
    }
  };

  return (
    <Container>
      <QuestionHeader>
        <HeaderText>Question {++index}</HeaderText>
        <CheckAnsBtn
          title="check answer"
          onClick={checkResult}
          disabled={selected === null ? true : false}
          hide={showAnswer}
        >
          {" "}
          <ImEye />{" "}
        </CheckAnsBtn>
      </QuestionHeader>
      <QuestionBody>
        <Question>{ques?.props?.children || ques || data.question}</Question>
        <Options showresult={showAnswer}>
          {data.options.map((option, index) => (
            <Option
              key={index}
              onClick={() => handleClick(index)}
              checked={index === selected ? true : undefined}
              showresult={showAnswer}
              iscorrect={data.correctAnswer === data.options[index]}
            >
              <BulletPoint
                checked={index === selected ? true : undefined}
                showresult={showAnswer}
                iscorrect={data.correctAnswer === data.options[index]}
              >
                {showAnswer && index === selected ? (
                  data.correctAnswer === data.options[index] ? (
                    <Tick />
                  ) : (
                    <Cross />
                  )
                ) : showAnswer && data.correctAnswer === data.options[index] ? (
                  <Tick />
                ) : (
                  ""
                )}
              </BulletPoint>
              <Text>{option}</Text>
            </Option>
          ))}
        </Options>
      </QuestionBody>
    </Container>
  );
};

export default QuizBlock;
