import {
  SectionContainer,
  SectionContentGrid,
} from "../styles/sections/ExperienceStyle";
import SectionHeaderStyle from "../styles/header/SectionHeader";
import InformationTemplate from "../InformationTemplate";

// Images
import CanvaIcon from "../../contents/CanvaIcon.jpeg";
import FivecastIcon from "../../contents/FivecastIcon.png";
import MaptekIcon from "../../contents/MaptekIcon.jpeg";
import BalcoIcon from "../../contents/BalcoIcon.png";
import FluidityIcon from "../../contents/FluidityIcon.jpeg";
import SPIIcon from "../../contents/SPIIcon.jpeg";

const Experience = () => {
  return (
    <SectionContainer>
      <SectionContentGrid>
        <SectionHeaderStyle>My Experience</SectionHeaderStyle>
        {ExperienceInfomation.map((experienceInfo, index) => (
          <InformationTemplate
            key={experienceInfo.heading}
            index={index}
            {...experienceInfo}
          />
        ))}
      </SectionContentGrid>
    </SectionContainer>
  );
};

const ExperienceInfomation = [
  {
    heading: "Canva",
    roles: ["Software Engineering Intern (Front-end)"],
    descriptions: [
      `Used  React, Typescript, and Mobx to improve the download experience for Desktop App through new UI implementation 
    and inter-process communications in Electron. `,
      `Extended the existing WebX download service API to provide better visibility of downloads.`,
    ],
    date: ["Nov 2022 - Feb 2023"],
    image: CanvaIcon,
  },
  {
    heading: "Fivecast",
    roles: ["Software Engineering Intern", "Undergraduate Software Engineer"],
    descriptions: [
      `Improved the user interface for cutting edge open-source intelligence gathering tools using React and Typescript.`,
      `Researched and enhanced intelligence gathering capabilities by improving reliability of internal tools using Java.`,
    ],
    date: ["Jul 2022 - Sep 2022", "Sep 2022 - Nov 2022"],
    image: FivecastIcon,
  },
  {
    heading: "Maptek",
    roles: ["Software Engineering Intern"],
    descriptions: [
      `Extended functionality  of  the pre-existing Workbench  Property  Editor using  C++  
  and  C#, allowing for  dynamic read/write operations between the data engine and 
  internal services via a new multi-platform API.`,
      `Reduced data transfer size for Workbench Property Editor API communications by up to 
  20% through creating a new lightweight JSON-based API to update the existing XML-based API.`,
      `Provided new  type  support  for  the  Property  Editor by  integrating  new  C++  type 
  interpretations, allowing  for a more diverse range of live data analytics, and providing 
  a more intuitive set of controls to the user.`,
    ],
    date: ["Nov 2021 - Feb 2022"],
    image: MaptekIcon,
  },
  {
    heading: "Fluidity",
    roles: ["Front-End Developer"],
    descriptions: [
      `Led a team of three front-end student developers in developing a product application using React, 
  Typescript, and Sass, creating a lightweight, fast, and responsive user interface.`,
      `Reviewed team code for readability and performance improvements based on general React practices and 
  used ESlint to improve code style and quality.`,
    ],
    date: ["Mar 2021 - Nov 2021"],
    image: FluidityIcon,
  },
  {
    heading: "SPI",
    roles: ["Co-Founding Member and Lead Front-End Developer"],
    descriptions: [
      `Developed an educational blockchain-based application called Alchedemiausing React and Typescript.`,
      `Conducted product area research and designed the application interface, focusing on consistency, readability, 
    and usability.`,
    ],
    date: ["Oct 2020 - Nov 2021"],
    image: SPIIcon,
  },
  {
    heading: "Balco Australia",
    roles: ["Junior IT Assistant"],
    descriptions: [
      `Assisted in systems and security maintenance by performing weekly audits of internal company systems.`,
      `Developed a web-based application using Power Apps and Power Automate to streamline the process for 
  visitor check-ins via Balco's SharePoint intranet system.`,
    ],
    date: ["Jul 2019 - Nov 2021"],
    image: BalcoIcon,
  },
];

export default Experience;
