import React, { useContext } from "react";
import { NavBar, MenuCard } from "@components/index";
import { Container, Content } from "./styles";
import carImage from "@assets/car_card.png";
import carImage2 from "@assets/car2.png";
import employee from "@assets/employee.png";
import { AuthContext } from "@store/index";


function Home() {
  const { userData } = useContext(AuthContext);
  console.log(userData)
  return (
    <>
      <NavBar />
      <Container>
        <Content>
          <h1> Bem-vindo, { userData.user.name } </h1>
          <p>Menu</p>

          <MenuCard
            title="Veículos reservados e vendidos"
            desc="Veículos reservados e vendidos por você"
            amount={`${userData.totalVehiclesLoggedUser} VEÍCULOS`}
            path={"/yourVehicles"}
            imageUrl={carImage}
          />
          <MenuCard
            title="Listagem geral de veículos"
            desc="Listagem de veículos de toda a empresa"
            amount={`${userData.totalVehicles} VEÍCULOS`}
            path={"/allVehicles"}
            imageUrl={carImage2}
          />
          <MenuCard
            title="Funcionários da empresa"
            desc="Listagem de todos os funcionários empresa"
            amount={`${userData.totalEmployees} FUNCIONÁRIOS`}
            path={"/employees"}
            imageUrl={employee}
          />
        </Content>
      </Container>
    </>
  );
}

export default Home;
