import axios from "axios";
import { destroySession, getSession } from "@helpers/localStorage";

const API = axios.create({
  baseURL: "https://autoluby.k8s.luby.me",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export const createSession = async (email: string, password: string) => {
  return axios
    .post("https://autoluby.k8s.luby.me/login", { email, password })
    .then(function (response) {
      console.log(response);
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};

API.interceptors.request.use((config) => {
  const sessionObject = getSession();
  if (sessionObject) {
    config.headers = {
      Authorization: `${sessionObject.type} ${sessionObject.token}`,
    };
  }

  return config;
});

API.interceptors.response.use(
  (value) => {
    return Promise.resolve(value);
  },
  (error) => {
    const { isAxiosError = false, response = null } = error;
    if (isAxiosError && response && response.status === 403) {
      destroySession();
      return Promise.reject(error);
    }
    return response;
  }
);

export { API };
