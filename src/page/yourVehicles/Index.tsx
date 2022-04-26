import { useContext } from "react";
import { Container, Table } from "@components/index";
import { Td } from "@globalStyle/index";
import { AuthContext } from "@store/index";
import { inReal } from "@helpers/convertValue"

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

const YourVehicles = () => {
  const { userData } = useContext(AuthContext);

  return (
    <>
      <Container title="Seus Veículos" noSearch>
        <Table
          tableTitle="Listagem de veículos reservados e vendidos"
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
          {userData &&
            userData.user.vehicles.map((car: carTypes) => {
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

export default YourVehicles;
