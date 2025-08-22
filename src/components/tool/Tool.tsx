import { Heading } from "../heading/Heading";
import { ToolCard } from "../toolCard/ToolCard";
import { Container, ToolContainer, ToolSubContainer } from "./styled";

export const Tool = ({ sectionId }: { sectionId: string }) => {
  return (
    <ToolContainer id={sectionId}>
      <ToolSubContainer>
        <Heading
          title="essential tools"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste obcaecati cumque id? Soluta assumenda, facilis incidunt blanditiis hic, tempora ducimus dignissimos."
        />
        <Container>
          <ToolCard image="/tool.png" title="Figma" description="Design tool" />
          <ToolCard image="/tool.png" title="Figma" description="Design tool" />
          <ToolCard image="/tool.png" title="Figma" description="Design tool" />
          <ToolCard image="/tool.png" title="Figma" description="Design tool" />
          <ToolCard image="/tool.png" title="Figma" description="Design tool" />
          <ToolCard image="/tool.png" title="Figma" description="Design tool" />
          <ToolCard image="/tool.png" title="Figma" description="Design tool" />
          <ToolCard image="/tool.png" title="Figma" description="Design tool" />
        </Container>
      </ToolSubContainer>
    </ToolContainer>
  );
};
