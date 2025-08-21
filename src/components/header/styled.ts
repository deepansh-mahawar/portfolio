"use client";

import Link from "next/link";
import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 30px;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1000;
  background-color: transparent;
`;

export const SubHeaderContainer = styled.div`
  background-color: transparent;
  width: 80%;
  border-radius: 50px;
  border: 1px solid #3e70be;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

export const LogoContainer = styled.div`
  width: 54px;
  height: 54px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  padding: 14px;
  background-color: #3e70be;
`;

export const Logo = styled.img`
  width: 100%;
  height: 100%;
`;

export const MenuContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export const MenuBtn = styled(Link)`
  font-size: 16px;
  font-weight: 300;
`;

export const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 54px;
  width: 140px;
  padding: 14px 0px;
  font-size: 16px;
  color: #fff;
  background-color: #3e70be;
  border-radius: 30px;
  font-weight: 300;
  cursor: pointer;
  transition: background-color 300ms ease;

  &:hover {
    background-color: #3e70be2b;
  }
`;
