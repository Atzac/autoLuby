import { FC } from "react";
import { Card } from "./styles";

type propTypes = {
  title: String;
  desc: String;
  amount: String;
  imageUrl?: any;
};

const MenuCard: FC<propTypes> = ({ title, desc, amount, imageUrl }) => {
  return (
    <Card>
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
