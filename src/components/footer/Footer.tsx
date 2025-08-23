"use client";

import { useSectionScroll } from "@/lib/useSectionScroll";
import {
  CopyRight,
  FooterContainer,
  FooterMenuBtn,
  FooterSubContainer,
  Image,
  LogoCon,
  MenuCon,
} from "./styled";

export const Footer = () => {
  const sections = ["home", "services", "about", "tools", "projects"];
  const { active, handleScroll } = useSectionScroll(sections, "home");

  const handleReload = () => {
    window.location.reload();
  };

  return (
    <FooterContainer as="footer">
      <FooterSubContainer>
        <LogoCon onClick={() => handleReload()}>
          <Image src="/logo.png" alt="#" />
        </LogoCon>

        <MenuCon>
          {sections.map((id) => (
            <FooterMenuBtn key={id} onClick={() => handleScroll(id)}>
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </FooterMenuBtn>
          ))}
        </MenuCon>

        <CopyRight>© {new Date().getFullYear()}. All Rights Reserved</CopyRight>
      </FooterSubContainer>
    </FooterContainer>
  );
};
