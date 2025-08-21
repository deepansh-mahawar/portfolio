"use client";

import {
  CopyRight,
  FooterContainer,
  FooterMenuBtn,
  FooterSubContainer,
  Image,
  LogoCon,
  MenuCon,
} from "./styled";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact Us", href: "/contact" },
];

export const Footer = () => {
  const handleLogoClick = () => {
    window.location.reload();
  };

  return (
    <FooterContainer as="footer">
      <FooterSubContainer>
        <LogoCon onClick={handleLogoClick}>
          <Image src="/logo.png" alt="#" />
        </LogoCon>

        <MenuCon>
          {menuItems.map((item) => (
            <FooterMenuBtn key={item.label} href={item.href}>
              {item.label}
            </FooterMenuBtn>
          ))}
        </MenuCon>

        <CopyRight>© {new Date().getFullYear()}. All Rights Reserved</CopyRight>
      </FooterSubContainer>
    </FooterContainer>
  );
};
