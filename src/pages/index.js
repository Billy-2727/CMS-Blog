import React from "react"
import { Link } from "gatsby"
import Footer from "../components/footer"

const IndexPage = () => {
  return (
    <div>
      <h1>CMS Blog</h1>
      <h2>This is a cms blog</h2>
      <p>Need a Dev?</p> <Link to="/contact">Contact Me</Link>
      <Footer />
    </div>
  )
}

export default IndexPage
