import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTimes,
  faFileDownload
} from "@fortawesome/free-solid-svg-icons"
import resume from "../assets/resume/JoaoPedroMartins_Curriculo.pdf"

export const Menu = props => {
  return (
    <div className={props.showComponent ? "shadow show-component" : "shadow hide-component"}>
        <div className="menu-mobile">
            <div role="button" className="menu-close" onClick={props.closeMenu} onKeyDown={props.closeMenu} tabIndex={0} >
                <FontAwesomeIcon
                    icon={faTimes}
                    className="close-menu-icon"
                />
            </div>
            <div role="button" className="menu-item menu-aboutme" onClick={props.closeMenu} onKeyDown={props.closeMenu} tabIndex={0} >
                <a href="#aboutme">
                    <div>
                        <span>I.</span>Sobre Mim
                    </div>
                </a>
            </div>
            <div role="button" className="menu-item menu-experience" onClick={props.closeMenu} onKeyDown={props.closeMenu} tabIndex={0} >
                <a href="#experience">
                    <div>
                        <span>II.</span>Experiência
                    </div>
                </a>
            </div>
            <div role="button" className="menu-item menu-projects" onClick={props.closeMenu} onKeyDown={props.closeMenu} tabIndex={0} >
                <a href="#projects">
                    <div>
                        <span>III.</span>Projetos
                    </div>
                </a>
            </div>
            <div role="button" className="menu-item menu-contact" onClick={props.closeMenu} onKeyDown={props.closeMenu} tabIndex={0} >
                <a href="#contact">
                    <div>
                        <span>IV.</span>Contato
                    </div>
                </a>
            </div>
            <div role="button" className="menu-item menu-resume">
                <a href={resume} rel="noreferrer" target="_blank">
                    <FontAwesomeIcon
                        icon={faFileDownload}
                        className="close-menu-icon"
                    />
                    <div>Baixar Currículo</div>
                </a>
            </div>
        </div>
    </div>
  )
}