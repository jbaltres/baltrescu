import styled from "styled-components"

export const Wrapper = styled.div`
background-color: #111111;
color: #cccccc;
height: 100vh;
&:hover {
}

@media screen and (max-width: 960px){
}
`;

export const Para = styled.div`
    font-size: 3em;
	display: table-cell; 
	vertical-align: middle;
	text-align: center;
    opacity: 0;

    animation: t-animation 8s;

@keyframes t-animation {
0% {opacity: 0;}
30% {opacity: 1;}
70% {opacity: 1;}
100% {opacity: 0;}
}


&:hover {
}

@media screen and (max-width: 960px){
}
`;

export const Para2 = styled.div`
    font-size: 3em;
	display: table-cell; 
	vertical-align: middle;
	text-align: center;
    opacity: 0;

    animation: t-animation 8s;
    animation-delay: 6s;

@keyframes t-animation {
0% {opacity: 0;}
30% {opacity: 1;}
70% {opacity: 1;}
100% {opacity: 0;}
}


&:hover {
}

@media screen and (max-width: 960px){
}
`;

export const Para3 = styled.div`
    font-size: 3em;
	display: table-cell; 
	vertical-align: middle;
	text-align: center;
    opacity: 0;

    animation: t-animation 8s;
    animation-delay: 12s;

@keyframes t-animation {
0% {opacity: 0;}
30% {opacity: 1;}
70% {opacity: 1;}
100% {opacity: 0;}
}


&:hover {
}

@media screen and (max-width: 960px){
}
`;

export const Para4 = styled.div`
    font-size: 3em;
	display: table-cell; 
	vertical-align: middle;
	text-align: center;
    opacity: 0;

    animation: t-animation 8s;
    animation-delay: 26s;

@keyframes t-animation {
0% {opacity: 0;}
30% {opacity: 1;}
70% {opacity: 1;}
100% {opacity: 0;}
}


&:hover {
}

@media screen and (max-width: 960px){
}
`;

export const Para5 = styled.div`
    font-size: 3em;
	display: table-cell; 
	vertical-align: middle;
	text-align: center;
    opacity: 0;

    animation: t-animation 8s;
    animation-delay: 33s;

@keyframes t-animation {
0% {opacity: 0;}
30% {opacity: 1;}
70% {opacity: 1;}
100% {opacity: 0;}
}


&:hover {
}

@media screen and (max-width: 960px){
}
`;

export const Para6 = styled.div`
    font-size: 3em;
	display: table-cell; 
	vertical-align: middle;
	text-align: center;
    opacity: 0;

    animation: end-animation 8s;
	animation-delay: 39s;
	animation-fill-mode: forwards; 

    @keyframes end-animation {
	0% {opacity: 0;}
	100% {opacity: 1;}
}


&:hover {
}

@media screen and (max-width: 960px){
}
`;

export const Flick1 = styled.div`

	width: 100%; 
	height: 100%;
	display: block;
    animation: flicker 8s infinite;
    top: 0; 
	left: 0; 
	width: 100%; 
	height: 100%;
	position: fixed; 
	display: table;


    @keyframes flicker {

    20.1% {left:0px;top:0px;}
	20.2% {left:-10px;top:-18px;}
	20.3% {left:0px;top:0px;}
     
    

	50.1% {left:0px;top:0px;}
	50.2% {left:10px;top:8px;}
	50.3% {left:0px;top:0px;}


	90.1% {left:0px;top:0px;}
	90.2% {left:-5px;top:3px;}
	90.3% {left:0px;top:0px;}
}

   
&:hover {
}

@media screen and (max-width: 960px){
}
`;

export const Flick2 = styled.div`

	width: 100%; 
	height: 100%;
	display: block;
    animation: flicker 8s infinite;
    top: 0; 
	left: 0; 
	width: 100%; 
	height: 100%;
	position: fixed; 
	display: table;


    @keyframes flicker {

    20.1% {left:0px;top:0px;}
	20.2% {left:-10px;top:-18px;}
	20.3% {left:0px;top:0px;}
     
    

	50.1% {left:0px;top:0px;}
	50.2% {left:10px;top:8px;}
	50.3% {left:0px;top:0px;}


	90.1% {left:0px;top:0px;}
	90.2% {left:-5px;top:3px;}
	90.3% {left:0px;top:0px;}
}

   
&:hover {
}

@media screen and (max-width: 960px){
}
`;
