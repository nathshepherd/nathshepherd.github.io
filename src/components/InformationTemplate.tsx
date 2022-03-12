import {
  InformationTemplateStyle,
  InformationImage,
  InformationDescriptionList,
  InformationDescriptionListItem,
} from "./styles/sections/InformationTemplateStyles";
import { Heading } from "./styles/text/heading";
import SubHeading from "./styles/text/subheading";
import Section from "./styles/text/section";

interface InformationTemplateProps {
  heading: string;
  role: string;
  descriptions: string[];
  date?: string;
  image: string;
}

const InformationTemplate = ({
  heading,
  descriptions,
  role,
  date,
  image,
}: InformationTemplateProps) => {
  const renderedDescriptionItems = (
    <InformationDescriptionList>
      {descriptions.map((description) => {
        return (
          <InformationDescriptionListItem>
            {description}
          </InformationDescriptionListItem>
        );
      })}
    </InformationDescriptionList>
  );

  return (
    <InformationTemplateStyle>
      <InformationImage src={image} />
      <div>
        <Heading>{heading}</Heading>
        <Section>{role}</Section>
        {date ? <SubHeading>{date}</SubHeading> : <></>}
        <Section>{renderedDescriptionItems}</Section>
      </div>
    </InformationTemplateStyle>
  );
};

export default InformationTemplate;
