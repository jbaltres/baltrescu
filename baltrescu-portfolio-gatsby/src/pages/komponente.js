import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Components from "../components/Component"


// Die Funktion "Bilder" aus index.js importieren und aufrufen.

const komponente = () => (
  <Layout>
    <Seo title="Komponente"/>
    <Components />
  </Layout>
)


export default komponente
