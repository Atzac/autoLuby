import styled from "styled-components";
import { theme } from "@globalStyle/index";

export const DivInput = styled.div`
  margin-bottom: 10px;
  input {
    width: 100%;
    height: 35px;
    padding-left: 15px;
    border-radius: 3px;
    border: 1px solid ${theme.inputStroke};
    background-color: ${theme.inputBackground};
    font-size: 13px;
    margin-top: 5px;

    &::-webkit-input-placeholder {
      font-size: 0.8rem;
      color: ${theme.lightGray};
    }
    &:focus {
      outline: none;
    }
  }
  label {
    width: 100%;
    margin-top: 50px;
    font-size: 14px;
    font-weight: 600;
    color: ${theme.gray};
  }
`;
