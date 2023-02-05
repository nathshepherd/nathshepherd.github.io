import styled from "styled-components";

export const ProfileImage = styled.img`
  border-radius: 5rem;
  max-height: 30rem;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.4);
  grid-column: 1;
  grid-row: 1/3;
  justify-self: left;

  @media only screen and (max-width: 1100px) {
    margin: 0;
    max-width: 20rem;
    justify-self: center;
  }
`;

interface SvgIconProps {
  colour?: string;
  hoverColour?: string;
  borderRadius?: string;
  pointer?: boolean;
}

export const GeneralIcon = styled.img<SvgIconProps>`
  height: 2rem;
  color: ${(props) => props.colour ?? "black"};
  cursor: ${(props) => (props.pointer ? "pointer" : {})};
  animation: fade-in 0.25s;
  transition: ease-in-out 0.25s;
  border-radius: ${(props) => props.borderRadius ?? 0};
`;

export const SvgIcon = styled(GeneralIcon)`
  cursor: pointer;
  &:hover {
    transform: translateY(-5%);
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.4);
    color: ${(props) => props.hoverColour ?? "black"};
  }
`;

export const ContactIcon = styled(SvgIcon)`
  &:hover {
    transform: translateY(0%);
    box-shadow: none;
  }
`;
