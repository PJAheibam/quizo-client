import React from "react";
import { useResult } from "../../../context/ResultContext";
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
import { resultType } from "../../../context/ResultContext";
import { HiArrowRight as ArrowRight } from "react-icons/hi";
import { getQuizAnsFromLocalStorage } from "../../../utils/updateDataToLocalStorage";

const Aside = ({ data }) => {
  const result = useResult();

  const checkAllResult = () => {
    console.log(result);
  };

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
            <Total variant="success"> {result.correctGuessed}</Total>
            <Foo>Guessed Correctly</Foo>
          </Block>
          <Block>
            <Total variant="error"> {result.wrongGuessed}</Total>
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
