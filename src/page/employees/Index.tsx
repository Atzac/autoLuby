import { useState, useEffect } from "react";
import { Container, Table } from "@components/index";
import { ListEmployees } from "@api/listEmployees";
import { inReal } from "@helpers/convertValue";

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
