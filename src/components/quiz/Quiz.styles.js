import styled from "styled-components";
import { WrapperStyles } from "../../styles/Wrapper";
import { device } from "../../utils/device";

export const Wrapper = styled.main`
  ${WrapperStyles};
  margin-top: 100px;
  padding-block: 1.5rem;
`;

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  @media ${device.lg} {
    flex-direction: row-reverse;
    /* width: 420px; */
  }
`;

export const QuizSection = styled.section`
  flex-basis: 70%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
