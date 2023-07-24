import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Intro from "../components/Intro"
import Intro2 from "../components/Intro/index2"
import Intro3 from "../components/Intro/index3"


// Die Funktion "Bilder" aus index.js importieren und aufrufen.

const Images = () => (
  <Layout>
    <Seo title="Intro"/>
    <h1>Intro #1</h1>
    <Intro />
    <br/>
    <h1>Eine andere Art der Darstellung</h1>
    <br />
    <Intro2 />
    <br />
    <h3>Intro #3<br /></h3>
    <br/>
    <Intro3 />
    <br />
  </Layout>
)

export const Head = () => <Seo title="Page two" />

export default Images
