import React, { Component } from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import AboutMe from "./aboutme"
import Experience from "./experience"
import Projects from "./projects"
import Contact from "./contact"

class Home extends Component {
  render() {
    return (
      <div>
        <Layout>
        Home Page
        <AboutMe />
        <Experience />
        <Projects />
        <Link to="/archive">Archive</Link>
        <Contact />
        </Layout>
      </div>
    )
  }
}

export default Home
