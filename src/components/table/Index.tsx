import { FC, ReactNode } from "react";
import { TableStyle, TableContainer } from "./styles";
import { InputSearch } from "@components/index";

type propTypes = {
  children?: ReactNode;
  tableTitle: string;
  headers: string[];
  handleSearch?: (search: string) => Promise<void>;
};

const Table: FC<propTypes> = (props) => {
  return (
    <>
      <TableContainer>
        <section>
          <h1>{props.tableTitle}</h1>
          <InputSearch size="200" handleSearch={props.handleSearch} />
        </section>

        <TableStyle>
          <table>
            <thead>
              <tr>
                {props.headers.map((header) => {
                  return <th>{header}</th>;
                })}
              </tr>
            </thead>
            <tbody>{props.children}</tbody>
          </table>
        </TableStyle>
      </TableContainer>
    </>
  );
};

export default Table;
