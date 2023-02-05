import {
  BurgerMenu,
  HeaderMenu,
  MobileHeaderMenu,
} from "./styles/header/HeaderMenu";
import { BurgerXButton } from "./styles/button/BurgerX";
import { PageTitleHeader } from "./styles/text/heading";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "./styles/button";
import PageHeaderStyle from "./styles/header/PageHeader";

export const PageHeader = () => {
  const [mobileMenuToggle, setMobileMenuToggle] = useState(false);

  return (
    <PageHeaderStyle>
      <PageTitleHeader>Nathan Shepherd</PageTitleHeader>
      <DesktopMenu />
      <MobileMenu
        active={mobileMenuToggle}
        onClose={() => setMobileMenuToggle(!mobileMenuToggle)}
      />
    </PageHeaderStyle>
  );
};

const DesktopMenu = () => (
  <HeaderMenu>
    <MenuContents />
  </HeaderMenu>
);

const MobileMenu = (deps: { active: boolean; onClose: () => void }) => (
  <>
    <BurgerMenu>
      <BurgerXButton active={deps.active} onClose={deps.onClose} />
    </BurgerMenu>
    <MobileHeaderMenu active={deps.active}>
      <MenuContents onClose={deps.onClose} />
    </MobileHeaderMenu>
  </>
);

const MenuContents = ({ onClose }: { onClose?: () => void }) => {
  const navigate = useNavigate();
  const onCloseNavigate = (url: string) => {
    navigate(url);
    onClose?.();
  };

  const menuInformation = [
    {
      label: "About Me",
      url: "/",
    },
    {
      label: "Experience",
      url: "/experience",
    },
    {
      label: "Projects",
      url: "/projects",
    },
  ];

  return (
    <>
      {menuInformation.map((info) => (
        <Button
          key={info.label}
          aria-labelledby={info.label}
          kind="secondary"
          onClick={() => onCloseNavigate(info.url)}
        >
          {info.label}
        </Button>
      ))}
    </>
  );
};
