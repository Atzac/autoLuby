import { FC, useState } from "react";
import { DivInput } from "./styles";
import { BiSearch } from "react-icons/bi";

type propTypes = {
  placeholder?: string;
  size?: string;
  handleSearch?: (search: string) => Promise<void>;
};

const InputSearch: FC<propTypes> = ({ placeholder, size, handleSearch }) => {
  const [search, setSearch] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const click = () => {
    if (handleSearch) {
      handleSearch(search);
    }
  };

  return (
    <DivInput size={size}>
      <input
        type="text"
        placeholder={placeholder}
        onChange={handleChange}
        value={search}
      />
      <BiSearch onClick={click} />
    </DivInput>
  );
};

export default InputSearch;
