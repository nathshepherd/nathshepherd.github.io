import styled from "styled-components";

export const SectionContainer = styled.div`
  min-height: calc(100vh - 14rem);
  margin-top: 2rem;
  padding-bottom: 2rem;
  display: grid;
  column-gap: 3rem;
  row-gap: 1rem;
  grid-template-columns: min-content 2fr;
  grid-template-rows: min-content min-content;
  align-items: top;
  justify-items: left;
  animation: fade-in 0.5s;

  @media only screen and (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`;
