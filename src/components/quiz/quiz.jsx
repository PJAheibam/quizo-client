import React from "react";
import { useLoaderData } from "react-router-dom";

import { Wrapper, Container, QuizSection } from "./Quiz.styles";
import QuizBlock from "./block/Block";
import Aside from "./aside/Aside";

import ResultProvider from "../../context/ResultContext";

const Quiz = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <>
      <ResultProvider>
        <Wrapper>
          <Container>
            <Aside data={data} />
            <QuizSection>
              {data.questions.map((data, i) => (
                <QuizBlock data={data} key={i} index={i} />
              ))}
            </QuizSection>
          </Container>
        </Wrapper>
      </ResultProvider>
    </>
  );
};

export default Quiz;
