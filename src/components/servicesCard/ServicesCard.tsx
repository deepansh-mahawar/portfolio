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
}: {
  index?: number;
  title?: string;
  desc?: string;
  heading?: string;
  border?: boolean;
  padding?: boolean;
  gap?: boolean;
}) => {
  return (
    <ServiceCardContainer $border={border} $padding={padding} $gap={gap}>
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
