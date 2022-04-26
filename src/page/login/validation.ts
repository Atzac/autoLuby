import * as yup from "yup";

export const InitialValues = {
  email: "",
  password: "",
};

export const Validation = yup.object({
  email: yup
    .string()
    .email("E-mail inválido")
    .required("Email é Obrigatório!"),
  password: yup.string().required("Insira a senha"),
});
