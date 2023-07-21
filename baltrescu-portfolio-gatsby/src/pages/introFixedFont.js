import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import IntroFixed from "../components/Intro/fixedfontintro.js"


// Die Funktion "Bilder" aus index.js importieren und aufrufen.

const Images = () => (
  <Layout>
    <Seo title="Intro"/>
    <h1>Intro #1</h1>
    <IntroFixed />
  </Layout>
)

export const Head = () => <Seo title="Page two" />

export default Images
