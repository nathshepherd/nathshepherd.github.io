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
        {ProjectInformation.map((projectInfo, index) => (
          <InformationTemplate
            key={projectInfo.heading}
            index={index}
            {...projectInfo}
          />
        ))}
      </SectionContentGrid>
    </SectionContainer>
  );
};

const ProjectInformation = [
  {
    heading: "Beeziness",
    roles: ["React, Typescript"],
    descriptions: [
      `Developed an application for a proof-of-conceptproduct over a four-day bootcamp that allows 
    beekeepers to track the likelihood of their bee nests swarming based on external theoretical 
    Internet of Things (IoT) statistics.`,
    ],
    image: BeezinessIcon,
  },
  {
    heading: "Text-Based Movie Simulator",
    roles: ["C++"],
    descriptions: [
      `Developed a fun terminal-based movie simulator game using C++ where users choose from a selection 
  of movie tickets to purchase or snacks to buy based on age and allowance, dynamically updating the movie experience.`,
    ],
    image: TerminalIcon,
  },
  {
    heading: "South Australian Road Crash Data Analysis",
    roles: ["Python"],
    descriptions: [
      `Performed research analysis on South Australian roadcrash data using Python in Jupyter Notebook to investigate the 
  correlation between different driving conditions and the likelihood of crashing.`,
    ],
    image: ResearchIcon,
  },
];

export default Projects;
