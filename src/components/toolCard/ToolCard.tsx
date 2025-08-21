import {
  Description,
  Logo,
  Title,
  ToolCardContainer,
  ToolDescriptionContainer,
  ToolLogoContainer,
} from "./styled";

export const ToolCard = ({
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description: string;
}) => {
  return (
    <ToolCardContainer>
      <ToolLogoContainer>
        <Logo src={image} />
      </ToolLogoContainer>
      <ToolDescriptionContainer>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </ToolDescriptionContainer>
    </ToolCardContainer>
  );
};
