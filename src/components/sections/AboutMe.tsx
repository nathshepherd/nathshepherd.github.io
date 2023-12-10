import { Heading } from "../styles/text/heading";
import { ProfileSection } from "../styles/text/section";
import { ProfileImage } from "../styles/image/Images";
import { SectionContainer } from "../styles/sections/AboutMeStyle";
import ProfilePicture from "./../../contents/profile_pic.jpg";

const CANVA_URL = "https://www.canva.com/";

const AboutMe = () => {
  return (
    <SectionContainer>
      <ProfileImage src={ProfilePicture} />
      <Heading style={{ paddingTop: "1rem", alignSelf: "flex-end" }}>
        Hi, I'm Nathan! 👋
      </Heading>
      <ProfileSection>
        I'm a software engineer at <a href={CANVA_URL} rel="noreferrer" target="_blank">Canva</a> with a passion for front-end and software development!
        <br />
        Ever since I was little, it has been a lifelong goal to constantly
        challenge myself with new ideas and experiences from the world around
        me. From being hooked on problem-solving computer games as a kid, to
        learning languages like Typescript in my spare time, I've found personal
        joy in developing software that people will not only use but also enjoy.
        I hope to further explore this passion by working on products that
        impact the daily lives of millions worldwide!
      </ProfileSection>
    </SectionContainer>
  );
};

export default AboutMe;
