"use client";

import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 30px 0px;
  position: fixed;
  top: 0;
  z-index: 1000;
  background-color: transparent;
`;

export const SubHeaderContainer = styled.div`
  width: 80%;
  border-radius: 50px;
  border: 1px solid #3e70be;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  backdrop-filter: blur(10px);
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
  cursor: pointer;
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

export const MenuBtn = styled.button<{ $active?: boolean }>(
  ({ $active = false }) => `
  font-size: 16px;
  font-weight: ${$active ? "500" : "300"};
  transition: transform 500ms ease;
  cursor: pointer;

  &:hover{
    transform: scale(1.05);
  }
`
);

export const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 54px;
  width: 54px;
  padding: 14px 0;
  font-size: 16px;
  color: #fff;
  background-color: #3e70be;
  border-radius: 30px;
  font-weight: 300;
  cursor: pointer;
  transition: background-color 300ms ease, transform 300ms ease;

  .icon {
    font-size: 24px;
    color: #fff;
    transition: transform 300ms ease;
  }

  &:hover {
    background-color: #345ea3;

    .icon {
      transform: scale(1.1);
    }
  }

  &:active {
    transform: scale(0.9);
  }
`;
