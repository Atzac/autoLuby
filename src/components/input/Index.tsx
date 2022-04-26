import { FC } from "react";
import { DivInput } from "./styles";

type propTypes = {
  name?: string;
  type: string;
  label?: string;
  value?: string;
  placeholder?: string;
  error?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: FC<propTypes> = ({ label, onChange, placeholder, value, type, error }) => {
  return (
    <DivInput error={error}>
      <label>{label && label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </DivInput>
  );
};

export default Input;
