import { API } from "./api";
import { createSession, destroySession } from "../helpers/localStorage";
import { toast } from "react-toastify";

export const loginUser = async (email: string, password: string) => {
  const request = `login`;
  const data = JSON.stringify({ email, password });
  try {
    let response = await API.post(request, data);
    if (response.status === 200) {
      createSession(response.data.token);
      return response.data;
    }
    if (response.status === 401) {
      toast.warning("Verifique seu login");
      throw new Error("Email ou senha inválida!");
    }
    if (response.status === 404) {
      toast.error("Servidor indisponível");

      throw new Error(
        "Não foi possivel realizar login, servidor indisponível."
      );
    }
    throw new Error();
  } catch (error) {
    return { isError: true, error };
  }
};

export const logOut = async () => {
  destroySession();
};
