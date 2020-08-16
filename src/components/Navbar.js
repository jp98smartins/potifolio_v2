import React from "react"
import { Link } from "gatsby"

const Navbar = () => {
  return (
    <div>
      <nav>
        <div>
          <Link to="/">Logo...</Link>
        </div>
        <div>
          <ul>
            <li>
              <div>
                <a href="#aboutme">About Me...</a>
              </div>
            </li>
            <li>
              <div>
                <a href="#experience">Experience...</a>
              </div>
            </li>
            <li>
              <div>
                {" "}
                <a href="#projects">Projects...</a>
              </div>
            </li>
            <li>
              <div>
                <a href="#contact">Contact...</a>
              </div>
            </li>
            <li>
              <div>
                <a href="#aboutme">Curriculum...</a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
      <div>
        <ul>
          <li>
            <div>
              <a
                href="mailto:joaopedromartins@id.uff.br"
                rel="noreferrer"
                target="_blank"
              >
                Email
              </a>
            </div>
          </li>
          <li>
            <div>
              {" "}
              <a
                href="https://www.linkedin.com/in/jp98smartins/"
                rel="noreferrer"
                target="_blank"
              >
                LinkedIn
              </a>
            </div>
          </li>
          <li>
            <div>
              {" "}
              <a
                href="https://github.com/jp98smartins"
                rel="noreferrer"
                target="_blank"
              >
                GitHub
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
