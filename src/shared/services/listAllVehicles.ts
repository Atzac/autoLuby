import { API } from "./api";

export const ListAllVehicles = async (search?: string) => {
  const request = `/vehicles?noPaginate` ;
  try {
    let response = await API.get(request + `&model=${search ? search : ""}`);
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
