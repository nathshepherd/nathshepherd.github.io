import PageFooterStyle from "./styles/footer/PageFooter";
import FooterText from "./styles/text/footer";
import Socials from "./Socials";

const PageFooterContents = () => {
  return (
    <PageFooterStyle>
      <Socials />
      <FooterText>
        © {new Date().getFullYear()} Nathan Shepherd All Rights Reserved.
      </FooterText>
    </PageFooterStyle>
  );
};

export default PageFooterContents;
