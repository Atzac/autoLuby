import { useEffect, useState } from "react";
import { Container, Table } from "@components/index";
import { Td } from "@globalStyle/index";
import { ListAllVehicles } from "@api/listAllVehicles";
import { inReal } from "@helpers/convertValue";

type carTypes = {
  brand: string;
  chassi: string;
  color: string;
  km: number;
  model: string;
  status: string;
  value: number;
  yer: string;
};

const AllVehicles = () => {
  const [data, setData] = useState<carTypes[]>([]);

  useEffect(() => {
    const getVehicles = async () => {
      const response = await ListAllVehicles();
      if (response) {
        setData(response.vehicles);
      }
    };
    getVehicles();
  }, []);

  return (
    <>
      <Container title="Todos Veículos" noSearch>
        <Table
          tableTitle="Listagem geral de veículos"
          headers={[
            "Marca",
            "Modelo",
            "Ano",
            "Km",
            "Cor",
            "Status",
            "Chassi",
            "Valor",
          ]}
        >
          {data &&
            data.map((car: carTypes) => {
              return (
                <tr key={car.chassi}>
                  <td>{car.brand}</td>
                  <td>{car.model}</td>
                  <td>{car.yer}</td>
                  <td>{car.km}</td>
                  <td>{car.color}</td>
                  <Td status={car.status}>
                    <div>{car.status}</div>
                  </Td>
                  <td>{car.chassi}</td>
                  <td>{inReal(car.value)}</td>
                </tr>
              );
            })}
        </Table>
      </Container>
    </>
  );
};

export default AllVehicles;
