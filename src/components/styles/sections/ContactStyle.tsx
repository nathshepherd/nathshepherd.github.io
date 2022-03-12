import styled from "styled-components";

export const SectionContainer = styled.div`
  padding: 2rem 0rem;
  display: grid;
  column-gap: 3rem;
  row-gap: 1rem;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-items: left;

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ContentMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  column-gap: 1rem;
`;
