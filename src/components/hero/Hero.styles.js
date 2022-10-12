import styled, { keyframes } from "styled-components";
import logo from "../../assets/img/logo.png";
import { Link } from "react-router-dom";
import { device } from "../../utils/device";
import { FocusStyle } from "../../styles/FocusStyle";

export const Container = styled.section`
  position: relative;
  min-height: calc(100vh - 92px);
  background-image: linear-gradient(
    -45deg,
    hsl(272, 40%, 25%),
    hsl(309, 25%, 35%)
  );
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &::before,
  &::after {
    position: absolute;
    content: "";
    height: 300px;
    width: 300px;
    top: 50%;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    filter: blur(100px);
    /* z-index: -1; */
    opacity: 1;
  }
  &::before {
    left: 0;
    background-color: violet;
  }
  &::after {
    left: 100%;
    background-color: hsla(52, 90%, 50%, 0.75);
  }
  @media ${device.md} {
    min-height: 500px;
  }
  @media ${device.lg} {
    height: calc(100vh - 92px);
  }
`;

export const Logo = styled.img.attrs((p) => ({
  src: logo,
}))`
  width: 200px;
`;

export const Heading = styled.h1`
  font-size: 3rem;
  text-transform: uppercase;
  font-weight: 900;
  letter-spacing: 1px;
  padding-inline: max(1.5rem, calc(100vw - 1280px));
  text-align: center;
  margin-block: 2.5rem;
  background-image: linear-gradient(-45deg, #f9d423, #ff4350);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const CTA = styled.a`
  position: relative;
  cursor: pointer;
  font-size: 2rem;
  font-weight: 1.25rem;
  border-radius: 1.5em;
  text-decoration: none;
  background-color: transparent;
  color: white;
  background-image: linear-gradient(-45deg, #fc00ff, #00dbde);
  background-size: 200%;
  background-position: right;
  border: none;
  padding: 0.5em 1em;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-position 300ms ease-out, box-shadow 300ms ease-out;
  z-index: 200;
  &:hover {
    background-position: left;
    box-shadow: 0 5px 20px hsla(180, 100%, 40%, 0.25),
      0 5px 50px hsla(180, 100%, 40%, 0.4);
  }
  &:focus-visible {
    ${FocusStyle};
  }
  @media ${device.md} {
    display: none;
  }
  @media ${device.lg} {
    display: block;
  }
`;

const arrowAnimation = keyframes`
0%{
  opacity: 0;
  transform: translate(-50%,-10%);
}
45%{
  opacity: 1;
  transform: translate(-50%,20%);
}
90%, 100%{
  opacity: 0;
  transform: translate(-50%,60%);
}
`;

export const Arrow = styled.div`
  position: absolute;
  top: 100%;
  left: 50%;
  height: 100%;
  width: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(p) => p.theme.text.secondary};
  transform: translateX(-50%);
  animation: ${arrowAnimation} 2s linear infinite;
  animation-delay: 1s;
`;
