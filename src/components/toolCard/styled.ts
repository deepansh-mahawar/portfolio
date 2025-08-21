"use client";

import styled from "styled-components";

export const ToolCardContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  border: 1px solid #3e70be;
  padding: 14px;
  border-radius: 4px;
`;
export const ToolLogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 56px;
  height: 56px;
  background-color: #3e70be;
  border-radius: 4px;
  padding: 8px;
`;

export const Logo = styled.img`
  width: 100%;
  height: 100%;
`;
export const ToolDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
export const Title = styled.p`
  font-size: 16px;
  font-weight: 400;
`;
export const Description = styled.p`
  color: #ffffffb3;
  font-size: 16px;
  font-weight: 400;
`;
