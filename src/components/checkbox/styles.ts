import styled from "styled-components";
import { theme } from "@globalStyle/index";

export const CheckboxInput = styled.div`
  display: flex;
  align-items: center;
  input[type="checkbox"] {
    all: unset;
    width: 20px;
    height: 20px;
    border-radius: 3px;
    border: 2px solid ${theme.primaryRed};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:checked {
      background-color: ${theme.primaryRed};

      &:hover {
        background-color: ${theme.lightRed};
        border: 2px solid ${theme.lightRed};
      }
    }
    &:after {
      font-family: "Font Awesome 5 Free";
      font-weight: 900;
      content: "\f00c";
      font-size: 15px;
      color: white;
    }
  }
  label {
    font-size: 14px;
    font-weight: 500;
    color: ${theme.primaryRed};
    margin-left: 10px;
  }
`;
