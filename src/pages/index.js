import React, { Component } from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import HPDescription from "../components/HomePageDescription"
import AboutMe from "./aboutme"
import Experience from "./experience"
import Projects from "./projects"
import Contact from "./contact"

class Home extends Component {
  render() {
    return (
      <div className="full-page">
        <Layout>
          <div id="homepage">
            <HPDescription />
          </div>
          <div id="aboutme" style={{ height: 1000 }}>
            <AboutMe />
          </div>
          <div id="experience" style={{ height: 1000 }}>
            <Experience />
          </div>
          <div id="projects" style={{ height: 1000 }}>
            <Projects />
            <Link to="/archive">Archive</Link>
          </div>
          <div id="contact" style={{ height: 1000 }}>
            <Contact />
          </div>
        </Layout>
      </div>
    )
  }
}

export default Home
