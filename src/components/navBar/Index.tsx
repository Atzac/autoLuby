import { FC } from "react";
import { Bar, Logo } from "./styles";
import { Button, InputSearch } from "@components/index";
import { MdOutlineLogout } from "react-icons/md";
import AutoLubyLogo from "@assets/autoLub.svg";

import { useNavigate } from "react-router-dom";
import { logOut } from "@api/loginUser";

const NavBar: FC = () => {
  const navigate = useNavigate();
  return (
    <Bar>
      <Logo onClick={() => navigate("/")} urlImage={AutoLubyLogo}>
        {/* <img src={Logo} alt="logo" /> */}
      </Logo>

      <InputSearch />

      <Button buttonStyle="exit" onClick={logOut}>
        Sair
        <MdOutlineLogout />
      </Button>
    </Bar>
  );
};

export default NavBar;
