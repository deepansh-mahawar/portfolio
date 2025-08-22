"use client";

import Link from "next/link";
import styled from "styled-components";

export const ContactContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ContactSubContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  width: 80%;
`;
export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const Title = styled.p`
  font-size: 48px;
  font-weight: 600;
  text-transform: uppercase;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const Description = styled.div`
  font-size: 16px;
  font-weight: 300;
  color: #ffffffb3;
`;

export const ContactLink = styled(Link)`
  color: #fff;
  transition: border-bottom 400ms ease-in-out;

  &:hover {
    border-bottom: 1px solid #3e70be;
  }
`;

export const SocialIconContainer = styled.div`
  display: flex;
  gap: 18px;
  margin-top: 20px;
`;

export const IconContainer = styled.div`
  border: 1px solid #3e70be;
  border-radius: 4px;
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 300ms ease;
  cursor: pointer;

  &:hover {
    background-color: #3e70be;
  }

  .icon{
    font-size: 18px;
  }
`;
