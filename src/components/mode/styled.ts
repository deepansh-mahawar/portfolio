import styled from "styled-components";

export const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80px;
  padding: 6px;
  border-radius: 30px;
  background-color: transparent;
  border: 1px solid #3e70be;
  cursor: pointer;
  position: absolute;
  right: 20px;
`;

export const ToggleBtn = styled.button<{ active: boolean }>`
  background-color: ${({ active }) => (active ? "#3e70be" : "none")};
  color: ${({ active }) => (active ? "#ffffff" : "#ffffff")};
  border: none;
  border-radius: 50%;
  padding: 6px;
  cursor: pointer;
  transition: background-color 500ms ease-in-out;
`;