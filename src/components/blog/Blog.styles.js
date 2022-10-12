import styled from "styled-components";
import { WrapperStyles } from "../../styles/Wrapper";

export const Container = styled.main`
  ${WrapperStyles};
  margin-top: 100px;
  padding-block: 1rem;
`;
export const Main = styled.article`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
export const Aside = styled.aside``;
export const ArticleTitle = styled.h1`
  font-size: 2.75rem;
  letter-spacing: 1px;
  font-weight: 500;
  color: ${(p) => p.theme.text.primary};
`;
export const Section = styled.section``;
export const Title = styled.h2`
  font-size: 2rem;
  font-weight: 500;
  letter-spacing: 1px;
  color: ${(p) => p.theme.text.primary};
  margin-bottom: 1rem;
`;
export const Text = styled.p`
  font-size: 1.4rem;
  font-weight: 300;
  line-height: 1.5em;
  color: ${(p) => p.theme.text.secondary};
  margin-bottom: 0.25em;
`;
