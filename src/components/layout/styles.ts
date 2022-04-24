import styled from "styled-components";
import { theme } from "@globalStyle/theme";

export const ContainerStyle = styled.div`
  width: 100%;
  height: calc(100vh - 85px);
  background-color: ${theme.bgGray};
  justify-content: center;
  padding: 50px 90px;
  @media screen and (max-width: 900px) {
    padding: 50px 30px;
  }
  h1 {
    font-size: 30px;
    color: ${theme.darkGray};
    font-weight: 600;
    margin-bottom: 35px;
  }
`;
