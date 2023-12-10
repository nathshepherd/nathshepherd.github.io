import {
  SectionContainer,
  SectionContentGrid,
} from "../styles/sections/ExperienceStyle";
import SectionHeaderStyle from "../styles/header/SectionHeader";
import InformationTemplate, { InformationTemplateConfig } from "../InformationTemplate";
import { useMemo } from "react";

const Experience = ({ experiences }: { experiences: InformationTemplateConfig[] }) => {
  const renderedExperienceInfo = useMemo(() => (
    experiences.map((experience, index) => (
      <InformationTemplate
        {...experience}
        key={experience.heading}
        index={index}
      />
    ))
  ), [experiences]);

  return (
    <SectionContainer>
      <SectionContentGrid>
        <SectionHeaderStyle>My Experience</SectionHeaderStyle>
        {renderedExperienceInfo}
      </SectionContentGrid>
    </SectionContainer>
  );
};

export default Experience;
