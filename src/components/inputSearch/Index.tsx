import { FC } from "react";
import { DivInput } from "./styles";
import SearchIcon from "@assets/search.svg";

type propTypes = {
  placeholder?: string;
  size?: string;
};

const InputSearch: FC<propTypes> = ({ placeholder, size }) => {
  return (
    <DivInput size={size}>
      <input type="text" placeholder={placeholder} />
      <img src={SearchIcon} alt="searchIcon" />
    </DivInput>
  );
};

export default InputSearch;
