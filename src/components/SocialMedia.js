import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"

const SocialMedia = () => {
  return (
    <div className="social-media">
      <div className="email">
        <a
          href="mailto:contato@joaopedromartins.com.br"
          rel="noreferrer"
          target="_blank"
        >
          contato@joaopedromartins.com.br
        </a>
      </div>
      <div>
        <a
          href="https://www.linkedin.com/in/jp98smartins/"
          rel="noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon icon={faLinkedinIn} className="lkdn-icon" />
        </a>
      </div>
      <div>
        <a
          href="https://github.com/jp98smartins"
          rel="noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon icon={faGithub} className="git-icon" />
        </a>
      </div>
    </div>
  )
}

export default SocialMedia
