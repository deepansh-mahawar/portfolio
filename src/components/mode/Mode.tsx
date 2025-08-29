"use client";

import React, { useState } from "react";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";
import { ToggleBtn, ToggleContainer } from "./styled";

const icons = [
  { type: "light", icon: <IoSunnyOutline size={18} /> },
  { type: "dark", icon: <IoMoonOutline size={18} /> },
];

export const Mode = () => {
  const [active, setActive] = useState<"light" | "dark">("dark");

  return (
    <ToggleContainer>
      {icons.map(({ type, icon }) => (
        <ToggleBtn
          key={type}
          active={active === type}
          onClick={() => setActive(type as "light" | "dark")}
        >
          {icon}
        </ToggleBtn>
      ))}
    </ToggleContainer>
  );
};
