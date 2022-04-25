import React, { useEffect, useState } from "react";
import { NavBar, MenuCard } from "@components/index";
import { Container, Content } from "./styles";
import carImage from "@assets/car_card.png";
import carImage2 from "@assets/car2.png";
import employee from "@assets/employee.png";

function Home() {
  const [data, setData] = useState({});

  useEffect(() => {
    const localData: any = localStorage.getItem("USER_DATA");
    const dataParsed: object = JSON.parse(localData);
    setData(dataParsed)
  }, [])

  return (
    <>
      <NavBar />
      <Container>
        <Content>
          <h1> Bem-vindo, Carlos</h1>
          <p>Menu</p>

          <MenuCard
            title="Veículos reservados e vendidos"
            desc="Veículos reservados e vendidos por você"
            amount="147 veículos"
            path={"/yourVehicles"}
            imageUrl={carImage}
          />
          <MenuCard
            title="Listagem geral de veículos"
            desc="Listagem de veículos de toda a empresa"
            amount="180 veículos"
            path={"/allVehicles"}
            imageUrl={carImage2}
          />
          <MenuCard
            title="Funcionários da empresa"
            desc="Listagem de todos os funcionários empresa"
            amount="147 veículos"
            path={"/employees"}
            imageUrl={employee}
          />
        </Content>
      </Container>
    </>
  );
}

export default Home;
