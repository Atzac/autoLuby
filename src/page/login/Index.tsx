import { FC } from "react";
import carImage from "@assets/car.png";
import logoIcon from "@assets/autoLuby.png";
import { CarImageBG, LoginContainer, Divider } from "./styles";
import { Input, Checkbox, LogoInitial, Button } from "@components/index";

import { useNavigate } from "react-router-dom";


const Login: FC = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/home");
  };
  return (
    <>
      <Divider>
        <LoginContainer>
          <div>
            <h1>Bem-vindo à AutoLuby</h1>
            <p>Faça o login para acessar sua conta</p>
          </div>

          <Input label="Endereço de email" placeholder={"@mail.com"} />
          <Input label="Senha" placeholder={"senha"} />

          <section>
            <Checkbox label="Lembrar minha senha" />
            <p>Esqueceu a senha?</p>
          </section>

          <Button buttonStyle="primary" onClick={handleClick}>Entrar</Button>
          <p>
            Ainda não tem uma conta? <span>Criar conta</span>
          </p>
        </LoginContainer>
      </Divider>

      <CarImageBG urlImage={carImage} />
      <LogoInitial urlImage={logoIcon} />
    </>
  );
};

export default Login;
