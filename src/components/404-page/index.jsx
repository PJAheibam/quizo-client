import React from "react";
import { Container, ErrorCode, ErrorText, IconContainer } from "./styles";
import { FaRegSadTear } from "react-icons/fa";

const PageNotFound = () => {
  return (
    <Container>
      <IconContainer>
        {" "}
        <FaRegSadTear />{" "}
      </IconContainer>
      <ErrorCode>404</ErrorCode>
      <ErrorText>The page you are looking for is not available</ErrorText>
    </Container>
  );
};

export default PageNotFound;
