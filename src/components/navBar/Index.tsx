import { FC, useContext } from "react";
import { Bar } from "./styles";
import { Button, InputSearch } from "@components/index";
import { MdOutlineLogout } from "react-icons/md";
import Logo from "@assets/autoLuby.png";

import { useNavigate } from "react-router-dom";
import { AuthContext } from "@store/index";

const NavBar: FC = () => {
  const { logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <Bar>
      <div onClick={() => navigate("/")}>
        <img src={Logo} alt="logo" />
      </div>

      <InputSearch />

      <Button buttonStyle="exit" onClick={logOut}>
        Sair
        <MdOutlineLogout />
      </Button>
    </Bar>
  );
};

export default NavBar;
