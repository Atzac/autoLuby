import { FC, ReactNode } from "react";
import { ButtonStyles } from "./styles";

type propTypes = {
  onClick?: () => void;
  buttonStyle: String;
  children: ReactNode;
};

const Button: FC<propTypes> = ({ onClick, buttonStyle, children }) => {
  return (
    <ButtonStyles buttonStyle={buttonStyle} type="button" onClick={onClick}>
      {children}
    </ButtonStyles>
  );
};

export default Button;
