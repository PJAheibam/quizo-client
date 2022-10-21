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
import { ImEye, ImEyeBlocked } from "react-icons/im";
import { MdClose as Cross } from "react-icons/md";
import { BsCheck as Tick } from "react-icons/bs";
import {
  useUpdateResult,
  useResult,
  useCheckAll,
} from "../../../context/ResultContext";
import {
  getQuizData,
  updateQuizData,
} from "../../../utils/local-storage-helper";

const QuizBlock = ({ data, index, notify }) => {
  const updateResult = useUpdateResult();
  const result = useResult();
  const [checkAllAns] = useCheckAll();
  const [selected, setSelected] = useState(null);
  const { id: quizID } = useParams();
  const { props } = parse(data.question);
  const ques = props?.children;
  const [showAnswer, setShowAnswer] = useState(false);

  function checkAns(index) {
    if (data.correctAnswer === data.options[index]) return "right";
    else return "wrong";
  }

  const handleClick = (index) => {
    if (!showAnswer) {
      setSelected(index);
    }
  };

  const checkResult = (callBackFunc) => {
    if (selected !== null) {
      const updateData = {
        ...result,
        [data.id]: { guessed: checkAns(selected), guessedIndex: selected },
      };
      updateQuizData(quizID, updateData);
      updateResult(updateData);
      setShowAnswer((prev) => !prev);
      if (typeof callBackFunc === "function") callBackFunc();
    } else {
      console.warn("Give all the ans first!");
    }
  };

  useEffect(() => {
    if (result[data.id]) {
      setSelected(result[data.id].guessedIndex);
      if (result[data.id].guessedIndex !== null) setShowAnswer(true);
    }
  }, [result[data.id]]);
  useEffect(() => {
    if (checkAllAns) {
      console.log("check all result clicked!");
      checkResult();
    }
  }, [checkAllAns]);

  return (
    <Container>
      <QuestionHeader>
        <HeaderText>Question {++index}</HeaderText>
        <CheckAnsBtn
          title="show answer"
          disabled={selected === null ? true : undefined}
          hide={showAnswer}
          onClick={() => checkResult(notify(checkAns(selected)))}
        >
          {selected === null ? <ImEyeBlocked /> : <ImEye />}
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
