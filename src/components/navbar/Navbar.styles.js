import styled from "styled-components";
import { WrapperStyles } from "../../styles/Wrapper";
import { Link as rLink, NavLink } from "react-router-dom";
import { device } from "../../utils/device";

export const Wrapper = styled.header`
  ${WrapperStyles}
  padding-block: 1rem;
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(p) => p.theme.paper.main};
  z-index: 1000;
`;

export const LogoContainer = styled(rLink)`
  cursor: pointer;
  text-decoration: none;
  font-size: 3rem;
`;

export const Logo = styled.img`
  height: 3rem;
`;

export const Links = styled.nav`
  will-change: transform;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  background-color: ${(p) => p.theme.paper.dark};
  max-height: ${(p) => (p.open ? "150px" : "0px")};
  overflow: hidden;
  transition: max-height 750ms ease-out;
  @media ${device.md} {
    flex-direction: row;
  }
`;

export const Link = styled(NavLink)`
  text-transform: uppercase;
  /* color: ${(p) => p.theme.text.secondary}; */
  color: ${(p) =>
    p.isactive ? p.theme.palette.secondary.active : p.theme.text.secondary};
  cursor: pointer;
  text-decoration: none;
  font-size: 1.25rem;
  transition: color 300ms ease;
  &:first-child {
    margin-top: 1rem;
  }
  &:last-child {
    margin-bottom: 1rem;
  }
  &:hover {
    color: ${(p) =>
      p.isactive ? p.theme.palette.secondary.active : p.theme.text.hovered};
  }
`;

export const ToggleButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  color: ${(p) => p.theme.text.secondary};
  font-size: 2.5rem;
  border: none;
  user-select: none;
  transition: transform 500ms ease, color 300ms ease;
  &:hover {
    color: ${(p) => p.theme.text.primary};
  }
  &:active {
    transform: scale(0);
  }

  @media ${device.md} {
    display: none;
  }
`;
