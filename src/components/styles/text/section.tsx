import styled from "styled-components";

const Section = styled.div`
  font-family: "Montserrat", sans-serif;
  color: #2a3132;
  transition: 0.25s ease-in-out;

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const ProfileSection = styled(Section)`
  font-size: 1.2rem;
`;

export default Section;
