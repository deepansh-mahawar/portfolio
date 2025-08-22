import { CounterContainer, Title, Value } from "./styled";
import { ImPlus } from "react-icons/im";

export const Counter = ({ value, title }: { value: number; title: string }) => {
  return (
    <CounterContainer>
      <Value>
        {value}
        <ImPlus className="icon"/>
      </Value>
      <Title>{title}</Title>
    </CounterContainer>
  );
};
