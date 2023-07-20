import { styled } from 'styled-components';

// Container ImageContainer, ist der Wrapper für die ganze Seite
// Headline wird eigens erstellt und könnte eine globale Komponente werden. Keine besonderheit!
/* Img Grid gibt das Grid-Gerüst vor ->
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); 
    grid-auto-rows: minmax(50px, auto);
    sind Properties welche die Größen des Rasters bestimmen
*/
// Foto ist ein zusätzlicher Container, damit das Bild beim transform nur innerhalb seines Rahmens wächst. Sonst nicht notwendig. In diesem Container wird beschrieben wie sich die children verhalten. Wenn es diesen Container nicht gibt, wird das nth:child() in der Komponente eine Ebene darüber eingefügt.
// Img gibt die Größe eines Bildes innerhalb seines Rahmens vor und hier wird der Hover-Effect platziert

export const ImageContainer = styled.div`
text-align: center;
margin: 50px;

    &:hover {

}

@media screen and (max-width: 960px){
   
}
`;
export const Headline = styled.h1`

    margin-bottom: 64px;
    align-self: center;

    &:hover {

}

@media screen and (max-width: 960px){
   
}
`;
export const ImgGrid = styled.div`

    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-auto-rows: minmax(50px, auto);
    margin: 0 auto;
    max-width: 1000px;
    padding: 0 32px;
    
    &:hover {
        
}

@media screen and (max-width: 960px){
   
}
`;

export const Foto = styled.div`

    overflow: hidden;

    &:nth-child(5){
    grid-column-end: span 2;
}
&:nth-child(9){
    grid-column-start: span 2;
    grid-row-start: 4;
    grid-row-end: 6;
    ;
}
    
    &:hover {

}

@media screen and (max-width: 960px){
   
}
`;

export const Img = styled.img`

    width: 100%;
    height: 100%;

    &:hover {
        transform: scale(1.3);
        transition: 1s all ease !important;
        cursor: pointer;

}

@media screen and (max-width: 960px){
   
}
`;

