import { useEffect } from "react";
import styled from "styled-components";

interface BurgerXButtonStyleProps {
  active: boolean;
}

export const BurgerXButtonStyle = styled.span<BurgerXButtonStyleProps>`
  display: block;
  margin: 4px;
  height: 5px;
  width: 30px;
  background: #2a3132;
  border-radius: 9px;
  transition: 0.5s ease-in-out;

  ${(props) =>
    props.active
      ? `
    &:first-child
    {
      transform:translateY(9px) rotate(45deg)
    }

    &:nth-child(2) {
      opacity:0
    }

    &:last-child {
      transform:translateY(-9px) rotate(-45deg)
    }`
      : ""}
`;

interface BurgerXButtonProps {
  active: boolean;
  buttonTrigger: () => void;
}

export const BurgerXButton = (props: BurgerXButtonProps) => {
  useEffect(() => {
    // If the menu is open and the window goes small and then,
    // big again, close the button state
    window.addEventListener(
      "resize",
      function () {
        if (props.active && window.innerWidth >= 768) {
          props.buttonTrigger();
        }
      },
      true
    );
  }, [props]);

  return (
    <div
      style={{ cursor: "pointer" }}
      onClick={() => {
        props.buttonTrigger();
      }}
    >
      <BurgerXButtonStyle active={props.active} />
      <BurgerXButtonStyle active={props.active} />
      <BurgerXButtonStyle active={props.active} />
    </div>
  );
};
