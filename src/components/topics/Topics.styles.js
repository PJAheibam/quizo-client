import styled from "styled-components";
import { WrapperStyles } from "../../styles/Wrapper";
import { Link } from "react-router-dom";
import { device } from "../../utils/device";

export const Wrapper = styled.article`
  ${WrapperStyles};
  padding-block: 1.5rem;
  scroll-margin-top: 92px;
  min-height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media ${device.md} {
    display: grid;
    min-height: 200px;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 1fr;
  }
  @media ${device.lg} {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const Container = styled.section`
  width: 100%;
  height: fit-content;
  background-color: ${(p) => p.theme.paper.dark};
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  @media ${device.lg} {
    flex-direction: column;
    align-items: flex-start;
    gap: 0;
  }
`;

export const ThumbnailContainer = styled.figure`
  /* flex-basis: auto; */
  aspect-ratio: 1/1;
  width: fit-content;
  height: fit-content;
  margin: 1rem;
  margin-right: 0;
  border-radius: 0.5rem;
  border: 5px solid ${(p) => p.theme.paper.main};
  @media ${device.lg} {
    overflow: hidden;
    margin-inline: auto;
  }
`;

export const Thumbnail = styled.img`
  width: 120px;
  /* height: 120px; */
  object-fit: cover;
  object-position: center;
  @media ${device.lg} {
    width: 200px;
  }
`;
export const Name = styled.h2`
  font-size: 1.75rem;
  letter-spacing: 2px;
  margin-bottom: 0.15em;
  color: ${(p) => p.theme.text.primary};
`;

export const Text = styled.p`
  letter-spacing: 1px;
  font-weight: 500;
  color: ${(p) => p.theme.text.secondary};
`;

export const LinkButton = styled(Link)`
  cursor: pointer;
  display: block;
  text-decoration: none;
  font-size: 1.5rem;
  text-align: center;
  padding: 0.25em 0.5em;
  margin-top: 1rem;
  border-radius: 0.2em;
  background-color: ${(p) => p.theme.palette.secondary.bg};
  color: ${(p) => p.theme.text.primary};
  border: none;
`;

export const Content = styled.div`
  width: 100%;
  padding: 1rem;
  @media ${device.lg} {
    padding-inline: 2rem;
    padding-top: 0rem;
    padding-bottom: 1.5rem;
  }
`;
