import styled from "styled-components";
import { WrapperStyles } from "../../styles/Wrapper";

export const Container = styled.footer`
  ${WrapperStyles}
  margin-top: 1rem;
  padding-block: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 150px;
  background-color: ${(p) => p.theme.paper.main};
`;

export const CRText = styled.p`
  text-align: center;
  color: ${(p) => p.theme.text.secondary};
`;
