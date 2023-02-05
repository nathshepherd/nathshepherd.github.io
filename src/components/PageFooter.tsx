import { SocialBar } from "./styles/header/HeaderMenu";
import { SvgIcon } from "./styles/image/Images";
import FooterText from "./styles/text/footer";
import GitHubIcon from "./../contents/github.svg";
import LinkedInIcon from "./../contents/linkedin.svg";
import PageFooterStyle from "./styles/footer/PageFooter";

export const PageFooter = () => {
  return (
    <PageFooterStyle>
      <SocialBar>
        <FooterText tabIndex={2}>nathanshepherd087@gmail.com</FooterText>
        <SvgIcon
          tabIndex={2}
          hoverColour="rgb(0,119,181)"
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              window.open(
                "https://www.linkedin.com/in/nathan-shepherd-6561221ba/",
                "_blank"
              );
            }
          }}
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/nathan-shepherd-6561221ba/",
              "_blank"
            )
          }
          src={LinkedInIcon}
          style={{ justifySelf: "right" }}
        />
        <SvgIcon
          tabIndex={2}
          borderRadius="5rem"
          hoverColour="green"
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              window.open("https://github.com/nathshepherd", "_blank");
            }
          }}
          onClick={() =>
            window.open("https://github.com/nathshepherd", "_blank")
          }
          src={GitHubIcon}
        />
      </SocialBar>
      <FooterText>
        © {new Date().getFullYear()} Nathan Shepherd All Rights Reserved.
      </FooterText>
    </PageFooterStyle>
  );
};
