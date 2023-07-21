import styled from "styled-components"

export const Wrapper2 = styled.div`
    background-color: #111111;
	color: #cccccc;
	background-size:100%;
    background-repeat:no-repeat;
    background-attachment:fixed;
    color:#fff;
    text-align:center;
    width:90%;
    margin:auto;
    padding:25% ;

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
	font-size: 4em;
    animation: rotate-word1 8s;

	&:nth-child(even){
		@keyframes rotate-word1 {
		0% { opacity: 0;  transform: translateX(0);filter:blur(10px);transform:scale(1.2)}
		3% { transform: translateX(0);filter:blur(0px);transform:scale(.9);opacity: 1}
		12% {  transform: translateX(0);filter:blur(0px);transform:scale(1);opacity: 1}
		13% {transform: translateY(0);opacity: 1}
		13.2% {transform: translateY(-200px) translateX(200px);opacity: 1}
		13.4% {transform: translateY(-100px);opacity: 1}
		13.6% {transform: translateY(0);opacity: 1}
		13.8% {transform: translateY(300px);opacity: 1}
		14% {transform: translateY(0);opacity: 1}
		
		68% {transform: translateY(0);opacity: 1}
		69% {transform: translateY(300px);opacity: 1}
		70% {transform: translateY(0);opacity: 1}
		80% {  transform: translateX(0);filter:blur(0px);transform:scale(1);opacity: 1}
		90% {  transform: translateX(0);filter:blur(10px);transform:scale(1.2);opacity: 0;}
		100% { opacity: 0}
  }
		}

    @keyframes rotate-word1 {
		0% { opacity: 0;  transform: translateX(0);filter:blur(10px);transform:scale(1.2)}
		3% { transform: translateX(0);filter:blur(0px);transform:scale(.9);opacity: 1}
		12% {  transform: translateX(0);filter:blur(0px);transform:scale(1);opacity: 1}
		13% {transform: translateY(0);opacity: 1}
		13.2% {transform: translateY(200px);opacity: 1}
		13.4% {transform: translateY(-100px);opacity: 1}
		13.6% {transform: translateY(0);opacity: 1}
		13.8% {transform: translateY(300px);opacity: 1}
		14% {transform: translateY(0);opacity: 1}
		
		68% {transform: translateY(0);opacity: 1}
		69% {transform: translateY(300px);opacity: 1}
		70% {transform: translateY(0);opacity: 1}
		80% {  transform: translateX(0);filter:blur(0px);transform:scale(1);opacity: 1}
		90% {  transform: translateX(0);filter:blur(10px);transform:scale(1.2);opacity: 0;}
		100% { opacity: 0}
  }

    &:nth-child(2) { animation-delay: 8s}
    &:nth-child(3) { animation-delay: 16s}
    &:nth-child(4) { animation-delay: 24s}
    &:nth-child(5) { animation-delay: 32s}
    &:nth-child(6) { animation-delay: 40s}

&:hover {
}

@media screen and (max-width: 960px){
}
`;

export const Div2 = styled.div`
    position:absolute;
    opacity:0;
    overflow:hidden;
    left:10vw;
    width:80vw;
    animation: end-animation2 8s;
	animation-delay: 46s;
	animation-fill-mode: forwards; 
	text-align: center;
	font-size: 4em;

	@keyframes end-animation2 {
		0% { opacity: 0;  transform: translateX(0);filter:blur(10px);transform:scale(1.2)}
		3% { opacity: 1;  transform: translateX(0);filter:blur(0px);transform:scale(.9)}
		12% { opacity: 1; transform: translateX(0);filter:blur(0px);transform:scale(1)}
		13% {transform: translateY(0);opacity: 1}
		13.2% {transform: translateY(200px);opacity: 1}
		13.4% {transform: translateY(-100px);opacity: 1}
		13.6% {transform: translateY(0);opacity: 1}
		13.8% {transform: translateY(300px);opacity: 1}
		14% {transform: translateY(0);opacity: 1}
		60% {opacity: 1; filter:blur(1px)}
		68% {transform: translateY(0);opacity: 1}
		69% {transform: translateY(300px);opacity: 1}
		70% {transform: translateY(0);opacity: 1}
		80% { opacity: 1; transform: translateX(0);filter:blur(10px);transform:scale(1.2)}
		100% { opacity: 1}
}
`;

export const Rahmen = styled.div`
  
`;
