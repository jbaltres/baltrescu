import React from 'react'
import BackgroundFunction from './BackgroundColor'
import InteractiveComponent from './InteractiveKomponent'
import { styled } from 'styled-components';


// 1 Eine Komponente erstellen, bei welcher man als Props die Farbe definieren kann
// 2 Eine Komponente erstellen, bei welcher man als Props die Farbe mit Use State und ternary definiert.

const OL = styled.ol`
margin: 100px;
font-family: Avenir !important;
`;

const Wrapper = styled.div`
display: flex;
justify-content: center;
width: 100%;
`;

const Wrapper2 = styled.div`
display: flex;
align-items: center;
flex-direction: column;
width: 100%;
`;

const Text = styled.h2`
font-size: 26px;
`;

function Components({bgcolortop}) {
  return (
    <>
    <OL>
        <li>States</li>
        <li>ChangeEvents und Funktionen</li>
        <li>Forms/Inputfields</li>
        <li>RadioButtons</li>
        <li>Checkboxen</li>
        <li>Objekts</li>
        <li>Links to an anker at bottom of Page</li>
        <li>Array-Methods</li>
        <li>Interaktive Inputs that Change the Background e.g.</li>
        <li>Dropdowns</li>
        <li>Filter that are Active wenn klicked and Change Background</li>
        <li>Searchbar</li>
        <li>Buttons with onClick Functio</li>
        <li>Buttons that sends sth. to APi</li>
        <li>Links Auswärts und Onpage</li>
    </OL>

    <Wrapper>
        <Text>Square Komponente welche über Props im Code angegeben werden kann !</Text>
    </Wrapper>
    <br/>
    <Wrapper>
    <BackgroundFunction
    bgcolor={bgcolortop}
    customHeight={"150px"}
    customWidth={"200px"}
    />
    </Wrapper>
    <br/>
    <br/>
    <br/>
    <Wrapper2>
        <Text>Square Komponente welche interaktiv über die Inputfelder angegeben werden kann.</Text>
    <br/>
    <InteractiveComponent />
    </Wrapper2>
    </>
  )
}

export default Components