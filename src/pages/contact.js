import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <div>
        <h1>Contact</h1>
        <p>You can contact me on LinkedIn below</p>
        <Link to="https://www.linkedin.com/in/billy-morrison-aa852a185/">
          LinkedIn
        </Link>
      </div>
    </Layout>
  )
}

export default ContactPage
