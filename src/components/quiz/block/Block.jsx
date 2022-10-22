import React, { useEffect, useRef, useState } from "react";
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
  GUESSED_TYPE,
} from "../../../context/ResultContext";
import { updateQuizData } from "../../../utils/local-storage-helper";
import { toast } from "react-toastify";

const QuizBlock = ({ data, index, notify, localQuesData }) => {
  const updateResult = useUpdateResult();
  const containerRef = useRef();
  const result = useResult();
  const { focusIndex, checkAllAns, setFocusIndex, showAllAnswer } =
    useCheckAll();
  const [selected, setSelected] = useState(null);
  const { id: quizID } = useParams();
  const { props } = parse(data.question);
  const ques = props?.children;
  const [showAnswer, setShowAnswer] = useState(showAllAnswer);

  function checkAns(index) {
    if (data.correctAnswer === data.options[index]) return "right";
    else return "wrong";
  }

  const handleClick = (index) => {
    if (!showAnswer) {
      setSelected(index);
      const updatedResult = {
        ...result,
        [data.id]: { guessed: "not-guessed", guessedIndex: index },
      };
      updateResult(updatedResult);
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
    if (localQuesData) {
      setSelected(localQuesData.guessedIndex);
      if (localQuesData.guessedIndex !== null) setShowAnswer(true);
    }
  }, [localQuesData]);

  useEffect(() => {
    if (result[data.id] !== undefined) {
      if (result[data.id].guessed !== GUESSED_TYPE.NOT_GUESSED) {
        setSelected(result[data.id].guessedIndex);
        setShowAnswer(true);
      }
    }
  }, [showAllAnswer]);

  useEffect(() => {
    const element = containerRef.current;

    const removeInterval = setInterval(() => {
      element.classList.remove("flash");
    }, 3000);
    if (focusIndex !== null && index === focusIndex + 1) {
      element.classList.remove("flash");
      containerRef.current.scrollIntoView();
      const y = containerRef.current.offsetTop - 124;
      containerRef.current.classList.add("flash");
      window.scrollTo(0, y);
      toast.warn(`Select question ${index} answer!`, {
        position: toast.POSITION.TOP_CENTER,
      });
      setFocusIndex(null);
    }
    return () => {
      clearInterval(removeInterval);
    };
  }, [checkAllAns]);

  return (
    <Container ref={containerRef}>
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
