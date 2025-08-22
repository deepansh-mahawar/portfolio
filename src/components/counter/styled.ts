"use client";

import styled from "styled-components";

export const CounterContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Value = styled.p`
  font-size: 50px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 10px;

  .icon {
    font-size: 24px;
    color: #3e70be;
  }
`;

export const Title = styled.h3`
  font-size: 16px;
  font-weight: 300;
  margin-top: -8px;
  color: #ffffffb3;
`;
