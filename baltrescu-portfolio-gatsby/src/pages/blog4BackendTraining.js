import React from 'react'
import BlogComponent from "../components/Blog/index"
import Seo from "../components/seo"

function Blog() {
  return (
    <>
    <Seo title="Baltrescu´s Blog"/>
    <BlogComponent />
    </>
  )
}

export default Blog