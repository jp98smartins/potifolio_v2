import React from "react"
import { Link } from "gatsby"
import logo from "../assets/logo/logo_yellow.png"

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="inner-header">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="Logo JP" />
            </Link>
          </div>
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
                <a href="#aboutme">
                  <div>Currículo</div>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
