import React, { Component } from "react"
import {
  ExperienceDescription,
} from "../components/ExperienceDescription"


const primeupTrainee = {
  name: "PrimeUp",
  site: "http://www.primeup.com.br/",
  position: "Trainee",
  date: "Jul - Presente",
  description: [
    "Encarregado de desenvolver testes automatizados de uma solução da Anbima.",
    "Os testes são feitos em Java, usando o Cucumber, BDD e o Selenium para os testes com interface.",
    "Realizando também testes automatizados via mensageria da IBM (MQExplorer), servidor FTP e consultando os resultados em banco de dados da Oracle.",
  ],
}

const primeupEstagio = {
  name: "PrimeUp",
  site: "http://www.primeup.com.br/",
  position: "Estagiário",
  date: "Nov/2020 - Jun/2021",
  description: [
    "Encarregado de desenvolver testes automatizados de uma solução da Anbima.",
    "Os testes são feitos em Java, usando o Cucumber, BDD e o Selenium para os testes com interface.",
    "Realizando também testes automatizados via mensageria da IBM (MQExplorer), servidor FTP e consultando os resultados em banco de dados da Oracle.",
  ],
}

const addLabs = {
  name: "AddLabs",
  site: "https://www.addlabs.uff.br/Novo_Site_ADDLabs/",
  position: "Desenvolvedor Mobile Jr.",
  date: "Mar - Ago/2021",
  description: [
    "Encarregado de desenvolver aplicativo em Flutter para ser o backoffice de um app já existente.",
    "O Aplicativo é multiplataforma (Android/IOS/Web), já desenvolvido em Flutter 2.0.",
    "O backoffice e o app existente se conectam na mesma api externa.",
    "O deploy do backoffice para o web foi feito usando docker no Azure.",
  ],
}

const duo3 = {
  name: "Duo3",
  site: "http://sigoerp.com.br/",
  position: "Desenvolvedor Mobile Jr.",
  date: "Fev - Nov/2020",
  description: [
    "Encarregado da criação de um aplicativo mobile muiltiplataforma (Android e IOS) para controle de diários de obra.",
    "O projeto foi pensado para se tornar uma extensão de um dos produtos da empresa Sigo ERP, um aplicativo web de gestão na construção civil.",
    "O aplicativo foi produzido utilizando o Flutter e como banco de dados Hive.",
  ],
}

const uff = {
  name: "UFF",
  site: "http://www.uff.br/",
  position: "Estagiário",
  date: "Out - Fev/2019",
  description: [
    "Projeto de extensão resultante de parceria entre a UFF e a Engie.",
    "Encarregado da elaboração de um software para o controle de tráfego urbano.",
    "O projeto todo foi realizado utilizando a metodologia ágil (Scrum) com sprints de 2 semanas.",
    "O software foi produzido no Visual Studio utilizando C# e MySQL com objetivo de rodar no Windows.",
  ],
}

class experience extends Component {
  state = {
    job: "primeupTrainee",
    primeupTrainee: "xp-menu-opt active",
    primeupEstagio: "xp-menu-opt",
    addLabs: "xp-menu-opt",
    duo3: "xp-menu-opt",
    uff: "xp-menu-opt",
  }

  togglePrimeupTrainee = () => {
    this.setState({
      job: "primeupTrainee",
      primeupTrainee: "xp-menu-opt active",
      primeupEstagio: "xp-menu-opt",
      addLabs: "xp-menu-opt",
      duo3: "xp-menu-opt",
      uff: "xp-menu-opt",
    })
  }

  togglePrimeupEstagio = () => {
    this.setState({
      job: "primeupEstagio",
      primeupTrainee: "xp-menu-opt",
      primeupEstagio: "xp-menu-opt active",
      addLabs: "xp-menu-opt",
      duo3: "xp-menu-opt",
      uff: "xp-menu-opt",
    })
  }

  toggleAddLabs = () => {
    this.setState({
      job: "addLabs",
      primeupTrainee: "xp-menu-opt",
      primeupEstagio: "xp-menu-opt",
      addLabs: "xp-menu-opt active",
      duo3: "xp-menu-opt",
      uff: "xp-menu-opt",
    })
  }

  toggleDuo3 = () => {
    this.setState({
      job: "duo3",
      primeupTrainee: "xp-menu-opt",
      primeupEstagio: "xp-menu-opt",
      addLabs: "xp-menu-opt",
      duo3: "xp-menu-opt active",
      uff: "xp-menu-opt",
    })
  }

  toggleUff = () => {
    this.setState({
      job: "uff",
      primeupTrainee: "xp-menu-opt",
      primeupEstagio: "xp-menu-opt",
      addLabs: "xp-menu-opt",
      duo3: "xp-menu-opt",
      uff: "xp-menu-opt active",
    })
  }

  getExpDescription() {
    if (this.state.job === "primeupTrainee") {
      return <ExperienceDescription 
        position={primeupTrainee.position}
        site={primeupTrainee.site}
        name={primeupTrainee.name}
        date={primeupTrainee.date}
        description={primeupTrainee.description}
      />
    }

    if (this.state.job === "primeupEstagio") {
      return <ExperienceDescription 
        position={primeupEstagio.position}
        site={primeupEstagio.site}
        name={primeupEstagio.name}
        date={primeupEstagio.date}
        description={primeupEstagio.description}
      />
    }

    if (this.state.job === "addLabs") {
      return <ExperienceDescription 
        position={addLabs.position}
        site={addLabs.site}
        name={addLabs.name}
        date={addLabs.date}
        description={addLabs.description}
      />
    }

    if (this.state.job === "duo3") {
      return <ExperienceDescription 
        position={duo3.position}
        site={duo3.site}
        name={duo3.name}
        date={duo3.date}
        description={duo3.description}
      />
    }

    if (this.state.job === "uff") {
      return <ExperienceDescription 
        position={uff.position}
        site={uff.site}
        name={uff.name}
        date={uff.date}
        description={uff.description}
      />
    }
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
            <button className={this.state.primeupTrainee} onClick={this.togglePrimeupTrainee}>
              {primeupTrainee.name}
            </button>
            <button className={this.state.primeupEstagio} onClick={this.togglePrimeupEstagio}>
              {primeupEstagio.name}
            </button>
            <button className={this.state.addLabs} onClick={this.toggleAddLabs}>
              {addLabs.name}
            </button>
            <button className={this.state.duo3} onClick={this.toggleDuo3}>
              {duo3.name}
            </button>
            <button className={this.state.uff} onClick={this.toggleUff}>
              {uff.name}
            </button>
          </div>
          {this.getExpDescription()}
        </div>
      </div>
    )
  }
}

export default experience
