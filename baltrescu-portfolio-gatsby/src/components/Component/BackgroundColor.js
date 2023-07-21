import React from 'react'
import { styled } from 'styled-components';



function BackgroundFunction({bgcolor, customHeight, customWidth}) {

    const Background = styled.div`
    background-color: ${bgcolor}; 
    height:${customHeight};
    width:${customWidth};

    &:hover {

}

@media screen and (max-width: 960px){
   
}
`;
  return (
    <>
    <Background>
        
    </Background>
    </>
  )
}

export default BackgroundFunction
