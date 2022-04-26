import { API } from "./api";

export const ListEmployees = async () => {
  const request = `/employees?noPaginate` ;
  try {
    let response = await API.get(request)
    if (response.status === 200) {
      return response.data;
    }
    if (response.status === 404) {
      throw new Error("Servidor indisponível");
    }

    throw new Error();
  } catch (error) {
    return false;
  }
};
