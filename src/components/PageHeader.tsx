import {
  BurgerMenu,
  HeaderMenu,
  MobileHeaderMenu,
} from "./styles/header/HeaderMenu";
import { BurgerXButton } from "./styles/button/BurgerX";
import { PageTitleHeader } from "./styles/text/heading";
import { useState } from "react";
import Button from "./styles/button";
import PageHeaderStyle from "./styles/header/PageHeader";
import { Pages } from "./install";

export const PageHeader = ({ navigateTo }: { navigateTo: (page: Pages) => void }) => {
  const [mobileMenuToggle, setMobileMenuToggle] = useState(false);

  return (
    <PageHeaderStyle>
      <PageTitleHeader>Nathan Shepherd</PageTitleHeader>
      <DesktopMenu navigateTo={navigateTo} />
      <MobileMenu
        active={mobileMenuToggle}
        navigateTo={navigateTo}
        onClose={() => setMobileMenuToggle(!mobileMenuToggle)}
      />
    </PageHeaderStyle>
  );
};

const DesktopMenu = ({ navigateTo }: { navigateTo: (page: Pages) => void }) => (
  <HeaderMenu>
    <MenuContents navigateTo={navigateTo}/>
  </HeaderMenu>
);

const MobileMenu = (deps: { active: boolean; navigateTo: (page: Pages) => void, onClose: () => void }) => (
  <>
    <BurgerMenu>
      <BurgerXButton active={deps.active} onClose={deps.onClose} />
    </BurgerMenu>
    <MobileHeaderMenu active={deps.active}>
      <MenuContents navigateTo={deps.navigateTo} onClose={deps.onClose} />
    </MobileHeaderMenu>
  </>
);

const MenuContents = ({ navigateTo, onClose }: { navigateTo: (page: Pages) => void, onClose?: () => void }) => {
  const onCloseNavigate = (page: Pages) => {
    navigateTo(page);
    onClose?.();
  };

  const menuInformation = [
    {
      label: "About Me",
      page: Pages.ABOUT_ME,
    },
    {
      label: "Experience",
      page: Pages.EXPERIENCE,
    },
    {
      label: "Projects",
      page: Pages.PROJECTS,
    },
  ];

  return (
    <>
      {menuInformation.map((info) => (
        <Button
          key={info.label}
          aria-labelledby={info.label}
          kind="secondary"
          onClick={() => onCloseNavigate(info.page)}
        >
          {info.label}
        </Button>
      ))}
    </>
  );
};
