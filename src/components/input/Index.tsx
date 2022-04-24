import { FC } from "react";
import { DivInput } from "./styles";

type propTypes = {
  name?: string;
  label?: string;
  value?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
};

const Input: FC<propTypes> = ({
  label,
  onChange,
  placeholder,
  value,
  onBlur,
}) => {
  return (
    <DivInput>
      <label>{label && label}</label>
      <input
        type="email"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </DivInput>
  );
};

export default Input;
