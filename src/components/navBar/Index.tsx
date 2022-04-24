import { FC } from "react";
import { Bar } from "./styles";
import { Button, InputSearch } from "@components/index";
import { MdOutlineLogout } from "react-icons/md";
import Logo from "@assets/autoLuby.png";
import { useNavigate } from "react-router-dom";


const NavBar: FC = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/home");
  };
  return (
    <Bar>
      <div onClick={handleClick}>
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
