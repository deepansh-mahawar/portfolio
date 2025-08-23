"use client";

import styled from "styled-components";

export const HeroContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

export const HeroSubContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70%;
  gap: 80px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 40px;
`;

export const HeroContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
`;

export const HeroTitle = styled.h1`
  font-size: 60px;
  font-weight: 800;
  text-transform: uppercase;
`;

export const HeroDescription = styled.p`
  font-size: 16px;
  font-weight: 300;
  color: #ffffffb3;
  width: 80%;
`;

export const HeroButtonBorder = styled.div`
  border: 1px solid #3e70be;
  width: 140px;
  height: 60px;
  border-radius: 4px;
  margin-top: 20px;
`;

export const HeroButton = styled.button`
  background-color: #3e70be;
  width: 140px;
  height: 60px;
  position: absolute;
  margin: 5px 0px 0px 5px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: margin 100ms ease-in-out;

  &:active {
    margin: 0;
  }
`;

export const HeroImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: 500px;
`;

export const HeroImage = styled.img`
  height: 100%;
  width: auto;
`;


