"use client";


import { useSectionScroll } from "../../lib/useSectionScroll";
import { Mode } from "../mode/Mode";
import {
  Btn,
  BtnContainer,
  HeaderContainer,
  Logo,
  LogoContainer,
  MenuBtn,
  MenuContainer,
  SubHeaderContainer,
} from "./styled";

import { IoCallOutline } from "react-icons/io5";

export const Header = () => {
  const sections = ["home", "services", "about", "tools", "projects"];
  const { active, handleScroll } = useSectionScroll(sections, "home");

  const handleReload = () => {
    window.location.reload();
  };

  return (
    <HeaderContainer>
      <SubHeaderContainer>
        <LogoContainer onClick={() => handleReload()}>
          <Logo src="/logo.png" alt="#" />
        </LogoContainer>
        <MenuContainer>
          {sections.map((id) => (
            <MenuBtn
              key={id}
              $active={active === id}
              onClick={() => handleScroll(id)}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </MenuBtn>
          ))}
        </MenuContainer>
        <BtnContainer>
          <Btn onClick={() => handleScroll("contact")}>
            <IoCallOutline className="icon" />
          </Btn>
        </BtnContainer>
      </SubHeaderContainer>
      <Mode />
    </HeaderContainer>
  );
};

export default Header;
