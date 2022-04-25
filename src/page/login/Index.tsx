import { FC, useState } from "react";

import carImage from "@assets/car.png";
import logoIcon from "@assets/autoLub.svg";
import { CarImageBG, LoginContainer, Divider } from "./styles";
import { Input, Checkbox, LogoInitial, Button } from "@components/index";
import { loginUser } from "@api/loginUser";

import { useNavigate } from "react-router-dom";

const Login: FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = async () => {
    const response = await loginUser(email, password);
    if (response) {
      navigate("/");
    }
  };

  return (
    <>
      <Divider>
        <LoginContainer>
          <div>
            <h1>Bem-vindo à AutoLuby</h1>
            <p>Faça o login para acessar sua conta</p>
          </div>

          <Input
            label="Endereço de email"
            placeholder={"@mail.com"}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <Input
            label="Senha"
            placeholder={"senha"}
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />

          <section>
            <Checkbox label="Lembrar minha senha" />
            <p>Esqueceu a senha?</p>
          </section>

          <Button buttonStyle="primary" onClick={handleSubmit}>
            Entrar
          </Button>
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
