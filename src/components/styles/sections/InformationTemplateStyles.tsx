import styled from "styled-components";

export const InformationTemplateStyle = styled.div`
  display: grid;
  padding: 1.5rem;
  height: min-content;
  width: calc(100% - 3rem);
  border-radius: 1rem;
  column-gap: 1rem;
  row-gap: 1rem;
  grid-template-columns: 1fr 8fr;
  justify-items: left;
  background-color: rgba(0, 0, 0, 0.05);
  opacity: 0;
  animation: fade-in-left 0.5s forwards;

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  &:nth-child(1) {
    animation-delay: 0.1s;
  }

  &:nth-child(2) {
    animation-delay: 0.2s;
  }

  &:nth-child(3) {
    animation-delay: 0.3s;
  }

  &:nth-child(4) {
    animation-delay: 0.4s;
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
