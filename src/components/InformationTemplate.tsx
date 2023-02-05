import {
  InformationDescriptionList,
  InformationDescriptionListItem,
  InformationImage,
  InformationTemplateStyle,
} from "./styles/sections/InformationTemplateStyles";
import { Heading } from "./styles/text/heading";
import Section from "./styles/text/section";
import SubHeading from "./styles/text/subheading";

const InformationTemplate = (deps: {
  date?: string[];
  descriptions: string[];
  heading: string;
  image: string;
  index: number;
  roles: string[];
}) => {
  const renderedDescriptionItems = (
    <InformationDescriptionList>
      {deps.descriptions.map((description) => {
        return (
          <InformationDescriptionListItem key={description}>
            {description}
          </InformationDescriptionListItem>
        );
      })}
    </InformationDescriptionList>
  );

  return (
    <InformationTemplateStyle
      aria-labelledby={deps.heading}
      index={deps.index}
      tabIndex={1}
    >
      <InformationImage src={deps.image} />
      <div>
        <Heading>{deps.heading}</Heading>
        {deps.roles.map((roleName, index) => (
          <Section key={roleName}>
            <div>{roleName}</div>
            <SubHeading>{deps.date ? deps.date[index] : ""}</SubHeading>
          </Section>
        ))}
        <Section>{renderedDescriptionItems}</Section>
      </div>
    </InformationTemplateStyle>
  );
};

export default InformationTemplate;
