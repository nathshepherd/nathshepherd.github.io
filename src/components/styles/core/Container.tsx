import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 8fr 2fr;
  grid-template-rows: 1fr 5fr 1fr;

  max-height: 100vh;
  margin: 0;
  padding: 0;

  background: linear-gradient(180deg, #e3f0f3 0%, rgba(255, 255, 255, 1) 100%);

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 1rem;
  }
`;

export default Container;
