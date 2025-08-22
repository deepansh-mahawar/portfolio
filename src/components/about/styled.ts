"use client";

import styled from "styled-components";

export const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: transparent;
`;
export const AboutSubContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  width: 70%;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 50px;
  background: linear-gradient(
    45deg,
    #1d3458 0%,
    #264473 60%,
    #3968b0 100%,
    #3e70be 100%
  );
  border-radius: 4px;
  gap: 60px;
`;
export const AboutText = styled.p`
  font-size: 18px;
  font-weight: 300;
  width: 80%;
`;
export const CounterContainer = styled.div`
  display: flex;
  gap: 60px;
`;
