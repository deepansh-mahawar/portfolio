"use client";

import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import {
  ContactContainer,
  ContactLink,
  ContactSubContainer,
  Container,
  Description,
  DescriptionContainer,
  IconContainer,
  SocialIconContainer,
  Title,
} from "./styled";
import { AiFillInstagram } from "react-icons/ai";
import Form from "../form/Form";

const RESUME_URL = "/resume.pdf";

export const Contact = ({ sectionId }: { sectionId: string }) => {
  const openResume = () => {
    window.open(RESUME_URL, "_blank", "noopener,noreferrer");
  };
  return (
    <ContactContainer id={sectionId}>
      <ContactSubContainer>
        <Container>
          <Title>{`Let's Connect`}</Title>
          <DescriptionContainer>
            <Description>
              Say Hello at{" "}
              <ContactLink href="mailto:deepanshumahawar22@gmail.com">
                deepanshumahawar22@gmail.com
              </ContactLink>
            </Description>
            <Description>
              For more info, heres my{" "}
              <ContactLink href="#" onClick={openResume}>Resume!</ContactLink>
            </Description>
          </DescriptionContainer>
          <SocialIconContainer>
            <IconContainer>
              <FaFacebookF className="icon" />
            </IconContainer>
            <IconContainer>
              <AiFillInstagram className="icon" />
            </IconContainer>
            <IconContainer>
              <FaLinkedinIn className="icon" />
            </IconContainer>
          </SocialIconContainer>
        </Container>
        <Container>
          <Form />
        </Container>
      </ContactSubContainer>
    </ContactContainer>
  );
};
