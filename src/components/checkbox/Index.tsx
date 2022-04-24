import { FC } from "react";
import { CheckboxInput } from "./styles";

type propTypes = {
  name?: string;
  label?: string;
  value?: string;
  onChange?: () => void;
  onBlur?: () => void;
};

const Checkbox: FC<propTypes> = ({ name, label, onChange, value, onBlur }) => {
  return (
    <CheckboxInput>
      <input type="checkbox" />
      <label>{label && label}</label>
    </CheckboxInput>
  );
};

export default Checkbox;
