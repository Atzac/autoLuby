import styled from "styled-components";
import { theme } from "@globalStyle/theme";

type propTypes = {
  buttonStyle: String;
};

export const ButtonStyles = styled.button`
  width: 100%;
  border-radius: 3px;
  padding: 10px;
  font-weight: bold;
  cursor: pointer !important;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    font-size: 1rem;
  }

  ${(props: propTypes) =>
    props.buttonStyle === "primary" &&
    `
    background-color: ${theme.primaryRed};
    height: 37px;
    color: var(--white);
    border: none;
    color: white;
    >svg{
      margin-right:10px;
      font-size:1.2rem;
    }
    &:hover {
      background-color: ${theme.lightRed};
    }
    &:active {
      background-color: ${theme.lightRed};
    }
  `}

  ${(props: propTypes) =>
    props.buttonStyle === "exit" &&
    `
    background-color: ${theme.primaryRed};
    display: flex;
    justify-content: space-around;
   
    width: 80px;
    min-width: 80px;
    height: 37px;
    color: var(--white);
    margin-right: 15px;
    border: none;
    color: white;
    >svg{
      font-size:1.2rem;
    }
    &:hover {
      background-color: ${theme.lightRed};
    }
    &:active {
      background-color: ${theme.lightRed};
    }
  `}
`;
