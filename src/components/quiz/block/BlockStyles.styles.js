import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 2rem;
  border-radius: 5px;
  background-color: ${(p) => p.theme.paper.dark};
  overflow: hidden;
`;
export const Question = styled.h1`
  font-weight: 600;
  letter-spacing: 1px;
`;

export const QuestionBody = styled.div`
  padding: 1rem 1.25rem;
`;
export const QuestionHeader = styled.div`
  width: 100%;
  padding: 0.5em 1em;
  background-color: ${(p) => p.theme.paper.main};
`;
export const Options = styled.div``;

export const Option = styled.label``;
export const Radio = styled.input.attrs((p) => ({
  type: "radio",
}))``;

export const BulletPoint = styled.span``;

export const Text = styled.p`
  letter-spacing: 1px;
`;
