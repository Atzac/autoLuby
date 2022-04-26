import styled from "styled-components";
import { theme } from "@globalStyle/index";

type propTypes = {
  error?: boolean;
  valid?: boolean;
  urlImage?: any;
};

export const DivInput = styled.div`
  margin-bottom: 10px;
  position: relative;
  input {
    width: 100%;
    height: 35px;
    padding-left: 15px;
    border-radius: 3px;
    border: ${(props: propTypes) =>
      props.error ? "2px solid #FA982F" : `2px solid ${theme.inputStroke}
    ` };
    border: ${(props: propTypes) =>
      props.valid && `2px solid ${theme.confirmation}
    ` };
    background-color: ${theme.inputBackground};
    font-size: 13px;
    margin-top: 5px;

    &::-webkit-input-placeholder {
      font-size: 0.8rem;
      color: ${theme.lightGray};
      ${(props: propTypes) =>
        props.error &&
        `
         color: #FA982F;
         font-weight: 600;
      `};
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

export const ResponseIcon = styled.div`
  position: absolute; 
  background: url(${(props: propTypes) => props.urlImage});
  background-repeat: no-repeat;
  width: 30px;
  height: 30px;
  top: 40px;
  right: 0;
`;