import React from "react";
import styled from "styled-components"
import Axios from "axios"
import ObjectDisplayWithButtonsFunction from "../Component/ObjectDisplayWithButtons";
import ObjectDisplayWithMapFunction from "../Component/ObjectDisplayWithMap";

const PageWrapper = styled.div`
display: flex;
flex-direction: column;
color: black;
align-items: center;
padding: 30px 0px 0px 30px;
@media (max-width: 768px) {
    width:90%;
  }
`;

const Textbereich = styled.textarea`
font-size: 16px;
  border: none;
  margin: 10px 20px;
  border-radius: 26px 32px 2px 2px;
  height: 60px;
  text-align: center;
  width: 73%;
  border: black 1px dashed;

  :hover::placeholder {
    color: #255C6A;
;
  }

  ::placeholder {
    color: #255C6A;;
    text-align: center;
    font-size: ${props => (props.size ? "20px" : "16px")};
    font-style: italic;
    opacity:0.5;
  }

  :focus {
    text-align: center;
    border-bottom: #255C6A 3px solid;
    outline:0;
  }

  :hover {
    border-bottom: #255C6A 3px solid;
    color: #255C6A;
  }
`;

const Button = styled.div`
  font-size: 20px;
  border: none;
  border-radius: 10px;
  padding: 10px;
  text-align: center;
  align-self: center;
  margin: 20px;
  background: #d3f31a;


  &:hover {
  background-color: #f34d23;
  cursor: pointer;
}
`;

const Inputfield = styled.input`
font-size: 16px;
border: none;
margin: 10px 20px;
border-radius: 10px;
border: black 1px dashed;
height: 30px;
text-align: center;
width: 73%;

:hover::placeholder {
  color: #255C6A;
;
}

::placeholder {
  color: #255C6A;;
  text-align: center;
  font-size: ${props => (props.size ? "20px" : "16px")};
  font-style: italic;
  opacity:0.5;
}

:focus {
  text-align: center;
  border-bottom: #255C6A 3px solid;
  outline:0;
}

:hover {
  border-bottom: #255C6A 3px solid;
  color: #255C6A;
}
`;

const InputText = styled.h2`
  margin-top: 10px;
`;


export default function BlogInput() {

    const [author, setAuthor] = React.useState("");
    const [headline, setHeadline] = React.useState("");
    const [text, setText] = React.useState("");
    const [newtext, setnewText] = React.useState("");
    const [newauthor, setNewauthor] = React.useState("");
    const [newheadline, setNewheadline] = React.useState("");

    const addToList = () => {
        Axios.post("http://localhost:3033/insert",{
          author: author,
          headline: headline,
          text: text,
        })
        .then(console.log("Inserted"))
        .then(setAuthor(""))
        .then(setHeadline(""))
        .then(setText(""))
        .then(alert("Der Beitrag wurde erfolgreich hochgeladen"))
      }
    
    let arra = {
        author: author,
        headline: headline,
        text: text,
    }

    console.log(arra)

//---

        const [eintraege, setEintraege] = React.useState([]); 
        const [isLoading, setLoading] = React.useState(true);
    
        React.useEffect(()=>{
            Axios.get("http://localhost:3033/showEntries").then((response)=>{
                setEintraege(response.data)
                console.log(response.data)
                setLoading(false);
            })
            
            
    
        },[])

        const updateEntry = (id) =>{
            Axios.put("http://localhost:3033/updateEntry",{
                id: id,
                newtext: newtext,
            })
        }
    
    const [count, setCount] = React.useState(1);
    
    let blogBeitraege = [];
        for(var i=1; i<=eintraege.length; i++) {
           blogBeitraege.push(i.toString());
        }
        console.log("Was" + blogBeitraege)
    
    
    if (isLoading) {
        return (
            <>Loading...</>
          );
    } else {
    return (  
            <>
        <PageWrapper>
        <InputText>Autor</InputText>
        <Inputfield placeholder="Autor" value={author} onChange={event => setAuthor(event.target.value)}></Inputfield>
        <InputText>Überschrift</InputText>
        <Inputfield placeholder="Überschrift" value={headline} onChange={event => setHeadline(event.target.value)}></Inputfield>
        <InputText>Blogeintrag</InputText>
        <Textbereich placeholder="Blogeintrag" value={text} onChange={event => setText(event.target.value)}></Textbereich>
    
        <Button onClick={addToList}>Hochladen</Button>
        <br />
        <br />
        <h1> So jetzt sollen die Daten noch gelesen werden</h1>
        <br />
        <br />
        {blogBeitraege[count]}
                
        <ObjectDisplayWithButtonsFunction array={eintraege[count]}></ObjectDisplayWithButtonsFunction>
      
              
            <button onClick={() => count === 0 ? setCount(blogBeitraege.length - 1) : setCount(count - 1)}>Letztes Rezept</button> <br/>
            <button onClick={() => count === blogBeitraege.length - 1 ? setCount(0) : setCount(count + 1)}>Nächstes Rezept</button>
            <br/>
            <b>Du bist auf Blogeintrag {count}</b>
        
        <br/>
        <br/>
        <h1> Und einmal alle gemapt</h1>
        <br/>
        <ObjectDisplayWithMapFunction array={eintraege}></ObjectDisplayWithMapFunction>
        <br/>
        <br/>
        </PageWrapper>
        </> 
        );
    }
}
