import React from 'react'
import { styled } from 'styled-components';



function ObjectDisplayFunction({object}) {

    const Wrapper = styled.div`
    background-color: blue;

    &:hover {

}

@media screen and (max-width: 960px){
   
}
`;

const Ol = styled.ol`
margin: 100px;
font-family: Avenir !important;
`;


  return (
    <>
    <Wrapper>
        <Ol>
            <li>Autorenname:<br/>{object.name}</li><br/><br/>
            <li>Überschrift:<br/>{object.headline}</li><br/><br/>
            <li>Blogeintrag:<br/>{object.text}</li><br/><br/>
            <li>Bewertung: <br/>{object.bewertung}</li><br/><br/>
            <li>Zeit zum Verfassen: <br/>{object.meta.minutesWriting}</li><br/><br/>
            <li>Prokrastinationszeit: <br/>{object.meta.minutesProcrastinating}</li><br/><br/>
        </Ol>
    </Wrapper>
    </>
  )
}

export default ObjectDisplayFunction
