import { useState } from "react";
import { Container, Table } from "@components/index";
import { Td } from "./styles";

const datas = [
  {
    id: 1,
    marca: "Ford",
    modelo: "Fiesta",
    ano: "2017",
    km: "70.000",
    cor: "Branco",
    status: "Vendido",
    chassi: "9BW",
    valor: "R$ 39.000,00",
  },
  {
    id: 2,
    marca: "Ford",
    modelo: "Fiesta",
    ano: "2017",
    km: "70.000",
    cor: "Branco",
    status: "Disponível",
    chassi: "9BW",
    valor: "R$ 39.000,00",
  },
  {
    id: 3,
    marca: "Ford",
    modelo: "Fiesta",
    ano: "2017",
    km: "70.000",
    cor: "Branco",
    status: "Reservado",
    chassi: "9BW",
    valor: "R$ 39.000,00",
  },
  {
    id: 4,
    marca: "Ford",
    modelo: "Fiesta",
    ano: "2017",
    km: "70.000",
    cor: "Branco",
    status: "Reservado",
    chassi: "9BW",
    valor: "R$ 39.000,00",
  },
  {
    id: 5,
    marca: "Ford",
    modelo: "Fiesta",
    ano: "2017",
    km: "70.000",
    cor: "Branco",
    status: "Reservado",
    chassi: "9BW",
    valor: "R$ 39.000,00",
  },
  {
    id: 6,
    marca: "Ford",
    modelo: "Fiesta",
    ano: "2017",
    km: "70.000",
    cor: "Branco",
    status: "Reservado",
    chassi: "9BW",
    valor: "R$ 39.000,00",
  },
  {
    id: 12,
    marca: "Ford",
    modelo: "Fiesta",
    ano: "2017",
    km: "70.000",
    cor: "Branco",
    status: "Vendido",
    chassi: "9BW",
    valor: "R$ 39.000,00",
  },
  {
    id: 22,
    marca: "Ford",
    modelo: "Fiesta",
    ano: "2017",
    km: "70.000",
    cor: "Branco",
    status: "Disponível",
    chassi: "9BW",
    valor: "R$ 39.000,00",
  },
  {
    id: 32,
    marca: "Ford",
    modelo: "Fiesta",
    ano: "2017",
    km: "70.000",
    cor: "Branco",
    status: "Reservado",
    chassi: "9BW",
    valor: "R$ 39.000,00",
  },
  {
    id: 42,
    marca: "Ford",
    modelo: "Fiesta",
    ano: "2017",
    km: "70.000",
    cor: "Branco",
    status: "Reservado",
    chassi: "9BW",
    valor: "R$ 39.000,00",
  },
  {
    id: 52,
    marca: "Ford",
    modelo: "Fiesta",
    ano: "2017",
    km: "70.000",
    cor: "Branco",
    status: "Reservado",
    chassi: "9BW",
    valor: "R$ 39.000,00",
  },
  {
    id: 62,
    marca: "Ford",
    modelo: "Fiesta",
    ano: "2017",
    km: "70.000",
    cor: "Branco",
    status: "Reservado",
    chassi: "9BW",
    valor: "R$ 39.000,00",
  },
];
function AllVehicles() {
  const [data, setData] = useState<any>(datas);
  return (
    <>
      <Container title="Todos Veículos">
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
            data.map((car: any) => {
              return (
                <tr key={car.id}>
                  <td>{car.marca}</td>
                  <td>{car.modelo}</td>
                  <td>{car.ano}</td>
                  <td>{car.km}</td>
                  <td>{car.cor}</td>
                  <Td status={car.status}>
                    <div>{car.status}</div>
                  </Td>
                  <td>{car.chassi}</td>
                  <td>{car.valor}</td>
                </tr>
              );
            })}
        </Table>
      </Container>
    </>
  );
}

export default AllVehicles;
