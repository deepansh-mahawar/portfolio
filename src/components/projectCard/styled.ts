"use client";

import styled from "styled-components";

export const ProjectCardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 60px;
`;

export const ProjectImageContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #3e70be;
  padding: 80px;
  border-radius: 4px;
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const ProjectContentContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 14px;
`;

export const ProjectTitle = styled.p`
  font-size: 30px;
  font-weight: 500;
  line-height: 42px;
`;

export const ProjectDescription = styled.p`
  font-size: 16px;
  font-weight: 300;
  color: #ffffffb3;
`;

export const ProjectTechnologyContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Technology = styled.p`
  font-size: 20px;
  font-weight: 500;
`;

export const TechnologyContainer = styled.div<{ $borderTop?: boolean }>(
  ({ $borderTop = true }) => `
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: ${$borderTop ? "1px solid #3e70be" : "none"};
  border-bottom: 1px solid #3e70be;
  padding: 10px 2px;
`
);

export const TechnologyText = styled.p`
  font-size: 14px;
  font-weight: 300;
  color: #ffffffb3;
`;

export const ProjectButtonContainer = styled.div`
  display: flex;
  width: fit-content;
  gap: 20px;
  margin-top: 10px;
`;

export const ViewButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: #3e70be;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;

  .btnIcon {
    font-size: 20px;
  }

  &:hover {
    background-color: #2c5a8c;
  }
`;

export const DownloadButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: #3e70be;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;

  .btnIcon {
    font-size: 20px;
  }

  &:hover {
    background-color: #2c5a8c;
  }
`;
