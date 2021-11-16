import React, { Component } from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faBars
} from "@fortawesome/free-solid-svg-icons"
import logo from "../assets/logo/logo_yellow.png"
import resume from "../assets/resume/JoaoPedroMartins_Curriculo.pdf"
import {Menu} from "./Menu"

class Header extends Component {

  state = {
    showComponent: false,
  }

  toggleMenu = () => {
    this.setState({
      showComponent: !this.state.showComponent,
    })
  }

  render() {
    return (
      <div>
        <Menu showComponent={this.state.showComponent} closeMenu={this.toggleMenu} onKeyDown={this.toggleMenu} />
        <header>
          <div className="container-mobile">
            <div className="inner-header">
              <div className="logo">
                <Link to="/">
                  <img src={logo} alt="Logo JP" />
                </Link>
              </div>
              <div role="button" className="menu" onClick={this.toggleMenu} onKeyDown={this.toggleMenu} tabIndex={0} >
                <FontAwesomeIcon
                  icon={faBars}
                  className="menu-icon"
                />
              </div>
            </div>
          </div>
          <div className="container-desktop">
            <div className="inner-header">
              <div className="logo">
                <Link to="/">
                  <img src={logo} alt="Logo JP" />
                </Link>
              </div>
              {this.props.is404 ? (
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
      </div>
    )
  }
}

export default Header
