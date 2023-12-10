import {
  InformationDescriptionList,
  InformationDescriptionListItem,
  InformationImage,
  InformationTemplateStyle,
} from "./styles/sections/InformationTemplateStyles";
import { Heading } from "./styles/text/heading";
import Section from "./styles/text/section";
import SubHeading from "./styles/text/subheading";
import { useMemo } from 'react';

export type InformationTemplateConfig = {
  heading: string;
  descriptions: string[];
  roles: string[];
  image: string;
  date?: string[];
};

const InformationTemplate = (deps: InformationTemplateConfig & { index: number }) => {
  const renderedRoles = useMemo(() => (
    deps.roles.map((roleName, index) => (
      <Section key={roleName}>
        <div>{roleName}</div>
        <SubHeading>{deps.date ? deps.date[index] : ""}</SubHeading>
      </Section>
    ))
  ), [deps.roles, deps.date]);
  const renderedDescriptionItems = useMemo(() => (
    <InformationDescriptionList>
      {deps.descriptions.map((description) => {
        return (
          <InformationDescriptionListItem key={description}>
            {description}
          </InformationDescriptionListItem>
        );
      })}
    </InformationDescriptionList>
  ), [deps.descriptions]);

  return (
    <InformationTemplateStyle
      aria-labelledby={deps.heading}
      index={deps.index}
      tabIndex={1}
    >
      <InformationImage src={deps.image} />
      <section>
        <Heading>{deps.heading}</Heading>
        {renderedRoles}
        <Section>{renderedDescriptionItems}</Section>
      </section>
    </InformationTemplateStyle>
  );
};

export default InformationTemplate;
