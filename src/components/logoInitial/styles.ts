import { ReactSVG } from "react";
import styled from "styled-components";

type propTypes = {
  img:any;
}

export const Logo = styled.div`
    background-image: url(${(props: propTypes) => props.img});
    background-repeat: no-repeat;
    width: 235px;
    height: 100px;
    position: absolute;
    top: 8%;
    left: 5%;
  
`;
