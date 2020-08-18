import React from "react"
import { Link } from "gatsby"
import logo from "../assets/logo/logo_yellow.png"
import resume from "../assets/resume/JoaoPedroMartins_Curriculo.pdf"

const Header = props => {
  return (
    <header>
      <div className="container">
        <div className="inner-header">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="Logo JP" />
            </Link>
          </div>
          {props.is404 ? (
            <div></div>
          ) : (
            <nav>
              <ul>
                <li>
                  <a href="#aboutme">
                    <div>
                      <span>I.</span>Sobre Mim
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#experience">
                    <div>
                      <span>II.</span>Experiência
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#projects">
                    <div>
                      <span>III.</span>Projetos
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#contact">
                    <div>
                      <span>IV.</span>Contato
                    </div>
                  </a>
                </li>
                <li>
                  <a href={resume} rel="noreferrer" target="_blank">
                    <div>Currículo</div>
                  </a>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
