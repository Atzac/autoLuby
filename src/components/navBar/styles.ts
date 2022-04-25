import styled from "styled-components";

type propsType = {
  urlImage?: any;
};

export const Bar = styled.div`
  width: 100%;
  max-width: 100%;
  height: 85px;
  background-color: white;
  box-shadow: 0px 2px 25px rgba(169, 169, 169, 0.2);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 75px;
  @media screen and (max-width: 950px) {
    display: flex;
    flex-direction: column;
    height: 180px;
    justify-content: space-around;
  }
`;

export const Logo = styled.div`
    background: url(${(props: propsType) => props.urlImage});
    display: flex;
    background-repeat: no-repeat;
    width: 235px;
    height: 68px;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;
