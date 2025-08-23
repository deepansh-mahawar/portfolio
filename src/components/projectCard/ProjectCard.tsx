"use client";

import {
  DownloadButton,
  ProjectButtonContainer,
  ProjectCardContainer,
  ProjectContentContainer,
  ProjectDescription,
  ProjectImage,
  ProjectImageContainer,
  ProjectTechnologyContainer,
  ProjectTitle,
  Technology,
  TechnologyContainer,
  TechnologyText,
  ViewButton,
} from "./styled";

import { LuImage } from "react-icons/lu";
import { LuDownload } from "react-icons/lu";

export const ProjectCard = ({
  projectImage,
  projectTitle,
  projectDescription,
  frontendTech,
  backendTech,
}: {
  projectImage: string;
  projectTitle: string;
  projectDescription: string;
  frontendTech: string[];
  backendTech: string[];
}) => {
  return (
    <ProjectCardContainer>
      <ProjectImageContainer>
        <ProjectImage src={projectImage} alt="#" />
      </ProjectImageContainer>
      <ProjectContentContainer>
        <ProjectTitle>{projectTitle}</ProjectTitle>
        <ProjectDescription>{projectDescription}</ProjectDescription>
        <Technology>Technology</Technology>
        <ProjectTechnologyContainer>
          <TechnologyContainer>
            <TechnologyText>Frontend</TechnologyText>
            <TechnologyText>{frontendTech.join(", ")}</TechnologyText>
          </TechnologyContainer>
          <TechnologyContainer $borderTop={false}>
            <TechnologyText>Backend</TechnologyText>
            <TechnologyText>{backendTech.join(", ")}</TechnologyText>
          </TechnologyContainer>
        </ProjectTechnologyContainer>
        <ProjectButtonContainer>
          <ViewButton>
            <LuImage className="btnIcon" />
            View
          </ViewButton>
          <DownloadButton>
            <LuDownload className="btnIcon" />
            Download
          </DownloadButton>
        </ProjectButtonContainer>
      </ProjectContentContainer>
    </ProjectCardContainer>
  );
};
