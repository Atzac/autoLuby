import { FC, useContext } from "react";

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

  const formik = useFormik({
    initialValues: InitialValues,
    validationSchema: Validation,
    onSubmit: async (values) => {
      const response = await loginUser(values.email, values.password);
      if (response.token) {
        setUserData(response);
        navigate("/");
      } else {
        formik.setFieldError("email", "Email ou senha incorretos");
        formik.setFieldError("password", "Email ou senha incorretos");
      }
    },
  });
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
            placeholder={
              formik.errors.email ? formik.errors.email : "@mail.com"
            }
            onChange={formik.handleChange("email")}
            onBlur={formik.handleBlur("email")}
            error={formik.errors.email && formik.touched.email ? true : false}
            value={formik.values.email}
            valid={!formik.errors.email && formik.values.email.length > 0}
          />
          <Input
            label="Senha"
            type="password"
            placeholder={formik.errors.password ? "Senha incorreta" : "senha"}
            onChange={formik.handleChange("password")}
            onBlur={formik.handleBlur("password")}
            error={
              formik.errors.password && formik.touched.password ? true : false
            }
            value={formik.values.password}
            valid={!formik.errors.password && formik.values.password.length > 0}
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
