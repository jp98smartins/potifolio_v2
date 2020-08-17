import React from "react"

const contact = () => {
  return (
    <div className="ctc-data">
      <div className="ctc-header">
        <div className="ctc-title">
          <span>IV.</span>Entre em contato
        </div>
        <div className="ctc-divider"></div>
      </div>
      <div className="ctc-first-line">Vamos Conversar!</div>
      <div className="ctc-second-line">
        <p>
          Me mande uma mensagem que te ajudo a transformar suas ideias em
          realidade!
        </p>
        <p>Prometo que respondo o mais rápido que eu puder!</p>
      </div>
      <a
        href="mailto:joaopedromartins@id.uff.br"
        rel="noreferrer"
        target="_blank"
      >
        <div className="ctc-call-to-action">Fale Comigo!</div>
      </a>
    </div>
  )
}

export default contact
