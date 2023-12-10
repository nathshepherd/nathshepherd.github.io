import {
  SectionContainer,
  SectionContentGrid,
} from "../styles/sections/ProjectsStyle";
import SectionHeaderStyle from "../styles/header/SectionHeader";
import InformationTemplate, { InformationTemplateConfig } from "../InformationTemplate";
import { useMemo } from "react";

const Projects = ({ projects }: { projects: InformationTemplateConfig[] }) => {
  const renderedProjects = useMemo(() => (
    projects.map((project, index) => (
      <InformationTemplate
        {...project}
        key={project.heading}
        index={index}
      />
    ))
  ), [projects]);
  return (
    <SectionContainer>
      <SectionContentGrid>
        <SectionHeaderStyle>My Projects</SectionHeaderStyle>
        {renderedProjects}
      </SectionContentGrid>
    </SectionContainer>
  );
};

export default Projects;
