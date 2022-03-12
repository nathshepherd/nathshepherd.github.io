import styled from "styled-components";

export const SectionContainer = styled.div`
  min-height: calc(100vh - 12rem);
`;

export const SectionContentGrid = styled.div`
  padding: 2rem 0rem;
  display: grid;
  row-gap: 2rem;
  column-gap: 2rem;
  grid-template-columns: 1fr;
  justify-items: center;

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
