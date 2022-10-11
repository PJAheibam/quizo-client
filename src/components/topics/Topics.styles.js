import styled from "styled-components";
import { WrapperStyles } from "../../styles/Wrapper";

export const Wrapper = styled.main`
  ${WrapperStyles};
  margin-top: 100px;
  padding-block: 1.5rem;
  min-height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Container = styled.section`
  width: 100%;
  min-height: 5rem;
  background-color: ${(p) => p.theme.paper.dark};
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

export const ThumbnailContainer = styled.figure`
  flex-basis: 30%;
  /* height: 10rem; */
  margin: 1rem;
  border-radius: 0.5rem;
  border: 5px solid ${(p) => p.theme.paper.main};
  overflow: hidden;
`;

export const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;
export const Name = styled.h2`
  font-size: 1.75rem;
  margin-bottom: 0.15em;
  color: ${(p) => p.theme.text.primary};
`;

export const Text = styled.p`
  color: ${(p) => p.theme.text.secondary};
`;

export const Button = styled.button`
  cursor: pointer;
  font-size: 1.5rem;
  text-align: center;
  padding: 0.25em 0.5em;
  margin-top: 1rem;
  background-color: ${(p) => p.theme.palette.secondary.bg};
  color: ${(p) => p.theme.text.primary};
  border: none;
`;

export const Content = styled.div`
  padding: 1rem;
`;
