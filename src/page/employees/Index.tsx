import { useState, useEffect } from "react";
import { Container, Table } from "@components/index";
import { ListEmployees } from "@api/listEmployees";
import { inReal } from "@helpers/convertValue";

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

type employeeType = {
  name: string;
  email: string;
  cpf: string;
  salary: number;
  bio: string;
};

const Employees = () => {
  useEffect(() => {
    const test = async () => {
      const response = await ListEmployees();
      if (response) {
        console.log(response);
        setData(response.employees);
      }
    };
    test();
  }, []);

  const [data, setData] = useState<employeeType[]>([]);
  return (
    <>
      <Container title="Funcionários" noSearch>
        <Table
          tableTitle="Listagem de funcionários da empresa"
          headers={["Nome", "Email", "CPF", "Valor", "Bio"]}
        >
          {data &&
            data.map((emp: employeeType) => {
              return (
                <tr key={emp.cpf}>
                  <td>{emp.name}</td>
                  <td>{emp.email}</td>
                  <td className="minWidth">{emp.cpf}</td>
                  <td className="minWidth">{inReal(emp.salary)}</td>
                  <td>{emp.bio}</td>
                </tr>
              );
            })}
        </Table>
      </Container>
    </>
  );
};

export default Employees;
