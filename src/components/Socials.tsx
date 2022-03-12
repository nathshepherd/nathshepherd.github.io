import { SocialBar } from "./styles/header/HeaderMenu";
import { SvgIcon } from "./styles/image/Images";
import LinkedInIcon from "./../contents/linkedin.svg";
import GitHubIcon from "./../contents/github.svg";
import FooterText from "./styles/text/footer";

const Socials = () => {
  return (
    <SocialBar>
      <FooterText>nathanshepherd087@gmail.com</FooterText>
      <SvgIcon
        onClick={() =>
          window.open(
            "https://www.linkedin.com/in/nathan-shepherd-6561221ba/",
            "_blank"
          )
        }
        hoverColour="rgb(0,119,181)"
        pointer={true}
        src={LinkedInIcon}
        style={{ justifySelf: "right" }}
      />
      <SvgIcon
        onClick={() => {
          window.open("https://github.com/Thendog26", "_blank");
          console.log("click");
        }}
        hoverColour="green"
        borderRadius="5rem"
        pointer={true}
        src={GitHubIcon}
      />
    </SocialBar>
  );
};

export default Socials;
