import PageHeaderStyle from "./styles/header/PageHeader";
import {
  HeaderMenu,
  BurgerMenu,
  MobileHeaderMenu,
} from "./styles/header/HeaderMenu";
import { PageTitleHeader } from "./styles/text/heading";
import Button from "./styles/button";
import { BurgerXButton } from "./styles/button/BurgerX";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const MenuContents = (buttonCallback?: () => void) => {
  const navigate = useNavigate();
  return [
    <Button
      kind="secondary"
      onClick={() => {
        navigate("/");
        if (buttonCallback) {
          buttonCallback();
        }
      }}
    >
      About Me
    </Button>,
    <Button
      kind="secondary"
      onClick={() => {
        navigate("/experience");
        if (buttonCallback) {
          buttonCallback();
        }
      }}
    >
      Experience
    </Button>,
    <Button
      kind="secondary"
      onClick={() => {
        navigate("/projects");
        if (buttonCallback) {
          buttonCallback();
        }
      }}
    >
      Projects
    </Button>,
  ];
};

const PageHeaderContents = () => {
  const [mobileMenuToggle, setMobileMenuToggle] = useState(false);

  return (
    <PageHeaderStyle>
      <PageTitleHeader>Nathan Shepherd</PageTitleHeader>
      <BurgerMenu>
        <BurgerXButton
          active={mobileMenuToggle}
          buttonTrigger={() => setMobileMenuToggle(!mobileMenuToggle)}
        />
      </BurgerMenu>
      <MobileHeaderMenu active={mobileMenuToggle}>
        {MenuContents(() => setMobileMenuToggle(!mobileMenuToggle))}
      </MobileHeaderMenu>
      <HeaderMenu>{MenuContents()}</HeaderMenu>
    </PageHeaderStyle>
  );
};

export default PageHeaderContents;
