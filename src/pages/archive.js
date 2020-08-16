import React, { Component } from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Contact from "./contact"

class Archive extends Component {
  render() {
    return (
      <div>
        <Layout>
          Archive
          <Link to="/">Back</Link>
          <Contact />
        </Layout>
      </div>
    )
  }
}

export default Archive
