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
  const handleClick = () => {
    setOpen((prev) => !prev);
    window.scrollTo(0, 0);
  };
  const handleLogoClick = () => {
    setOpen(false);
    window.scrollTo(0, 0);
  };
  return (
    <Wrapper>
      <LogoContainer to="/" onClick={handleLogoClick}>
        <Logo />
      </LogoContainer>
      <ToggleButton onClick={() => setOpen((prev) => !prev)} open={open}>
        {open ? <CloseIcon /> : <HamburgerIcon />}
      </ToggleButton>
      <Links open={open}>
        <Link
          end
          to="/"
          isactive={
            pathname === "/" || pathname.includes("/quiz/") ? "true" : undefined
          }
          onClick={handleClick}
        >
          Topics
        </Link>
        <Link
          to="/statistics"
          isactive={pathname === "/statistics" ? "true" : undefined}
          onClick={handleClick}
        >
          Statistics
        </Link>
        <Link
          to="/blog"
          isactive={pathname === "/blog" ? "true" : undefined}
          onClick={handleClick}
        >
          Blog
        </Link>
      </Links>
    </Wrapper>
  );
};

export default Navbar;
