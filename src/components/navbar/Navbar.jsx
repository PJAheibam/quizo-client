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
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <Wrapper>
      <LogoContainer to="/" onClick={() => setOpen(false)}>
        Site name
      </LogoContainer>
      <ToggleButton onClick={() => setOpen((prev) => !prev)} open={open}>
        {open ? <CloseIcon /> : <HamburgerIcon />}
      </ToggleButton>
      <Links open={open}>
        <Link
          end
          to="/"
          isactive={pathname === "/" ? "true" : undefined}
          onClick={() => setOpen((prev) => !prev)}
        >
          Topics
        </Link>
        <Link
          to="/statistics"
          isactive={pathname === "/statistics" ? "true" : undefined}
          onClick={() => setOpen((prev) => !prev)}
        >
          Statistics
        </Link>
        <Link
          to="/blog"
          isactive={pathname === "/blog" ? "true" : undefined}
          onClick={() => setOpen((prev) => !prev)}
        >
          Blog
        </Link>
      </Links>
    </Wrapper>
  );
};

export default Navbar;
