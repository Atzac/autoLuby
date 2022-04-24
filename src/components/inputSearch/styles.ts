import styled from "styled-components";
import { theme } from "@globalStyle/index";

type propTypes = {
  size?: string;
};

export const DivInput = styled.form`
  width: ${(props: propTypes) => (props.size ? props.size : 420)}px;
  position: relative;
  input {
    width: 100%;
    height: 37px;
    padding-left: 15px;
    padding-right: 45px;
    border-radius: 3px;
    border: 1px solid ${theme.inputStroke};
    background-color: ${theme.inputBackground};
    font-size: 13px;
    box-shadow: 0px 0px 6px rgba(162, 162, 162, 0.25);
    box-sizing: border-box;
    &::-webkit-input-placeholder {
      font-size: 0.8rem;
      color: ${theme.lightGray};
    }
    &:focus {
      outline: none;
    }
  }
  img {
    width: 20px;
    height: auto;
    position: absolute;
    top: 8px;
    right: 15px;
    cursor: pointer;
  }
`;
