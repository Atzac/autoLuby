import styled from "styled-components";
import { theme } from "@globalStyle/theme";

type propTypes = {
  status?: string;
}

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
      ${(props: propTypes) => props.status === "Vendido" && `
      background-color: ${theme.soldBg};
      color: ${theme.primaryRed};
      `}
      ${(props: propTypes) => props.status === "Disponível" && `
      background-color: ${theme.availableBg};
      color: ${theme.confirmation};
      `}
      ${(props: propTypes) => props.status === "Reservado" && `
      background-color: ${theme.reservedBg};
      color: ${theme.avaliable};
      `}
    }
`;
