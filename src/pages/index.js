import React, { Component } from "react"
import Layout from "../components/Layout"
import HomePage from "./homepage"
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
            <HomePage />
          </div>
          <div id="aboutme">
            <AboutMe />
          </div>
          <div id="experience">
            <Experience />
          </div>
          <div id="projects">
            <Projects />
          </div>
          <div id="contact">
            <Contact />
          </div>
        </Layout>
      </div>
    )
  }
}

export default Home
