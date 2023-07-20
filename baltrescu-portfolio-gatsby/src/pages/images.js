import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Bilder from "../components/Bilder"
import { styled } from 'styled-components';

const Headline = styled.h1`
    display: flex;
    justify-content: center;
    width: 100%;

    &:hover {

}

@media screen and (max-width: 960px){
   
}
`;

// Die Funktion "Bilder" aus index.js importieren und aufrufen.

const Images = () => (
  <Layout>
    <Seo title="Bilder"/>
    <Headline>Das ist die Images Page</Headline>
    <Bilder />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const Head = () => <Seo title="Page two" />

export default Images
