import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <div>
        <h1>About</h1>
        <p>This is my about AboutPage</p>
        <p>Need a Dev?</p> <Link to="/contact">Contact Me</Link>
      </div>
    </Layout>
  )
}
export default AboutPage
