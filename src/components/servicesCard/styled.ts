"use client";

import styled from "styled-components";

export const ServiceCardContainer = styled.div<{
  $border?: boolean;
  $padding?: boolean;
  $gap?: boolean;
  $hover?: boolean;
}>(
  ({ $border, $padding, $gap, $hover }) => `
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border: ${$border ? "1px solid #3e70be" : "none"};
  padding: ${$padding ? "30px" : "10px 20px 0px 0px"};
  min-height: 240px;
  max-height: fit-content;
  border-radius: 4px;
  gap: ${$gap ? "10px" : "none"};
  cursor: pointer;
  transition: background-color 600ms ease-in-out;

  &:hover{
  background-color: ${$hover ? "#3e70be" : "none"};
  }
`
);

export const Index = styled.p`
  font-size: 26px;
  font-weight: 500;
`;
export const ServiceTitle = styled.p`
  font-size: 34px;
  font-weight: 600;
`;
export const ServiceDescripiton = styled.p`
  font-size: 16px;
  font-weight: 300;
  color: #ffffffb3;
`;
