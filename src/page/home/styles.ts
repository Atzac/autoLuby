import styled from "styled-components";
import { theme } from "@globalStyle/theme";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  position: relative;
  width: 60%;
  max-width: 720px;
  min-width: 480px;
  height: 80%;
  position: relative;
  padding: 50px 30px;
  > h1 {
    font-size: 30px;
    font-weight: 600;
    color: ${theme.darkGray};
  }
  > p {
    font-size: 16px;
    font-weight: 500;
    color: ${theme.gray};
  }
`;
