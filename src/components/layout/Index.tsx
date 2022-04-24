import { FC, ReactNode } from "react";
import { NavBar } from "@components/index";
import { ContainerStyle } from "./styles";

type propTypes = {
  children?: ReactNode;
  title: string;
};

const Container: FC<propTypes> = (props) => {
  return (
    <>
      <NavBar />
      <ContainerStyle>
        <h1>{props.title}</h1>

        {props.children}
      </ContainerStyle>
    </>
  );
};

export default Container;
