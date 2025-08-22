"use client";

import { useEffect, useState } from "react";
import {
  Btn,
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
  const [active, setActive] = useState("home");

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6,
      }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <HeaderContainer>
      <SubHeaderContainer>
        <LogoContainer>
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
        {/* <Btn onClick={() => handleScroll("contact")}>Contact</Btn> */}
        <Btn onClick={() => handleScroll("contact")}>
          <IoCallOutline className="icon" />
        </Btn>
      </SubHeaderContainer>
    </HeaderContainer>
  );
};

export default Header;
