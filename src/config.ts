import { InformationTemplateConfig } from "./components/InformationTemplate";
// Company Icons
import CanvaIcon from "./contents/CanvaIcon.jpeg";
import FivecastIcon from "./contents/FivecastIcon.png";
import MaptekIcon from "./contents/MaptekIcon.jpeg";
import BalcoIcon from "./contents/BalcoIcon.png";
import FluidityIcon from "./contents/FluidityIcon.jpeg";
import SPIIcon from "./contents/SPIIcon.jpeg";
// Project Icons
import BeezinessIcon from "./contents/BeezinessLogo.png";
import TerminalIcon from "./contents/TerminalIcon.png";
import ResearchIcon from "./contents/ResearchIcon.png";

const ExperienceConfig: InformationTemplateConfig[] = [
    {
      heading: "Canva",
      roles: ["Software Engineer (Front-End)"],
      descriptions: [
        `Used React and Typescript to implement and launch various A/B testing experiments, enhancing product growth.`,
        `Been the main driver of many cross-team projects involving communication with various stakeholders to achieve company goals.`
      ],
      date: ["Aug 2023 - Present"],
      image: CanvaIcon,
    },
    {
      heading: "Fivecast",
      roles: ["Undergraduate Software Engineer"],
      descriptions: [
        `Improved the user interface for cutting edge open-source intelligence gathering tools using React and Typescript.`,
        `Researched and enhanced intelligence gathering capabilities by improving reliability of internal tools using Java.`,
      ],
      date: ["Feb 2023 - July 2023"],
      image: FivecastIcon,
    },
    {
      heading: "Canva",
      roles: ["Software Engineering Intern (Front-end)"],
      descriptions: [
        `Improved the download experience for Canva’s Electron Desktop App through implementing additional UI using React, Typescript, and MobX that standardizes the download experience across tabs.`,
        `Extended the existing download API using Typescript, Protocol Buffers, and local storage to provide better visibility of downloads and provide UI controls to Electron’s internal main chrome process manager.`,
      ],
      date: ["Nov 2022 - Feb 2023"],
      image: CanvaIcon,
    },
    {
      heading: "Fivecast",
      roles: ["Undergraduate Software Engineer", "Software Engineering Intern"],
      descriptions: [
        `Improved the user interface for cutting edge open-source intelligence gathering tools using React and Typescript.`,
        `Researched and enhanced intelligence gathering capabilities by improving reliability of internal tools using Java.`,
      ],
      date: ["Sep 2022 - Nov 2022", "Jul 2022 - Sep 2022"],
      image: FivecastIcon,
    },
    {
      heading: "Maptek",
      roles: ["Software Engineering Intern"],
      descriptions: [
        `Extended functionality  of  the pre-existing Workbench  Property  Editor using  C++ and  C#, allowing for  dynamic read/write operations between the data engine and internal services via a new multi-platform API.`,
        `Reduced data transfer size for Workbench Property Editor API communications by up to 20% through creating a new lightweight JSON-based API to update the existing XML-based API.`,
        `Provided new  type  support  for  the  Property  Editor by  integrating  new  C++  type interpretations, allowing  for a more diverse range of live data analytics, and providing a more intuitive set of controls to the user.`,
      ],
      date: ["Nov 2021 - Feb 2022"],
      image: MaptekIcon,
    },
    {
      heading: "Fluidity",
      roles: ["Front-End Developer"],
      descriptions: [
        `Led a team of three front-end student developers in developing a product application using React, Typescript, and Sass, creating a lightweight, fast, and responsive user interface.`,
        `Reviewed team code for readability and performance improvements based on general React practices and used ESlint to improve code style and quality.`,
      ],
      date: ["Mar 2021 - Nov 2021"],
      image: FluidityIcon,
    },
    {
      heading: "SPI",
      roles: ["Co-Founding Member and Lead Front-End Developer"],
      descriptions: [
        `Developed an educational blockchain-based application called Alchedemiausing React and Typescript.`,
        `Conducted product area research and designed the application interface, focusing on consistency, readability, and usability.`,
      ],
      date: ["Oct 2020 - Nov 2021"],
      image: SPIIcon,
    },
    {
      heading: "Balco Australia",
      roles: ["Junior IT Assistant"],
      descriptions: [
        `Assisted in systems and security maintenance by performing weekly audits of internal company systems.`,
        `Developed a web-based application using Power Apps and Power Automate to streamline the process for visitor check-ins via Balco's SharePoint intranet system.`,
      ],
      date: ["Jul 2019 - Nov 2021"],
      image: BalcoIcon,
    },
  ];

  const ProjectConfig: InformationTemplateConfig[] = [
    {
      heading: "Beeziness",
      roles: ["React, Typescript"],
      descriptions: [
        `Developed an application for a proof-of-conceptproduct over a four-day bootcamp that allows beekeepers to track the likelihood of their bee nests swarming based on external theoretical Internet of Things (IoT) statistics.`,
      ],
      image: BeezinessIcon,
    },
    {
      heading: "Text-Based Movie Simulator",
      roles: ["C++"],
      descriptions: [
        `Developed a fun terminal-based movie simulator game using C++ where users choose from a selection of movie tickets to purchase or snacks to buy based on age and allowance, dynamically updating the movie experience.`,
      ],
      image: TerminalIcon,
    },
    {
      heading: "South Australian Road Crash Data Analysis",
      roles: ["Python"],
      descriptions: [
        `Performed research analysis on South Australian roadcrash data using Python in Jupyter Notebook to investigate the correlation between different driving conditions and the likelihood of crashing.`,
      ],
      image: ResearchIcon,
    },
  ];

  export const config = {
    experiences: ExperienceConfig,
    projects: ProjectConfig
  }