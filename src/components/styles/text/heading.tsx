import styled from "styled-components";

export const Heading = styled.div`
  font-family: "Montserrat", "Open Sans", Arial, Helvetica, sans-serif;
  font-size: 1.4rem;
  font-weight: bold;
  color: #2a3132;
  transition: 0.25s ease-in-out;

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const PageTitleHeader = styled(Heading)`
  font-family: "Montserrat", Arial, Helvetica, sans-serif;
  font-weight: normal;
  font-size: 1.2rem;
`;
