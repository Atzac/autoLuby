import { FC } from "react";
import { DivInput, ResponseIcon } from "./styles";
import green from "@assets/v.svg"
import warn from "@assets/f.svg"

type propTypes = {
  name?: string;
  type: string;
  label?: string;
  value?: string;
  placeholder?: string;
  error?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: any;
  valid?: boolean;
};

const Input: FC<propTypes> = ({ label, onChange, placeholder, value, type, error, onBlur, valid }) => {
  return (
    <DivInput error={error} valid={valid}>
      <label>{label && label}</label>
      <input
        type={type}
        onBlur={onBlur}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <ResponseIcon urlImage={(error && warn) || (valid && green)} />
    </DivInput>
  );
};

export default Input;
