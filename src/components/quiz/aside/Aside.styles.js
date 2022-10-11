import styled from "styled-components";

export const AsideWrapper = styled.article`
  position: sticky;
  top: 125px;
  padding: 1rem;
  background-color: ${(p) => p.theme.paper.main};
  border-radius: 0.5rem;
`;
export const Container = styled.aside`
  position: relative;
  flex-basis: 40%;
`;

export const ThumbnailContainer = styled.figure``;
export const Thumbnail = styled.img`
  width: 100%;
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
  background-color: ${(p) => p.theme.paper.dark};
  border-radius: 50%;
`;
export const Foo = styled.p`
  text-align: center;
  font-size: 1.5rem;
  font-weight: 500;
  color: ${(p) => p.theme.text.secondary};
`;
