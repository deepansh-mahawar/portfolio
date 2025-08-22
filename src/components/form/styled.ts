"use client";

import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 26px;
  width: 100%;
`;

export const FormSubContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
`;

export const FormInput = styled.input<{ $width?: string }>(
  ({ $width = "50%" }) => `
  width: ${$width};
  border: 1px solid #3e70be;
  padding: 14px;
  border-radius: 4px;
  font-weight: 300;

  &::placeholder{
  color: #fff;
  }
`
);
export const TextArea = styled.textarea`
  width: 100%;
  border: 1px solid #3e70be;
  padding: 14px;
  resize: none;
  font-weight: 300;
  border-radius: 4px;

  &::placeholder {
    color: #fff;
  }
`;

export const BtnBorder = styled.div`
  border: 1px solid #3e70be;
  width: 140px;
  height: 60px;
  border-radius: 4px;
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
