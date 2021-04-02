import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>CMS Blog Breakdown</h1>
      <p>
        This blog is an example of what can be done using gatsby and a cms such
        as Contentful which is used here.
      </p>
      <p>
        The basic premise of this is that anyone can update and add blogs to the
        blog section without any developer interaction using the combination
        <strong> Contentful</strong> ,<strong> Gatsby</strong> and
        <strong> Netlify</strong>.
      </p>
      <p>
        This website also uses <strong>GraphQL</strong> to query different parts
        of the Contentful source data to then dynamically display all the
        necessary data found in the blog section.
      </p>
    </Layout>
  )
}

export default IndexPage
