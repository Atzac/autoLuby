import { API } from "./api";
import { createSession, destroySession } from "../helpers/localStorage";

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
      throw new Error("Email ou senha inválida!");
    }
    if (response.status === 404) {
      throw new Error(
        "Não foi possivel realizar login, servidor indisponível."
      );
    }
    throw new Error();
  } catch (error) {
    return { isError: true, error };
  }
};

export const logOut = () => {
  destroySession();
};
