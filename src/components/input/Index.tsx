import { FC } from "react";
import { DivInput } from "./styles";

type propTypes = {
  name?: string;
  label?: string;
  value?: string;
  placeholder?: string;
  onChange?: () => void;
  onBlur?: () => void;
};

const Input: FC<propTypes> = ({
  name,
  label,
  onChange,
  placeholder,
  value,
  onBlur,
}) => {
  return (
    <DivInput>
      <label>{label && label}</label>
      <input type="email" placeholder={placeholder} />
    </DivInput>
  );
};

export default Input;
