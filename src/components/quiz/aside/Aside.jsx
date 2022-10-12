import React, { useEffect } from "react";
import { useResult, useUpdateResult } from "../../../context/ResultContext";
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

const Aside = ({ data }) => {
  const result = useResult();
  const updateResult = useUpdateResult();
  const guessed = result.reduce(
    (prevValue, currentValue) => {
      if (currentValue.guessed === "right") {
        return { ...prevValue, correct: prevValue.correct + 1 };
      } else if (currentValue.guessed === "wrong") {
        return { ...prevValue, wrong: prevValue.wrong + 1 };
      } else return prevValue;
    },
    { correct: 0, wrong: 0 }
  );
  // console.info(guessed);
  const checkAllResult = () => {
    // console.log(guessed);
    console.log(result);
  };
  useEffect(() => {
    const res = data.questions.map((question) => ({
      questionID: question.id,
      guessed: "not-guessed",
    }));
    updateResult(res);
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
        {/* <CheckAllBtn onClick={checkAllResult}>
          See All Result <ArrowRight />{" "}
        </CheckAllBtn> */}
      </AsideWrapper>
    </Container>
  );
};

export default Aside;
