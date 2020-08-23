import React, { Component } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons"

const duo3 = {
  name: "Duo3",
  site: "http://sigoerp.com.br/",
  position: "Estagiário",
  date: "Fev - Presente",
  description: [
    "Projeto de extensão resultante de parceria entre a UFF e a Engie.",
    "Encarregado da elaboração de um software para o controle de tráfego urbano.",
    "O projeto todo foi realizado utilizando a metodologia ágil (Scrum) com sprints de 2 semanas.",
    "O software foi produzido no Visual Studio utilizando C# e MySQL com objetivo de rodar no Windows.",
  ],
}

const uff = {
  name: "UFF",
  site: "http://www.uff.br/",
  position: "Estagiário",
  date: "Out - Fev 2019",
  description: [
    "Projeto de extensão resultante de parceria entre a UFF e a Engie.",
    "Encarregado da elaboração de um software para o controle de tráfego urbano.",
    "O projeto todo foi realizado utilizando a metodologia ágil (Scrum) com sprints de 2 semanas.",
    "O software foi produzido no Visual Studio utilizando C# e MySQL com objetivo de rodar no Windows.",
  ],
}

class experience extends Component {
  state = {
    job: "duo3",
    duo3: "xp-menu-opt active",
    uff: "xp-menu-opt",
  }

  toggleDuo3 = () => {
    this.setState({
      job: "duo3",
      duo3: "xp-menu-opt active",
      uff: "xp-menu-opt",
    })
  }

  toggleUff = () => {
    this.setState({
      job: "uff",
      duo3: "xp-menu-opt",
      uff: "xp-menu-opt active",
    })
  }

  render() {
    return (
      <div className="xp-data">
        <div className="xp-header">
          <div className="xp-title">
            <span>II.</span>Onde Trabalhei
          </div>
          <div className="xp-divider"></div>
        </div>
        <div className="xp-body">
          <div className="xp-job-menu">
            <button className={this.state.duo3} onClick={this.toggleDuo3}>
              {duo3.name}
            </button>
            <button className={this.state.uff} onClick={this.toggleUff}>
              {uff.name}
            </button>
          </div>
          {this.state.job === "duo3" ? (
            <div className="xp-job-description">
              <div className="xp-job-name">
                {duo3.position}
                <a href={duo3.site} rel="noreferrer" target="_blank">
                  @{duo3.name}
                </a>
              </div>
              <div className="xp-job-date">{duo3.date}</div>
              {duo3.description.map((task, index) => (
                <div className="xp-job-tasks" key={index}>
                  <FontAwesomeIcon
                    icon={faAngleDoubleRight}
                    className="arrow-right-icon"
                  />
                  {task}
                </div>
              ))}
            </div>
          ) : (
            <div className="xp-job-description">
              <div className="xp-job-name">
                {uff.position}
                <a href={uff.site} rel="noreferrer" target="_blank">
                  @{uff.name}
                </a>
              </div>
              <div className="xp-job-date">{uff.date}</div>
              {uff.description.map((task, index) => (
                <div className="xp-job-tasks" key={index}>
                  <FontAwesomeIcon
                    icon={faAngleDoubleRight}
                    className="arrow-right-icon"
                  />
                  {task}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default experience
