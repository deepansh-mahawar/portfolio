"use client";
import { useEffect, useState } from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;

  backdrop-filter: blur(10px);
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1000;
`;

const NavButton = styled.button<{ active?: boolean }>`
  background: transparent;
  border: none;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  padding: 8px 12px;
  border-radius: 8px;
  transition: all 0.3s ease;

  color: ${({ active }) => (active ? "#00ffcc" : "white")};
  background-color: ${({ active }) => (active ? "rgba(0,255,204,0.1)" : "transparent")};

  &:hover {
    opacity: 0.8;
  }
`;

const Section = styled.section<{ bg: string }>`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  font-weight: bold;
  color: white;
  background: ${({ bg }) => bg};
`;

export default function Page() {
  const sections = ["home", "about", "services", "contact"];
  const [active, setActive] = useState("home");

  // Smooth scroll on click
  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Observe which section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 } // 60% visible = active
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <HeaderContainer>
        {sections.map((id) => (
          <NavButton
            key={id}
            active={active === id}
            onClick={() => handleScroll(id)}
          >
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </NavButton>
        ))}
      </HeaderContainer>

      <Section id="home" bg="linear-gradient(to right, #00c6ff, #0072ff)">
        Home Section
      </Section>
      <Section id="about" bg="linear-gradient(to right, #f7971e, #ffd200)">
        About Section
      </Section>
      <Section id="services" bg="linear-gradient(to right, #11998e, #38ef7d)">
        Services Section
      </Section>
      <Section id="contact" bg="linear-gradient(to right, #ee0979, #ff6a00)">
        Contact Section
      </Section>
    </>
  );
}