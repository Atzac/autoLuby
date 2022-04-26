import { FC, useState, useContext } from "react";

import carImage from "@assets/car.png";
import logoIcon from "@assets/autoLub.svg";
import { CarImageBG, LoginContainer, Divider } from "./styles";
import { Input, Checkbox, LogoInitial, Button } from "@components/index";
import { loginUser } from "@api/loginUser";
import { InitialValues, Validation } from "./validation";

import { useNavigate } from "react-router-dom";
import { AuthContext } from "@store/index";

import { useFormik } from "formik";

const Login: FC = () => {
  const navigate = useNavigate();
  const { setUserData } = useContext(AuthContext);
  const [inputError, setInputError] = useState(false);

  const formik = useFormik({
    initialValues: InitialValues,
    validationSchema: Validation,
    onSubmit: async (values) => {
      const response = await loginUser(values.email, values.password);
      console.log(response);
      if (response.token) {
        setUserData(response);
        navigate("/");
      }
      if (
        response.isError &&
        response.error.message === "Email ou senha inválida!"
      ) {
        setInputError(true);
      }
      console.log(values);
    },
  });
  console.log(formik.errors)

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
            type="email"
            placeholder={"@mail.com"}
            onChange={formik.handleChange("email")}
            error={formik.errors.email && formik.touched.email ? true : false}
            value={formik.values.email}
          />
          <Input
            label="Senha"
            type="password"
            placeholder={"senha"}
            onChange={formik.handleChange("password")}
            error={formik.errors.password && formik.touched.email ? true : false}
            value={formik.values.password}
          />

          <section>
            <Checkbox label="Lembrar minha senha" />
            <p>Esqueceu a senha?</p>
          </section>

          <Button buttonStyle="primary" onClick={formik.handleSubmit}>
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
