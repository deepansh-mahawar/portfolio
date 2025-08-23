import { Counter } from "../counter/Counter";
import {
  AboutContainer,
  AboutSubContainer,
  AboutText,
  Container,
  CounterContainer,
} from "./styled";

export const About = ({ sectionId }: { sectionId: string }) => {
  return (
    <AboutContainer id={sectionId}>
      <AboutSubContainer>
        <Container>
          <AboutText>
            Frontend Developer with hands-on experience in JavaScript,
            TypeScript, React, Next.js, and Tailwind CSS. I specialize in
            developing responsive layouts, interactive components, and optimized
            web apps that meet both user and business needs. Dedicated to
            writing clean, maintainable code and continuously learning new
            technologies to stay ahead in frontend development.
          </AboutText>
          <CounterContainer>
            <Counter value={12} title="Year Experience" />
            <Counter value={45} title="Project Completed" />
            <Counter value={10} title="Technologies" />
            <Counter value={300} title="Code Commits" />
          </CounterContainer>
        </Container>
      </AboutSubContainer>
    </AboutContainer>
  );
};
