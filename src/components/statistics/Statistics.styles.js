import styled from "styled-components";
import { WrapperStyles } from "../../styles/Wrapper";

export const Container = styled.main`
  ${WrapperStyles};
  margin-top: 100px;
  padding-block: 1.5rem;
`;

export const Wrapper = styled.article`
  min-height: calc(100vh - 100px);
`;

export const FooterText = styled.p`
  margin-top: 2rem;
  text-align: center;
  font-size: 1.5rem;
  color: ${(p) => p.theme.text.secondary};
`;
