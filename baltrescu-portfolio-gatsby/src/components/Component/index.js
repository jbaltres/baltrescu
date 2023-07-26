import React from 'react'
import BackgroundFunction from './BackgroundColor'
import InteractiveComponent from './InteractiveKomponent'
import { styled } from 'styled-components';
import ObjectDisplayFunction from './ObjectDisplay';
import ObjectDisplayWithMapFunction from './ObjectDisplayWithMap';
import bild1 from "../../images/bild1.jpg";
import DownloadKomponent from '../Download/Download';
import FloatComponent from './FloatComponent';
import Accordeon from './Accordeon1';
import ScrollingText from './ScrollingText';
import RadioButton from './RadioInput';
import Checkbox from './Checkbox';

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

  // 8 Aufgabe: Die Radio Buttons bekommen Ihre Werte hier im State

const [paymentMethod, setPaymentMethod] = React.useState("Feld1");

console.log("RadioButtonWert"+paymentMethod)

const radioChangeHandler = (e) => {
  setPaymentMethod(e.target.value);
};

// 8 Aufgabe: Die Radio Buttons bekommen Ihre Werte hier im State
const [checkbox, setCheckbox] = React.useState("Feld1Check");
const [checkbox2, setCheckbox2] = React.useState("");

console.log("RadioButtonWert"+checkbox+checkbox2)

const checkboxChangeHandler = (e) => {
  setCheckbox(e.target.value);
};

const checkboxChangeHandler2 = (e) => {
  setCheckbox2(e.target.value);
};

const [isChecked, setIsChecked] = React.useState(false)

const checkHandler = () => {
  setIsChecked(!isChecked)
}

const [isChecked2, setIsChecked2] = React.useState(false)

const checkHandler2 = () => {
  setIsChecked2(!isChecked2)
}

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
    <Wrapper2>
      <Text>5. Eine Komponente mit Hilfe Dateien heruntergeladen werden können</Text>
    <br/>
      <DownloadKomponent file={bild1}/>
    <br></br>
    </Wrapper2>
    <Wrapper2>
      <Text> 6. Float Komponent in welcher ein Text um ein Bild herumlaufen kann</Text>
      <br />
        <FloatComponent truetext="none" trueimg="flex" src={bild1}/>
        <br /><br />
    </Wrapper2>
    <Wrapper2>
      <Text> 6. Float Komponent in welcher ein Text um ein Bild herumlaufen kann</Text>
      <br />
        <Accordeon />
        <br /><br />
    </Wrapper2>
    <Wrapper2>
      <Text> 7. ScrollingText wie beim Aktienticker</Text>
      <br />
        <ScrollingText />
        <br /><br />
    </Wrapper2>
    <Wrapper2>
      <Text> 8. RadioButtons die im Parent Ihre Werte bekommen</Text>
      <br />
      <div className="radio-btn-container">
        <RadioButton
          changed={radioChangeHandler}
          id="1"
          isSelected={paymentMethod === "Feld1"}
          label="Feld1"
          value="Feld1"
        />

        <RadioButton
          changed={radioChangeHandler}
          id="2"
          isSelected={paymentMethod === "Feld2"}
          label="Feld2Label"
          value="Feld2"
        />
      </div>
      {paymentMethod === "Feld2" && (
        <input
          style={{ marginTop: "10px" }}
          type="text"
          placeholder="Enter transaction id"
        />
      )}
      <h2 style={{ marginTop: "25px" }}>
        The selected radio button value is = {paymentMethod}
      </h2>
        <br /><br />
    </Wrapper2>
    <Wrapper2>
      <Text> 9. Checkboxen</Text>
      <br />
      <div>
      <input
        type="checkbox"
        id="checkbox1"
        checked={isChecked}
        onChange={checkHandler}
      />
      <label htmlFor="checkbox">I agree to Terms of Service </label>
      <p>The checkbox is {isChecked ? "checked" : "unchecked"}</p>
    </div>
    <div>
      <input
        type="checkbox"
        id="checkbox2"
        checked={isChecked2}
        onChange={checkHandler2}
      />
      <label htmlFor="checkbox2">I agree to Terms of Service 2</label>
      <p>The checkbox is {isChecked2 ? "checked" : "unchecked"}</p>
    </div>
      <div>
        <Checkbox
          changed={checkboxChangeHandler}
          id="c1"
          
          label="Feld1LabelCheck"
          value="Feld1Check"
        />

        <Checkbox
          changed={checkboxChangeHandler2}
          id="c2"
          
          label="Feld2LabelCheck"
          value="Feld2Check"
        />
      </div>
      {paymentMethod === "Feld2" && (
        <input
          style={{ marginTop: "10px" }}
          type="text"
          placeholder="Enter transaction id"
        />
      )}
      <h2 style={{ marginTop: "25px" }}>
        Der Checkbox value is = {checkbox+checkbox2}
      </h2>
        <br /><br />
    </Wrapper2>
    </>
  )
}

export default Components