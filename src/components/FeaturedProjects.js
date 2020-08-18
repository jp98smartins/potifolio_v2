import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"

export const FeaturedProjectsLeft = props => {
  return (
    <div className="ft-proj-data-left">
      <div className="ft-proj-desc">
        <div className="ft-proj-featured">
          <span role="img" aria-label="estrela">
            ⭐
          </span>
          Destaques
        </div>
        <div className="ft-proj-title">{props.title}</div>
        <div className="ft-proj-description">
          <p>{props.description}</p>
        </div>
      </div>
      <div className="ft-proj-img"></div>
      <div className="ft-proj-tech">
        <div className="ft-proj-used-tech">
          {props.techs.map((tech, index) => (
            <p key={index}>{tech}</p>
          ))}
        </div>
        <div className="ft-proj-links">
          <div className="ft-proj-git">
            <a href={props.git} rel="noreferrer" target="_blank">
              <FontAwesomeIcon icon={faGithub} className="git-icon" />
            </a>
          </div>
          <div className="ft-proj-site">
            <a href={props.site} rel="noreferrer" target="_blank">
              <FontAwesomeIcon icon={faExternalLinkAlt} className="link-icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export const FeaturedProjectsRight = props => {
  return (
    <div className="ft-proj-data-right">
      <div className="ft-proj-tech">
        <div className="ft-proj-used-tech">
          {props.techs.map((tech, index) => (
            <p key={index}>{tech}</p>
          ))}
        </div>
        <div className="ft-proj-links">
          <div className="ft-proj-git">
            <a href={props.git} rel="noreferrer" target="_blank">
              <FontAwesomeIcon icon={faGithub} className="git-icon" />
            </a>
          </div>
          <div className="ft-proj-site">
            <a href={props.site} rel="noreferrer" target="_blank">
              <FontAwesomeIcon icon={faExternalLinkAlt} className="link-icon" />
            </a>
          </div>
        </div>
      </div>
      <div className="ft-proj-img">
        <img src={props.image} alt={props.image_alt} />
      </div>
      <div className="ft-proj-desc">
        <div className="ft-proj-featured">
          <span role="img" aria-label="estrela">
            ⭐
          </span>
          Destaques
        </div>
        <div className="ft-proj-title">{props.title}</div>
        <div className="ft-proj-description">
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  )
}
