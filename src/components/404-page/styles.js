import styled from "styled-components";
import { WrapperStyles } from "../../styles/Wrapper";

export const Container = styled.main`
  ${WrapperStyles};
  min-height: calc(100vh - 92px);
  margin-top: 92px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const IconContainer = styled.div`
  font-size: 5rem;
  color: ${(p) => p.theme.palette.error.disabled};
  height: 5rem;
`;

export const ErrorCode = styled.h1`
  text-align: center;
  font-size: 5rem;
  color: ${(p) => p.theme.palette.error.active};
`;
export const ErrorText = styled.p`
  text-align: center;
  font-size: 1.5rem;
  color: ${(p) => p.theme.text.secondary};
`;
