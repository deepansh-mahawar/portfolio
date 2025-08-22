import { ServicesCard } from "../servicesCard/ServicesCard";
import { Container, ServiceContainer, ServicesSubContainer } from "./styled";

export const Services = ({ sectionId }: { sectionId: string }) => {
  return (
    <ServiceContainer id={sectionId}>
      <ServicesSubContainer>
        <Container>
          <ServicesCard
            border={false}
            padding={false}
            gap={false}
            hover={false}
            heading="Services"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum facilis consectetur dignissimos aliquam totam, reiciendis ea provident voluptas facere vitae?"
          />
          <ServicesCard
            index="01"
            title="Web Development"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum facilis consectetur dignissimos aliquam totam, reiciendis ea provident voluptas facere vitae?"
          />
          <ServicesCard
            index="02"
            title="Web Development"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum facilis consectetur dignissimos aliquam totam, reiciendis ea provident voluptas facere vitae?"
          />
          <ServicesCard
            index="03"
            title="Web Development"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum facilis consectetur dignissimos aliquam totam, reiciendis ea provident voluptas facere vitae?"
          />
        </Container>
      </ServicesSubContainer>
    </ServiceContainer>
  );
};
