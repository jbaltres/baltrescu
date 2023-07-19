import { styled } from 'styled-components';
import Image from "../../images/Babyschlaf.jpg";

export const Background = styled.div`
    background: url(${Image}) center center/cover no-repeat;
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, .2);
    object-fit: contain;
    margin-top: -80px;
    color: white;
`;

export const Headline = styled.h1`
    color: white;
`;

export const PageWrapper = styled.div`
display: flex;
justify-content: center;
background: linear-gradient(to bottom,transparent,5%,#FFFCF0,95%,transparent);
align-items: center;
padding: 20px 0px 20px 0px;
@media (max-width: 768px) {
    width:100%;
  }
`;

export const TextBox = styled.div`
flex-direction: column;
width: 50%;
@media (max-width: 768px) {
    width: 90%;
    padding:0px ;
  }
`;

export const TextHeader = styled.h1`
font-size: 26px;
text-align: center;

@media (max-width: 768px) {
  margin-top: 0px;
  }
`;

export const TextHeader2 = styled.h1`
text-align: center;

@media (max-width: 768px) {
  margin-top: 0px;
  }
`;

export const ImgBox = styled.div`
display: flex;
justify-content: center;
width: 50%;
@media (max-width: 768px) {
    display: none;
    ;
  }
`;

export const ImgBox2 = styled.div`
display: flex;
justify-content: center;
width: 100%;
@media (max-width: 768px) {
    display: none;
    ;
  }
`;

export const Image2 = styled.img`

 height: 300px;
 width:90%;

@media (max-width: 768px) {
    height: 50vh;
  }
  
`;

export const Button = styled.button`
  text-decoration: none;  
  font-size: 22px;
  border: none;
  margin: 15px 0px;
  border-radius: 10px;
  border: solid 2px #ea9999;
  color: white;
  text-align: center;
  background-color: #ea9999; 
  align-items: flex-start;
  box-shadow: #ea9999;
  padding: 3px 25px;

  &:hover {
  background-color: transparent;
  color: #ea9999
}

@media (max-width: 768px) {
  margin-bottom: 30px;
  width: 90%;
  margin: 15px;
  }
`;

export const ContentWrapper2 = styled.div`
display: flex ;
width: 100%;
align-items:center;
flex-direction: column;
font: #ea9999;
font-size: 16px;
`;

export const TextBox2 = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: start;

@media (max-width: 768px) {
    width: 100%;
  }
`;

export const Green2 = styled.span`
  color: #ea9999;
  font-weight: bold;
  font-size: 2em;
  height:30px;
  width: 30px;
`;

export const Text3 = styled.div`
 text-align: start;
 padding-left: 20px;
 margin-bottom: 20px;
 font-family: Avenir !important;
`;

export const Text4 = styled.div`
 text-align: start;
 padding-left: 20px;
 margin-bottom: 5px;
 font-family: Avenir !important;
`;

export const PageWrapper3 = styled.div`
font-family: Avenir !important;
display: flex;
flex-direction:column ;
line-height: 200%;
background-color: rgba(255, 255, 255, 0.9);
color: black;
align-items: center;
justify-content: center;
align-self: center;
padding-bottom: 10px;
width: 100%;  

@media (max-width: 768px) {
    width:100%;
    padding: 10px 0px;
    background-color: rgba(255, 255, 255, 0.95);
  }
`;

export const PageWrapper4 = styled.div`
display: flex;
line-height: 200%;
background-color: rgba(255, 255, 255, 0.9);
color: black;
align-items: center;
justify-content: start;
align-self: center;
padding-bottom: 6px;
width: 90%;  

@media (max-width: 768px) {
    width:100%;
    padding: 10px 0px;
    background-color: rgba(255, 255, 255, 0.95);
  }
`;

export const Wrap = styled.div`
margin-left: 20px;
font-family: Avenir !important;
`;

export const Wrap2 = styled.div`

width: 90%;
margin-bottom: 70px;
font-family: Avenir !important;

@media (max-width: 768px) {
    margin: 20px 0px 10px 0px;
  }
`;

export const Flex = styled.div`
display: flex;
justify-content: space-between;
width: 96%;
font-family: Avenir !important;

@media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    width: 90%;
  }
`;

export const Form = styled.div`
align-self: center;
border-radius: 15px;
background-color: white;
text-align: center;
width: 90%;
padding: 15px 3px;
color: black;
border: #ea9999 solid 2px;
font-size: 16px;
box-shadow: #ea9999;
margin-top: 20px;
font-family: Avenir !important;

@media (max-width: 768px) {
    border: #ea9999 solid 1px;
    width: 80%;
    margin-bottom: 20px;
    padding: 5px 3px
  }
`;

export const Form2 = styled.div`
border-radius: 15px;
background-color: white;
text-align: center;
width: 90%;
padding: 15px 3px;
color: black;
border: #ea9999 solid 2px;
box-shadow: #ea9999;
margin-top: 20px;
font-family: Avenir !important;


@media (max-width: 768px) {
    border: #ea9999 solid 1px;
    width: 80%;
    margin-bottom: 20px;
    padding: 5px 3px
  }

`;

export const Form3 = styled.div`
border-radius: 15px;
background-color: white;
text-align: center;
width: 90%;
padding: 15px 3px;
color: black;
border: #ea9999 solid 2px;
box-shadow: #ea9999;
margin-top: 20px;
font-family: Avenir !important;


@media (max-width: 768px) {
    border: #ea9999 solid 1px;
    width: 80%;
    padding: 5px 3px
  }
`;

export const Z = styled.span`
font-size: 1.5em;
font-weight: bold;
color: #ea9999;
font-family: Avenir !important;
`;

export const Produkt = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
`;

export const TextBox3 = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: start;
margin-left: 100px;
font-family: Avenir !important;

@media (max-width: 768px) {
    width: 90%;
  }
`;

export const Wrapper3 = styled.div`
display: flex ;
width: 80%;
align-items:center;
flex-direction: column;
font: #ea9999;
font-size: 16px;
`;

export const TextBoxKontakt = styled.div`
flex-direction: column;
width: 100%;
@media (max-width: 768px) {
    width: 90%;
    padding:0px ;
  }
`;

