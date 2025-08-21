import {
  Btn,
  BtnBorder,
  FormContainer,
  FormInput,
  FormSubContainer,
  TextArea,
} from "./styled";

export const Form = () => {
  return (
    <FormContainer>
      <FormSubContainer>
        <FormInput placeholder="Name" type="text" />
        <FormInput placeholder="Email" type="email" />
      </FormSubContainer>
      <FormInput $width="100%" type="text" placeholder="Subject" />
      <TextArea rows={5} placeholder="Message" />
      <BtnBorder>
        <Btn>Submit</Btn>
      </BtnBorder>
    </FormContainer>
  );
};

export default Form;
