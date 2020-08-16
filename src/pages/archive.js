import React, { Component } from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"

class Archive extends Component {
  render() {
    return (
      <div>
        <Layout>
          Archive
          <Link to="/">Archive</Link>
        </Layout>
      </div>
    )
  }
}

export default Archive
