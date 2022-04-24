import styled from "styled-components";
import { theme } from "@globalStyle/theme";

type propsType = {
  urlImage?: any;
};

export const CarImageBG = styled.div`
  position: absolute;
  right: 0;
  width: 50%;
  height: 100%;
  background: url(${(props: propsType) => props.urlImage});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Divider = styled.div`
  width: 50%;
  height: 500px;
  float: left;
`;

export const LoginContainer = styled.div`
  padding: 20px;
  margin: 17% auto;
  width: 430px;
  max-height: 95%;
  > p {
    margin-top: 30px;
    font-size: 14px;
    font-weight: 500;
    color: ${theme.gray};
    margin-bottom: 60px;
    > span {
      color: ${theme.primaryRed};
      &:hover {
        color: ${theme.lightRed};
        cursor: pointer;
      }
    }
  }
  > div {
    > h1 {
      width: 100%;
      font-size: 2.06em;
      color: ${theme.darkGray};
    }
    > p {
      font-size: 12px;
      font-weight: 600;
      color: ${theme.gray};
      margin-bottom: 60px;
    }
  }
  > section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 30px 0;
    > p {
      margin-left: 20px;
      font-size: 14px;
      font-weight: 500;
      color: ${theme.primaryRed};
      cursor: pointer;

      &:hover {
        color: ${theme.lightRed};
      }
    }
  }
`;
