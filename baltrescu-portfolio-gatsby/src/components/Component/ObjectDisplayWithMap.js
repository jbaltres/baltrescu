import React from 'react'
import { styled } from 'styled-components';

const Textbereich = styled.textarea`

`;

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
export default function ObjectDisplayWithMapFunction({array}) {

const [newText, setNewText] = React.useState("");
const [neu, setNeu] = React.useState(array);

console.log("Das ist der Array "+ newText)
console.log("Das ist der Autor von Object 2 "+array[1].author)

let arr2 = ["4","5","6"]

// Ich bräuchte entweder für jedes Inputfeld einen State, oder einen Array bzw. ein Object, welches geändert wird wenn die Funktion ausgeführt wird.
// Ich könnte dafür eine Funktion schreiben, bei welcher man die ID als Key eingeben muss, damit die Daten in die Inputfelder geladen werden und nur noch diese überschrieben werden.

  return (
    <>
    <Wrapper>
        {array.map((item,index) =>(
            <div key={index}>
            <Ol>
                <li>ID: {item._id}</li>
                <li>Autor:<br/>{item.author}</li><br/><br/>
                <li>Überschrift:<br/>{item.headline}</li><br/><br/>
                <li>Blogeintrag:<br/>{item.text}</li><br/><br/>
                <li>Bewertung: <br/>{item.bewertung}</li><br/><br/>
                <li>
                  {arr2.map((item2,index2) => (
                    
                      <div key={index2}>
                        <Ol>
                          <li> {item2}
                          </li>
                          <li>
                            {index2}
                          </li>
                        </Ol>    
                      
                      </div>
                      
                  )
                  )}
                </li>
            </Ol>
            <Ol>
              <li><Textbereich type="text"  value={newText} onChange={event => setNewText(event.target.value)} placeholder="Text überschreiben..."/></li>
              <UpdateButton>Update des Eintrags</UpdateButton>
              <li><input value={neu} onChange={event => setNeu(event.target.value)}/></li>
            </Ol>
            <DeleteButton>Eintrag löschen</DeleteButton>
            <Trenner/>
            </div>
        ))}
        
    </Wrapper>
    </>
  )
}