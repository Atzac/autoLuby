import { FC } from "react";
import { DivInput } from "./styles";
import { BiSearch } from "react-icons/bi"

type propTypes = {
  placeholder?: string;
  size?: string;
};

const InputSearch: FC<propTypes> = ({ placeholder, size }) => {
  return (
    <DivInput size={size}>
      <input type="text" placeholder={placeholder} />
      <BiSearch />
    </DivInput>
  );
};

export default InputSearch;
