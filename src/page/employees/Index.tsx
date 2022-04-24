import { useState } from "react";
import { Container, Table } from "@components/index";
import { Td } from "@globalStyle/index";

const datas = [
  {
    id: 1,
    nome: "Tiago",
    email: "thiago.m@mail.com",
    cpf: "114.578.065-78",
    valor: "R$ 6.000,00",
    bio: "Magna veniam ex labore incididunt. Nostrud irure minim deserunt nulla id enim ipsum do veniam ex labore incididunt.",
  },
  
];

const Employees = () => {
  const [data, setData] = useState<any>(datas);
  return (
    <>
      <Container title="Funcionários">
        <Table
          tableTitle="Listagem de funcionários da empresa"
          headers={[
            "Nome",
            "Email",
            "CPF",
            "Valor",
            "Bio"
          ]}
        >
          {data &&
            data.map((car: any) => {
              return (
                <tr key={car.id}>
                  <td>{car.nome}</td>
                  <td>{car.email}</td>
                  <td className="minWidth">{car.cpf}</td>
                  <td className="minWidth">{car.valor}</td>
                  <td>{car.bio}</td>
                </tr>
              );
            })}
        </Table>
      </Container>
    </>
  );
};

export default Employees;
