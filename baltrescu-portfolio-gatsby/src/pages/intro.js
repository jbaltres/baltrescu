import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Intro from "../components/Intro"


// Die Funktion "Bilder" aus index.js importieren und aufrufen.

const Images = () => (
  <Layout>
    <Seo title="Intro"/>
    <Intro />
  </Layout>
)

export const Head = () => <Seo title="Page two" />

export default Images
