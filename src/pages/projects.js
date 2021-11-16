import React, { Component } from "react"
import { Link } from "gatsby"
import portifolio_image from "../assets/images/portifolio_image.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons"
import {
  FeaturedProjectsRight,
  FeaturedProjectsLeft,
} from "../components/FeaturedProjects"
import {
  FeaturedProjectsMobile
} from "../components/FeaturedProjectsMobile"

const portifolio = {
  title: "Meu Portifólio",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam saepe consectetur consequuntur eum fugiat laborum, rerum expedita ratione nam nemo eligendi minus maxime facere quam cum, neque illo! Unde, quidem?",
  image: portifolio_image,
  image_alt: "Imagem do projeto",
  techs: ["React.js", "Gatsby.js", "Sass", "Netlify"],
  main_link: "https://joaopedromartins.com.br",
  git: "https://github.com/jp98smartins/potifolio_v2",
}

const dominoMexicano = {
  title: "Placar Dominó Mexicano",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam saepe consectetur consequuntur eum fugiat laborum, rerum expedita ratione nam nemo eligendi minus maxime facere quam cum, neque illo! Unde, quidem?",
  image: portifolio_image,
  image_alt: "Imagem do projeto",
  techs: ["Flutter", "GetX", "GetStorage"],
  main_link: "https://joaopedromartins.com.br",
  git: "https://github.com/jp98smartins/app-domino-mexicano",
}

const projectsList = [portifolio, dominoMexicano]

class projects extends Component {

  render() {
    return (
      <div className="proj-data">
        <div className="proj-header">
          <div className="proj-inner-header">
            <div className="proj-title">
              <span>III.</span>Alguns Projetos
            </div>
            <div className="proj-divider"></div>
          </div>
          <div className="proj-see-all">
            <Link to="/archive">
              <p>Veja todos os meus projetos</p>
              <FontAwesomeIcon
                icon={faAngleDoubleRight}
                className="arrow-right-icon"
              />
            </Link>
          </div>
        </div>
        {projectsList.map(
          (project, index) => (
            <div key={index}>
              {
                index % 2 === 0 
                ? <div>
                  <FeaturedProjectsLeft
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    image_alt={project.image_alt}
                    techs={project.techs}
                    main_link={project.main_link}
                    git={project.git}
                  />
                  <FeaturedProjectsMobile
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    image_alt={project.image_alt}
                    techs={project.techs}
                    main_link={project.main_link}
                    git={project.git}
                  />
                </div>
                :  <div>
                  <FeaturedProjectsRight
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    image_alt={project.image_alt}
                    techs={project.techs}
                    main_link={project.main_link}
                    git={project.git}
                  />
                  <FeaturedProjectsMobile
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    image_alt={project.image_alt}
                    techs={project.techs}
                    main_link={project.main_link}
                    git={project.git}
                  />
                </div>
              }
            </div>
          )
        )}
        <Link to="/archive">
          <div className="proj-call-to-action">Veja mais!</div>
        </Link>
      </div>
    )
  }
}

export default projects
