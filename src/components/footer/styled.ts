"use client";

import Link from "next/link";
import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  background-color: #3e70be;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px 0px;
`;
export const FooterSubContainer = styled.div`
  /* display: flex;
  justify-content: space-between;
  align-items: center; */
  width: 80%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-items: center;
`;

export const LogoCon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  cursor: pointer;
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
`;
export const MenuCon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export const FooterMenuBtn = styled.button`
  font-size: 16px;
  font-weight: 300;
  color: #fff;
  transition: transform 300ms ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.05) translateZ(0);
  }
`;

export const CopyRight = styled.p`
  font-size: 16px;
  font-weight: 300;
  color: #fff;
  text-align: right;
`;
