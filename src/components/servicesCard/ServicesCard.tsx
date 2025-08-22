import { Title } from "../contact/styled";
import {
  Index,
  ServiceCardContainer,
  ServiceDescripiton,
  ServiceTitle,
} from "./styled";

export const ServicesCard = ({
  index,
  title,
  desc,
  heading,
  border = true,
  padding = true,
  gap = true,
  hover = true,
}: {
  index?: number | string;
  title?: string;
  desc?: string;
  heading?: string;
  border?: boolean;
  padding?: boolean;
  gap?: boolean;
  hover?: boolean;
}) => {
  return (
    <ServiceCardContainer
      $border={border}
      $padding={padding}
      $gap={gap}
      $hover={hover}
    >
      {heading ? (
        <>
          <Title>{heading}</Title>
          <ServiceDescripiton>{desc}</ServiceDescripiton>
        </>
      ) : (
        <>
          <Index>{index}</Index>
          <ServiceTitle>{title}</ServiceTitle>
          <ServiceDescripiton>{desc}</ServiceDescripiton>
        </>
      )}
    </ServiceCardContainer>
  );
};
