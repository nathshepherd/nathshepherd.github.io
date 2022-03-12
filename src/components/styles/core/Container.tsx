import styled from "styled-components";

const Container = styled.div`
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 2fr 8fr 2fr;
  grid-template-rows: 1fr 5fr 1fr;
  max-height: 100vh;
  background: linear-gradient(180deg, #e3f0f3 0%, rgba(255, 255, 255, 1) 100%);
`;

export default Container;
