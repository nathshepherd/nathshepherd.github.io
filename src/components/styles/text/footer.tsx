import styled from "styled-components";

const FooterText = styled.div`
  font-family: "Montserrat", "Open Sans", Arial, Helvetica, sans-serif;
  font-weight: bold;
  color: #2a3132;
  transition: 0.25s ease-in-out;

  @media only screen and (max-width: 768px) {
    grid-column: 1/3;
  }
`;

export default FooterText;
