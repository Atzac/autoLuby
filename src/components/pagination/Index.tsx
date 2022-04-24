import { FC } from "react";
import { PaginationStyles } from "./styles";

type propTypes = {};

const Pagination: FC<propTypes> = () => {
  return (
    <PaginationStyles>
      <button type="button">Click Me!</button>
      <div>
        <a href="www.google.com">1</a>
        <a href="www.google.com">2</a>
        <a href="www.google.com">3</a>
        <a href="www.google.com">4</a>
        <a href="www.google.com">5</a>
        <a href="www.google.com">6</a>
        <a href="www.google.com">&raquo;</a>
      </div>
      <button type="button">Click Me!</button>
    </PaginationStyles>
  );
};

export default Pagination;
