import styled from "styled-components";
import { theme } from "@globalStyle/index";

export const Card = styled.form`
  position: relative;
  width: 100%;
  max-height: 175px;
  display: flex;
  margin: 18px 0;
  border-radius: 3px;
  box-shadow: 0px 0px 6px rgba(162, 162, 162, 0.25);
  border: 1px solid #e6e6e6;
  background-color: white;
  justify-content: space-between;
  transition: all .5s ease-in-out;
  &:hover {
    transform: scale(1.02);
  }

  cursor: pointer;
  > div {
    width: 100%;
    position: relative;
    padding: 10px 18px;
    > h1 {
      font-size: 20px;
      font-weight: 600;
      color: ${theme.darkGray};
    }
    > p {
      font-size: 14px;
      font-weight: 500;
      color: ${theme.gray};
    }
    div {
      width: 85px;
      display: flex;
      position: absolute;
      bottom: 10px;
      right: 25px;
      > p {
        font-size: 13px;
        font-weight: 700;
        color: ${theme.primaryRed};
      }
    }
  }
  > img {
    width: 218px;
    height: 173px;
  }
`;
