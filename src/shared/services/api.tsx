import axios from "axios";
import { destroySession, getSession } from "@helpers/localStorage";

const API = axios.create({
  baseURL: "https://autoluby.k8s.luby.me",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

API.interceptors.request.use((config) => {
  const sessionObject = getSession();
  if (sessionObject) {
    config.headers = {
      Authorization: `Bearer ${sessionObject}`,
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
