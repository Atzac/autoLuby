import styled from "styled-components";
import { theme } from "@globalStyle/theme";

type propTypes = {
  status?: string;
};

const DivContent = styled.div`
  width: 100%;
  margin-top: 15px;
  padding: 20px 10px;
`;

export const TableContainer = styled(DivContent)`
  height: calc(100vh - 250px);
  max-height: calc(100vh - 250px);
  box-shadow: 0px 0px 6px rgba(162, 162, 162, 0.25);
  border-radius: 3px;
  border: 1px solid #e6e6e6;
  background-color: white;

  > section {
    display: flex;
    justify-content: space-between;
    height: 50px;
    > h1 {
      font-size: 20px;
      color: ${theme.darkGray};
      font-weight: 600;
      margin-left: 10px;
    }
  }
`;

export const TableStyle = styled.div`
  width: 100%;
  height: 100%;
  max-height: calc(100% - 50px);
  background-color: white;
  overflow: auto;
  table {
    width: 100%;
    height: auto;
    max-height: 500px;
    border-collapse: collapse;
    text-align: left;
    color: ${theme.gray};
    tr:hover {
      background-color: ${theme.bgGray};
    }
    thead > tr {
      > th {
        text-align: left;
        font-size: 13px;
        font-weight: 700;
        background-color: ${theme.bgGray};
        height: 65px;
        padding: 0 20px;
        text-transform: uppercase;
      }
      th:nth-child(6) {
        text-align: center;
      }
    }
    .minWidth {
      min-width: 170px;
    }
    td {
      font-size: 16px;
      font-weight: 500;
      height: 65px;
      padding: 0 20px;
      color: ${theme.darkGray};
    }
  }
`;

export const Td = styled.td`
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 110px;
    height: 30px;
    max-width: 110px;
    border-radius: 3px;
    padding: 3px 0;
    margin: 0 auto;
    ${(props: propTypes) =>
      props.status === "Vendido" &&
      `
      background-color: ${theme.soldBg};
      color: ${theme.primaryRed};
      `}
    ${(props: propTypes) =>
      props.status === "Disponível" &&
      `
      background-color: ${theme.availableBg};
      color: ${theme.confirmation};
      `}
      ${(props: propTypes) =>
      props.status === "Reservado" &&
      `
      background-color: ${theme.reservedBg};
      color: ${theme.avaliable};
      `}
  }
`;
