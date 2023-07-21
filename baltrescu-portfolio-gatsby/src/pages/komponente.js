import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Components from "../components/Component"
import { Link } from "gatsby"

const komponente = () => (
  <Layout>
    <Seo title="Komponente"/>
    <Components bgcolortop={"wheat"}/>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)


export default komponente
