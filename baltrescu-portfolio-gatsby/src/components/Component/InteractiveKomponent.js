import React, { useState } from 'react'
import { styled } from 'styled-components';

const Input = styled.input`
height: 30px;
width: 300px;
background-color: rgba(100,200,200,1); 
color: wheat;

`;

const InteractiveComponent = () => {

    const [interactiveBackground,setInteractiveBackground]=  useState("")
    const [interactiveHeight,setInteractiveHeight]=  useState("")
    const [interactiveWidth,setInteractiveWidth]=  useState("")

    console.log(interactiveBackground)
    console.log(interactiveHeight)
    console.log(interactiveWidth)

    const Background = styled.div`
    background-color: ${interactiveBackground}; 
    height:${interactiveHeight+"px"};
    width:${interactiveWidth+"px"};
    
    &:hover {

}

@media screen and (max-width: 960px){
   
}
`;

  return (
    <>
    <Input key="1" value={interactiveBackground} onChange={e => setInteractiveBackground(e.target.value)} type={"text"} placeholder="Farbe in hex z.B. #d3f31a"/> <br/>
    <Input key="2" value={interactiveHeight} onChange={e => setInteractiveHeight(e.target.value)} type={"number"} placeholder="Höhe (in Pixel z.B. 200)"/><br/>
    <Input key="3" value={interactiveWidth} onChange={e => setInteractiveWidth(e.target.value)} type={"number"} placeholder="Breite (in Pixel z.B. 500)"/>
    <br/>
    <br/>
    <Background />
    <br/>
    <br/>
    </>
  )
}

export default InteractiveComponent
