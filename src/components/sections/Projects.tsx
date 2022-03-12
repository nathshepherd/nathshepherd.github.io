import {
  SectionContainer,
  SectionContentGrid,
} from "../styles/sections/ProjectsStyle";
import SectionHeaderStyle from "../styles/header/SectionHeader";
import InformationTemplate from "../InformationTemplate";

// Images
import BeezinessIcon from "../../contents/BeezinessLogo.png";
import TerminalIcon from "../../contents/TerminalIcon.png";
import ResearchIcon from "../../contents/ResearchIcon.png";

const Projects = () => {
  return (
    <SectionContainer>
      <SectionContentGrid>
        <SectionHeaderStyle>My Projects</SectionHeaderStyle>
        <InformationTemplate
          heading="Beeziness"
          role="React, Typescript"
          descriptions={[
            `Developed an application for a proof-of-conceptproduct over a four-day bootcamp that allows 
          beekeepers to track the likelihood of their bee nests swarming based on external theoretical 
          Internet of Things (IoT) statistics.`,
          ]}
          image={BeezinessIcon}
        />
        <InformationTemplate
          heading="Text-Based Movie Simulator"
          role="C++"
          descriptions={[
            `Developed a fun terminal-based movie simulator game using C++ where users choose from a selection 
          of movie tickets to purchase or snacks to buy based on age and allowance, dynamically updating the movie experience.`,
          ]}
          image={TerminalIcon}
        />
        <InformationTemplate
          heading="South Australian Road Crash Data Analysis"
          role="Python"
          descriptions={[
            `Performed research analysis on South Australian roadcrash data using Python in Jupyter Notebook to investigate the 
          correlation between different driving conditions and the likelihood of crashing.`,
          ]}
          image={ResearchIcon}
        />
      </SectionContentGrid>
    </SectionContainer>
  );
};

export default Projects;
