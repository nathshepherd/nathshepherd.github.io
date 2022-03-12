import styled from "styled-components";

export const HeaderMenu = styled.div`
  display: flex;
  column-gap: 0.5rem;
  justify-content: flex-start;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const MobileHeaderMenu = styled.div<{ active: boolean }>`
  display: none;
  transition: 0.5s ease-in-out;

  @media only screen and (max-width: 768px) {
    ${(props) =>
      props.active
        ? `
        display: flex;
        position: absolute;
        z-index: 100;
        right: 4rem;
        top: 4rem;
        flex-direction: column;
        background-color: rgba(255,255,255,0.75);
        padding: 1rem;
        border-radius: 1rem;
        row-gap: 0.5rem;
        justify-content: center;
        animation: fade-in 0.5s;`
        : "animation: fade-out 0.5s;"}
  }
`;

export const BurgerMenu = styled.div`
  display: none;

  @media only screen and (max-width: 768px) {
    display: block;
  }
`;

export const SocialBar = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  column-gap: 1rem;
  justify-content: flex-end;
  align-items: center;

  @media only screen and (max-width: 768px) {
    row-gap: 0.5rem;
    grid-template-columns: 1fr 1fr;
  }
`;
