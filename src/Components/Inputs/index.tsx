import { StyledInputs } from "./style";
import { UseFormRegister, FieldValues } from "react-hook-form";

interface IInputProps {
  text: string;
  type: string;
  chave: string;
  register: UseFormRegister<FieldValues>;
}
export const Inputs = ({ text, type, chave, register }: IInputProps) => {
  return (
    <>
      <StyledInputs>
        <input type={type} placeholder="" {...register(chave)} />
        <label>{text}</label>
      </StyledInputs>
    </>
  );
};
