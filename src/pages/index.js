import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>CMS Blog</h1>
      <h2>This is a cms blog</h2>
      <p>Need a Dev?</p> <Link to="/contact">Contact Me</Link>
    </Layout>
  )
}

export default IndexPage
