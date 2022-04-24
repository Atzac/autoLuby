import React from "react";
import { NavBar, MenuCard } from "@components/index";
import { Container, Content } from "./styles";
import carImage from "@assets/car_card.png";
import carImage2 from "@assets/car2.png";
import employee from "@assets/employee.png";

import { useContext } from "react";
import { TesteContext } from "@store/teste/testeContext";

function Home() {
  const { a } = useContext(TesteContext);
  return (
    <>
      <NavBar />
      <Container>
        <Content>
          <h1> Bem-vindo, {a} </h1>
          <p>Menu</p>

          <MenuCard
            title="Veículos reservados e vendidos"
            desc="Veículos reservados e vendidos por você"
            amount="147 veículos"
            imageUrl={carImage}
          />
          <MenuCard
            title="Listagem geral de veículos"
            desc="Listagem de veículos de toda a empresa"
            amount="180 veículos"
            imageUrl={carImage2}
          />
          <MenuCard
            title="Funcionários da empresa"
            desc="Listagem de todos os funcionários empresa"
            amount="147 veículos"
            imageUrl={employee}
          />
        </Content>
      </Container>
    </>
  );
}

export default Home;
