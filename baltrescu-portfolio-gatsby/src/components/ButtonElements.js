import React from 'react'
import styled from "styled-components"

export const Button = styled.button`
border-radius: 10px 10px 10px 10px;
background: ${({ primary}) => (primary ? "rgba(4,103,251,.7)" :"rgba(0,0,0,.6)")};
white-space: no-wrap;
padding: ${({ big }) => (big ? "16px 64px" : "10px 20px")};
color: #fff;
font-size: ${({ fontBig }) => ( fontBig ? "20px" : "16px")};
outline:none;
border: none;
cursor: pointer;
font-family: "Ubuntu", sans-serif;

&:hover {
    transition: all .6s ease-out;
    background: ${({ primary }) => (primary ? "rgba(4,103,251,1)":"rgba(0,0,0,1)")};
}

@media screen and (max-width: 960px){
    width: 100%;
}
`;

function ButtonElements() {
  return (
    <div>ButtonElements</div>
  )
}

export default ButtonElements