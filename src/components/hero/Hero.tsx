"use client";

import {
  Container,
  HeroButton,
  HeroButtonBorder,
  HeroContainer,
  HeroContentContainer,
  HeroDescription,
  HeroImage,
  HeroImageContainer,
  HeroSubContainer,
  HeroTitle,
} from "./styled";

export const Hero = ({ sectionId }: { sectionId: string }) => {
  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <HeroContainer id={sectionId}>
      <HeroSubContainer>
        <Container>
          <HeroContentContainer>
            <HeroTitle>Frontend Developer</HeroTitle>
            <HeroDescription>
              Frontend Developer with hands-on experience in JavaScript,
              TypeScript, React, Next.js, and Tailwind CSS. I specialize in
              developing responsive layouts, interactive components, and
              optimized web apps that meet both user and business needs.
            </HeroDescription>
            <HeroButtonBorder>
              <HeroButton onClick={() => handleScroll("contact")}>
                Hire Me
              </HeroButton>
            </HeroButtonBorder>
          </HeroContentContainer>
          <HeroImageContainer>
            <HeroImage src="/hero.png" alt="Hero" />
          </HeroImageContainer>
        </Container>
      </HeroSubContainer>
    </HeroContainer>
  );
};
