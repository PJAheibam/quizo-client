import React, { useState } from "react";
import {
  Wrapper,
  Logo,
  LogoContainer,
  Links,
  Link,
  ToggleButton,
} from "./Navbar.styles";
import { HiMenuAlt3 as HamburgerIcon } from "react-icons/hi";
import { CgClose as CloseIcon } from "react-icons/cg";
import { useTheme } from "styled-components";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const activeLinkStyle = { color: theme.palette.secondary.active };

  return (
    <Wrapper>
      <LogoContainer>Site name</LogoContainer>
      <ToggleButton onClick={() => setOpen((prev) => !prev)} open={open}>
        {open ? <CloseIcon /> : <HamburgerIcon />}
      </ToggleButton>
      <Links open={open}>
        <Link to="/">Topics</Link>
        <Link to="/statistics">Statistics</Link>
        <Link to="/blog">Blog</Link>
      </Links>
    </Wrapper>
  );
};

export default Navbar;
