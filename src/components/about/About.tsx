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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
            debitis sapiente quia dolorem ipsum cumque nisi. Ea laborum
            exercitationem aperiam? Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Esse debitis sapiente quia dolorem ipsum cumque
            nisi. Ea laborum exercitationem aperiam? Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Esse debitis sapiente quia dolorem
            ipsum cumque nisi. Ea laborum exercitationem aperiam?
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
