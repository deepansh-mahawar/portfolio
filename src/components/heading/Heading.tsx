import { Description, Title } from "../contact/styled";
import { HeadingContainer } from "./styled";

export const Heading = ({
  title,
  description,
}: {
  title: string;
  description?: string;
}) => {
  return (
    <HeadingContainer>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </HeadingContainer>
  );
};
