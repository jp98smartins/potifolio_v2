import React from "react"
import { Link } from "gatsby"
import project_image from "../assets/images/project_image.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons"
import {
  FeaturedProjectsRight,
  FeaturedProjectsLeft,
} from "../components/FeaturedProjects"

const projects = () => {
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
      <FeaturedProjectsLeft
        title="Título do Projeto"
        description="Descrição do Projeto: Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam saepe consectetur consequuntur eum fugiat laborum, rerum expedita ratione nam nemo eligendi minus maxime facere quam cum, neque illo! Unde, quidem?"
        image={project_image}
        image_alt="Imagem do projeto"
        techs={["React.js", "Gatsby.js", "Spotify API", "Teste"]}
        site="https://joaopedromartins.com.br"
        git="https://github.com/jp98smartins"
      />
      <FeaturedProjectsRight
        title="Título do Projeto"
        description="Descrição do Projeto: Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam saepe consectetur consequuntur eum fugiat laborum, rerum expedita ratione nam nemo eligendi minus maxime facere quam cum, neque illo! Unde, quidem?"
        image={project_image}
        image_alt="Imagem do projeto"
        techs={["React.js", "Gatsby.js", "Spotify API", "Teste"]}
        site="https://joaopedromartins.com.br"
        git="https://github.com/jp98smartins"
      />
      <FeaturedProjectsLeft
        title="Título do Projeto"
        description="Descrição do Projeto: Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam saepe consectetur consequuntur eum fugiat laborum, rerum expedita ratione nam nemo eligendi minus maxime facere quam cum, neque illo! Unde, quidem?"
        image={project_image}
        image_alt="Imagem do projeto"
        techs={["React.js", "Gatsby.js", "Spotify API", "Teste"]}
        site="https://joaopedromartins.com.br"
        git="https://github.com/jp98smartins"
      />
      <FeaturedProjectsRight
        title="Título do Projeto"
        description="Descrição do Projeto: Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam saepe consectetur consequuntur eum fugiat laborum, rerum expedita ratione nam nemo eligendi minus maxime facere quam cum, neque illo! Unde, quidem?"
        image={project_image}
        image_alt="Imagem do projeto"
        techs={["React.js", "Gatsby.js", "Spotify API", "Teste"]}
        site="https://joaopedromartins.com.br"
        git="https://github.com/jp98smartins"
      />
      <Link to="/archive">
        <div className="proj-call-to-action">Veja mais!</div>
      </Link>
    </div>
  )
}

export default projects
