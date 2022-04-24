import styled from "styled-components";

export const PaginationStyles = styled.div`
  width: 200px;
  height: 35px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  div {
    width: 100%;
    background-color: aqua;
    a {
      color: black;
      float: left;
      padding: 12px 16px;
      text-decoration: none;

      &:active {
        background-color: #4caf50;
        color: white;
      }
    }
  }

  div a:hover:not(.active) {
    background-color: #ddd;
  }
`;
