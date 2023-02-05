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

export const BurgerXButton = (deps: {
  active: boolean;
  onClose: () => void;
}) => {
  useEffect(() => {
    // If the menu is open and the window goes small and then,
    // big again, close the button state
    window.addEventListener(
      "resize",
      function () {
        if (deps.active && window.innerWidth >= 768) {
          deps.onClose();
        }
      },
      true
    );
  }, [deps]);

  return (
    <div style={{ cursor: "pointer" }} onClick={deps.onClose}>
      <BurgerXButtonStyle active={deps.active} />
      <BurgerXButtonStyle active={deps.active} />
      <BurgerXButtonStyle active={deps.active} />
    </div>
  );
};
