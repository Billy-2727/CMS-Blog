import React from "react"
import { Link } from "gatsby"

const AboutPage = () => {
  return (
    <div>
      <h1>About</h1>
      <p>This is my about AboutPage</p>
      <p>Need a Dev?</p> <Link to="/contact">Contact Me</Link>
    </div>
  )
}
export default AboutPage
