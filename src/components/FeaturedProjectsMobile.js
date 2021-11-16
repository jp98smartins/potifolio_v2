import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faGooglePlay, faAppStore } from "@fortawesome/free-brands-svg-icons"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"

export const FeaturedProjectsMobile = props => {
  return (
    <div className="ft-proj-data-mobile">
        {/* Image */}
        <div className="ft-proj-img">
            <a href={props.site === "" ? props.git : props.site}
            rel="noreferrer"
            target="_blank">
                <div className="ft-proj-image-overlay"></div>
                <img src={props.image} alt={props.image_alt} />
            </a>
        </div>
        {/* Data */}
        <div className="ft-proj-desc">
            <div>
                <div className="ft-proj-featured">
                    <span role="img" aria-label="estrela">
                        ⭐
                    </span>
                    Destaques
                </div>
                <div className="ft-proj-title">{props.title}</div>
            </div>
            <div className="ft-proj-description">
                <p>{props.description}</p>
            </div>
        </div>
        {/* Tech and Links */}
        <div className="ft-proj-tech">
            <div className="ft-proj-used-tech">
            {props.techs.map((tech, index) => (
                <p key={index}>{tech}</p>
            ))}
            </div>
            <div className="ft-proj-links">
            {props.git === "" ? (
                <span></span>
            ) : (
                <div className="ft-proj-git">
                <a href={props.git} rel="noreferrer" target="_blank">
                    <FontAwesomeIcon icon={faGithub} className="git-icon" />
                </a>
                </div>
            )}
            {props.site === "" ? (
                <span></span>
            ) : (
                <div className="ft-proj-site">
                <a href={props.site} rel="noreferrer" target="_blank">
                    <FontAwesomeIcon
                    icon={faExternalLinkAlt}
                    className="link-icon"
                    />
                </a>
                </div>
            )}
            </div>
        </div>
    </div>
  )
}
