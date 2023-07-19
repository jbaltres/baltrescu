import React from 'react'
import { Background, Headline, PageWrapper, TextBox, TextHeader, TextHeader2, ImgBox, Image2, ContentWrapper2, TextBox2, ImgBox2, Text3, Text4, PageWrapper3,PageWrapper4, Wrap,Wrap2,Flex,Form, Form2,Form3,Z, Produkt, TextBox3, Wrapper3, TextBoxKontakt } from "./babyschlummerfeinElements"
import ImageBabyMother from "../../images/MomwithBaby.jpg";
import Produkt1 from "../../images/Produkt1.jpg";
import Produkt2 from "../../images/Produkt2.jpg";
import Produkt3 from "../../images/Produkt3.jpg";
import Philo from "../../images/Philosophy.jpg";
import Navbar from '../Navbar';
import Footer from '../Footer/Footer';

function babyschlummerfein() {

    let dob = new Date("02/02/1989");  
    //calculate month difference from current date in time  
    let month_diff = Date.now() - dob.getTime();  
      
    //convert the calculated difference in date format  
    let age_dt = new Date(month_diff);   
      
    //extract year from date      
    let year = age_dt.getUTCFullYear();  
      
    //now calculate the age of the user  
    let age = Math.abs(year - 1970);  

    return(
        <>
        <Navbar />
        <Background>
            <Headline>BabySchlummerfein</Headline>
            <h2>Ich bin Kerstin und möchte dass Du und Dein Kind durch den richtigen Schlaf erholsamere Wachphasen habt</h2>
        </Background>
        <PageWrapper>
        <TextBox>
          <TextHeader> Über mich </TextHeader>
          <ContentWrapper2>
          <TextBox2>
              <Text3>Hi ich bin Kerstin, {age} Jahre alt und Mutter zweier Wundervoller Töchter.</Text3>
              <Text3>Natürlich halten mich die beiden auf Trab, besonders wenn Sie nicht gut geschlafen haben.</Text3>
              <Text3>Daher habe ich mich dem Thema Babyschlaf gewidmet, bei welchem die Kinder nicht nur besser schlafen, sondern auch die Wachphasen viel entspannter sind ❤️</Text3>
          </TextBox2>
          </ContentWrapper2>     
        </TextBox>
        <ImgBox>
          <Image2 src={ImageBabyMother} alt="Baby&Mutter"/> 
           </ImgBox>     
      </PageWrapper>
      <PageWrapper>
        <ImgBox>
          <Image2 src={Philo} alt="Baby&Mutter"/> 
        </ImgBox> 
        <TextBox>
          <TextHeader> Meine Vision / Philosophie </TextHeader>
          <ContentWrapper2>
          <TextBox2>
              <Text3>Philosophie hin oder her. Kauf meine Beratung. Jetzt!</Text3>
          </TextBox2>
          </ContentWrapper2>     
        </TextBox>    
      </PageWrapper>
      <PageWrapper3>
        <br/>
        <br/>
        <h1>Meine Leistungen</h1>
        <br/>
        <br/>
            <Flex>
                <Produkt>
                <ImgBox2>
                    <Image2 src={Produkt3} alt="Baby&Mutter"/> 
                </ImgBox2> 
                <Form>
                    Ersttermin + 1x Folgetermin<br/>
                    <Z>219€</Z>
                </Form>
                </Produkt>
                <Produkt>
                <ImgBox2>
                    <Image2 src={Produkt1} alt="Baby&Mutter"/> 
                </ImgBox2> 
                <Form2>
                    Ersttermin + 3x Folgetermine<br/>
                    <Z>349€</Z>
                </Form2>
                </Produkt>
                <Produkt>
                <ImgBox2>
                    <Image2 src={Produkt2} alt="Baby&Mutter"/> 
                </ImgBox2> 
                <Form3>
                    Ersttermin + 5x Folgetermine<br/>
                    <Z>579€</Z>
                </Form3>
                </Produkt>
            </Flex>
        </PageWrapper3>
        <PageWrapper4>
            <Wrap>
                *Zusätzlicher Folgetermin: 119 € 
            </Wrap>  
            
        </PageWrapper4>
        <PageWrapper3>
            <Wrap2>
                Du befindest dich in einer speziellen Lebenssituation und bevorzugst daher eine besonders enge oder auch längere Zusamenarbeit? <br/>
                Kein Problem! - Wir gehen gerne auf deine individuellen Bedürfnisse ein und erörtern gemeinsam mit dir den optimalen Rahmen für unsere Zusammenarbeit! <br/>
                Vereinbare jetzt ein kostenfreies Erstgespräch & lass uns die beste Lösung für dich finden.<br/>
            </Wrap2>
        </PageWrapper3>
        <TextBoxKontakt>
          <TextHeader2> Kontakt</TextHeader2>
          <br/>
          <Wrapper3>
          <TextBox3>
            <Text4>Du möchtest Kontakt aufnehmen? Ich warte auf Deinen Anruf</Text4>
            <Text4>Kerstin Baltres</Text4>
            <Text4>Am Stockweg 10</Text4>
            <Text4>51645 Gummersbach</Text4>
            <Text4>Fake.Email@web.de</Text4>
            <Text4>0123/456789</Text4>
          </TextBox3>
          </Wrapper3>     
        </TextBoxKontakt>
        <br/>
        <br/>
        <Footer />
      </>
    )
}

export default babyschlummerfein
