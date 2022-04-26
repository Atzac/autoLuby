import { FC } from "react";
import { Bar, Logo } from "./styles";
import { Button, InputSearch } from "@components/index";
import { MdOutlineLogout } from "react-icons/md";
import AutoLubyLogo from "@assets/autoLub.svg";

import { useNavigate } from "react-router-dom";
import { logOut } from "@api/loginUser";

type propTypes = {
  noSearch?: boolean;
};

const NavBar: FC<propTypes> = ({ noSearch }) => {
  const navigate = useNavigate();
  return (
    <Bar>
      <Logo onClick={() => navigate("/")} urlImage={AutoLubyLogo} />

      {!noSearch && <InputSearch />}

      <Button buttonStyle="exit" onClick={logOut}>
        Sair
        <MdOutlineLogout />
      </Button>
    </Bar>
  );
};

export default NavBar;
