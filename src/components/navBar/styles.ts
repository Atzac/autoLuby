import styled from "styled-components";

export const Bar = styled.div`
  width: 100%;
  height: 85px;
  background-color: white;
  box-shadow: 0px 2px 25px rgba(169, 169, 169, 0.2);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 75px;
  @media screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    height: 180px;
    justify-content: space-around;
  }
  > div {
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    @media screen and (max-width: 900px) {
      margin-right: 40px;
    }
    > img {
      width: 170px;
      position: relative;
    }
  }
`;
