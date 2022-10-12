import styled from "styled-components";
import { device } from "../../../utils/device";

export const AsideWrapper = styled.article`
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: ${(p) => p.theme.paper.main};
  @media ${device.lg} {
    position: sticky;
    top: 125px;
    height: calc(100vh - 125px);
    overflow-y: auto;
  }
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-track {
    margin-block: 0.5rem;
    border-radius: 8px;
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    border: none;
    border-radius: 8px;
    background-color: hsl(217, 10%, 35%);
    transition: background-color 350ms ease;
    &:hover {
      background-color: hsl(217, 10%, 40%);
    }
  }
`;
export const Container = styled.aside`
  position: relative;
  flex-basis: 30%;
`;

export const ThumbnailContainer = styled.figure`
  display: flex;
  justify-content: center;
`;
export const Thumbnail = styled.img`
  width: 80%;
`;

export const Content = styled.section``;
export const Name = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  font-weight: 500;
  letter-spacing: 1px;
`;
export const SubText = styled.p``;

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 0.75rem;
  margin-bottom: 2rem;
`;
export const Total = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.5rem;
  width: 100px;
  height: 100px;
  padding: 2rem;
  margin-inline: auto;
  text-align: center;
  color: ${(p) => {
    if (p.variant === "success") return p.theme.palette.success.active;
    else if (p.variant === "error") return p.theme.palette.error.active;
    else return p.theme.text.secondary;
  }};
  background-color: ${(p) => {
    if (p.variant === "success") return p.theme.palette.success.bg;
    else if (p.variant === "error") return p.theme.palette.error.bg;
    else return p.theme.paper.dark;
  }};
  border-radius: 50%;
`;
export const Foo = styled.p`
  text-align: center;
  font-size: 1.5rem;
  font-weight: 500;
  color: ${(p) => p.theme.text.secondary};
`;

export const CheckAllBtn = styled.button`
  will-change: background-color, color;
  cursor: pointer;
  text-align: center;
  width: 100%;
  font-weight: 500;
  letter-spacing: 1px;
  font-size: 1.5rem;
  padding: 0.5em 1em;
  border-radius: 0.25rem;
  color: ${(p) => p.theme.palette.secondary.active};
  background-color: ${(p) => p.theme.palette.secondary.bg};
  border: 2px solid ${(p) => p.theme.palette.secondary.active};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  transition: background-color 350ms ease, color 350ms ease;
  &:hover {
    color: ${(p) => p.theme.text.primary};
    background-color: ${(p) => p.theme.palette.secondary.hovered};
  }
`;
