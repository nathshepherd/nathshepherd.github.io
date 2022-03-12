import styled from "styled-components";
import { theme } from "../themes";

interface ButtonProps {
  kind: "primary" | "secondary";
}

const Button = styled.button<ButtonProps>`
  padding: 0.5rem 1rem;
  border-radius: 0.5em;
  border: none;
  box-shadow: ${theme.default.buttons.shadow};
  box-sizing: border-box;
  outline: none;

  font-weight: 500;
  color: ${(props) =>
    props.kind === "primary" ? "white" : theme.default.primary};
  background-color: ${(props) => theme.default[props.kind]};
  transition: 0.25s ease-in-out;

  cursor: pointer;

  &:hover {
    color: white;
    background-color: ${theme.default.hover};
    transform: translateY(-10%);
  }
`;

export default Button;
