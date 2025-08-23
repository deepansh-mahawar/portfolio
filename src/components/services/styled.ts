"use client";

import styled from "styled-components";

export const ServiceContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  max-height: fit-content;
  width: 100%;
`;

export const ServicesSubContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: fit-content;
  padding-top: 80px;
`;
export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
`;

export const BtnBorder = styled.div`
  border: 1px solid #3e70be;
  width: 140px;
  height: 60px;
  border-radius: 4px;
  margin-top: 40px;
`;

export const Btn = styled.button`
  background-color: #3e70be;
  width: 140px;
  height: 60px;
  position: absolute;
  margin: 5px 0px 0px 5px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  cursor: pointer;
  transition: margin 100ms ease-in-out;

  &:active {
    margin: 0;
  }
`;
