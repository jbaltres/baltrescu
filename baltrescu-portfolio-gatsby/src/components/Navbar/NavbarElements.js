import styled from "styled-components"
import {DiScala} from "react-icons/di"
import {Link} from "gatsby"

export const Nav = styled.nav`
background: ${({active}) => active ? "#fff" : "linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)"};
top: ${({active}) => active ? "0em" : "-5em"};
height: 80px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1rem;
position: sticky;

z-index: 999;
transition: all 2s ease-out;

@media screen and (max-width: 960px) {
    background: ${({ click }) => (click ? "#fff" : "linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)")};
    top: 0;
    transition: .8s all ease;
}
`;

export const NavbarContainer = styled.div`
display: flex;
justify-content: space-between;
height: 80px;
width: 100%;
max-width: 1000px;
z-index: 1;
`;

export const NavLogo = styled(Link)`
color: #141414;
justify-self: flex-start;
cursor: pointer;
text-decoration: none;
font-size: 1.5rem;
display: flex;
align-items: center;
font-family: Permanent Marker;
`;

export const NavIcon = styled(DiScala)`
margin: 0 .5rem 0 2rem;
font-family: Permanent Marker;
`;

export const MobileIcon = styled.div`
display: none;

@media screen and (max-width: 960px){
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
}
`;

export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;

@media screen and (max-width: 960px){
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 90vh;
        position: absolute;
        top: ${({ click }) => ( click ? "100%" : "-1000px") };
        opacity: 1;
        transition: all 1s ease;
        background: linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,0.7) 100%)};

    }
`;

export const NavLinks = styled(Link)`
color: #141414;
display: flex;
align-items: center;
text-decoration: none;
padding: .5rem 1rem;
height: 100%;
font-family: "Permanent Marker", sans-serif;

@media screen and (max-width: 960px){
        text-align: center;
        padding: 2rem;
        width: 100%;
        display: table;

        &:hover {
            color: #ff4040;
            transition: all .3s ease;
        }
    }
`;

export const NavItem = styled.li`
height: 80px;
color: black;

@media screen and (max-width: 960px){
        width: 100%;
        }
`;