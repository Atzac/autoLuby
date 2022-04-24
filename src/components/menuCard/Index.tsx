import { FC } from "react";
import { Card } from "./styles";

import { To, useNavigate } from "react-router-dom";

type propTypes = {
  title: String;
  desc: String;
  amount: String;
  imageUrl?: any;
  path?: To;
};

const MenuCard: FC<propTypes> = ({ title, desc, amount, imageUrl, path }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`${path}`);
  };

  return (
    <Card onClick={handleClick}>
      <div>
        <h1>{title}</h1>
        <p>{desc}</p>
        <div>
          <p> {amount} </p>
        </div>
      </div>

      <img src={imageUrl} alt="car" />
    </Card>
  );
};

export default MenuCard;
