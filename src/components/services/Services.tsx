"use client";

import { useState } from "react";
import { ServicesCard } from "../servicesCard/ServicesCard";
import {
  Btn,
  BtnBorder,
  Container,
  ServiceContainer,
  ServicesSubContainer,
} from "./styled";

export const Services = ({ sectionId }: { sectionId: string }) => {
  const [showMore, setShowMore] = useState(false);

  const services = [
    {
      index: "01",
      title: "Web Development",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum facilis consectetur dignissimos aliquam totam, reiciendis ea provident voluptas facere vitae?",
    },
    {
      index: "02",
      title: "App Development",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum facilis consectetur dignissimos aliquam totam, reiciendis ea provident voluptas facere vitae?",
    },
    {
      index: "03",
      title: "UI/UX Design",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum facilis consectetur dignissimos aliquam totam, reiciendis ea provident voluptas facere vitae?",
    },
    {
      index: "04",
      title: "SEO Optimization",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum facilis consectetur dignissimos aliquam totam, reiciendis ea provident voluptas facere vitae?",
    },
    {
      index: "05",
      title: "Cloud Services",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum facilis consectetur dignissimos aliquam totam, reiciendis ea provident voluptas facere vitae?",
    },
  ];

  const visibleServices = showMore ? services : services.slice(0, 3);

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

          {visibleServices.map((service) => (
            <ServicesCard
              key={service.index}
              index={service.index}
              title={service.title}
              desc={service.desc}
            />
          ))}
        </Container>
        <BtnBorder>
          <Btn onClick={() => setShowMore(!showMore)}>
            {showMore ? "See Less" : "See More"}
          </Btn>
        </BtnBorder>
      </ServicesSubContainer>
    </ServiceContainer>
  );
};
