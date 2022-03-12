import {
  SectionContainer,
  SectionContentGrid,
} from "../styles/sections/ExperienceStyle";
import SectionHeaderStyle from "../styles/header/SectionHeader";
import InformationTemplate from "../InformationTemplate";

// Images
import MaptekIcon from "../../contents/MaptekIcon.jpeg";
import BalcoIcon from "../../contents/BalcoIcon.png";
import FluidityIcon from "../../contents/FluidityIcon.jpeg";
import SPIIcon from "../../contents/SPIIcon.jpeg";

const Experience = () => {
  return (
    <SectionContainer>
      <SectionContentGrid>
        <SectionHeaderStyle>My Experience</SectionHeaderStyle>
        <InformationTemplate
          heading="Maptek"
          role="Software Engineering Intern"
          descriptions={[
            `Extended functionality  of  the pre-existing Workbench  Property  Editor using  C++  
          and  C#, allowing for  dynamic read/write operations between the data engine and 
          internal services via a new multi-platform API.`,
            `Reduced data transfer size for Workbench Property Editor API communications by up to 
          20% through creating a new lightweight JSON-based API to update the existing XML-based API.`,
            `Provided new  type  support  for  the  Property  Editor by  integrating  new  C++  type 
          interpretations, allowing  for a more diverse range of live data analytics, and providing 
          a more intuitive set of controls to the user.`,
          ]}
          date="Nov 2021 - Feb 2022"
          image={MaptekIcon}
        />
        <InformationTemplate
          heading="Fluidity"
          role="Front-End Developer"
          descriptions={[
            `Led a team of three front-end student developers in developing a product application using React, 
          Typescript, and Sass, creating a lightweight, fast, and responsive user interface.`,
            `Reviewed team code for readability and performance improvements based on general React practices and 
          used ESlint to improve code style and quality.`,
          ]}
          date="Mar 2021 - Nov 2021"
          image={FluidityIcon}
        />
        <InformationTemplate
          heading="SPI"
          role="Co-Founding Member and Lead Front-End Developer"
          descriptions={[
            `Developed an educational blockchain-based application called Alchedemiausing React and Typescript.`,
            `Conducted product area research and designed the application interface, focusing on consistency, readability, and usability.`,
          ]}
          date="Oct 2020 - Nov 2021"
          image={SPIIcon}
        />
        <InformationTemplate
          heading="Balco Australia"
          role="Junior IT Assistant"
          descriptions={[
            `Assisted in systems and security maintenance by performing weekly audits of internal company systems.`,
            `Developed a web-based application using Power Apps and Power Automate to streamline the process for 
          visitor check-ins via Balco's SharePoint intranet system.`,
          ]}
          date="Jul 2019 - Nov 2021"
          image={BalcoIcon}
        />
      </SectionContentGrid>
    </SectionContainer>
  );
};

export default Experience;
