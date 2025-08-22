"use client";

import styled from "styled-components";

export const ToolContainer = styled.div`
  width: 90%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ToolSubContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 80%;
  gap: 30px;
`;
export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  width: 100%;
`;

