import React, { useEffect } from "react";
import {
  useCheckAll,
  useResult,
  useUpdateResult,
} from "../../../context/ResultContext";
import {
  AsideWrapper,
  Container,
  Content,
  Name,
  Block,
  Total,
  Foo,
  ThumbnailContainer,
  Thumbnail,
  CheckAllBtn,
} from "./Aside.styles";
import { HiArrowRight as ArrowRight } from "react-icons/hi";
import { useParams } from "react-router-dom";
import { getQuizData } from "../../../utils/local-storage-helper";

const calculateGuessed = (data) => {
  let newGuessed = {
    correct: 0,
    wrong: 0,
  };

  for (const questionID in data) {
    if (data[questionID].guessed === "right") {
      newGuessed.correct++;
    } else if (data[questionID].guessed === "wrong") {
      newGuessed.wrong++;
    }
  }
  console.log(newGuessed);
  return newGuessed;
};

const Aside = ({ data }) => {
  const { id: quizID } = useParams();
  const result = useResult();
  const updateResult = useUpdateResult();
  const guessed = calculateGuessed(result);
  const [checkAllAns, setCheckAllAns] = useCheckAll();
  // console.info(guessed);
  const checkAllResult = () => {
    setCheckAllAns(true);
  };

  useEffect(() => {
    let localData = getQuizData(quizID);
    if (!localData) {
      localData = {};
      const { questions } = data;
      for (const question of questions) {
        localData[question.id] = { guessed: "not-guessed", guessedIndex: null };
      }
    }
    localData && updateResult(localData);
  }, []);
  return (
    <Container>
      <AsideWrapper>
        <ThumbnailContainer>
          <Thumbnail src={data.logo} />
        </ThumbnailContainer>
        <Content>
          <Name>{data.name} </Name>
          <Block>
            <Total> {data.total}</Total>
            <Foo>Total Quiz</Foo>
          </Block>
          <Block>
            <Total variant="success"> {guessed.correct}</Total>
            <Foo>Guessed Correctly</Foo>
          </Block>
          <Block>
            <Total variant="error"> {guessed.wrong}</Total>
            <Foo>Wrong Guessed</Foo>
          </Block>
        </Content>
        <CheckAllBtn onClick={checkAllResult}>
          See All Result <ArrowRight />{" "}
        </CheckAllBtn>
      </AsideWrapper>
    </Container>
  );
};

export default Aside;
