import { styled } from 'styled-components';

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

