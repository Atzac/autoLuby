import { FC } from "react";
import { Bar } from "./styles";
import { Button, InputSearch } from "@components/index";
import { MdOutlineLogout } from "react-icons/md";
import Logo from "@assets/autoLuby.png";

type propTypes = {};

const NavBar: FC<propTypes> = () => {
  return (
    <Bar>
      <div>
        <img src={Logo} alt="logo" />
      </div>

      <InputSearch />

      <Button buttonStyle="exit">
        Sair
        <MdOutlineLogout />
      </Button>
    </Bar>
  );
};

export default NavBar;
