import styled from "styled-components";
import { WrapperStyles } from "../../styles/Wrapper";
import { Link as rLink, NavLink } from "react-router-dom";

export const Wrapper = styled.header`
  ${WrapperStyles}
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoContainer = styled(rLink)`
  cursor: pointer;
  text-decoration: none;
`;

export const Logo = styled.img`
  height: 3rem;
`;

export const Links = styled.nav``;

export const Link = styled(NavLink)`
  color: ${(p) => p.theme.text.secondary};
  transition: color 300ms ease;
  &:hover {
    color: ${(p) => p.theme.text.hovered};
  }
`;
