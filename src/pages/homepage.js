import React from "react"

const HomePage = () => {
  return (
    <div className="hp-data">
      <div className="hp-first-line">Oi, meu nome é</div>
      <div className="hp-second-line">João Pedro Martins</div>
      <div className="hp-third-line">Eu programo uns programas</div>
      <div className="hp-fourth-line">
        Eu sou estudante de Sistemas de Informação na UFF. Desenvolvedor Mobile
        & Full Stack criando aplicativos e websites responsivos, otimizados e
        com design moderno.
      </div>
      <a
        href="mailto:joaopedromartins@id.uff.br"
        rel="noreferrer"
        target="_blank"
      >
        <div className="hp-call-to-action">Fale Comigo!</div>
      </a>
    </div>
  )
}

export default HomePage
