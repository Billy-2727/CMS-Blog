import React from "react"
import { Link } from "gatsby"
import Footer from "../components/footer"

const ContactPage = () => {
  return (
    <div>
      <h1>Contact</h1>
      <p>You can contact me on LinkedIn below</p>
      <Link to="https://www.linkedin.com/in/billy-morrison-aa852a185/">
        LinkedIn
      </Link>
      <Footer />
    </div>
  )
}

export default ContactPage
