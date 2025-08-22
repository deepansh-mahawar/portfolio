"use client"

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

export const Header = () => {
  const sections = ["home", "services", "about", "projects", "tools", "contact"];
  const [active, setActive] = useState("home");

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id)
        }
      })
    }, {
      threshold: 0.6
    }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <HeaderContainer>
      <SubHeaderContainer>
        <LogoContainer>
          <Logo src="/logo.png" alt="#" />
        </LogoContainer>
        <MenuContainer>
          {sections.map((id) => (
            <MenuBtn key={id} $active={active === id}
              onClick={() => handleScroll(id)}>
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </MenuBtn>
          ))}
        </MenuContainer>
        <Btn>Contact Us</Btn>
      </SubHeaderContainer>
    </HeaderContainer>
  );
};

export default Header;
