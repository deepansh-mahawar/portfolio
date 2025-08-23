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
  return (
    <HeroContainer id={sectionId}>
      <HeroSubContainer>
        <Container>
          <HeroContentContainer>
            <HeroTitle>ui & ux designer</HeroTitle>
            <HeroDescription>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae
              corrupti voluptatibus modi, dignissimos, labore quidem suscipit
              esse ducimus minus maiores nostrum delectus sequi.
            </HeroDescription>
            <HeroButtonBorder>
              <HeroButton>hire me</HeroButton>
            </HeroButtonBorder>
          </HeroContentContainer>
          <HeroImageContainer>
            <HeroImage src="/hero.png" />
          </HeroImageContainer>
        </Container>
      </HeroSubContainer>
    </HeroContainer>
  );
};
