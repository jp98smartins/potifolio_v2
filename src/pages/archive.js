import React, { Component } from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithub,
  faGooglePlay,
  faAppStore,
} from "@fortawesome/free-brands-svg-icons"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"

const portifolio_v1 = {
  name: "Meu Site 1.0",
  tech: "HTML5 • CSS3 • Javascript",
  links: {
    git: "https://github.com/jp98smartins",
    site: "https://joaopedromartins.com.br",
    appStore: null,
    playStore: null,
  },
}

const portifolio_v2 = {
  name: "Meu Site 2.0",
  tech: "HTML5 • CSS3 • Javascript",
  links: {
    git: "https://github.com/jp98smartins",
    site: "https://joaopedromartins.com.br",
    appStore: null,
    playStore: null,
  },
}

const portifolio_v3 = {
  name: "Meu Site 3.0",
  tech: "HTML5 • CSS3 • Javascript",
  links: {
    git: "https://github.com/jp98smartins",
    site: "https://joaopedromartins.com.br",
    appStore: null,
    playStore: null,
  },
}

const portifolio_v4 = {
  name: "Meu Site 3.0",
  tech: "HTML5 • CSS3 • Javascript",
  links: {
    git: "https://github.com/jp98smartins",
    site: "https://joaopedromartins.com.br",
    appStore: null,
    playStore: null,
  },
}

const portifolio_v5 = {
  name: "Meu Site 3.0",
  tech: "HTML5 • CSS3 • Javascript",
  links: {
    git: "https://github.com/jp98smartins",
    site: "https://joaopedromartins.com.br",
    appStore: null,
    playStore: null,
  },
}

const projects = [portifolio_v1, portifolio_v2, portifolio_v3, portifolio_v4, portifolio_v5]

class Archive extends Component {
  render() {
    return (
      <div className="full-page">
        <Layout is404={false}>
          <div className="all-proj-data">
            <div className="all-proj-header">
              <div className="all-proj-title">
                <span>V.</span>Todos meus Projetos
              </div>
              <div className="all-proj-divider"></div>
            </div>
            <div className="table">
              <div className="thead">
                <div className="name-column-header">Projetos</div>
                <div className="tech-column-header">Tecnologias Usadas</div>
                <div className="link-column-header">Links</div>
              </div>
              <div className="tbody">
                {projects.map((project, index) => (
                  <div className="projects-row" key={index}>
                    <div className="name-column-data">
                      <span>{project.name}</span>
                    </div>
                    <div className="tech-column-data">
                      <span>{project.tech}</span>
                    </div>
                    <div className="link-column-data">
                      {project.links.git ? (
                        <a
                          href={project.links.git}
                          rel="noreferrer"
                          target="_blank"
                        >
                          <FontAwesomeIcon
                            icon={faGithub}
                            className="link-icon"
                          />
                        </a>
                      ) : null}
                      {project.links.site ? (
                        <a
                          href={project.links.site}
                          rel="noreferrer"
                          target="_blank"
                        >
                          <FontAwesomeIcon
                            icon={faExternalLinkAlt}
                            className="link-icon"
                          />
                        </a>
                      ) : null}
                      {project.links.appStore ? (
                        <a
                          href={project.links.appStore}
                          rel="noreferrer"
                          target="_blank"
                        >
                          <FontAwesomeIcon
                            icon={faAppStore}
                            className="link-icon"
                          />
                        </a>
                      ) : null}
                      {project.links.playStore ? (
                        <a
                          href={project.links.playStore}
                          rel="noreferrer"
                          target="_blank"
                        >
                          <FontAwesomeIcon
                            icon={faGooglePlay}
                            className="link-icon"
                          />
                        </a>
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Link to="/#projects">
              <div className="all-proj-back-button">Voltar</div>
            </Link>
          </div>
        </Layout>
      </div>
    )
  }
}

export default Archive
