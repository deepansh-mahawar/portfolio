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

export const Contact = ({ sectionId }: { sectionId: string }) => {
  return (
    <ContactContainer id={sectionId}>
      <ContactSubContainer>
        <Container>
          <Title>Lets Connect</Title>
          <DescriptionContainer>
            <Description>
              Say Hello at{" "}
              <ContactLink href="mailto:deepanshumahawar22@gmail.com">
                deepanshumahawar22@gmail.com
              </ContactLink>
            </Description>
            <Description>
              For more info, heres my{" "}
              <ContactLink href="#">Resume</ContactLink>
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
