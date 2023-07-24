import React from 'react'
import { styled } from 'styled-components';



export default function ObjectDisplayWithMapFunction({array, updateText}) {

    const Wrapper = styled.div`
    background-color: yellow;

    &:hover {

}

@media screen and (max-width: 960px){
   
}
`;

const Ol = styled.ol`
margin: 100px;
font-family: Avenir !important;
`;

const Trenner = styled.div`
height: 100px;
font-family: Avenir !important;
background-color: white;
`;

const DeleteButton = styled.button`

`;

const UpdateButton = styled.button`

`;


console.log("Das ist der Array "+ array)
console.log("Das ist der Autor von Object 2 "+array[1].author)

  return (
    <>
    <Wrapper>
        {array.map((item,index) =>(
            <div key={index}>
            <Ol>
                <li>Autor:<br/>{item.author}</li><br/><br/>
                <li>Überschrift:<br/>{item.headline}</li><br/><br/>
                <li>Blogeintrag:<br/>{item.text}</li><br/><br/>
                <li>Bewertung: <br/>{item.bewertung}</li><br/><br/>
            </Ol>
            <Ol>
              <li><textarea type="text"  placeholder="Text überschreiben..."/></li>
              <UpdateButton onClick={() => updateText(item._id)}>Update des Eintrags</UpdateButton>
            </Ol>
            <DeleteButton>Eintrag löschen</DeleteButton>
            <Trenner/>
            </div>
        ))}
        
    </Wrapper>
    </>
  )
}