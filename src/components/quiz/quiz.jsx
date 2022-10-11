import React from "react";
import { useLoaderData } from "react-router-dom";

import { Wrapper, Container, Aside, QuizSection } from "./Quiz.styles";
import QuizBlock from "./block/Block";

const Quiz = () => {
  const data = useLoaderData();
  return (
    <Wrapper>
      <Container>
        <QuizSection>
          {data.questions.map((data, i) => (
            <QuizBlock data={data} key={i} index={i} />
          ))}
        </QuizSection>
      </Container>
    </Wrapper>
  );
};

export default Quiz;
