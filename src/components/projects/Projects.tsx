import { ProjectCard } from "../projectCard/ProjectCard";
import { ProjectsContainer, ProjectsSubContainer } from "./styled";

export const Projects = ({ sectionId }: { sectionId: string }) => {
  return (
    <ProjectsContainer id={sectionId}>
      <ProjectsSubContainer>
        <ProjectCard
          projectImage="/project.png"
          projectTitle="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
          pariatur."
          projectDescription="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias
          recusandae nobis natus fuga vel numquam, non officiis nemo eveniet,
          dicta sequi maiores! Dolores tempore placeat vero, eum cum aut
          molestiae!"
          frontendTech={["React.js", "TypeScript"]}
          backendTech={["Node.js", "Express"]}
        />
        <ProjectCard
          projectImage="/project.png"
          projectTitle="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
          pariatur."
          projectDescription="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias
          recusandae nobis natus fuga vel numquam, non officiis nemo eveniet,
          dicta sequi maiores! Dolores tempore placeat vero, eum cum aut
          molestiae!"
          frontendTech={["React.js", "TypeScript"]}
          backendTech={["Node.js", "Express"]}
        />
      </ProjectsSubContainer>
    </ProjectsContainer>
  );
};
