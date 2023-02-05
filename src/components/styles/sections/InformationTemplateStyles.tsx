import styled from "styled-components";

export const InformationTemplateStyle = styled.div<{ index: number }>`
  display: grid;
  grid-template-columns: 1fr 8fr;
  justify-items: left;
  column-gap: 1rem;
  row-gap: 1rem;

  height: min-content;
  width: calc(100% - 3rem);
  padding: 1.5rem;

  animation: fade-in-left 0.5s forwards;
  animation-delay: ${(props) => props.index * 0.1}s;

  border-radius: 1rem;
  background-color: rgba(0, 0, 0, 0.05);
  opacity: 0;

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const InformationImage = styled.img`
  height: 8rem;
  border-radius: 10px;
`;

export const InformationDescriptionList = styled.ul`
  padding: 0rem 1rem;
`;

export const InformationDescriptionListItem = styled.li`
  padding: 0.1rem 0rem;
`;
