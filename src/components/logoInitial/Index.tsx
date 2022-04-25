import { FC } from "react";
import { Logo } from "./styles";

type propTypes = {
  urlImage: string;
};

const LogoInitial: FC<propTypes> = ({ urlImage }) => {
  return (
    <Logo img={urlImage} />
  );
};

export default LogoInitial;
