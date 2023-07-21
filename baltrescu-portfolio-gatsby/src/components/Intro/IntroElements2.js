import styled from "styled-components"

export const Wrapper = styled.div`
    background-color:#3757D0;
    background-image:radial-gradient(#81BCFF, #303391);
    background-size:100%;
    background-repeat:no-repeat;
    background-attachment:fixed;
    color:#fff;
    text-align:center;
    width:90%;
    margin:auto;
    padding:20% ;
    font-size:2.2em;
    text-transform:uppercase;
    font-family: 'Oswald', sans-serif;

&:hover {
}

@media screen and (max-width: 960px){
}
`;

export const Span = styled.span`
    display:block;
    height:50px;
    font-size:.7em;
    text-transform:lowercase;
    opacity:.8;
font-family: 'Rubik', sans-serif;

&:hover {
}

@media screen and (max-width: 960px){
}
`;

  
export const Div = styled.div`
    position:absolute;
    opacity:0;
    overflow:hidden;
    left:10vw;
    width:80vw;
    line-height:1.2em;
    animation: rotate-word 32s linear infinite 0s;

    @keyframes rotate-word {
      0% { opacity: 0;  transform: translateX(0);filter:blur(10px);transform:scale(1.2)}
      3% { opacity: 1;  transform: translateX(0);filter:blur(0px);transform:scale(.9)}
      12% { opacity: 1; transform: translateX(0);filter:blur(0px);transform:scale(1)}
      16% { opacity: 0; transform: translateX(0);filter:blur(10px);transform:scale(1.2)}
      80% { opacity: 0}
      100% { opacity: 0}
  }

    &:nth-child(2) { animation-delay: 4s}
    &:nth-child(3) { animation-delay: 8s}
    &:nth-child(4) { animation-delay: 12s}
    &:nth-child(5) { animation-delay: 16s}
    &:nth-child(6) { animation-delay: 20s}
    &:nth-child(7) { animation-delay: 24s}
    &:nth-child(8) { animation-delay: 28s}

&:hover {
}

@media screen and (max-width: 960px){
}
`;