import React from 'react'
import { ImageContainer, Headline, ImgGrid, Img, Foto} from "./bilderElements"
import bild1 from "../../images/bild1.jpg";
import bild2 from "../../images/bild2.jpg";
import bild3 from "../../images/bild3.jpg";
import bild4 from "../../images/bild4.jpg";
import bild5 from "../../images/bild5.jpg";
import bild6 from "../../images/bild6.jpg";
import bild7 from "../../images/bild7.jpg";
import bild8 from "../../images/bild8.jpg";
import bild9 from "../../images/bild9.jpg";
import bild10 from "../../images/bild10.jpg";
import bild11 from "../../images/bild11.jpg";
import bild12 from "../../images/bild12.jpg";

function Bilder() {

    const bilder= [bild1, bild2, bild3, bild4, bild5, bild6, bild7, bild8, bild9, bild10, bild11, bild12]
    
    return(
        <>
        <ImageContainer>
            <Headline>Bilder Grid zum Wiederverwenden</Headline>
            <ImgGrid>
             {bilder.map((image, key) => {
                return(
                <Foto>
                    <Img key={key} alt={image.split(".")[0]} src={image}/>
                </Foto>    
                )
             }) }
            </ImgGrid>
        </ImageContainer>
      </>
    )
}

export default Bilder
