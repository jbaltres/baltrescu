import React from 'react'
import BackgroundFunction from './BackgroundColor'
import InteractiveComponent from './InteractiveKomponent'
import { styled } from 'styled-components';
import ObjectDisplayFunction from './ObjectDisplay';
import ObjectDisplayWithMapFunction from './ObjectDisplayWithMap';


// 1 Eine Komponente erstellen, bei welcher man als Props die Farbe definieren kann
// 2 Eine Komponente erstellen, bei welcher man als Props die Farbe mit Use State und ternary definiert.
// 3 Hier ein Objekt erstellen und es an die ObjectDisplay Komponente übergeben, welche dann hier erscheinen sollen
// 4 Hier ein Array erstellen und es in ObjectDisplayWithMap Komponente übergeben, welche dann hier erscheinen soll.
/* Zu 3 & 4
Sowohl das Objekt und der Array können auf der höchsten Ebene erstellt werden und müssen nur noch an die Komponente übergeben werden welche dieser verarbeitet.
In meinem Beispiel sind hier Object und Array erstellt worden und werden durch Props an die Functione ObjectDisplay und ObjectDisplayWithMap weitergegeben.
In der Komponente selber kann dann nachvollzogen werden wie die Werte aus dem Object oder dem Array gezogen werden. Im Object Array müssen nicht alle Werte angezeigt werden.
*/

// Object für Aufgabe 3
const myObj = {
    name: 'Ross',
    headline: "Erster Blog beitrag",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    bewertung: "⭐️⭐️⭐️⭐️⭐️",
    meta: {
      minutesWriting: 20,
      minutesProcrastinating: 0,
    }
  };

  // Array für Aufgabe 4
const obj1 = {
    author: 'Jürgen',
    headline: "Erster Blog beitrag",
    text: "Das Philosophische Chamaeleon wird die Welt verändern",
    bewertung: "⭐️⭐️⭐️⭐️⭐️",
    };

const obj2 = {
    author: 'Baltrescu',
    headline: "Reisetagebuch",
    text: "Deutschland, Schweden, Usbekistan. Mit mir erfahrt Ihr Alles",
    bewertung: "⭐️⭐️⭐️⭐️",
        };

const obj3 = {
    author: 'FDt',
    headline: "Tiere sind die besseren Menschen",
    text: "Hunde sind toll, Katzen sind aber auch ok",
    bewertung: "⭐️",
                };              

  const myArr = [obj1, obj2, obj3]



const Ol = styled.ol`
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
    <Ol>
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
    </Ol>

    <Wrapper>
        <Text>1. Square Komponente welche über Props im Code angegeben werden kann !</Text>
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
        <Text>2. Square Komponente welche interaktiv über die Inputfelder angegeben werden kann.</Text>
    <br/>
    <InteractiveComponent />
    </Wrapper2>
    <Wrapper2>
        <Text>3. Inhalte aus einem Objekt erscheinen lassen</Text>
    <br/>
    <ObjectDisplayFunction object={myObj}/>
    <br></br>
    </Wrapper2>
    <Wrapper2>
        <Text>4. Inhalte aus einem Array, gefüllt mit Objekten anzeigen lassen</Text>
    <br/>
    <ObjectDisplayWithMapFunction array={myArr}/>
    <br></br>
    </Wrapper2>
    </>
  )
}

export default Components