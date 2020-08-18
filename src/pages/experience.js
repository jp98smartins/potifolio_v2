import React, { Component } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons"

const duo3 = {
  name: "Duo3",
  position: "Estagiário",
  date: "Fev - Dez 2020",
  task1: "Descrição das minhas atividades 01",
  task2: "Descrição das minhas atividades 02",
  task3: "Descrição das minhas atividades 03",
  task4: "Descrição das minhas atividades 04",
}

const uff = {
  name: "UFF",
  position: "Estagiário",
  date: "Out - Fev 2019",
  task1: "Descrição das minhas atividades 01",
  task2: "Descrição das minhas atividades 02",
  task3: "Descrição das minhas atividades 03",
  task4: "Descrição das minhas atividades 04",
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
                <a
                  href="http://sigoerp.com.br/"
                  rel="noreferrer"
                  target="_blank"
                >
                  @{duo3.name}
                </a>
              </div>
              <div className="xp-job-date">{duo3.date}</div>
              <div className="xp-job-tasks">
                <FontAwesomeIcon
                  icon={faAngleDoubleRight}
                  className="arrow-right-icon"
                />
                {duo3.task1}
              </div>
              <div className="xp-job-tasks">
                <FontAwesomeIcon
                  icon={faAngleDoubleRight}
                  className="arrow-right-icon"
                />
                {duo3.task2}
              </div>
              <div className="xp-job-tasks">
                <FontAwesomeIcon
                  icon={faAngleDoubleRight}
                  className="arrow-right-icon"
                />
                {duo3.task3}
              </div>
              <div className="xp-job-tasks">
                <FontAwesomeIcon
                  icon={faAngleDoubleRight}
                  className="arrow-right-icon"
                />
                {duo3.task4}
              </div>
            </div>
          ) : (
            <div className="xp-job-description">
              <div className="xp-job-name">
                {uff.position}
                <a href="http://www.uff.br/" rel="noreferrer" target="_blank">
                  @{uff.name}
                </a>
              </div>
              <div className="xp-job-date">{uff.date}</div>
              <div className="xp-job-tasks">
                <FontAwesomeIcon
                  icon={faAngleDoubleRight}
                  className="arrow-right-icon"
                />
                {uff.task1}
              </div>
              <div className="xp-job-tasks">
                <FontAwesomeIcon
                  icon={faAngleDoubleRight}
                  className="arrow-right-icon"
                />
                {uff.task2}
              </div>
              <div className="xp-job-tasks">
                <FontAwesomeIcon
                  icon={faAngleDoubleRight}
                  className="arrow-right-icon"
                />
                {uff.task3}
              </div>
              <div className="xp-job-tasks">
                <FontAwesomeIcon
                  icon={faAngleDoubleRight}
                  className="arrow-right-icon"
                />
                {uff.task4}
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default experience
