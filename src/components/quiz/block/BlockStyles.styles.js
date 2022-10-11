import styled, { css } from "styled-components";

const correctStyles = css`
  border: 2px solid ${(p) => p.theme.palette.success.active};
  background-color: ${(p) => p.theme.palette.success.bg};
`;

const errorStyles = css`
  border: 2px solid ${(p) => p.theme.palette.error.active};
  background-color: ${(p) => p.theme.palette.error.bg};
`;

const radioCorrectStyles = css`
  border: none;
  background-color: ${(p) => p.theme.palette.success.active};
  /* outline: 1px solid ${(p) => p.theme.palette.success.active}; */
`;

const radioErrorStyles = css`
  border: none;
  background-color: ${(p) => p.theme.palette.error.active};
  /* outline: 1px solid ${(p) => p.theme.palette.error.active}; */
`;

export const Container = styled.div`
  border-radius: 5px;
  background-color: ${(p) => p.theme.paper.dark};
  overflow: hidden;
`;
export const Question = styled.h2`
  font-weight: 500;
  color: ${(p) => p.theme.text.primary};
  letter-spacing: 1px;
  margin-bottom: 1rem;
`;

export const QuestionBody = styled.div`
  padding: 1rem 1.25rem;
`;
export const QuestionHeader = styled.div`
  width: 100%;
  padding: 0.5em 1em;
  background-color: ${(p) => p.theme.paper.main};
  display: flex;
  justify-content: space-between;
`;

export const HeaderText = styled.h1`
  color: ${(p) => p.theme.text.primary};
  letter-spacing: 1px;
  font-weight: 500;
`;

export const CheckAnsBtn = styled.button`
  cursor: ${(p) => (p.disabled ? "not-allowed" : "pointer")};
  pointer-events: ${(p) => (p.hide ? "none" : "auto")};
  will-change: color;
  background-color: transparent;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  opacity: ${(p) => (p.hide ? 0 : 1)};
  color: ${(p) =>
    p.disabled ? p.theme.text.disabled : p.theme.text.secondary};
  transition: color 300ms ease;
  &:hover {
    color: ${(p) =>
      p.disabled ? p.theme.text.disabled : p.theme.text.primary};
  }
`;

export const Options = styled.div`
  pointer-events: ${(p) => (p.showresult ? "none" : "initial")};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const BulletPoint = styled.span`
  will-change: border, background-color;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  padding: 2px;
  border: 1px solid ${(p) => p.theme.text.disabled};
  transition: border 300ms ease, background-color 500ms ease;
  ${(p) => {
    if (p.showresult) {
      if (p.checked) {
        if (p.iscorrect) {
          return radioCorrectStyles;
        } else {
          return radioErrorStyles;
        }
      } else {
        if (p.iscorrect) {
          return radioCorrectStyles;
        }
      }
    }
  }}
  &::after {
    will-change: background-color;
    position: absolute;
    content: "";
    width: 65%;
    height: 65%;
    top: 50%;
    left: 50%;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    background-color: ${(p) =>
      p.checked
        ? p.showresult
          ? "transparent"
          : p.theme.text.secondary
        : "transparent"};
    transition: background-color 300ms ease;
  }
`;

export const Text = styled.p`
  letter-spacing: 1px;
  color: ${(p) => p.theme.text.secondary};
`;

export const Option = styled.label`
  will-change: border, background-color;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 1rem;
  border-radius: 0.25rem;
  border: 2px solid ${(p) => p.theme.paper.light};
  gap: 1rem;
  ${(p) => {
    if (p.showresult) {
      if (p.checked) {
        if (p.iscorrect) {
          return correctStyles;
        } else {
          return errorStyles;
        }
      } else {
        if (p.iscorrect) {
          return correctStyles;
        }
      }
    }
  }}
  transition: border 350ms ease, background-color 350ms ease;
  &:hover ${BulletPoint} {
    border: 1px solid ${(p) => p.theme.text.primary};
  }
  &:hover ${BulletPoint}::after {
    background-color: ${(p) => (p.checked ? p.theme.text.primary : "")};
  }
`;
